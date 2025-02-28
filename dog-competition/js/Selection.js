'use strict';

/**
 * attribute that helps to ensure that the PICTURES button (id: pictures-button) is created only once, even if the CONFIRM button (id: select-button)
 * is clicked multiple times
 */
let allowedToCreatePictureButton = true;

/**
 * an attribute that helps ensure that a paragraph (id: line-for-names) is created only once, even if the CONFIRM button (id: select-button)
 * is clicked multiple times
 */
let allowedToUseConfirmButtonForNamesLine = true;

/**
 * class that serves the SELECTION section, i.e. is activated by the SELECTION button (id: selection-button)
 */
export class Selection {

    /**
     * function that toggles the value of attributes so that the PICTURES button (id: pictures-button) and paragraph (id: line-for-names)
     * can be created again - this function is used by the RESET button (id: reset-button)
     */
    unblockingAttributes() {

        /**
         * true means that the paragraph (id: line-for-names) can be recreated
         */
        allowedToUseConfirmButtonForNamesLine = true;

        /**
         * value true means that the PICTURES button (id: pictures-button) can be recreated
         */
        allowedToCreatePictureButton = true;
    }

    /**
     * this function is the basis for starting the SELECTION section and is started by the SELECTION button (id: selection-button)
     * @param {*} selectedDogs set of selected dogs (Set)
     * @param {*} originalFieldOfDogs the original field of dogs from which the dogs are selected
     * @returns exception: if the first or second parameter is empty, an error message is printed
     */
    workflow(selectedDogs, originalFieldOfDogs) {

        /**
         * error message
         */
        if (selectedDogs == null || originalFieldOfDogs == null) {
            console.error('function \'worflow\' parameters must not be null!');
            return;
        }
        this.#createSelection(originalFieldOfDogs);
        this.#createSelectButton();
        this.#confirmSelectionWithSelectButton(selectedDogs, originalFieldOfDogs);
    }

    /**
     * function that creates an element select (id: selection)
     * @param {*} group the original field of dogs
     */
    #createSelection(group) {
        const workSpace = document.getElementById('space');
        const selectSpace = document.createElement('select');
        selectSpace.id = 'selection';
        workSpace.appendChild(selectSpace);

        /**
         * an array from which values are assigned to each value of option
         */
        const namesValues = ['ch', 'co', 'mu', 'pe', 'ma', 'fr'];

        /**
         * forcycle, in which individual options are created, values are assigned to their values and then the names of dogs are inserted
         * into the individual options
         */
        for (let i = 0; i < group.length; i++) {
            const optionSpace = document.createElement('option');
            optionSpace.value = namesValues[i];
            selectSpace.appendChild(optionSpace);
            const optionText = document.createTextNode(group[i].getName());
            optionSpace.appendChild(optionText);
        }
    }

    /**
     * functions to create a button CONFIRM (id: select-button)
     */
    #createSelectButton() {
        const selectButton = document.createElement('button');
        selectButton.id = 'select-button';
        const workSpace = document.getElementById('space');
        workSpace.appendChild(selectButton);
        const selectButtonLabel = document.createTextNode('CONFIRM');
        selectButton.appendChild(selectButtonLabel);
    }

    /**
     * a function that determines what happens when we click on SELECTION (id: select-button),
     * creating a paragraph (id: line-for-names),
     * creating a control for selecting and adding dogs to a set (Set),
     * listing the names of selected dogs,
     * creating a button for displaying pictures and its functionality,
     * creating a space for drawing pictures of dogs and information about them,
     * deleting the select element, the CONFIRM button and the PICTURES button
     * @param {*} selectedDogs set of selected dogs (Set)
     * @param {*} originalFieldOfDogs the original field of dogs from which the dogs are selected
     */
    #confirmSelectionWithSelectButton(selectedDogs, originalFieldOfDogs) {

        /**
         * actions after clicking the button CONFIRM
         */
        document.getElementById('select-button').onclick = function () {

            /**
             * create a paragraph and treat it to be created only once, even if the button is clicked multiple times
             */
            if (allowedToUseConfirmButtonForNamesLine) {
                const workSpace = document.getElementById('space');
                const lineForNames = document.createElement('p');
                lineForNames.id = 'line-for-names';
                workSpace.appendChild(lineForNames);
                allowedToUseConfirmButtonForNamesLine = false;
            }

            /**
             * variable carrying the selected dog from the select element
             */
            let dog;

            /**
             * creating a control for the select element and filling the dogs from the original array into this select
             */
            const selectionForm = document.getElementById('selection').value;
            switch (selectionForm) {
                case "ch": dog = originalFieldOfDogs[0]; break;
                case "co": dog = originalFieldOfDogs[1]; break;
                case "mu": dog = originalFieldOfDogs[2]; break;
                case "pe": dog = originalFieldOfDogs[3]; break;
                case "ma": dog = originalFieldOfDogs[4]; break;
                case "fr": dog = originalFieldOfDogs[5]; break;
            }

            /**
             * adding each individual dog to the collection (Set)
             */
            selectedDogs.add(dog);

            /**
             * attribute for listing the names of selected dogs
             */
            let text = '';

            /**
             * for better work with the listing of dog names it was necessary to convert the Set collection to an Array
             */
            const selectedDogsArray = Array.from(selectedDogs);

            /**
             * list of dog names separated by comma
             */
            for (let i = 0; i < selectedDogsArray.length; i++) {
                text += selectedDogsArray[i].getName();
                if (selectedDogsArray.length - 1 > i) {
                    text += ', ';
                }
            }

            /**
             * placing the listing of dog names in the paragraph
             */
            document.getElementById('line-for-names').innerHTML = text;

            /**
             * create a button to display images with a condition that ensures that the button is created only once,
             * even if the button that creates it is clicked multiple times
             */
            if (allowedToCreatePictureButton) {
                const picturesButton = document.createElement('button');
                picturesButton.id = 'pictures-button';
                const workSpace = document.getElementById('space');
                workSpace.appendChild(picturesButton);
                const textOfButton = document.createTextNode('PICTURES');
                picturesButton.appendChild(textOfButton);
                allowedToCreatePictureButton = false;

                /**
                 * what happens when we click on the button for pictures
                 */
                picturesButton.onclick = function () {

                    /**
                     * creating a space above the images
                     */
                    const workSpace = document.getElementById('space');
                    const rowPy4 = document.createElement('div');
                    rowPy4.className = 'row py-4';
                    rowPy4.id = 'row-py-4';
                    workSpace.appendChild(rowPy4);

                    /**
                     * creating a space in which pictures of dogs and descriptions of them are displayed
                     */
                    const baseContainer = document.createElement('div');
                    workSpace.appendChild(baseContainer);
                    baseContainer.id = 'container';

                    /**
                     * creating a box for a picture and description of each dog
                     */
                    for (const d of selectedDogs) {
                        const innerContainer = document.createElement('div');
                        innerContainer.id = 'box';
                        baseContainer.appendChild(innerContainer);
                        const picture = document.createElement('img');
                        picture.src = d.getPicture();
                        innerContainer.appendChild(picture);
                        const text = document.createElement('p');
                        text.id = 'dog-info';
                        innerContainer.appendChild(text);
                        const nameOfDog = document.createTextNode(`${d.getName()}, ${d.getBreed()}, ${d.getSize()} cm`);
                        text.appendChild(nameOfDog);
                    }

                    /**
                     * after clicking on the button PICTURES the select element, the CONFIRM button and the button PICTURES itself are deleted
                     */
                    const selectionRemove = document.getElementById('selection');
                    const confirmRemove = document.getElementById('select-button');
                    workSpace.removeChild(selectionRemove);
                    workSpace.removeChild(confirmRemove);
                    workSpace.removeChild(picturesButton);
                }
            }
        }
    }

    /**
     * deleting the button for displaying images
     */
    removePictureButton() {
        this.#removingElement('pictures-button');
    }

    /**
     * deletion of space above images
     */
    removeRowPy4() {
        this.#removingElement('row-py-4');
    }

    /**
     * deleting the area where pictures of selected dogs and information about them are displayed
     */
    removeContainer() {
        this.#removingElement('container');
    }

    /**
     * deleting the paragraph for listing the names of selected dogs
     */
    removeLineForNames() {
        this.#removingElement('line-for-names');
    }

    /**
     * deleting the select
     */
    removeSelect() {
        this.#removingElement('selection');
    }

    /**
     * delete button to confirm dog selection
     */
    removeSelectButtonConfirm() {
        this.#removingElement('select-button');
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