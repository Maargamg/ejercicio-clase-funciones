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
    elementoParrafo.textContent = turno.toString().padStart(2, "0");
  }
}
if (botonAnterior !== null && botonAnterior !== undefined && botonAnterior instanceof HTMLButtonElement) {
    botonAnterior.addEventListener('click', () => {
    restar();
})
};






