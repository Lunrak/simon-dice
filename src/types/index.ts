export type ColorBoton = 'verde' | 'rojo' | 'amarillo' | 'azul';

export type EstadoJuego =
	| 'inicio'
	| 'mostrando-secuencia'
	| 'esperando-input'
	| 'game-over';

export interface BotonSimon {
	color: ColorBoton;
	activo: boolean;
}

export interface EstadoSimon {
	secuencia: ColorBoton[];
	secuenciaUsuario: ColorBoton[];
	puntuacion: number;
	mejorPuntuacion: number;
	estado: EstadoJuego;
	botonActivo: ColorBoton | null;
}

export const COLORES_DISPONIBLES: readonly ColorBoton[] = [
	'verde',
	'rojo',
	'amarillo',
	'azul',
] as const;

export const VELOCIDAD_INICIAL = 700;
export const VELOCIDAD_MINIMA = 250;
export const REDUCCION_POR_RONDA = 20;

export function calcularVelocidad(ronda: number): number {
	const velocidad = VELOCIDAD_INICIAL - (ronda - 1) * REDUCCION_POR_RONDA;
	return Math.max(velocidad, VELOCIDAD_MINIMA);
}

export interface ConfiguracionJuego {
	velocidadBase: number;
	velocidadMinima: number;
	reduccionPorRonda: number;
}
