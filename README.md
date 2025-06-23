# Memory Card Game 🃏

Un juego de memoria con cartas desarrollado con tecnologías web modernas. Los jugadores deben encontrar pares de cartas coincidentes volteándolas de dos en dos.

## 🛠️ Tecnologías Utilizadas

- **Vite** - Build tool y servidor de desarrollo
- **JavaScript** - Lenguaje de programación principal
- **HTML** - Estructura semántica del juego
- **CSS** - Estilos y diseño del juego
- **GitHub Actions** - CI/CD para despliegue automático en GitHub Pages

## 👥 Equipo de desarrollo
- Humberto Contreras
- Oscar Orellana
- Alexander Vásquez

## 🚀 Instalación y Ejecución

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm (Node Package Manager)

### Pasos para ejecutar el proyecto

1. **Clonar el repositorio**

   ```bash
   git clone <url-del-repositorio>
   cd fsj29-memory-card-game
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**

   ```bash
   npm run dev
   ```

   El juego estará disponible en `http://localhost:5173`

4. **Construir para producción**

   ```bash
   npm run build
   ```

5. **Previsualizar build de producción**
   ```bash
   npm run preview
   ```

## 📁 Estructura del Proyecto

```
memory-card-game/
└── .github/
    └── workflows/
        └── deploy.yml   # CI/CD para GitHub Pages
├── public/
├── src/
    ├── consts.js        # Constantes de utilidad
│   ├── main.js          # Punto de entrada principal
│   ├── style.css        # Estilos principales
├── .gitignore           # Archivos y carpetas a ignorar por Git
├── index.html           # Archivo HTML principal
├── package.json         # Dependencias y scripts
├── vite.config.ts       # Configuración de Vite

```

## 🌐 Despliegue Automático

Este proyecto incluye configuración para **despliegue automático en GitHub Pages** mediante **GitHub Actions**.

### Configuración del Despliegue

**GitHub Actions Workflow**: El archivo [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) contiene la configuración para:

- Ejecutarse automáticamente en cada push a la rama `main`
- Instalar dependencias con `npm install`
- Configurar Vite para GitHub Pages con la ruta base correcta
- Construir el proyecto con `npm run build`
- Desplegar automáticamente a GitHub Pages

## 🎮 Cómo Jugar

1. Haz clic en una carta para voltearla
2. Haz clic en una segunda carta
3. Si las cartas coinciden, permanecerán volteadas
4. Si no coinciden, se voltearán de nuevo
5. Encuentra todos los pares para ganar
