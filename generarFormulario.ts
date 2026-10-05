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

const plantilla = JSON.parse(
  fs.readFileSync(
    "fixtures/reto-01/casos/co-industrias-delta/plantilla-celdas.json",
    "utf8"
  )
);

function obtenerValor(obj: any, ruta: string) {
  return ruta.split(".").reduce((actual, propiedad) => {
    return actual?.[propiedad];
  }, obj);
}

const resultado: any[] = [];

for (const campo of plantilla) {
  const etiqueta = campo.etiqueta;

  const ruta = glosario[etiqueta];

  let valor = null;

  if (ruta) {
    valor = obtenerValor(maestro, ruta);
  }

  resultado.push({
    hoja: campo.hoja,
    celda: campo.celda_valor,
    etiqueta: etiqueta,
    valor: valor ?? "NO ENCONTRADO"
  });
}

fs.writeFileSync(
  "out/co-industrias-delta-formulario.json",
  JSON.stringify(resultado, null, 2)
);

console.log("Formulario generado correctamente");