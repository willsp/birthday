(function() {
    "use strict";

    // Buttons
    var btnAge = document.getElementById("btnAge");
    var btnDays = document.getElementById("btnDays");

    // Birthday input
    var input = document.getElementById("txtBirthday");

    // Function to display the age
    function displayAge(age) {
        var container = document.getElementById("displayarea");

        // Copy the template
        var node = container.getElementsByClassName("message")[0].cloneNode(true);

        // Set the age element
        node.getElementsByClassName("age")[0].textContent = age;

        // Add a class to note that it can be displayed
        node.classList.add("filled");

        // Add it to the end of the list
        container.appendChild(node);
    };

    // Hook up the buttons (We never use onclick anymore...)
    btnAge.addEventListener("click", function() {
        // check if they've entered anything (we're not really validating, just
        // making sure it's not empty.
        if (input.value) {
            // Use the functions we defined in birthday.js
            var age = BirthdayFuncs.getAge(new Date(input.value));
            displayAge(age);
        }
    });
            
}());
