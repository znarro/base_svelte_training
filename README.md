# Base UI (para capacitación)

Este repositorio contiene el proyecto que será utilizado como base para la creación de _interfaces gráficas_.

El base utiliza como _stack_ las siguientes tecnologías:

- [Svelte](https://svelte.dev/) - Framework de construcción de interfaces
- [Express.js](https://expressjs.com/) - Servidor de aplicaciones
- [Vite.js](https://vitejs.dev/) - Herramienta de compilación y servidor de desarrollo

## Instrucciones de uso

Los comandos para instalar y levantar el proyecto son:

### 1. Instalar dependencias

Para poder correr la aplicación es necesario instalar sus dependencias. Situados en la raíz del proyecto, ejecutar el comando:

```bash
npm install
```

## 2. Ejecutar

Para levantar la aplicación en modo de _desarrollo_ se ejecuta el comando:

```bash
npm run dev
```

Finalmente, se accede desde el puerto 3000:

`http://[DIRECCION_IP]:3000`

## Utilidades recomendadas

- [Extension oficial de Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode): Syntax highlighting e intellisense para componentes Svelte en VS Code
- [Svelte DevTools](https://github.com/sveltejs/svelte-devtools): Herramientas de desarrollo para Chrome y Firefox
- [Vite Plugin Svelte Inspector](https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/inspector.md): Agrega un inspector en el navegador que muestra la ruta exacta del archivo del componente al que se hace hover (y al clicarlo debería abrir el editor, pero esto _no está funcionando_). Ya está configurado, para activar/ocultar presionar `cmd + shift` (en mac) y `ctrl + shift` (otros OS).
