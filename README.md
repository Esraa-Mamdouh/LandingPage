# Landing Page Project

## Table of Contents

- [Landing Page Project](#landing-page-project)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Requirements meet](#requirements-meet)
  - [Hierarchy](#hierarchy)
  - [Main Functions](#main-functions)

## Introduction 


This project  build a multi-section landing page, with a dynamically updating navigational menu based on the amount of content that is added to the page and detecting active section in the page.


## Requirements meet

- ### Navigation
	- Navigation links are built dynamically as an unordered list for each section.

- ### Section Active State
	- It showes  which section is being viewed while scrolling through the page.

- ### Scroll to Anchor
	- When clicking an item from the navigation menu, the link scrolls smoothly to the start of the appropriate section. 

- ### Styling
	- Styling has been added for active states and links.

- ### HTML Structure
	- There are 5 sections that have been added to the page(at leat 4 sections).
## Hierarchy

```
css
 |-- styles.css   
index.html
js
 |-- app.js
README.md
```

## Main Functions
`initNavLinks();`
- Creates navigation links and add some CSS style class.

`scrollActive();`
- Mark the active section with CSS style class depending on section's position in the screen, while scrolling in the page and remove style from non current active sections.

`scrollTOFunction();`
- When clicking on links in the nav bar, it moves to the section corresponding to the clicked link with smooth scrolling motion.
