# Simon Dice - Juego Móvil

Un clásico juego de memoria "Simon Dice" desarrollado para dispositivos móviles. Este proyecto fue concebido como una inmersión práctica en el ecosistema de React Native, sirviendo como un campo de pruebas para aprender sobre el ciclo de vida de una app, la integración de hardware (sensores, audio) y la preparación para su distribución.

## 🎯 Propósito del Proyecto

Este proyecto tuvo un doble propósito: por un lado, crear una versión pulida y funcional del juego clásico, y por otro, servir como un proyecto de aprendizaje intensivo para dominar conceptos fundamentales de React Native, como la gestión de estado, la integración de librerías nativas (sonido, háptica) y el proceso de build con EAS (Expo Application Services).

## ✨ Características Principales

- **Mecánica de Juego Clásica**: Reproduce la secuencia de colores y sonidos correctamente para avanzar de nivel.
- **Feedback Sensorial**: Utiliza vibración (haptics) y sonidos únicos para cada color, mejorando la experiencia de juego.
- **Interfaz Sencilla e Intuitiva**: Diseño limpio y centrado en la jugabilidad, con botones grandes y coloridos.
- **Preparado para Distribución**: Configuración de `eas.json` para generar builds de producción para Android e iOS.

## 🛠️ Stack Tecnológico

- **Framework**: React Native con Expo
- **Lenguaje**: TypeScript
- **Audio**: `expo-av` (migrado posteriormente a `expo-audio`)
- **Háptica**: `expo-haptics`
- **Build y Distribución**: EAS (Expo Application Services)

## 🚀 Cómo Probar

1.  Clona el repositorio: `git clone https://github.com/Lunrak/simon-dice.git`
2.  Instala las dependencias: `npm install`
3.  Inicia el servidor de desarrollo: `npx expo start`
4.  Abre la app en **Expo Go** o en un emulador. Para una experiencia completa (con sonido y vibración), se recomienda probarla en un dispositivo físico.

## 💡 Aspectos Técnicos a Destacar

- **Integración de APIs Nativas**: Uso de `expo-haptics` para feedback táctil y `expo-av`/`expo-audio` para la reproducción de sonidos, demostrando la capacidad de integrar funcionalidades nativas en una app de React Native.
- **Configuración de Build Profesional**: El archivo `eas.json` y la estructura del proyecto muestran familiaridad con el proceso de compilación y preparación para las tiendas de aplicaciones.
- **Enfoque en la Experiencia de Usuario (UX)**: La inclusión de feedback háptico y sonoro no es trivial; demuestra una atención al detalle en la experiencia del usuario final.
