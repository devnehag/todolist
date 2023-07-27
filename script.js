// Function to create a new list item with the entered text
function createListItem(text) {
    const li = document.createElement("li");
    li.textContent = text;

    // Add click event listener to the list item
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    return li;
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const input = document.getElementById("nameInput");
    const text = input.value.trim(); // Get the entered text and remove leading/trailing spaces

    if (text !== "") {
        const list = document.getElementById("nameList");
        const listItem = createListItem(text);
        list.appendChild(listItem);

        input.value = ""; // Clear the input field after adding the item to the list
    }
}

// Add event listener to the form submit button
document.getElementById("nameForm").addEventListener("submit", handleSubmit);
