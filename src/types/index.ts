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

export interface ConfiguracionJuego {
	velocidadBase: number;
	velocidadMinima: number;
	reduccionPorRonda: number;
}

export type Dificultad = 'facil' | 'normal' | 'dificil';

export const VELOCIDADES: Record<Dificultad, ConfiguracionJuego> = {
	facil: { velocidadBase: 800, velocidadMinima: 400, reduccionPorRonda: 20 },
	normal: { velocidadBase: 600, velocidadMinima: 200, reduccionPorRonda: 30 },
	dificil: { velocidadBase: 450, velocidadMinima: 150, reduccionPorRonda: 40 },
};

export const DIFICULTAD_POR_DEFECTO: Dificultad = 'normal';

export function calcularVelocidad(
	ronda: number,
	dificultad: Dificultad,
): number {
	const { velocidadBase, velocidadMinima, reduccionPorRonda } =
		VELOCIDADES[dificultad];
	const velocidad = velocidadBase - (ronda - 1) * reduccionPorRonda;
	return Math.max(velocidad, velocidadMinima);
}
