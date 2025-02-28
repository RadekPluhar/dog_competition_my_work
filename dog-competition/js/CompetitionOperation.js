'use strict';

import { CompetitionCommonDay } from './CompetitionCommonDay.js';

/**
 * days on which the competition takes place
 */
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

/**
 * a number that determines the index in the days field and in the score field for each dog
 */
let indexOfDay = 0;

/**
 * variable for the class instance
 */
let competitionCommonDay;

/**
 * the class in which the dog competition takes place - activated by the button COMPETITION
 */
export class CompetitionOperation {

    /**
     * a feature that combines all the functions of a dog competition
     * @param {*} dogs a collection of dogs
     * @returns exception: if the parameter is not filled, the function prints an error message
     */
    startCompetition(dogs) {

        /**
         * error message
         */
        if (dogs == null) {
            console.error('function \'startCompetition\': parameter must not be null!');
            return;
        }

        /**
         * resetting scores for all dogs
         */
        this.#resetTotalScoreAndScores(dogs);

        /**
         * a feature that creates basic spaces for inserting dog competition elements
         */
        this.#creatingBaseContainer();

        /**
         * click on the START button to start the dog competition
         */
        document.getElementById('start-day').onclick = () => {
            const buttonStart = document.getElementById('start-day');
            const spaceForButton = document.getElementById('space-for-button');

            /**
             * START button changes to NEXT DAY button
             */
            spaceForButton.removeChild(buttonStart);
            const button = document.createElement('button');
            button.id = 'next-day';
            const buttonLabel = document.createTextNode('NEXT DAY');
            button.appendChild(buttonLabel);
            spaceForButton.appendChild(button);

            /**
             * a function that fills in the name of the day and pictures and information about the dogs, including their randomly assigned scores
             */
            this.#contentCreation(dogs);

            /**
             * click on this button to continue to the next day
             */
            document.getElementById('next-day').onclick = () => {

                /**
                 * if we reach Saturday, the contest listing will change
                 */
                if (indexOfDay === 4) {

                    /**
                     * deleting the button that switches days
                     */
                    this.removingSpaceForButtonStart();
                    this.removingH1Day();
                    const spaceForDayName = document.getElementById('space-for-day-name');
                    this.#creatingH1Day(spaceForDayName);
                    const day = document.getElementById('day');
                    indexOfDay++;
                    const nameOfDay = document.createTextNode(days[indexOfDay]);
                    day.appendChild(nameOfDay);
                    this.removingContainerForCompetition();
                    const workSpace = document.getElementById('space');
                    this.#creatingContainerForCompetition(workSpace);
                    this.#contentCreationSaturday();
                } else {

                    /**
                     * this condition ensures that days are counted only until Saturday
                     */
                    if (indexOfDay < 5) {
                        indexOfDay++;
                    }

                    /**
                     * in this block, the space is cleared and the elements are prepared for the next day's competition
                     */
                    this.removingH1Day();

                    const spaceForDayName = document.getElementById('space-for-day-name');

                    /**
                     * creating a element for the name of the day
                     */
                    this.#creatingH1Day(spaceForDayName);

                    /**
                     * removing space for rendering dogs
                     */
                    this.removingContainerForCompetition();

                    const workSpace = document.getElementById('space');

                    /**
                     * creating an element that displays dogs and their scores
                     */
                    this.#creatingContainerForCompetition(workSpace);

                    /**
                     * a function that fills in the name of the day and pictures and information about the dogs, including their randomly assigned scores
                     */
                    this.#contentCreation(dogs);
                }
            }
        }
    }

    /**
     * resetting scores for all dogs
     * @param {*} dogs a field of dogs
     * @returns exception: if the parameter is not filled, the function prints an error message
     */
    #resetTotalScoreAndScores(dogs) {

        /**
        * error message
        */
        if (dogs == null) {
            console.error('function \'resetTotalScoreAndScores\': parameter must not be null!');
            return;
        }

        for (const dog of dogs) {

            /**
             * resetting the dog's total score
             */
            dog.resetTotalScore();

            /**
             * emptying the dog's field of scores
             */
            dog.resetScores();
        }
    }

    /**
     * a feature that displays the last day of the competition, tallies the points and hands out the trophies
     */
    #contentCreationSaturday() {

        /**
         * ranking of dogs by score from best to worst
         */
        this.#sortingTotalScore(competitionCommonDay.getDogs());

        /**
         * numbering of dogs after the competition
         */
        let competitionPlace = 0;

        /**
         * forcyclus, which shows all dogs and their results
         */
        for (const dog of competitionCommonDay.getDogs()) {

            /**
             * numbering of dogs after the competition
             */
            competitionPlace++;

            /**
             * create space to display the location, picture, name and score of the dog 
             */
            const listingOfDog = document.createElement('p');
            listingOfDog.id = 'dog-info-competition';
            const container = document.getElementById('container-for-competition');
            container.appendChild(listingOfDog);

            /**
             * creating space for displaying the order of dogs
             */
            const spanForPlace = document.createElement('span');
            spanForPlace.id = 'competition-place';
            listingOfDog.appendChild(spanForPlace);
            const competitionPlaceNumber = document.createTextNode(competitionPlace + '.');
            spanForPlace.appendChild(competitionPlaceNumber);

            /**
             * a function that decides, in order, whether and which trophy is assigned to the dog
             */
            this.#allocationOfCups(competitionPlace, listingOfDog);

            /**
             * create space to display picture, name and score of the dog
             */
            const picture = document.createElement('img');
            picture.src = dog.getPicture();
            listingOfDog.appendChild(picture);
            const spanForInfo = document.createElement('span');
            spanForInfo.id = 'dog-info-score';
            listingOfDog.appendChild(spanForInfo);
            const infoAboutDog = document.createTextNode(`${dog.getName()}, score: ${dog.getTotalScore()}`);
            spanForInfo.appendChild(infoAboutDog);
        }

    }

    /**
     * a function that decides, in order, whether and which trophy is assigned to the dog
     * @param {*} competitionPlaceNumber the number on the basis of which the cups are allocated
     * @param {*} space the space where the cup image is inserted
     * @returns exception: if the parameters are not filled, the function prints an error message
     */
    #allocationOfCups(competitionPlaceNumber, space) {

        /**
         * error message
         */
        if (competitionPlaceNumber == null || space == null) {
            console.error('function \'allocationOfCups\': parameters must not be null!');
            return;
        }

        if (competitionPlaceNumber === 1) this.#allocationOfCupsPicture(space, 'pic/gold.jpg');
        if (competitionPlaceNumber === 2) this.#allocationOfCupsPicture(space, 'pic/silver.jpg');
        if (competitionPlaceNumber === 3) this.#allocationOfCupsPicture(space, 'pic/bronze.jpg');
    }

    /**
     * feature that creates a space for the cup image
     * @param {*} space the space where the cup image is inserted
     * @param {*} picturePath path to the picture
     * @returns exception: if the parameters are not filled, the function prints an error message
     */
    #allocationOfCupsPicture(space, picturePath) {

        /**
         * error message
         */
        if (space == null || picturePath == null) {
            console.error('function \'allocationOfCupsPicture\': parameters must not be null!');
            return;
        }

        const picture = document.createElement('img');
        picture.src = picturePath;
        space.appendChild(picture);
    }

    /**
     * ranking of dogs by score from best to worst
     * @param {*} dogs a field of dogs
     * @returns exception: if the parameter is not filled, the function prints an error message
     */
    #sortingTotalScore(dogs) {

        /**
        * error message
        */
        if (dogs == null) {
            console.error('function \'sortingTotalScore\': parameter must not be null!');
            return;
        }

        dogs.sort((a, b) => {
            if (a.getTotalScore() < b.getTotalScore()) return 1;
            if (a.getTotalScore() > b.getTotalScore()) return -1;
            if (a.getName() < b.getName()) return -1;
            if (a.getName() > b.getName()) return 1;
            return 0;
        });
    }

    /**
     * a function that fills in the name of the day and pictures and information about the dogs, including their randomly assigned scores
     * @param {*} dogs a collection of dogs
     * @returns exception: if the parameter is not filled, the function prints an error message
     */
    #contentCreation(dogs) {

        /**
        * error message
        */
        if (dogs == null) {
            console.error('function \'contentCreation\': parameter must not be null!');
            return;
        }

        const day = document.getElementById('day');
        competitionCommonDay = new CompetitionCommonDay(days[indexOfDay], dogs);

        /**
         * a function that assigns a random number of points to dogs
         */
        competitionCommonDay.allocationOfPoints();

        const nameOfDay = document.createTextNode(competitionCommonDay.getDay());
        day.appendChild(nameOfDay);
        const container = document.getElementById('container-for-competition');

        /**
         * forcycle, in which we list the picture, name and score of each dog
         */
        for (const dog of competitionCommonDay.getDogs()) {
            const listingOfDog = document.createElement('p');
            listingOfDog.id = 'dog-info-competition';
            container.appendChild(listingOfDog);
            const picture = document.createElement('img');
            picture.src = dog.getPicture();
            listingOfDog.appendChild(picture);
            const spanForInfo = document.createElement('span');
            spanForInfo.id = 'dog-info-score';
            listingOfDog.appendChild(spanForInfo);
            const infoAboutDog = document.createTextNode(`${dog.getName()}, score: ${dog.getScores()[indexOfDay]}`);
            spanForInfo.appendChild(infoAboutDog);
        }
    }

    /**
     * a feature that creates basic spaces for inserting dog competition elements
     */
    #creatingBaseContainer() {

        /**
         * when we re-create the contest, we set the days back to Monday
         */
        indexOfDay = 0;

        /**
         * creation of basic elements
         */
        const workSpace = document.getElementById('space');
        const spaceForButton = document.createElement('p');
        spaceForButton.id = 'space-for-button';
        workSpace.appendChild(spaceForButton);
        const button = document.createElement('button');
        button.id = 'start-day';
        const buttonLabel = document.createTextNode('START');
        button.appendChild(buttonLabel);
        spaceForButton.appendChild(button);
        const rowPy4First = document.createElement('div');
        rowPy4First.className = 'row py-4';
        rowPy4First.id = 'row-py-4-1';
        workSpace.appendChild(rowPy4First);
        const spaceForDayName = document.createElement('div');
        spaceForDayName.id = 'space-for-day-name';
        workSpace.appendChild(spaceForDayName);

        /**
         * creating a element for the name of the day
         */
        this.#creatingH1Day(spaceForDayName);
        const rowPy4 = document.createElement('div');
        rowPy4.className = 'row py-4';
        rowPy4.id = 'row-py-4-2';
        workSpace.appendChild(rowPy4);

        /**
         * creating an element that displays dogs and their scores
         */
        this.#creatingContainerForCompetition(workSpace);
    }

    /**
     * creating a element for the name of the day
     * @param {*} workSpace element into which the new element will be inserted
     * @returns exception: if the parameter is not filled, the function prints an error message
     */
    #creatingH1Day(workSpace) {

        /**
        * error message
        */
        if (workSpace == null) {
            console.error('function \'creatingH1Day\': parameter must not be null!');
            return;
        }

        const day = document.createElement('h1');
        day.id = 'day';
        workSpace.appendChild(day);
    }

    /**
     * creating an element that displays dogs and their scores
     * @param {*} workSpace element into which the new element will be inserted
     * @returns exception: if the parameter is not filled, the function prints an error message
     */
    #creatingContainerForCompetition(workSpace) {

        /**
       * error message
       */
        if (workSpace == null) {
            console.error('function \'creatingContainerForCompetition\': parameter must not be null!');
            return;
        }

        const baseContainer = document.createElement('div');
        workSpace.appendChild(baseContainer);
        baseContainer.id = 'container-for-competition';
    }

    /**
     * removing the space for the name of the day
     */
    removingH1Day() {
        this.#removingElement('day', 'space-for-day-name');
    }

    /**
     * removing the space for the button START
     */
    removingSpaceForButtonStart() {
        this.#removingElement('space-for-button', 'space');
    }

    /**
     * removal of the graphic separator
     */
    removingRowPy4First() {
        this.#removingElement('row-py-4-1', 'space');
    }

    /**
     * removal of the graphic separator
     */
    removingRowPy4() {
        this.#removingElement('row-py-4-2', 'space');
    }

    /**
     * removing space for rendering dogs
     */
    removingContainerForCompetition() {
        this.#removingElement('container-for-competition', 'space');
    }

    /**
     * removing the space for the name of the day
     */
    removingSpaceForDayName() {
        this.#removingElement('space-for-day-name', 'space');
    }

    /**
     * universal function that deletes an element if it exists in the element id space
     * @param {*} elementId id of the element for deleting
     * @param {*} spaceId id of the space where the element is
     * @returns exception: if the parameter is not filled, the function prints an error message
     */
    #removingElement(elementId, spaceId) {

        /**
         * error message
         */
        if (elementId == null || spaceId == null) {
            console.error('function \'removingElement\': parameters must not be null!');
            return;
        }

        /**
         * if the element exists in the space element, it will be deleted
         */
        if (document.getElementById(elementId, spaceId)) {
            const space = document.getElementById(spaceId);
            const element = document.getElementById(elementId);
            space.removeChild(element);
        }
    }
}