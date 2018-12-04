'use strict';

window.onload =function(){
  let list = document.getElementsByTagName('ul');
  let message = "This list has: " + list[0].children.length + " items";
  // alert(message);
  itemCount();
  updatedItemCount();
  addingButtonToList();
  createNewAddField();
};

  //  setting the new line of h2

  function itemCount(){
    let newh2 = document.createElement('h2');
    document.getElementsByTagName('h1')[0].after(newh2);
    newh2.setAttribute("id", 'title');
    let modified = updatedItemsOnList();
    document.getElementById('title').innerHTML = modified;
  }

  // making h2 say you have "however many" items in your cart

  function updatedItemsOnList(){
    let update = document.getElementById('list');
    return "you have " + update.children.length  + " items in your shopping cart";
  }

  // actually setting your item count as you add and remove items

  function updatedItemCount(){
    let updated = updatedItemsOnList();
    let string = document.getElementById('title');
    string.innerHTML = updated;
  }
  
// text box to create new item and add button

  function createNewAddField(){
    let newinput = document.createElement('input');
    newinput.setAttribute("id", 'item-text');
    document.getElementsByTagName('ul')[0].after(newinput);
    let inputField = document.getElementById('item-text');
    inputField.setAttribute("placeholder", "Type to add Item");

  let newbutton = document.createElement('button');
    newbutton.setAttribute("id", 'add button');
    document.getElementById('item-text').after(newbutton);
    newbutton.innerHTML = "add item";
    newbutton.onclick = addItemsExistingList;
  }
  // adding the items to the already existing list

  function addItemsExistingList(event){
    let userInput = document.getElementById('item-text').value;
    let textVal = document.createElement('li');
    textVal.innerHTML = userInput;
    document.getElementById('list').appendChild(textVal);
    removeItemsExistingList(textVal);
    updatedItemCount();
  }
  //removing items from list with button

  function removeItemsExistingList(appendElement){
    let removebutton = document.createElement('button');
    removebutton.setAttribute("id", 'remove button');
    removebutton.innerHTML = "X";
    appendElement.appendChild(removebutton);

    removebutton.onclick = removeItem;
  }
    // add remove button to existing list
    function addingButtonToList(){
      let list = document.getElementById('list');
      for(let i=0; i<list.children.length; i++){
        removeItemsExistingList(list.children[i]);
      }
    }

    //updating list if item is removed
    
  function removeItem() {
    this.parentNode.remove(this);
    updatedItemCount();
  }

