// ===== TIPOS DEL SIMÓN DICE =====

export type ColorBoton = 'verde' | 'rojo' | 'amarillo' | 'azul';

export type EstadoJuego = 'inicio' | 'mostrando-secuencia' | 'esperando-input' | 'game-over';

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

export interface ConfiguracionJuego {
  velocidadBase: number;      // ms de cada color al mostrar la secuencia
  velocidadMinima: number;    // ms mínimo al que puede llegar
  reduccionPorRonda: number;  // cuántos ms se reduce por ronda
}