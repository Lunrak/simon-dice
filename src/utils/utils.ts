export function obtenerAleatorio<T>(array: readonly T[]): T {
	const indice = Math.floor(Math.random() * array.length);
	return array[indice];
}

export function esperar(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
