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

  function itemCount(){
    let newh2 = document.createElement('h2');
    // newh2.innerHTML = "you have " + list[0].children.length  + " items in your shopping cart";
    document.getElementsByTagName('h1')[0].after(newh2);
    newh2.setAttribute("id", 'title');
    let modified = updatedItemsOnList();
    document.getElementById('title').innerHTML = modified;
  }

  function updatedItemsOnList(){
    let update = document.getElementById('list');
    return "you have " + update.children.length  + " items in your shopping cart";
  }

  function updatedItemCount(){
    let updated = updatedItemsOnList();
    let string = document.getElementById('title');
    string.innerHTML = updated;
  }
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
  function addItemsExistingList(event){
    let userInput = document.getElementById('item-text').value;
    // console.log(userInput);
    let textVal = document.createElement('li');
    textVal.innerHTML = userInput;
    document.getElementById('list').appendChild(textVal);
    removeItemsExistingList(textVal);
    updatedItemCount();
  }
  function removeItemsExistingList(appendElement){
    let removebutton = document.createElement('button');
    removebutton.setAttribute("id", 'remove button');
    removebutton.innerHTML = "remove item";
    appendElement.appendChild(removebutton);

    removebutton.onclick = removeItem;
  }
    // add remove button to existing list
    function addingButtonToList(){
      let list = document.getElementById('list');
      for(let i=0; i < list.children.length; i++){
        removeItemsExistingList(list.children[i]);
      }
    }
  function removeItem() {
    this.parentNode.remove(this);
    updatedItemCount();
  }

