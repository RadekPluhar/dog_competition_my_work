'use strict';

import { Selection } from './Selection.js';
import { Sorting } from './Sorting.js';
import { CompetitionOperation } from './CompetitionOperation.js';
import { Dogs } from './Dogs.js';

/**
 * attribute that ensures that the button SELECTION click function is called only once, even if we click it multiple times
 */
let allowedToUseSelection = true;

/**
 * attribute that ensures that the button SORTING click function is called only once, even if we click it multiple times
 */
let allowedToUseSorting = true;

/**
 * collection for selected dogs
 */
const setForSelectionOfDogByComboBox = new Set();

/**
 * class instance
 */
const selection = new Selection();

/**
 * class instance
 */
const sorting = new Sorting();

/**
 * class instance
 */
const competitionOperation = new CompetitionOperation();

/**
 * class instance
 */
const dogs = new Dogs();

/**
 * filling the attribute with the original field of dogs
 */
const dogField = dogs.getDogs();

/**
 * what happens when we click on the button SELECTION
 */
document.getElementById('selection-button').onclick = function () {

    /**
     * freeing up space for new selections
     */
    cleaningTheWorkArea();

    if (allowedToUseSelection) {

        /**
         * launch the application for withdrawals
         */
        selection.workflow(setForSelectionOfDogByComboBox, dogField);
    }

    /**
     * if this attribute is set to false, the function workflow will not be executed
     */
    allowedToUseSelection = false;
}

/**
 * what happens when we click on the button SORTING
 */
document.getElementById('sort-button').onclick = function () {

    /**
     * freeing up space for new selections
     */
    cleaningTheWorkArea();

    if (allowedToUseSorting) {

        /**
         * creation of three buttons: SELECTION, SORTING, COMPETITION
         */
        sorting.creationOfButtonsForSorting();

        /**
         * activating the three buttons and preparing them for clicking
         */
        sorting.functionForSorting(dogField);
    }

    /**
     * if this attribute is set to false, the functions creationOfButtonsForSorting and functionForSorting will not be executed
     */
    allowedToUseSorting = false;
}

/**
 * what happens when we click on the button COMPETITION
 */
document.getElementById('competition-button').onclick = function () {

    /**
     * freeing up space for new selections
     */
    cleaningTheWorkArea();

    /**
     * a feature that combines all the functions of a dog competition
     */
    competitionOperation.startCompetition(dogField);
}

/**
 * freeing up space for new selections
 */
function cleaningTheWorkArea() {

    /**
     * deleting the button for displaying images if exists
     */
    selection.removePictureButton();

    /**
     * deletion of space above images if exists
     */
    selection.removeRowPy4();

    /**
     * deleting the area where pictures of selected dogs and information about them are displayed if exists
     */
    selection.removeContainer();

    /**
     * deleting the paragraph for listing the names of selected dogs if exists
     */
    selection.removeLineForNames();

    /**
     * deleting the select if exists
     */
    selection.removeSelect();

    /**
     * delete button to confirm dog selection if exists
     */
    selection.removeSelectButtonConfirm();

    /**
     * switches the attribute to true so that the function workflow can be called again by clicking the button SELECTION
     */
    allowedToUseSelection = true;

    /**
     * switches the attribute to true so that the functions creationOfButtonsForSorting and functionForSorting can be called again by clicking the button SORTING
     */
    allowedToUseSorting = true;

    /**
     * function that toggles the value of attributes so that the PICTURES button (id: pictures-button) and paragraph (id: line-for-names)
     * can be created again - this function is used by the RESET button (id: reset-button)
     */
    selection.unblockingAttributes();

    /**
     * emptying the collection with selected dogs
     */
    setForSelectionOfDogByComboBox.clear();

    /**
     * function to delete three buttons: BY NAME, BY BREED, BY SIZE
     */
    sorting.deletingSortingButtons();

    /**
     * removing the space for the button START
     */
    competitionOperation.removingSpaceForButtonStart();

    /**
     * removing space for rendering dogs
     */
    competitionOperation.removingContainerForCompetition();

    /**
     * removal of the graphic separator
     */
    competitionOperation.removingRowPy4();

    /**
     * removal of the graphic separator
     */
    competitionOperation.removingRowPy4First();

    /**
     * removing the space for the name of the day
     */
    competitionOperation.removingSpaceForDayName();
}