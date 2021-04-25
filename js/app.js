console.log("Js has been added");
/**
 * Define Global Variables
 * 
*/

//get access to nav ul to add li later
const navContainer= document.querySelector("#navbar__list");
//get access to all sections in the page, we'll add li accordingly 
const sections=document.querySelectorAll("section");
//create fragment to improve Reflow time consuming
let liFragment=document.createDocumentFragment();
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


// add class style to links in the nav bar (li and href link to <a>)
function addLinkClassStyles(li,section){
    li.classList.add("menu__link");
    li.firstChild.setAttribute("href",`#${section.id}`);
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


