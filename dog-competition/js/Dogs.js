'use strict';

import { Dog } from './Dog.js';

/**
 * this class brings a field of several specific dogs
 */
export class Dogs {

    /**
     * getter
     * @returns the field of dogs
     */
    getDogs() {
        const dogs = [];
        dogs.push(new Dog('pic/charlie.jpg', 'Charlie', 'german shepherd', 60));
        dogs.push(new Dog('pic/cooper.jpg', 'Cooper', 'bulldog', 35));
        dogs.push(new Dog('pic/muffin.jpg', 'Muffin', 'dachshund', 30));
        dogs.push(new Dog('pic/pepe.jpg', 'Pepe', 'chihuahua', 20));
        dogs.push(new Dog('pic/max.jpg', 'Max', 'boxer', 60));
        dogs.push(new Dog('pic/frankie.jpg', 'Frankie', 'beagle', 40));
        return dogs;
    }
}