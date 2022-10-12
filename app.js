const alert = document.querySelector(".alert_msg");
const form = document.querySelector(".grocery_form");
const groceryItem = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit_btn");
const container = document.querySelector(".grocery_container");
const groceryList = document.querySelector(".grocery_list");
const clearBtn = document.querySelector(".clear_btn");

// Edit Option
let editElement;
let editFlag = false;
let editID = "";

// Form Submissions & Event Listeners 
form.addEventListener("submit", addGroceryItem)

// Clear Items
clearBtn.addEventListener("click", clearItems)

// Add Item to Grocery List
function addGroceryItem(e) {
    e.preventDefault();
    const groceryValue = grocery.value
    const id = new Date().getTime().toString();
    if (groceryValue && !editFlag) {
        const element = document.createElement("article");
        // Add Class
        element.classList.add("grocery_item");
        // Add ID
        const attr = document.createAttribute("data_id");
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = ` <p class="title">${groceryValue}</p>
        <div class="btn_container">
            <button type="button" class="edit_btn">
                <i class="fas fa-edit"></i>
            </button>
            <button type="button" class="delete_btn">
                <i class="fas fa-trash"></i>
            </button>
        </div>`;
        // Append Child
        groceryList.appendChild(element);
        // Display Alert
        displayAlert("Item added to grocery list", "succes");
        // Display Container
        container.classList.add("show_container");
        // Add to Local Storage
        addToLocalStorage(id, groceryValue);
        // Return to Default
        returnToDefault()
    } else if (groceryValue && editFlag) {
        console.log("damn");
    } else {
        displayAlert("Please enter value", "danger");
    }
}

// Display Alert Message
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert_msg-${action}`);

    // Remove Alert
    setTimeout(function(){
        alert.textContent = "";
        alert.classList.remove(`alert_msg-${action}`);
    }, 1000);
}

// Clear Items
function clearItems() {
    const items = document.querySelectorAll(".grocery_item")
    if (items.length > 0) {
        items.forEach(function(item) {
            groceryList.removeChild(item)
        })
    }
    container.classList.remove("show_container")
    displayAlert('Empty List', "danger")
}

// Return to Default
function returnToDefault() {
    groceryItem.value = "";
    editFlag = false;
    editID = "";
    submitBtn.textContent = "Submit";
}

// Local Storage
function addToLocalStorage(id, groceryValue) {
    console.log("Added to local storage");
}