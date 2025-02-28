'use strict';

import { CompetitionAbstract } from './CompetitionAbstract.js';

/**
 * class for creating weekday dog competitions - extends the abstract CompetitionAbstract
 */
export class CompetitionCommonDay extends CompetitionAbstract {

    /**
     * a day of the week
     */
    #day;

    /**
     * a collection of dogs
     */
    #dogs;

    /**
     * constructor for artuments: day, dogs
     * @param {*} day a day of the week
     * @param {*} dogs a collection of dogs
     */
    constructor(day, dogs) {
        super();
        this.#day = day;
        this.#dogs = dogs;
    }

    /**
     * a function that assigns a random number of points to dogs
     */
    allocationOfPoints() {
        for (const dog of this.#dogs) {
            const score = Math.floor(Math.random() * 100);
            dog.setScores(score);
            dog.setTotalScore(score);
        }
    }

    /**
     * getter
     * @returns a day
     */
    getDay() {
        return this.#day;
    }

    /**
     * getter
     * @returns a collection of dogs
     */
    getDogs() {
        return this.#dogs;
    }
}