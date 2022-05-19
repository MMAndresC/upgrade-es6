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
//Como hay una variable name del ejercicio anterior, cargo el resto de var que en este caso es solo la de name 
//en nameCar y asi le cambio a otro nombre que no da conflicto
const {itv, ...nameCar} = car; 
console.log(nameCar, itv);
const [yearOne, yearTwo, yearThree] = itv;
console.log(yearOne, yearTwo, yearThree);

