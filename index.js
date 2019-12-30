// find the parent of the input text field I want to target
// bind to it
// prevent default submit behavior
// grab the text entered into the input
// store it
// insert it into a new <li> element with the proper elements and classes
// traverse to after the last li and place it there

// listen for when the 'Delete' button is clicked
// use .closest to target the li itself
// use .remove method to permanently remove the <li> 

// listen for when the 'Check' button is clicked
// use .parent and .siblings to traverse to the span element with list item text 
// toggle the class to add or remove the span element to call the CSS that strikes through event.currentTarget

'use strict'

function addToList() {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();

    const userInput = $(this).find('#shopping-list-entry');
    
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

function removeFromList() {
  $('.shopping-list').on('click', '.shopping-item-delete',function(event) {
    let targetButton = $(event.currentTarget);
   
    targetButton.closest('li').remove();
  })
}

function checkOffList() {
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).parent().siblings('.shopping-item').toggleClass('shopping-item__checked')
  });
}

addToList();

removeFromList();

checkOffList();
