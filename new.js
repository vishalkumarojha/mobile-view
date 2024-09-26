// Function to toggle the menu
function toggleMenu() {
    var menu = document.getElementById('menu');
    var arrow = document.querySelector('.down-arrow');
    menu.classList.toggle('active');
    arrow.classList.toggle('active');
}

// Function to update the header text with the clicked item and close the navbar
function updateHeader(event) {
    const clickedItemText = event.target.innerText; // Get clicked item's text
    const header = document.getElementById('current-header');
    
    // Update the header with the clicked item text
    header.innerText = clickedItemText;

    // Close the navbar (hide menu and reset arrow)
    toggleMenu();
}
