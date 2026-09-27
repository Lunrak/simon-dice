import { Pressable, StyleSheet, View } from 'react-native';
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

function BotonColor({ color, activo, onPress, disabled = false }: BotonColorProps) {
  const colores = COLORES[color];

  return (
    <Pressable
      onPress={() => onPress(color)}
      disabled={disabled}
      style={({ pressed }) => [
        styles.boton,
        {
          backgroundColor: activo ? colores.activo : colores.base,
          opacity: disabled && !activo ? 0.5 : 1,
          transform: [{ scale: pressed || activo ? 0.95 : 1 }],
        },
        activo && styles.botonActivo,
      ]}
    >
      <View />
    </Pressable>
  );
}

const styles = StyleSheet.create({
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
  botonActivo: {
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 15,
  },
});

export default BotonColor;