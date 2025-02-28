'use strict';

import { Dogs } from './Dogs.js';
import { Dog } from './Dog.js';
import { CompetitionAbstract } from './CompetitionAbstract.js';
import { CompetitionCommonDay } from './CompetitionCommonDay.js';
import { CompetitionOperation } from './CompetitionOperation.js';

/*
const competitionOperation = new CompetitionOperation();
const dogs = new Dogs();
const dogField = dogs.getDogs();
const dogDay = new CompetitionCommonDay('Monday', dogField);
dogDay.allocationOfPoints();
dogDay.allocationOfPoints();

dogField.sort((a, b) => {
    if (a.getTotalScore() < b.getTotalScore()) return 1;
    if (a.getTotalScore() > b.getTotalScore()) return -1;
    if (a.getName() < b.getName()) return -1;
    if (a.getName() > b.getName()) return 1;
    return 0;
});

for (const dog of dogDay.getDogs()) {
    console.log('dog: ' + dog.getName());
    for (const score of dog.getScores()) {
        console.log('his score: ' + score);
    }
    console.log('total score: ' + dog.getTotalScore());
}
*/

/*
const nonAbstract = new CompetitionAbstract('Monday', dogs);
*/

/*
for (const dog of dogField) {

    const space = document.getElementById('test-space');
    const pict = document.createElement('img');
    pict.src = dog.getPicture();
    space.appendChild(pict);

    const nameSpace = document.createElement('p');
    const name = document.createTextNode(dog.getName());
    nameSpace.appendChild(name);
    space.appendChild(nameSpace);

    const breedSpace = document.createElement('p');
    const breed = document.createTextNode(dog.getBreed());
    breedSpace.appendChild(breed);
    space.appendChild(breedSpace);

    const sizeSpace = document.createElement('p');
    const sizeDog = document.createTextNode(dog.getSize() + ' cm');
    sizeSpace.appendChild(sizeDog);
    space.appendChild(sizeSpace);
}
*/

/*
const frankie = new Dog('pic/frankie.jpg', 'Frankie', 'beagle', 40);

const dogPicture = document.getElementById('dog');
//dogPicture.src = frankie.getPicture();

frankie.setTotalScore(45);

console.log(`Dog: ${frankie.getName()}, ${frankie.getBreed()}, ${frankie.getSize()} cm.`);
console.log(`Total Score: ${frankie.getTotalScore()}`);
*/