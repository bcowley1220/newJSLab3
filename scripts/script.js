"use strict";

class AddressBook {
  constructor() {
    this.contacts = [];
  }
  add(name, email, phone, relation) {
    let newContact = new Contact(name, email, phone, relation);
    this.contacts.push(newContact);
  }
  deleteAt(index) {
    this.contacts.splice(index, 1);
  }
  display() {
    document.querySelector(".infoContainer").innerHTML = "";
    this.contacts.forEach((contact, index) => {
      const div = document.createElement("div");
      div.classList.add("card");
      div.innerHTML = `
      <p>Name: ${contact.name}</p>
      <p>Email: ${contact.email}</p>
      <p>Phone: ${contact.phone}</p>
      <p>Relation: ${contact.relation}</p>
      <button index=${index} class="deleteButton"><i class="fas fa-trash"></i></button>
      `;
      document.querySelector(".infoContainer").append(div);
    });
  }
}

class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

function handleSubmit(e) {
  e.preventDefault();
  console.log("I have been pressed");
  newContacts.add(
    event.target[0].value,
    event.target[1].value,
    event.target[2].value,
    event.target[3].value
  );
  // newContacts.add();
  newContacts.display();
  form.reset();
}
function deleteContact(e) {
  console.log("this works");
  if (e.target.classList.contains("fa-trash")) {
    let index = e.target.parentNode.getAttribute("index");
    console.log(index);
    newContacts.deleteAt(index);
    newContacts.display();
    form.reset();
  }
}
let form = document.querySelector("form");
let newContacts = new AddressBook();
document.querySelector("form").addEventListener("submit", handleSubmit);
document
  .querySelector(".infoContainer")
  .addEventListener("click", deleteContact);
