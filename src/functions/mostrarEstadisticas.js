export function mostrarEstadisticas(personas) {
    let personaMasVieja = personas[0];
    let personaMasJoven = personas[0];
    let sumaEdades = 0;
    let sumaEdadesM = 0, sumaEdadesF = 0;
    let cantidadM = 0, cantidadF = 0;
    const conteoNombres = {};
  
      for (const persona of personas) {
      sumaEdades += persona.edad;
  
      
      if (persona.edad > personaMasVieja.edad) personaMasVieja = persona;
      if (persona.edad < personaMasJoven.edad) personaMasJoven = persona;
  
      
      if (persona.genero === "M") {
        sumaEdadesM += persona.edad;
        cantidadM++;
      } else if (persona.genero === "F") {
        sumaEdadesF += persona.edad;
        cantidadF++;
      }
  
      conteoNombres[persona.nombre] = (conteoNombres[persona.nombre] || 0) + 1;
    }
  
    const edadPromedio = (sumaEdades / personas.length).toFixed(2);
  
    const promedioM = cantidadM > 0 ? (sumaEdadesM / cantidadM).toFixed(2) : 0;
    const promedioF = cantidadF > 0 ? (sumaEdadesF / cantidadF).toFixed(2) : 0;
    const diferenciaPromedio = Math.abs(promedioM - promedioF).toFixed(2);
  
    let nombreMasRepetido = "";
    let maxRepeticiones = 0;
    for (const nombre in conteoNombres) {
      if (conteoNombres[nombre] > maxRepeticiones) {
        nombreMasRepetido = nombre;
        maxRepeticiones = conteoNombres[nombre];
      }
    }
  
    
    alert(`Persona más vieja: ${personaMasVieja.nombre}, Edad: ${personaMasVieja.edad} años`);
    alert(`Persona más joven: ${personaMasJoven.nombre}, Edad: ${personaMasJoven.edad} años`);
    alert(`Edad promedio: ${edadPromedio} años`);
    if (maxRepeticiones > 1) {
      alert(`Nombre más repetido: ${nombreMasRepetido} (${maxRepeticiones} veces)`);
    } else {
      alert("No hay nombres repetidos.");
    }
    alert(`Diferencia de edad promedio entre géneros: ${diferenciaPromedio} años`);
  }