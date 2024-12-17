export function pedirFechaNacimiento() {
    let fechaNacimiento;
    do {
      fechaNacimiento = prompt("Ingrese la fecha de nacimiento (YYYY-MM-DD):").trim();
      if (isNaN(Date.parse(fechaNacimiento))) {
        alert("Fecha de nacimiento inválida. Use el formato YYYY-MM-DD.");
      } else {
        break;
      }
    } while (true);
    return fechaNacimiento;
  }