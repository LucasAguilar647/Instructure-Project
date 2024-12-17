import { calcularEdad } from "./functions/calcularEdad";
import { mostrarEstadisticas } from "./functions/mostrarEstadisticas";
import { pedirApellido } from "./functions/pedirApellido";
import { pedirFechaNacimiento } from "./functions/pedirFechaNacimiento";
import { pedirGenero } from "./functions/pedirGenero";
import { pedirNombre } from "./functions/pedirNombre";

function iniciarPrograma() {
  const personas = []; 
  let continuar = true;

  
  while (continuar) {
    const nombre = pedirNombre();
    const apellido = pedirApellido();
    const fechaNacimiento = pedirFechaNacimiento();
    const genero = pedirGenero();

    const edad = calcularEdad(new Date(fechaNacimiento));

    personas.push({ nombre, apellido, fechaNacimiento, genero, edad });

    continuar = confirm("¿Desea ingresar otra persona?");
  }

  if (personas.length === 0) {
    alert("No se ingresaron personas.");
    return;
  }

  mostrarEstadisticas(personas);
}

iniciarPrograma();