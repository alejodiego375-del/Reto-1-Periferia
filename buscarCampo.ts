const fs = require("fs");

const contenido = fs.readFileSync(
  "fixtures/reto-01/repositorio/maestro.json",
  "utf8"
);

const maestro = JSON.parse(contenido);

function obtenerValor(obj: any, ruta: string) {
  return ruta.split(".").reduce((actual, propiedad) => {
    return actual?.[propiedad];
  }, obj);
}

console.log(
  "Banco:",
  obtenerValor(maestro, "banco.nombre")
);

console.log(
  "Cuenta:",
  obtenerValor(maestro, "banco.numero_cuenta")
);

console.log(
  "Contacto:",
  obtenerValor(maestro, "contacto_comercial.nombre")
);

console.log(
  "Teléfono:",
  obtenerValor(maestro, "contacto_comercial.telefono")
);