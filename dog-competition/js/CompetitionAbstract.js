'use strict';

/**
 * abstract class for inheritance
 */
export class CompetitionAbstract {

    /**
     * a day of the week
     */
    #day;

    /**
     * a collection of dogs
     */
    #dogs;

    /**
     * constructor for arguments: day, dogs
     * @param {*} day a day of the week
     * @param {*} dogs a collection of dogs
     */
    constructor(day, dogs) {

        /**
         * exception: if someone tries to create an instance of this abstract class, an error message is printed
         */
        if (new.target === CompetitionAbstract) {
            throw new Error("CompetitionAbstract is an abstract class and cannot be instantiated directly.");
        }

        this.#day = day;
        this.#dogs = dogs;
    }

    /**
     * getter: an error message is printed if this method is not implemented in the descendant
     */
    getDay() {
        throw new Error("Method 'getDay()' must be implemented.");
    }

    /**
     * getter: an error message is printed if this method is not implemented in the descendant
     */
    getDogs() {
        throw new Error("Method 'getDogs()' must be implemented.");
    }
}