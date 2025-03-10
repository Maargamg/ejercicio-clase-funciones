let turno = 0;
const botonSiguiente = document.getElementById('sumar');
const sumar = () => {
  turno++;
const elementoParrafo = document.getElementById('turno');
  
  if (elementoParrafo !== null && elementoParrafo !== undefined && elementoParrafo instanceof HTMLParagraphElement) {
    elementoParrafo.textContent = turno.toString().padStart(2, "0");
  }
}
if (botonSiguiente !== null && botonSiguiente !== undefined && botonSiguiente instanceof HTMLButtonElement) {
  botonSiguiente.addEventListener('click', () => {
    sumar();
  })
};

const botonAnterior = document.getElementById('restar');
const restar = () => {
    turno--;
const elementoParrafo = document.getElementById('turno');

  if (elementoParrafo !== null && elementoParrafo !== undefined && elementoParrafo instanceof HTMLParagraphElement) {
   
    if (turno >= 0){
      elementoParrafo.textContent = turno.toString().padStart(2, "0");
    }
  }
}
if (botonAnterior !== null && botonAnterior !== undefined && botonAnterior instanceof HTMLButtonElement) {
    botonAnterior.addEventListener('click', () => {
    restar();
})
};

const botonReset = document.getElementById('reset');
const reset = () => {
  turno = 0;
const elementoParrafo = document.getElementById('turno');
  
  if (elementoParrafo !== null && elementoParrafo !== undefined && elementoParrafo instanceof HTMLParagraphElement) {
    elementoParrafo.textContent = turno.toString().padStart(2, "0");
  }
}
if (botonReset !== null && botonReset !== undefined && botonReset instanceof HTMLButtonElement) {
  botonReset.addEventListener('click', () => {
    reset();
  })
};

const introducirTurnoManual = () => {
  const turnoManual = document.getElementById('turnoManual');

  if (turnoManual !== null && turnoManual !== undefined && turnoManual instanceof HTMLInputElement) {
    const valorInput = turnoManual.value;

    const elementoParrafo = document.getElementById('turno');

    if (elementoParrafo !== null && elementoParrafo !== undefined && elementoParrafo instanceof HTMLParagraphElement) {
      turno = parseInt(valorInput);
      elementoParrafo.textContent = valorInput.padStart(2, "0");
    }
  }
}

const botonTurnoManual = document.getElementById('introducirTurnoManual');

if (botonTurnoManual !== null && botonTurnoManual !== undefined && botonTurnoManual instanceof HTMLButtonElement) {
  botonTurnoManual.addEventListener('click', () => {
    introducirTurnoManual();
  })
}
 







