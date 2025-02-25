function cambiarFotoPrincipal(idMiniatura : string) : void {
 const fotoPrincipal = document.getElementById("foto-principal") as HTMLImageElement;
 const miniatura = document.getElementById(idMiniatura) as HTMLImageElement;

if (
    fotoPrincipal !== undefined &&
    fotoPrincipal !== null && 
    miniatura !== undefined && 
    miniatura !== null
){
fotoPrincipal.src = miniatura.src;
}

}
const miniatura1 = document.getElementById("miniatura1");
const miniatura2 = document.getElementById("miniatura2");
const miniatura3 = document.getElementById("miniatura3");

if(miniatura1 !== undefined && miniatura1 !== null) {
    miniatura1.addEventListener("click", () =>
         cambiarFotoPrincipal("miniatura1"));
}

if(miniatura2 !== undefined && miniatura2 !==null) {
    miniatura2.addEventListener("click", () =>
         cambiarFotoPrincipal("miniatura2"));
}

if(miniatura3 !== undefined && miniatura3 !== null){
miniatura3.addEventListener("click", () => 
    cambiarFotoPrincipal("miniatura3"));
 }