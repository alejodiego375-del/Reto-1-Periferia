const fs = require("fs");

const maestro = JSON.parse(
  fs.readFileSync(
    "fixtures/reto-01/repositorio/maestro.json",
    "utf8"
  )
);

const glosario = JSON.parse(
  fs.readFileSync(
    "fixtures/reto-01/glosario-campos.json",
    "utf8"
  )
);

function obtenerValor(obj: any, ruta: string) {
  return ruta.split(".").reduce((actual, propiedad) => {
    return actual?.[propiedad];
  }, obj);
}

for (const campo in glosario) {
  const ruta = glosario[campo];

  const valor = obtenerValor(maestro, ruta);

  console.log(`${campo}: ${valor}`);
}