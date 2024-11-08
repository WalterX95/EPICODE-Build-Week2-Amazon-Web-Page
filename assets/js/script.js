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

function addLicensePlate() {
    for (let i = 0; i < cars.length; i++) {
        cars[i].licensePlate = `ABC123${i}`;
    }
    console.log(cars);
}

addLicensePlate();

/*Esercizio 6 */

console.log("----- Esercizio 6 -----");

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

console.log("----- Esercizio 7 -----");

function removeTrim() {
    for (let i = 0; i < cars.length; i++) {
          cars[i].pop(cars[i].trims[i]);
    }
    console.log(cars);
}

//removeTrim();

console.log("----- Esercizio 8 -----");










