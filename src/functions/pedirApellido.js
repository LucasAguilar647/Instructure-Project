export function pedirApellido() {
    let apellido;
    do {
      apellido = prompt("Ingrese el apellido:").trim();
      if (!apellido) alert("El apellido no puede estar vacío.");
    } while (!apellido);
    return apellido;
  }