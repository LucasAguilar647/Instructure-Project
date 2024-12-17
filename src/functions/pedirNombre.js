export function pedirNombre() {
    let nombre;
    do {
      nombre = prompt("Ingrese el nombre:").trim();
      if (!nombre) alert("El nombre no puede estar vacío.");
    } while (!nombre);
    return nombre;
  }