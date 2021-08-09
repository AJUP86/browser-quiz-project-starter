'use strict';

import {NEXT_QUESTION_BUTTON_ID, LAST_QUESTION_BUTTON_ID, ANSWER_CONTAINER_ID, GIVEUP_BUTTON_ID} from '../constants.js';
import {nextQuestion, checkAnswer, displayCorrectAnswer} from '../listeners/questionListeners.js';
import {createDOMElement} from '../utils/DOMUtils.js';

/**
 * Create an Answer element
 */
export const createAnswerElement = (answerText, elementID) => {
    const answerElement = createDOMElement('li', {
        id: elementID,
    });
    answerElement.innerText = answerText;
    answerElement.style.cursor = "pointer";
    answerElement.classList.add('answers-default','answers-default:hover');
    answerElement.addEventListener("click", checkAnswer, {passive: true})

    return answerElement;
};


/**
 * Create a full question element
 */
export const createQuestionElement = (question) => {
    const container = createDOMElement('div');
    const title = createDOMElement('h1');
    title.innerText = question.text;
    title.classList.add('question-title')
    container.appendChild(title);
    

    const answerContainer = createDOMElement('ol', {
        id: ANSWER_CONTAINER_ID,
    });

    for (const answerKey in question.answers) {
        const answer = createAnswerElement(question.answers[answerKey], answerKey);
        answerContainer.appendChild(answer);
    }

    container.appendChild(answerContainer);
    return container;
};

/**
 * Creates and returns the next questions button
 */

export const createNextQuestionButtonElement = () => {
    const buttonElement = createDOMElement('button', {
        id: NEXT_QUESTION_BUTTON_ID,
    });

    buttonElement.innerText = 'Next question';
    buttonElement.addEventListener('click',nextQuestion);
    return buttonElement;

};

//Create a button to help the use to see the correct answer 
export const createGiveupButtonElement = () => {
    const giveupButton = createDOMElement('button', {
        id: GIVEUP_BUTTON_ID,
    });

    giveupButton.innerText = 'Give up';
    giveupButton.addEventListener('click', displayCorrectAnswer);
    return giveupButton;
};

/**
 * Creates and returns the restart test button
 */

export const createLastQuestionButtonElement = () => {
    const buttonLastElement = createDOMElement('button', {
        id: LAST_QUESTION_BUTTON_ID,
    });

    buttonLastElement.innerText = 'Restart Test';
    buttonLastElement.addEventListener('click',nextQuestion);
    return buttonLastElement;
};


/**
 * Creates and returns the quiz result element
 */

export const createQuizResultElement = (numCorrect, numQuestions) => {
    const resultElement = createDOMElement('div');
    const titleElement = createDOMElement('h1');
    titleElement.innerText = "You are a true Warrior!";
    titleElement.classList.add('final-score-title');
    resultElement.appendChild(titleElement);

    const scoreElement = createDOMElement('h2');
    scoreElement.innerText = `You got ${numCorrect} out of ${numQuestions}`;
    scoreElement.classList.add('final-score-title');
    resultElement.appendChild(scoreElement);

    return resultElement;
};
