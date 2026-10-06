import { Pressable, StyleSheet, View, Animated } from 'react-native';
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
					useNativeDriver: true,
				}),
				Animated.timing(opacidad, {
					toValue: 1,
					duration: 150,
					useNativeDriver: true,
				}),
			]).start();
		} else {
			Animated.parallel([
				Animated.spring(escala, {
					toValue: 1,
					friction: 3,
					useNativeDriver: true,
				}),
			]).start();
		}
	}, [activo, escala, opacidad]);

	return (
		<Pressable
			onPress={() => onPress(color)}
			disabled={disabled}
			style={[
				styles.boton,
				{
					backgroundColor: colores.base,
					transform: [{ scale: escala }],
					opacity: disabled && !activo ? 0.5 : 1,
				},
			]}
		>
			<Animated.View
				style={[
					styles.brillo,
					{ backgroundColor: colores.activo, opacity: opacidad },
				]}
			></Animated.View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
	boton: {
		flex: 1,
		borderRadius: 20,
		borderWidth: 4,
		borderColor: '#0f0e17',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.3,
		shadowRadius: 5,
		elevation: 8,
	},
  brillo:{
    ...StyleSheet.absoluteFillObject,
  },
	botonActivo: {
		shadowOpacity: 0.8,
		shadowRadius: 15,
		elevation: 15,
	},
});

export default BotonColor;
