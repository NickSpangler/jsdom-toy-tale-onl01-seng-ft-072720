let addToy = false;
const toyCollection = document.querySelector('#toy-collection')

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

function createCard(toy, object) {
  // const card = document.createElement('div');
  // card.className = "card";
  // const toyName = document.createElement('h2');
  // const toyNameText = document.createTextNode(`${object[toy]['name']}`);
  // toyName.appendChild(toyNameText);
  // card.appendChild(toyName);
  // const toyAvatar = document.createElement('img');
  // toyAvatar.src = `${object[toy]['image']}`;
  // card.appendChild(toyAvatar)
  toyCollection.innerHTML += `<div class="card">
  <h2>${object[toy]['name']}</h2>
  <img src=${object[toy]['image']} class="toy-avatar" />
  <p>4 Likes </p>
  <button class="like-btn">Like <3</button>
</div>`
}

function getToys() {
  return fetch('http://localhost:3000/toys')
  .then(resp => resp.json())
  .then(obj => {
    for(const toy in obj) {
      createCard(toy, obj);
    }
  })
}

getToys();
