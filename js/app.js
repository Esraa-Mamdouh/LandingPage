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

//Navigation stage: initialize links of the nav bar 
function initNavLinks (){
    //1. loop the sections and create li & <a> accordingly
    for(section of sections){
        //2. create li elements
        const li=document.createElement("li");
        //3.create a element
        const a=document.createElement("a");
        //4. set the name of the link
        a.textContent=section.getAttribute("data-nav");
        console.log(a.textContent);      //test
        //5. add a to li
        li.appendChild(a);
        //6. add li to fragment
        liFragment.appendChild(li);
        //7. add li style class
        addLinkClassStyles(li,section);
    }
    //8. add fragment to navContainer ul (that decreases Reflow)
    navContainer.appendChild(liFragment);
}
//Navigation stage: add class style to links in the nav bar (li and href link to <a>)
function addLinkClassStyles(li,section){
    li.classList.add("menu__link");
    li.firstChild.setAttribute("href",`#${section.id}`);
}

//Section Active State: section position according to page top and return if it's on the top of the page 
function sectionPosition(section){
    let position=section.getBoundingClientRect(); 
    console.log(section.id);
    console.log(position);
    return (position.y >=-1 && position.y <310);   // true? active section
}

function addRemoveActiveClass(section){
    //1. remove other active sections
    for(element of sections){
        if(element.id != section.id && element.classList.contains("your-active-class")){
                // remove active class 
                element.classList.remove("your-active-class");
        }
    }
    section.classList.add("your-active-class");
}
 //section Active: detects which section is active and change the class of it to "your-active-class" and remove this class from all other sections not active
function activeSection(){
    //1. loop over all sections to determine which one is active
    sections.forEach((section)=>{
        //2. get the position of each section
        let active=sectionPosition(section);   //test
        //console.log("x= ",x);               //test
        if(active){  //active section

            addRemoveActiveClass(section);
        }
    })
}

//section Active: scroll event and determine active sections while going on 
function scrollActive(){
    // add "scroll" event listner to the whole document
    document.addEventListener("scroll",function (evt){
        evt.preventDefault();
        activeSection();
    });
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
initNavLinks();
scrollActive();