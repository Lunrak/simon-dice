import { Pressable, StyleSheet, Text, View } from 'react-native';

interface PantallaGameOverProps {
  puntuacion: number;
  mejorPuntuacion: number;
  nuevoRecord: boolean;
  onReiniciar: () => void;
  onVolverInicio: () => void;
}

function PantallaGameOver({
  puntuacion,
  mejorPuntuacion,
  nuevoRecord,
  onReiniciar,
  onVolverInicio,
}: PantallaGameOverProps) {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>¡Juego terminado!</Text>

      {nuevoRecord && (
        <View style={styles.bannerRecord}>
          <Text style={styles.bannerRecordTexto}>🎉 ¡Nuevo récord!</Text>
        </View>
      )}

      <View style={styles.puntuacionContainer}>
        <Text style={styles.puntuacionLabel}>Tu puntuación</Text>
        <Text style={styles.puntuacionValor}>{puntuacion}</Text>
      </View>

      <View style={styles.recordContainer}>
        <Text style={styles.recordLabel}>Récord</Text>
        <Text style={styles.recordValor}>{mejorPuntuacion}</Text>
      </View>

      <View style={styles.botonesContainer}>
        <Pressable
          onPress={onReiniciar}
          style={({ pressed }) => [
            styles.boton,
            styles.botonPrimario,
            pressed && styles.botonPulsado,
          ]}
        >
          <Text style={styles.botonPrimarioTexto}>Jugar de nuevo</Text>
        </Pressable>

        <Pressable
          onPress={onVolverInicio}
          style={({ pressed }) => [
            styles.boton,
            styles.botonSecundario,
            pressed && styles.botonPulsado,
          ]}
        >
          <Text style={styles.botonSecundarioTexto}>Menú principal</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    gap: 20,
  },
  titulo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#e53170',
    textAlign: 'center',
    marginBottom: 10,
  },
  bannerRecord: {
    backgroundColor: '#27ae60',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
  bannerRecordTexto: {
    color: '#fffffe',
    fontWeight: 'bold',
    fontSize: 16,
  },
  puntuacionContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  puntuacionLabel: {
    fontSize: 14,
    color: '#a7a9be',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  puntuacionValor: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#ff8906',
    lineHeight: 80,
  },
  recordContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  recordLabel: {
    fontSize: 12,
    color: '#a7a9be',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  recordValor: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fffffe',
  },
  botonesContainer: {
    width: '100%',
    gap: 15,
  },
  boton: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  botonPrimario: {
    backgroundColor: '#ff8906',
  },
  botonPrimarioTexto: {
    color: '#0f0e17',
    fontSize: 18,
    fontWeight: 'bold',
  },
  botonSecundario: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#ff8906',
  },
  botonSecundarioTexto: {
    color: '#ff8906',
    fontSize: 18,
    fontWeight: 'bold',
  },
  botonPulsado: {
    transform: [{ scale: 0.97 }],
    opacity: 0.9,
  },
});

export default PantallaGameOver;