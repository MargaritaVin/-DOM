"use strict";

let albums = document.getElementById('albums');

const getUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/albums");
        if (!response.ok) {
            throw new Error("Error: not found")
        }
        const data = await response.json();
        console.log(data)
        data.map(({title}) => {
            let li = document.createElement('li');
            let button = document.createElement('button');
            button.innerHTML = "Delete";
            li.append(title, button);
            li.classList.add('album_title');
            albums.append(li)
        });
    } catch (err) {
        console.error(err.message);
    }
};
getUsers();

albums.addEventListener("click", (event) => {
    const isDeleteButton = event.target.nodeName === "BUTTON";
    if (isDeleteButton) {
        const albumTitleBlock = event.target.closest(".album_title");
        albumTitleBlock.remove();
    }
});