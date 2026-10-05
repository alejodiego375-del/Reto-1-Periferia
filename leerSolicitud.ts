const fs = require("fs");

function proveedorLeerSolicitud(caso: string) {
  const archivo = `fixtures/reto-01/casos/${caso}/solicitud.json`;

  const contenido = fs.readFileSync(archivo, "utf8");

  return JSON.parse(contenido);
}

const solicitud = proveedorLeerSolicitud("co-industrias-delta");

console.log("===== SOLICITUD =====");
console.log("País:", solicitud.pais);
console.log("Cliente:", solicitud.cliente);
console.log("Formato:", solicitud.formato);
console.log("Adjuntos:", solicitud.adjuntos);