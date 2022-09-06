"use strict";

let albums = document.getElementById('albums')

const getUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/albums");
        if (!response.ok) {
            throw new Error("Error: not found")
        }
        const date = await response.json();
        date.map(({title}) => {
            let li = document.createElement('li');
            li.append(title);
            li.classList.add('album_title');
            albums.append(li)
        });
    } catch (err) {
        console.error(err.message);
    }
};
getUsers();