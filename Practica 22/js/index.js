let alumnos = ["Mariana", "August", "Johan", "Oscar", "Maryam"];
console.log("Lista de alumnos: " + alumnos);
console.log("Número de alumnos: ", alumnos.length);
alumnos.push("César");
console.log("Lista de alumnos actualizada: " + alumnos);
alumnos[5]="Valeria";
console.log("Lista de alumnos con Valeria añadida: " + alumnos);
console.log(alumnos[2]);
console.log(alumnos[-6]);
alumnos[10]="Ana";
console.log("lista con 10 asignaciones: " + alumnos);
console.log[8];
alumnos.pop();
alumnos.shift(); //elimina el primer elemento
console.log(alumnos);

for(let i=0; i<alumnos.length; i++){
    console.log(alumnos[i]);
}

let numero = [1,2,3,4,5,6,7,8,9,10];
console.log(numero[5]);

console.log(alumnos);
let listaAlumnos = document.getElementById("Lista alumnos");
listaAlumnos.innerHTML = alumnos.join("-");