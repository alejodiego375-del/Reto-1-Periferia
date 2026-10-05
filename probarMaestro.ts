const fs = require("fs");

const contenido = fs.readFileSync(
  "fixtures/reto-01/repositorio/maestro.json",
  "utf8"
);

const maestro = JSON.parse(contenido);

console.log("Razón social:", maestro.razon_social);
console.log("NIT:", maestro.nit);
console.log("Representante:", maestro.representante_legal.nombre);
console.log("Banco:", maestro.banco.nombre);
console.log("Cuenta:", maestro.banco.numero_cuenta);