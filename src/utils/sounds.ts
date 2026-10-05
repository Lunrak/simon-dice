import { Audio } from 'expo-av';
import { ColorBoton } from '../types';

const SONIDOS: Record<ColorBoton, any> = {
	verde: require('../../assets/sounds/verde.mp3'),
	rojo: require('../../assets/sounds/rojo.mp3'),
	amarillo: require('../../assets/sounds/amarillo.mp3'),
	azul: require('../../assets/sounds/azul.mp3'),
};

const sonidosCargados: Record<ColorBoton, AudioSound | null> = {
	verde: null,
	rojo: null,
	amarillo: null,
	azul: null,
};

export async function precargarSonidos(): Promise<void> {
	try {
		for (const color of Object.keys(SONIDOS) as ColorBoton[]) {
			const { sound } = await Audio.Sound.createAsync(SONIDOS[color]);
			sonidosCargados[color] = sound;
		}
	} catch (error) {
		console.log('no se pudieron cargar los sonidos:', error);
	}
}

export async function reproducirSonido(color: ColorBoton): Promise<void> {
	try {
		const sound = sonidosCargados[color];
		if (sound) {
			await sound.replayAsync();
		}
	} catch (error) {
		//ignorar
	}
}

export async function liberarSonidos(): Promise<void> {
	try {
		for (const color of Object.keys(sonidosCargados) as ColorBoton[]) {
			const sound = sonidosCargados[color];
			if (sound) {
				await sound.unloadAsync();
				sonidosCargados[color] = null;
			}
		}
	} catch (error) {
		//ignorar
	}
}
