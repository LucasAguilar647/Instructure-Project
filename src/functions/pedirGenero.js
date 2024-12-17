export function pedirGenero() {
    let genero;
    do {
      genero = prompt("Ingrese el género (M/F):").trim().toUpperCase();
      if (genero !== "M" && genero !== "F") {
        alert("Género inválido. Use 'M' para Masculino o 'F' para Femenino.");
      } else {
        break;
      }
    } while (true);
    return genero;
  }