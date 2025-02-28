'use strict';


/**
 * a class for sorting a field of dogs by name, breed or size. It is activated by the button SORTING
 */
export class Sorting {

    /**
     * creating basic buttons for sorting the array of dogs
     */
    creationOfButtonsForSorting() {

        /**
         * creating a button for sorting by name
         */
        this.#creatingSortByNameButton();

        /**
         * creating a button for sorting by breed
         */
        this.#creatingSortByBreedButton();

        /**
         * creating a button for sorting by size
         */
        this.#creatingSortBySizeButton();
    }

    /**
     * function containing individual sorting algorithms
     * @param {*} dogs sorting field
     * @returns exception: if the parameter is not filled, the function prints an error message
     */
    functionForSorting(dogs) {

        /**
         * error message
         */
        if (dogs == null) {
            console.error('function \'functionForSorting\': parameter must not be null!');
            return;
        }

        /**
         * sort according to the name if we click on the button BY NAME
         */
        document.getElementById('by-name').onclick = () => {

            /**
             * emptying the rendering space, if there is anything there
             */
            this.#deletingBaseContainer();

            /**
             * creation of basic elements for rendering in the rendering space
             */
            this.#creatingBaseContainer();

            /**
             * sorted by name, breed and size
             */
            dogs.sort((a, b) => {
                if (a.getName() < b.getName()) return -1;
                if (a.getName() > b.getName()) return 1;
                if (a.getBreed() < b.getBreed()) return -1;
                if (a.getBreed() > b.getBreed()) return 1;
                if (a.getSize() < b.getSize()) return -1;
                if (a.getSize() > b.getSize()) return 1;
                return 0;
            });

            /**
             * attribute that determines the order of the listed information by number
             */
            const selectionNumber = 1;

            /**
             * listing and drawing individual dogs from the field
             */
            for (const dog of dogs) {

                /**
                 * functions for creating specific elements and inserting values into them for each dog
                 */
                this.#creatingAnElementForListingADog(dog, selectionNumber);
            }
        };

        /**
         * sort according to the name if we click on the button BY BREED
         */
        document.getElementById('by-breed').onclick = () => {

            /**
             * emptying the rendering space, if there is anything there
             */
            this.#deletingBaseContainer();

            /**
             * creation of basic elements for rendering in the rendering space
             */
            this.#creatingBaseContainer();

            /**
             * sorted by breed, name and size
             */
            dogs.sort((a, b) => {
                if (a.getBreed() < b.getBreed()) return -1;
                if (a.getBreed() > b.getBreed()) return 1;
                if (a.getName() < b.getName()) return -1;
                if (a.getName() > b.getName()) return 1;
                if (a.getSize() < b.getSize()) return -1;
                if (a.getSize() > b.getSize()) return 1;
                return 0;
            });

            /**
             * attribute that determines the order of the listed information by number
             */
            const selectionNumber = 2;

            /**
             * listing and drawing individual dogs from the field
             */
            for (const dog of dogs) {

                /**
                 * functions for creating specific elements and inserting values into them for each dog
                 */
                this.#creatingAnElementForListingADog(dog, selectionNumber);
            }
        };

        /**
         * sort according to the size if we click on the button BY SIZE
         */
        document.getElementById('by-size').onclick = () => {

            /**
             * emptying the rendering space, if there is anything there
             */
            this.#deletingBaseContainer();

            /**
             * creation of basic elements for rendering in the rendering space
             */
            this.#creatingBaseContainer();

            /**
             * sorted by size, name and breed
             */
            dogs.sort((a, b) => {
                if (a.getSize() < b.getSize()) return -1;
                if (a.getSize() > b.getSize()) return 1;
                if (a.getName() < b.getName()) return -1;
                if (a.getName() > b.getName()) return 1;
                if (a.getBreed() < b.getBreed()) return -1;
                if (a.getBreed() > b.getBreed()) return 1;
                return 0;
            });

            /**
             * attribute that determines the order of the listed information by number
             */
            const selectionNumber = 3;

            /**
             * listing and drawing individual dogs from the field
             */
            for (const dog of dogs) {

                /**
                 * functions for creating specific elements and inserting values into them for each dog
                 */
                this.#creatingAnElementForListingADog(dog, selectionNumber);
            }
        };
    }

    /**
     * creating a space for listing dogs and a space separating them from the buttons
     */
    #creatingBaseContainer() {
        const workSpace = document.getElementById('space');
        const rowPy4 = document.createElement('div');
        rowPy4.className = 'row py-4';
        rowPy4.id = 'row-py-4';
        workSpace.appendChild(rowPy4);
        const baseContainer = document.createElement('div');
        workSpace.appendChild(baseContainer);
        baseContainer.id = 'container';
    }

    /**
     * deletion of gap and space for listing dogs
     */
    #deletingBaseContainer() {
        this.#removingElement('row-py-4');
        this.#removingElement('container');
    }

    /**
     * functions for creating specific elements and inserting values into them for each dog
     * @param {*} dog dog from the original field
     * @param {*} selectionNumber the number that determines the order of the listed information
     * @returns exception: if the parameters are not filled, the function prints an error message
     */
    #creatingAnElementForListingADog(dog, selectionNumber) {

        /**
         * error message
         */
        if (dog == null || selectionNumber == null) {
            console.error('function \'creatingAnElementForListingADog\': parameters must not be null!');
            return;
        }

        const baseContainer = document.getElementById('container');
        const innerContainer = document.createElement('div');
        innerContainer.id = 'box';

        /**
         * creating a picture of a dog
         */
        baseContainer.appendChild(innerContainer);
        const picture = document.createElement('img');
        picture.src = dog.getPicture();
        innerContainer.appendChild(picture);

        /**
         * creating a paragraph to insert text about the dog
         */
        const text = document.createElement('p');
        text.id = 'dog-info';
        innerContainer.appendChild(text);
        const nameOfDog = this.#selectingTheOrderOfInformationListing(dog, selectionNumber);
        text.appendChild(nameOfDog);
    }

    /**
     * a function that determines the order of information about the dog
     * @param {*} dog dog from the original field
     * @param {*} selectionNumber the number that determines the order of the listed information
     * @returns exception: if one parameter is missing or if the number does not match the values 1, 2 or 3, an error message is printed
     */
    #selectingTheOrderOfInformationListing(dog, selectionNumber) {

        /**
         * error message
         */
        if (dog == null || (selectionNumber < 1 && selectionNumber > 3)) {
            console.error('function \'selectingTheOrderOfInformationListing\': 1. parameter must not be null and 2. parameter can be only 1, 2 or 3!');
            return;
        }

        /**
         * an attribute that is filled with three variants of a text string containing the name, breed and size of the dog in different order
         */
        let dogInformation;

        /**
         * the number determines which variant is printed
         */
        if (selectionNumber === 1) {
            dogInformation = document.createTextNode(`${dog.getName()}, ${dog.getBreed()}, ${dog.getSize()} cm`);
        }
        if (selectionNumber === 2) {
            dogInformation = document.createTextNode(`${dog.getBreed()}, ${dog.getName()}, ${dog.getSize()} cm`);
        }
        if (selectionNumber === 3) {
            dogInformation = document.createTextNode(`${dog.getSize()} cm, ${dog.getName()}, ${dog.getBreed()}`);
        }
        return dogInformation;
    }

    /**
     * creating a button for sorting by name
     */
    #creatingSortByNameButton() {
        this.#createElement('space', 'button', 'by-name', 'BY NAME');
    }

    /**
     * creating a button for sorting by breed
     */
    #creatingSortByBreedButton() {
        this.#createElement('space', 'button', 'by-breed', 'BY BREED');
    }

    /**
     * creating a button for sorting by size
     */
    #creatingSortBySizeButton() {
        this.#createElement('space', 'button', 'by-size', 'BY SIZE');
    }

    /**
     * universal function for creating HTML element
     * @param {*} spaceForInsertionParam element into which we insert the created element
     * @param {*} elementParam type of the new element
     * @param {*} idParam id of the new element
     * @param {*} labelParam description of the new element (text inserted into the element)
     * @returns exception: if the parameters are not filled, the function prints an error message
     */
    #createElement(spaceForInsertionParam, elementParam, idParam, labelParam) {

        /**
         * error message
         */
        if (spaceForInsertionParam == null || elementParam == null || idParam == null || labelParam == null) {
            console.error('function \'createElement\' parameters must not be null!');
            return;
        }

        const spaceForInsertion = document.getElementById(spaceForInsertionParam);
        const element = document.createElement(elementParam);
        spaceForInsertion.appendChild(element);
        element.id = idParam;
        const label = document.createTextNode(labelParam);
        element.appendChild(label);
    }

    /**
     * function to delete three buttons: BY NAME, BY BREED, BY SIZE
     */
    deletingSortingButtons() {
        this.#removingElement('by-name');
        this.#removingElement('by-breed');
        this.#removingElement('by-size');
    }

    /**
     * universal function that deletes an element if it exists in the element id space
     * @param {*} elementId id of the element for deleting
     * @returns exception: if the parameter is not filled, the function prints an error message
     */
    #removingElement(elementId) {

        /**
         * error message
         */
        if (elementId == null) {
            console.error('function \'removingElement\': parameter must not be null!');
            return;
        }

        /**
         * if the element exists in the space element, it will be deleted
         */
        if (document.getElementById(elementId)) {
            const space = document.getElementById('space');
            const element = document.getElementById(elementId);
            space.removeChild(element);
        }
    }
}