'use strict';

/**
 * the class of a dog
 */
export class Dog {

    /**
     * a picture of a dog
     */
    #picture;

    /**
     * a name of a dog
     */
    #name;

    /**
     * a breed of a dog
     */
    #breed;

    /**
     * a size of a dog
     */
    #size;

    /**
     * the score the dog makes in one day
     */
    #scores = [];

    /**
     * sum of all scores for the whole week
     */
    #totalScore = 0;

    /**
     * constructor for entering basic dog data
     * @param {*} picture image address
     * @param {*} name a name of a dog
     * @param {*} breed a breed of a dog
     * @param {*} size a size of a dog in centimeters
     */
    constructor(picture, name, breed, size) {
        this.#picture = picture;
        this.#name = name;
        this.#breed = breed;
        this.#size = size;
    }

    /**
     * getter
     * @returns the address of the image
     */
    getPicture() {
        return this.#picture;
    }

    /**
     * getter
     * @returns the name of the dog
     */
    getName() {
        return this.#name;
    }

    /**
     * getter
     * @returns the breed of the dog
     */
    getBreed() {
        return this.#breed;
    }

    /**
     * getter
     * @returns the size of the dog in centimeters
     */
    getSize() {
        return this.#size;
    }

    /**
     * setter - adding the current score to the field behind the other scores
     * @param {*} score the current score
     */
    setScores(score) {
        this.#scores.push(score);
    }

    /**
     * emptying the field
     */
    resetScores() {
        this.#scores.length = 0;
    }

    /**
     * getter
     * @returns the field of scores
     */
    getScores() {
        return this.#scores;
    }

    /**
     * setter
     * @param {*} scoreNumber receives a score for each day
     * @returns exception: if the function receives a data type other than number, it prints an error message
     */
    setTotalScore(scoreNumber) {

        /**
         * error message
         */
        if (!Number.isFinite(scoreNumber)) {
            console.error('total score of dog - function \'setTotalScore\': only a number can come into function!');
            return;
        }

        /**
         * suming the scores for each day to the total score
         */
        this.#totalScore += scoreNumber;
    }

    /**
     * resetting the number
     */
    resetTotalScore() {
        this.#totalScore = 0;
    }

    /**
     * getter
     * @returns total score for the whole week
     */
    getTotalScore() {
        return this.#totalScore;
    }
}