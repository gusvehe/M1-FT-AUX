const { LinkedList, Node } = require("../estructuras")
  //agregar el metodo size al prototipo de LinkedList.
  // Este metodo deberia retornar la cantidad de elementos de la lista
  LinkedList.prototype.size = function(){
    
    let acumulador = 1;
    if(!this.head)
    return 0;
   
   
    let current = this.head;
    while(current.next){
    acumulador++;
    current = current.next;
    }

return acumulador;
  }


// Agregar el método orderList al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista enlazada de mayor a menor.
// Ejemplo:
//     Suponiendo que la lista actual es: Head --> [4] --> [5] --> [3]
//     lista.orderList();
//     Ahora la lista quedaría: Head --> [5] --> [4] --> [1]
// ACLARACIÓN: Se debe ordenar la lista original y no una nueva.
// pasar a arreglo los valores.
// ordenarlos
LinkedList.prototype.orderList = function () {
    // Tu código aca:

  let arregloNuevo = []; // [5,3,4]
  let current = this.head;
  if(!this.head) 
  return false;
  while(current){
// codigo 
arregloNuevo.push(current.value);  
current = current.next;
  }
  
arregloNuevo.sort((a, b) => b - a);
this.head = null;
this.len = 0;

for(let i = 0; i < arregloNuevo.length; i++){
  this.add(arregloNuevo[i]);  
}

  };


  //agregar el metodo insert al prototipo de LinkedList.
  // Este metodo deberia recibir una posicion y un valor
  // agregar el valor en la posicion indicada
  //tomar el head como posicion 1  
  
    
LinkedList.prototype.insert = function(data,pos) {

  let current = this.head;
  let acumulador = 1;
  let miNodo = new Node(data);
  let previous;

  while (acumulador < pos) {
    previous = current;
    acumulador++;
    current = current.next
  }
  if (pos === 1) {
    this.head = miNodo;
    miNodo.next = current;
  } else {
    previous.next = miNodo;
    miNodo.next = current;
    this.len++;
  }



}
  




module.exports={
  LinkedList
}



