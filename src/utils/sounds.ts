import {
	createAudioPlayer,
	setAudioModeAsync,
	type AudioPlayer,
} from 'expo-audio';
import { ColorBoton } from '../types';

const SONIDOS: Record<ColorBoton, any> = {
	verde: require('../../assets/sounds/verde.wav'),
	rojo: require('../../assets/sounds/rojo.wav'),
	amarillo: require('../../assets/sounds/amarillo.wav'),
	azul: require('../../assets/sounds/azul.wav'),
};

const sonidosCargados: Record<ColorBoton, AudioPlayer | null> = {
	verde: null,
	rojo: null,
	amarillo: null,
	azul: null,
};

export async function precargarSonidos(): Promise<void> {
	try {
		await setAudioModeAsync({
			playsInSilentMode: true,
			shouldPlayInBackground: false,
		});

		for (const color of Object.keys(SONIDOS) as ColorBoton[]) {
			const sound = createAudioPlayer(SONIDOS[color]);
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
			sound.seekTo(0);
			sound.play();
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
				sound.remove();
				sonidosCargados[color] = null;
			}
		}
	} catch (error) {
		//ignorar
	}
}
