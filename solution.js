////////////// Part 1 /////////////////////
/* 1.1) Link the CSS file by setting the href attribute of <link> */
document.querySelector('link').href ='styles.css';

/* 1.2) Set the class of the image to "list-img" */

document.querySelector('.header img').className = 'list-img';

/* 1.3) Set the classes of the inputs (buttons) to "btn" by using a loop */

let listBtns = document.querySelectorAll('.btn-controls input');

for (let i = 0; i < listBtns.length; i++) {

        listBtns[i].className = 'btn';

}


////////////// Part 2 /////////////////////

/* 2.1) grab the <ul> that we are going to append <li> nodes to and store it in a variable */

let groceryList = document.querySelector('#grocery-list');


/* 2.2) When the user clicks the ADD button, ask them what item they need to add and then:
        1. Create a new li Element
        2. Create the text node with the user's input
        3. Append the text node to the li Element
        4. Add the li Element to the unordered list by appending it to the variable created in step 2.1 */


function addItem() {

        let add = prompt('What item do you want to add?:');
        let element = document.createElement('li');
        element.innerText = add;
        groceryList.appendChild(element);

}


/* 2.3) When the user clicks the TOTAL button:
        1. Display the total area by setting the total-area class to just "total-area"
        2. Total the number of groceries by getting the length of the li NodeList
        3. Add the count to the page by setting the textContent of #item-count */

        
function getTotal() {

        document.querySelector('.total-area').style.display = 'block';
        const allListItems = document.querySelectorAll('li');
        const numItems = allListItems.length;
        console.log(numItems);
        document.querySelector("#item-count").innerText = numItems;

}
              

////////////// BONUS /////////////////////
/*  When the user clicks the REMOVE button, ask them what item they want to remove and then:
    1. Remove the item from the list with removeChild by comparing the user's response to the textContent of each <li> */

function removeItem() {

        let userInput = prompt("What item do you want to remove?");
        allListItems = document.querySelectorAll("li");
        for (let i = 0; i < allListItems.length; i++) {
                if (allListItems[i].textContent === userInput) {
                        allListItems[i].remove();
                }
        }

}