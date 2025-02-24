// Importa el módulo 'os' de Node.js, que proporciona información sobre el sistema operativo.
const os = require('node:os');

// Llama a la función os.platform(), que devuelve una cadena con el nombre de la plataforma del sistema operativo.
// Algunos ejemplos de valores que puede devolver:
// - 'win32' para Windows
// - 'darwin' para macOS
// - 'linux' para sistemas Linux
console.log(os.platform());
