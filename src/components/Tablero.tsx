import { StyleSheet, View } from 'react-native';
import BotonColor from './BotonColor';
import type { ColorBoton } from '../types';

interface TableroProps {
	botonActivo: ColorBoton | null;
	onPressBoton: (color: ColorBoton) => void;
	disabled: boolean;
}

export function Tablero({ botonActivo, onPressBoton, disabled }: TableroProps) {
	return (
		<View style={styles.tablero}>
			<View style={styles.fila}>
				<BotonColor
					color="verde"
					activo={botonActivo === 'verde'}
					onPress={onPressBoton}
					disabled={disabled}
				/>
				<BotonColor
					color="rojo"
					activo={botonActivo === 'rojo'}
					onPress={onPressBoton}
					disabled={disabled}
				/>
			</View>
			<View style={styles.fila}>
				<BotonColor
					color="amarillo"
					activo={botonActivo === 'amarillo'}
					onPress={onPressBoton}
					disabled={disabled}
				/>
				<BotonColor
					color="azul"
					activo={botonActivo === 'azul'}
					onPress={onPressBoton}
					disabled={disabled}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	tablero: {
		width: 320,
		height: 320,
		gap: 10,
	},
	fila: {
		flex: 1,
		flexDirection: 'row',
		gap: 10,
	},
});

export default Tablero;
