import  AsyncStorage  from '@react-native-async-storage/async-storage';

const CLAVE_RECORD = 'simon-record';
export async function guardadRecord(puntuacion: number): Promise<void> {
	try {
		await AsyncStorage.setItem(CLAVE_RECORD, String(puntuacion));
	} catch (error) {
		console.log('Error al guardar la puntuacion:', error);
	}
}

export async function leerRecord(): Promise<number> {
	try {
		const valor = await AsyncStorage.getItem(CLAVE_RECORD);
		return valor ? Number(valor) : 0;
	} catch (error) {
		console.log('Error al guardar puntuacion:', error);
		return 0;
	}
}
