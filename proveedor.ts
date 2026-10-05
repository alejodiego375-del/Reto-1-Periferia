const fs = require("fs");

export function proveedorLeerSolicitud(caso: string) {
  const archivo =
    `fixtures/reto-01/casos/${caso}/solicitud.json`;

  return JSON.parse(
    fs.readFileSync(archivo, "utf8")
  );
}

export function proveedorCargarMaestro() {
  return JSON.parse(
    fs.readFileSync(
      "fixtures/reto-01/repositorio/maestro.json",
      "utf8"
    )
  );
}

export function proveedorCargarGlosario() {
  return JSON.parse(
    fs.readFileSync(
      "fixtures/reto-01/glosario-campos.json",
      "utf8"
    )
  );
}

export function obtenerValor(
  obj: any,
  ruta: string
) {
  return ruta.split(".").reduce(
    (actual, propiedad) => actual?.[propiedad],
    obj
  );
}