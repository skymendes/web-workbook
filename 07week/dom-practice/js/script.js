'use strict';

window.onload =function(){
  let list = document.getElementsByTagName('ul');
  let message = "This list has: " + list[0].children.length + " items";
  // alert(message);

  let newh2 = document.createElement('h2');
  newh2.innerHTML = "you have " + list[0].children.length  + " items in your shopping cart";
  document.getElementsByTagName('h1')[0].after(newh2);

  // function createNewAddField(){
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

  function addItemsExistingList(event){
    let userInput = document.getElementById('item-text').value;
    // console.log(userInput);
    let textVal = document.createElement('li');
    textVal.innerHTML = userInput;
    document.getElementById('list').appendChild(textVal);
  }

};
