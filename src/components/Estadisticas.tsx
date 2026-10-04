import { StyleSheet, Text, View } from 'react-native';

interface EstadisticasProps {
	puntuacion: number;
	mejorPuntuacion: number;
	ronda: number;
}

export function Estadisticas({
	puntuacion,
	mejorPuntuacion,
	ronda,
}: EstadisticasProps) {
	return (
		<View style={styles.contenedor}>
			<View style={styles.item}>
				<Text style={styles.valor}>{ronda}</Text>
				<Text style={styles.label}>Ronda</Text>
			</View>
			<View style={styles.item}>
				<Text style={styles.valor}>{puntuacion}</Text>
				<Text style={styles.label}>Puntuación</Text>
			</View>
			<View style={styles.item}>
				<Text style={[styles.valor, styles.record]}>{mejorPuntuacion}</Text>
				<Text style={styles.label}>Récord</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	contenedor: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: '100%',
		paddingVertical: 20,
	},
	item: {
		alignItems: 'center',
	},
	valor: {
		fontSize: 32,
		fontWeight: 'bold',
		color: '#ff8906',
	},
	record: {
		color: '#e53170',
	},
	label: {
		fontSize: 12,
		color: '#a7a9be',
		textTransform: 'uppercase',
		letterSpacing: 1,
	},
});

export default Estadisticas;
