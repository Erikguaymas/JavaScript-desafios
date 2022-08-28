/*Tomando como base los ejemplos anteriores de la estructura for y while,
 crear un algoritmo que repita un bloque de instrucciones.
En cada repetición es necesario efectuar una operación o comparación 
para obtener una salida por alerta o consola.*/

let familiar;
let miembro=parseInt(prompt("Ingrese cantidad de miembro de su familia"));
let carrera;
let oficio;
let ocupacion;
let dato="";

for(let i=1; i<=miembro;i++)
{
    familiar=prompt("Ingresar el nombre de un miembro de tu familia");
    ocupacion=prompt("Escriba opcion:\n Estudia \n Trabaja\n Estudia y trabaja\n Jubilado/a\n Bebé\n");
if(ocupacion=="estudia")
{
    carrera=prompt("Ingrese la carrera o que nivel esta");
    dato+=`${i}) ${familiar} ${ocupacion} ${carrera} \n`;

}
else if(ocupacion=="trabaja"){
    
    oficio=prompt("Ingrese el oficio que ejerce");
    dato+=`${i}) ${familiar} ${ocupacion} de ${oficio} \n`;
}
else if(ocupacion=="jubilado" || ocupacion=="jubilada") 

dato+=`${i}) ${familiar} es ${ocupacion} \n`;


 else if(ocupacion=="estudia y trabaja")
{
    carrera=prompt("Ingrese su carrera");
    oficio=prompt("Ingrese su oficio");
    dato+=`${i}) ${familiar} estudia ${carrera} y trabaja de ${oficio}\n`;
}
else{
    dato+=`${i}) ${familiar} es bebe \n`;
}    

}
console.log(dato);