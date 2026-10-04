import { StyleSheet, Text, View } from 'react-native';
import { Tablero } from '../components/Tablero';
import { ColorBoton, EstadoJuego } from '../types';
import { Estadisticas } from '../components/Estadisticas';

interface PantallaJuegoProps {
	puntuacion: number;
	mejorPuntuacion: number;
	ronda: number;
	estado: EstadoJuego;
	botonActivo: ColorBoton | null;
	onPressBoton: (color: ColorBoton) => void;
}

function PantallaJuego({
	puntuacion,
	mejorPuntuacion,
	ronda,
	estado,
	botonActivo,
	onPressBoton,
}: PantallaJuegoProps) {
	const puedeInteractuar = estado === 'esperando-input';

	return (
		<View style={styles.contenedor}>
			<Estadisticas
				puntuacion={puntuacion}
				mejorPuntuacion={mejorPuntuacion}
				ronda={ronda}
			/>

			<View style={styles.mensajeContainer}>
				<Text style={styles.mensaje}>
					{estado === 'mostrando-secuencia' && 'Observa la secuencia.'}
					{estado === 'esperando-input' && 'Tu turno. Repite la secuencia.'}
				</Text>
			</View>

			<Tablero
				botonActivo={botonActivo}
				onPressBoton={onPressBoton}
				disabled={!puedeInteractuar}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	contenedor: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
		gap: 30,
	},
	mensajeContainer: {
		minHeight: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
	mensaje: {
		fontSize: 18,
		color: '#a7a9be',
		textAlign: 'center',
		fontWeight: '500',
	},
});

export default PantallaJuego;
