//Ejercicios Javascript

//1.Crea una variable llamada fruta y asígnale el valor Manzana.
let fruta = "manzana";
console.log(fruta);

//2.Crea una variable llamada c, ahora asígnale el valor 50.
let c = 50;
console.log(c);

//3.Muestra la suma de 3 + 10, utilizando dos variables: x , y.
let x = 3;
let y = 10;
console.log(x += y);

//4. Crea una variable llamada z, ahora asígnale x + y. Después muestra el resultado en consola.
let z = x += y;
console.log(z);

/*5.En una sola línea declara tres variables con los siguientes nombres y valores:
primerNombre | "David"
apellido | "Mendoza"
edad | 26*/
let primerNombre = "David", apellido = "Mendoza", edad = 26;

//6.Crea dos variables, asígnales valores númericos, multiplícalas entre sí y muestra el resultado en consola.
let a= 5, b=5;
console.log(a*=b);

//7.Muestra en consola el residuo de dividir 13 y 7.
console.log(13%7);

/*8.Crea una variable cuyo valor sea 15 y otra 5, utiliza el operador de asignación adecuado para 
añadirle a la primera variable el valor 20 (pista: es la forma simplificada de a = a + b).*/
let valor1 = 15, valor2 = 5;
console.log(valor1+=valor2);

/*9.Crea una variable cuyo valor sea 10 y otra 3, utiliza el operador de asignación adecuado para 
añadirle a la primera variable el valor 30.*/
let valor3 = 10, valor4 = 3;
console.log(valor3*=valor4);

/*10.Teniendo una variable que vale 10 y otra 8, muestra en consola si es verdad que la primera 
variable vale más que la segunda.*/
let d = 10, e = 8;
if (d > e) {
  console.log(d + " vale más que " + e);
} else {
  console.log(e + " vale más que " + d);
}

/*11.Teniendo una variable que vale 24 y otra 24, muestra en consola si es verdad que la primera y 
segunda variable valen lo mismo.*/
let f = 24,  g = 24;
if (f === g) {
  console.log("Valen lo mismo");
} else {
  console.log("No valen lo mismo");
}

/*12.Teniendo una variable que vale 7 y otra 3, muestra en consola si es verdad que la primera 
no vale lo mismo que la segunda variable.*/
let h = 7, i = 3;
if (h === i) {
  console.log("Valen lo mismo");
} else {
  console.log("No valen lo mismo");
}

//13.Completa el siguiente código y explica que es lo que realiza.
let j = 10, k = 5;
if (j > k){
  console.log("Hola Koder");
} else {
  console.log("Bye Koder");
}

//14.Completa el siguiente código y explica que es lo que realiza.
let m = "Manzanas", p = "Peras";
if (m >= p) {
  console.log("Manzanas");
} else {
  console.log("Peras");
}

