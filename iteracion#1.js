//Iteracion#1 Arrows
//Crea una arrow function que tenga dos parametros a y b y 
//que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
//por consola la suma de los dos parametros.

const sum =(a = 10,b = 5) =>{
    return a + b;
}

//1.1 Ejecuta esta función sin pasar ningún parametro
console.log('Ejercicio 1.1:',sum());

//1.2 Ejecuta esta función pasando un solo parametro
console.log('Ejerecicio 1.2:',sum(20));

//1.3 Ejecuta esta función pasando dos parametros
console.log('Ejerecicio 1.3:',sum(45,38));

//Iteración #2: Destructuring
//2.1 En base al siguiente javascript, crea variables en base a las propiedades 
//del objeto usando object destructuring e imprimelas por consola. Cuidado, 
//no hace falta hacer destructuring del array, solo del objeto.

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

const {title, gender, year} = game;
console.log('Titulo:',title,'- Genero:',gender,' - Año:',year);

//2.2 En base al siguiente javascript, usa destructuring para crear 3 variables 
//llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
//imprimelo por consola.
const fruits = ['Banana', 'Strawberry', 'Orange'];
const [fruit1, fruit2, fruit3] = fruits;
console.log('Primera fruta:', fruit1, 'Segunda fruta:', fruit2, 'Tercera fruta:', fruit3);

//2.3 En base al siguiente javascript, usa destructuring para crear 2 
//variables igualandolo a la función e imprimiendolo por consola.
const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};
const {name, race} = animalFunction();
console.log(`Animal: ${name} de la raza ${race}`); 

//2.4 En base al siguiente javascript, usa destructuring para crear las 
//variables name y itv con sus respectivos valores. Posteriormente crea 
//3 variables usando igualmente el destructuring para cada uno de los años 
//y comprueba que todo esta bien imprimiendolo.

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }