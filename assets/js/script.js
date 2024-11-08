/*Esercizio 1 */

console.log("----- Esercizio 1 -----");

/*Copio array per altri esercizi */

const pets = ['dog', 'cat', 'hamster', 'redfish'];

petsCopy = [...pets];

function printArray() {

    console.log(pets[0]);
    console.log(pets[1]);
    console.log(pets[2]);
    console.log(pets[3]);

}

printArray();

/*Esercizio 2 */

console.log("----- Esercizio 2 -----");

function petsSort() {

    console.log(pets.sort());

}

petsSort();

/*Esercizio 3 */

console.log("----- Esercizio 3 -----");

function petsReverse() {
    console.log(pets.reverse());
}

petsReverse();

/*Esercizio 4 */

console.log("----- Esercizio 4 -----");

function moveFirstElement() {
    const firstElement = pets[0];
    pets.splice(0, 1);
    pets.push(firstElement);
    console.log(pets);
}

moveFirstElement();

/*Esercizio 5 */

console.log("----- Esercizio 5 -----");

const cars = [
    {
        brand: 'Ford',
        model: 'Fiesta',
        color: 'red',
        trims: ['titanium', 'st', 'active'],
    },
    {
        brand: 'Peugeot',
        model: '208',
        color: 'blue',
        trims: ['allure', 'GT'],
    },
    {
        brand: 'Volkswagen',
        model: 'Polo',
        color: 'black',
        trims: ['life', 'style', 'r-line'],
    },
];

/*Esercizio 6 */

console.log("----- Esercizio 6 -----");

function addLicensePlate() {
    for (let i = 0; i < cars.length; i++) {
        cars[i].licensePlate = `ABC123${i}`;
    }
    console.log(cars);
}

addLicensePlate();

/*Esercizio 7 */

console.log("----- Esercizio 7 -----");

function addObject() {
    let newCar = {
        brand: 'Fiat',
        model: 'Punto',
        color: 'green',
        trims: ['eco', 'sport'],
        licensePlate: `ABCSSS`
    }
    cars.push(newCar);
    console.log(cars);
}

addObject();

/*Esercizio 8 */

console.log("----- Esercizio 8 -----");


function removeTrim() {
    for (let i = 0; i < cars.length; i++) {
        if (Array.isArray(cars[i].trims) && cars[i].trims.length > 0) {
            cars[i].trims.pop();
        }
    }
    console.log(cars);
}

removeTrim();

console.log("----- Esercizio 8 -----");

const numericArray = [
    6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

function findMax(numberFinal) {
    for (let i = 0; i < cars.length; i++) {
        if (numericArray[i] === numberFinal) {
            return;
        }
        else {
            console.log(numericArray[i]);
        }
    }
}

findMax(32);



console.log("----- Esercizio 10 -----");

function ItalianAlphabet() {
    let a = 'a';
    let z = 'z';
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    console.log(alphabet);
}

ItalianAlphabet();






