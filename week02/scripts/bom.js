// 3 variables that hold references to INPUT, BUTTON, and LIST elements in the HTML
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function () {
    // Code to execute when the button is clicked
    // Check to make sure input is not blank before doing the following remaining task in the list
    if (input.value.trim() !== '') {
        // li element that will hold each entrys' chapter, title, and associated delete button
        const li = document.createElement('li');

        // Populate the li element variable's TEXTCONTENT or INNERHTML with the input value
        li.textContent = input.value;

        // Create a delete BUTTON
        const deleteButton = document.createElement('button');

        // Populate the button textContent with a X
        deleteButton.textContent = '❌';

        // Append the li element variable with the delete button
        li.append(deleteButton);

        // Append the li element variable to the unordered list in your HTML
        list.append(li);

        // Add an event listener to the delete button to remove list item when clicked
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        // Clear input value after adding the chapter to the list
        input.value = '';

    } else {
        // Input is blank, return focus to the input field
        input.focus();
    }

});
