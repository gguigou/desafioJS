let cantidadEstudiantes = parseInt(prompt("Ingrese la cantidad de estudiantes"));
let promedio=0;
for (let i = 1; i <=cantidadEstudiantes; i++){
    promedio=promedio + parseFloat(prompt("Ingrese la nota del estudianto Nro: " + i));   
}
if (promedio>0) promedio = promedio/cantidadEstudiantes;
alert("El promedio es: "+ promedio);

let lista = "";
gastoTotal = 0;
let concepto = prompt("Ingrese concepto de gasto o escribe ESC para salir:");
while (concepto!="ESC") {
    let valorGasto = parseFloat(prompt("Ingrese el valor del gasto"));
    if (valorGasto <0){
        alert("ERROR: valor del gasto no puede ser negativo");
    }
    else{
        gastoTotal = gastoTotal + valorGasto;
        lista =   lista + " " +  concepto;
        concepto = prompt("Ingrese concepto de gasto o ESC para salir:");
    };    
};
alert("Ud gasto un total de "+ gastoTotal + "; en los siguientes conceptos:" + lista);

