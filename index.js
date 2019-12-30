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
