//  find the parent of the input text field I want to target
// bind to it
// prevent default submit behavior
// grab the text entered into the input
// store it
// insert it into a new <li> element, after the last li, with the proper elements and classes

// listen for when the 'Check' button is clicked
// use .closest to traverse to the nearest li and toggle its class
// add the class to the span element that will call the CSS that will strike through event.currentTarget

// listen for when the 'Delete' button is clicked
// use .closest to target the li itself
// use .remove method to permanently remove the <li> 


'use strict'

function addToList() {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    const userInput = $(event.currentTarget).find('#shopping-list-entry');
    //$('#js-shopping-list-form').after(`<p>${userInput.val()}</p>`);

    $('ul').append(`<li>
      <span class="shopping-item">${userInput.val()}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
      </li>`);

    $(userInput).val("");
  });
}

addToList();