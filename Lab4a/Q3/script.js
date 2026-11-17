
const generateBtn = document.getElementById("generateBtn");
const numberList = document.getElementById("numberList");

function generateNumbers() {

    // Clear existing list items
    numberList.textContent = "";

    // Generate numbers from 1 to 5
    for (let number = 1; number <= 5; number++) {

        // Create a new list item
        const listItem = document.createElement("li");

        // Set the text
        listItem.textContent = `The number is ${number}`;

        // Add the list item to the ordered list
        numberList.appendChild(listItem);
    }
}

// Add click event listener
generateBtn.addEventListener("click", generateNumbers);
