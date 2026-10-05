const fs = require("fs");

const soportesExigidos = JSON.parse(
  fs.readFileSync(
    "fixtures/reto-01/casos/co-industrias-delta/soportes-exigidos.json",
    "utf8"
  )
);

const archivosRepositorio = fs.readdirSync(
  "fixtures/reto-01/repositorio/soportes"
);

const encontrados: string[] = [];
const faltantes: string[] = [];

for (const soporte of soportesExigidos) {
  const archivo = archivosRepositorio.find((nombre: string) =>
    nombre.includes(soporte.replace("_", "-"))
  );

  if (archivo) {
    encontrados.push(archivo);
  } else {
    faltantes.push(soporte);
  }
}

console.log("\nDOCUMENTOS ENCONTRADOS");
console.log(encontrados);

console.log("\nDOCUMENTOS FALTANTES");
console.log(faltantes);