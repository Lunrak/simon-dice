import { Pressable, StyleSheet, Text, View } from 'react-native';

interface PantallaInicioProps {
  mejorPuntuacion: number;
  onIniciar: () => void;
}

function PantallaInicio({ mejorPuntuacion, onIniciar }: PantallaInicioProps) {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Simón Dice</Text>
      <Text style={styles.subtitulo}>
        Repite la secuencia de colores
      </Text>

      <View style={styles.recordContainer}>
        <Text style={styles.recordLabel}>Récord</Text>
        <Text style={styles.recordValor}>{mejorPuntuacion}</Text>
      </View>

      <Pressable
        onPress={onIniciar}
        style={({ pressed }) => [
          styles.boton,
          pressed && styles.botonPulsado,
        ]}
      >
        <Text style={styles.botonTexto}>Empezar a jugar</Text>
      </Pressable>

      <Text style={styles.instrucciones}>
        Observa la secuencia y repítela en el mismo orden. Cada ronda es más rápida.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  titulo: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ff8906',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 18,
    color: '#a7a9be',
    marginBottom: 50,
    textAlign: 'center',
  },
  recordContainer: {
    alignItems: 'center',
    marginBottom: 50,
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: '#1a1a2e',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#2e2f3e',
  },
  recordLabel: {
    fontSize: 14,
    color: '#a7a9be',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 5,
  },
  recordValor: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ff8906',
  },
  boton: {
    backgroundColor: '#ff8906',
    paddingHorizontal: 40,
    paddingVertical: 18,
    borderRadius: 12,
    marginBottom: 30,
  },
  botonPulsado: {
    backgroundColor: '#e53170',
    transform: [{ scale: 0.97 }],
  },
  botonTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0f0e17',
  },
  instrucciones: {
    fontSize: 14,
    color: '#5a5a7a',
    textAlign: 'center',
    lineHeight: 20,
    maxWidth: 300,
  },
});

export default PantallaInicio;