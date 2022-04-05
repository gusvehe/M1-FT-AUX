 
function invertirOrden(array) {
    // Invertir el orden de los elementos del array que recibe por parametro
    // Que los ultimos elementos, pasen a ser los primeros
    //
    // DETALLE: En caso de que el elemento contenga mas de 1 digito, el mismo NO debera ser devuelto
    // No vale usar el metodo "reverse"
    let nuevoArreglo = [];
    for(let i = 0; i < array.length; i++){
    if((array[i] < 10 && array[i] >= 0) || array[i].length < 2){
     nuevoArreglo.unshift(array[i]);   
    }
    }
 return nuevoArreglo;
};


function numeroEnComun(array1, array2) {
    // Entre los dos array's que recibe la funcion por parametro
    // Buscar y retornar el valor en comun entre ellos
                
        // [1,2,3,4]
        //        i
        // [5,3,4,7]
        //      x
        let valor;
        for(let i = 0; i < array1.length; i++) {
            for(let x = 0; x < array2.length; x++){
                if(array1[i] === array2[x]){
return array1[i];

}            }
        }
      return Math.min(Math.min(...array1), Math.min(...array2));
      
};



function sumaDeArrays(array) {
    // El array recibido por parametro es un array multidimensional con array's que contienen elementos de tipo number
    // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
    // Sumando los elementos de cada array que contenga dos elementos, y devolviendo la suma del mismo
    // OJO: Si el elemento dentro del array que ingresa por prop, ya es de tipo number, deben devolverlo como tal dentro del array que retornan.
   let arregloNuevo = [];
   array.forEach((element) => {
    if(Array.isArray(element) && element.length === 2) {
     let suma = element[0] + element[1];
     arregloNuevo.push(suma); 
    } else if( typeof element === "number"){
     arregloNuevo.push(element);   
    }    
   });
return arregloNuevo;
     
};


function mismoValorMismosElementos(numero, divisor) {
    // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
    // Todos los elementos deben tener el mismo valor
    // OJO: Si el resultado de la division no es un entero, deben devolver false

if(numero % divisor !== 0)
return false
let aux = numero / divisor;
let verificadora = 0;
let arr = [];
while( divisor > verificadora){
  arr.push(aux);
  verificadora++;  
}

return arr;


};


function elementoMenorYMayor(array) {
    // El Array recibido por props es un array que contienen numeros
    // Tenes que retornar un array
    // Solamente con el elemento menor y mayor del array recibido:
    
    let arregloNuevo = [];    
    let menor = array[0];
    let mayor = array[0];
    for(let i = 1; i < array.length; i++){
    if(array[i] < menor){
        menor = array[i];
    }
    if(array[i] > mayor){
        mayor = array[i];
    }
    }
arregloNuevo.push(menor);
arregloNuevo.push(mayor);

return arregloNuevo;

};




module.exports = {
    numeroEnComun,
    invertirOrden,
    elementoMenorYMayor,
    sumaDeArrays,
    mismoValorMismosElementos
};