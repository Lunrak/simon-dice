import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import PantallaInicio from './src/screens/PantallaInicio';
import type { EstadoJuego } from './src/types';

export default function App() {
	const [estado, setEstado] = useState<EstadoJuego>('inicio');
	const [mejorPuntuacion] = useState<number>(0);

	const iniciarJuego = () => {
		setEstado('mostrando-secuencia');
	};

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
