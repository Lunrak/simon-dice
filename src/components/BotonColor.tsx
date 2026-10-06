import { Pressable, StyleSheet, Animated, Platform } from 'react-native';
import { useRef, useEffect } from 'react';
import type { ColorBoton } from '../types';

interface BotonColorProps {
	color: ColorBoton;
	activo: boolean;
	onPress: (color: ColorBoton) => void;
	disabled?: boolean;
}

const COLORES: Record<ColorBoton, { base: string; activo: string }> = {
	verde: { base: '#1e7d32', activo: '#4caf50' },
	rojo: { base: '#c62828', activo: '#f44336' },
	amarillo: { base: '#f9a825', activo: '#ffeb3b' },
	azul: { base: '#1565c0', activo: '#2196f3' },
};

const USE_NATIVE_DRIVERS = Platform.OS !== 'web';

function BotonColor({
	color,
	activo,
	onPress,
	disabled = false,
}: BotonColorProps) {
	const colores = COLORES[color];
	const escala = useRef(new Animated.Value(1)).current;
	const opacidad = useRef(new Animated.Value(0)).current;

	//animacion de cambiar a activo
	useEffect(() => {
		if (activo) {
			Animated.parallel([
				Animated.timing(escala, {
					toValue: 0.93,
					duration: 100,
					useNativeDriver: USE_NATIVE_DRIVERS,
				}),
				Animated.timing(opacidad, {
					toValue: 1,
					duration: 150,
					useNativeDriver: USE_NATIVE_DRIVERS,
				}),
			]).start();
		} else {
			Animated.parallel([
				Animated.spring(escala, {
					toValue: 1,
					friction: 3,
					useNativeDriver: USE_NATIVE_DRIVERS,
				}),
			]).start();
		}
	}, [activo, escala, opacidad]);

	return (
		<Pressable
			onPress={() => onPress(color)}
			disabled={disabled}
			style={[
				styles.sombra,
				{
					transform: [{ scale: escala }],
					opacity: disabled && !activo ? 0.5 : 1,
				},
			]}
		>
			<Animated.View style={[styles.boton, { backgroundColor: colores.base }]}>
				<Animated.View
					style={[
						styles.brillo,
						{ backgroundColor: colores.activo, opacity: opacidad },
					]}
				/>
			</Animated.View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	sombra: {
		flex: 1,
		borderRadius: 20,
		...Platform.select({
			web: {
				boxShadow: '0px 4px 5px rgba(0,0,0,0.3)',
			},
			default: {
				shadowColor: '#000',
				shadowOffset: { width: 0, height: 4 },
				shadowOpacity: 0.3,
				shadowRadius: 5,
				elevation: 8,
			},
		}),
	},
	container: {
		flex: 1,
	},
	boton: {
		flex: 1,
		borderRadius: 20,
		borderWidth: 4,
		borderColor: '#0f0e17',
		overflow: 'hidden',
	},
	brillo: {
		...StyleSheet.absoluteFill,
		borderRadius: 20,
	},
	botonActivo: {
		shadowOpacity: 0.8,
		shadowRadius: 15,
		elevation: 15,
		borderRadius: 20,
	},
});

export default BotonColor;
