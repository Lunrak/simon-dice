import { useState, useEffect, useRef } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import PantallaInicio from './src/screens/PantallaInicio';
import PantallaJuego from './src/screens/PantallaJuego';
import PantallaGameOver from './src/screens/PantallaGameOver';
import { esperar, obtenerAleatorio } from './src/utils/utils';
import { guardarRecord, leerRecord } from './src/utils/storage';
import {
	COLORES_DISPONIBLES,
	calcularVelocidad,
	type ColorBoton,
	type EstadoJuego,
} from './src/types';

export default function App() {
	const [estado, setEstado] = useState<EstadoJuego>('inicio');
	const [secuencia, setSecuencia] = useState<ColorBoton[]>([]);
	const [secuenciaUsuario, setSecuenciaUsuario] = useState<ColorBoton[]>([]);
	const [puntuacion, setPuntuacion] = useState(0);
	const [mejorPuntuacion, setMejorPuntuacion] = useState(0);
	const [botonActivo, setBotonActivo] = useState<ColorBoton | null>(null);
	const [nuevoRecord, setNuevoRecord] = useState(false);

	const ejecucionActual = useRef(0);

	// ===== CARGAR RÉCORD AL INICIAR =====
	useEffect(() => {
		async function cargar() {
			const record = await leerRecord();
			setMejorPuntuacion(record);
		}
		cargar();
	}, []);

	// ===== MOSTRAR SECUENCIA CUANDO EL ESTADO LO PIDE =====
	useEffect(() => {
		if (estado !== 'mostrando-secuencia') return;

		const idEjecucion = ++ejecucionActual.current;
		const velocidad = calcularVelocidad(secuencia.length);

		async function mostrar() {
			// Pausa inicial antes de empezar
			await esperar(600);
			if (ejecucionActual.current !== idEjecucion) return;

			for (const color of secuencia) {
				if (ejecucionActual.current !== idEjecucion) return;

				setBotonActivo(color);
				await esperar(velocidad);
				if (ejecucionActual.current !== idEjecucion) return;

				setBotonActivo(null);
				await esperar(velocidad / 2);
				if (ejecucionActual.current !== idEjecucion) return;
			}

			setEstado('esperando-input');
		}

		mostrar();

		// Cleanup: invalida esta ejecución si cambia el estado
		return () => {
			ejecucionActual.current++;
		};
	}, [estado, secuencia]);

	// ===== ACCIONES =====

	const iniciarJuego = () => {
		const primeraSecuencia = [obtenerAleatorio(COLORES_DISPONIBLES)];
		setSecuencia(primeraSecuencia);
		setSecuenciaUsuario([]);
		setPuntuacion(0);
		setNuevoRecord(false);
		setEstado('mostrando-secuencia');
	};

	const manejarPressBoton = (color: ColorBoton) => {
		if (estado !== 'esperando-input') return;

		const nuevaSecuenciaUsuario = [...secuenciaUsuario, color];
		const indiceActual = nuevaSecuenciaUsuario.length - 1;

		// ¿Falló?
		if (secuencia[indiceActual] !== color) {
			finalizarJuego();
			return;
		}

		// ¿Completó la ronda?
		if (nuevaSecuenciaUsuario.length === secuencia.length) {
			// Ronda superada
			setSecuenciaUsuario([]);
			setPuntuacion((prev) => prev + 1);

			// Nueva ronda: añadir un color
			const nuevaSecuencia = [
				...secuencia,
				obtenerAleatorio(COLORES_DISPONIBLES),
			];
			setSecuencia(nuevaSecuencia);
			setEstado('mostrando-secuencia');
		} else {
			// Sigue la ronda
			setSecuenciaUsuario(nuevaSecuenciaUsuario);
		}
	};

	const finalizarJuego = async () => {
		setEstado('game-over');
		setBotonActivo(null);

		if (puntuacion > mejorPuntuacion) {
			setMejorPuntuacion(puntuacion);
			setNuevoRecord(true);
			await guardarRecord(puntuacion);
		}
	};

	const reiniciar = () => {
		iniciarJuego();
	};

	const volverInicio = () => {
		setEstado('inicio');
		setSecuencia([]);
		setSecuenciaUsuario([]);
		setPuntuacion(0);
		setBotonActivo(null);
		setNuevoRecord(false);
	};

	// ===== RENDER =====
	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.container}>
				<StatusBar style="light" />

				{estado === 'inicio' && (
					<PantallaInicio
						mejorPuntuacion={mejorPuntuacion}
						onIniciar={iniciarJuego}
					/>
				)}

				{(estado === 'mostrando-secuencia' || estado === 'esperando-input') && (
					<PantallaJuego
						puntuacion={puntuacion}
						mejorPuntuacion={mejorPuntuacion}
						ronda={secuencia.length}
						estado={estado}
						botonActivo={botonActivo}
						onPressBoton={manejarPressBoton}
					/>
				)}

				{estado === 'game-over' && (
					<PantallaGameOver
						puntuacion={puntuacion}
						mejorPuntuacion={mejorPuntuacion}
						nuevoRecord={nuevoRecord}
						onReiniciar={reiniciar}
						onVolverInicio={volverInicio}
					/>
				)}
			</SafeAreaView>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0f0e17',
	},
});
