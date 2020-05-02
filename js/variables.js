// Texto.

var textoA = "comillas dobles";
var textoB = 'comillas sencillas';
var textoC = "texto con comillas 'simples' dentro de comillas dobles";

console.log(textoA);
console.log(textoB);
console.log(textoC);

var x = "2", y = "2.2";

document.write(x+y+" "+typeof(x+y));
document.write('<br>');
document.write(x*y+" "+typeof(x*y));

// Númerico.

var a = 10, b = 3;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b); // Modulo: Nos regresa el residuo de la división.

console.log(1 + a++);
console.log(a);
console.log(1 + ++b);

// Operador booleano.

var t = true, f = false;
console.log(t && f); // Falso.
console.log(t || f); // Verdadero.
console.log(t == f); // Falso.
console.log(t != f); // Verdadero.

// Listas.

var nombre = "walter";
var lista = ["White", 30, nombre, true];
console.log(lista[1]);
console.log(lista.length);
console.log(lista[lista.length-1]);

// Objeto o tupla.

var persona = {
    nombre:     "Walter",
    apellido:   "White",
    aficiones:  ["css", "html", "javascript"],
    inscrito:   true,
}

console.log(persona.nombre);        // Walter.
console.log(persona.aficiones[1]);  // HTML.
console.log(persona.aficiones[persona.aficiones.length-1]);   // JS.