function turnoMarcador () : void{
    const sumar = document.getElementById("sumar");
    const resultado = parseInt("sumar") , ++1;
    buttonSumar.addEventListener("click", sumar);


    const restar = document.getElementById("restar");
    const resultado: number = parseInt("restar") , --1;
    buttonRestar.addEventListener("click", restar);


    const reset = document.getElementById("reset");
    const resultado: number = parseInt("reset") ==0;
    buttonReset.addEventListener("click", reset);


    const manual: HTMLElement | null = document.getElementById("marcador");
    const resultado: number = parseInt("manual");
    IdMarcador.addEventListener("click", );

    document.getElementById("marcador").innerHTML = resultado

    if (resultado !== null && resultado !== undefined){
        document.getElementById("marcador").innerHTML = resultado;
        marcadorElement.innerHTML = resultado;
    }
};

 /*padStart*/

