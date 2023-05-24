init();

function init() {
   getUserAllAlbums();
}

async function getUserAllAlbums() {
   // Select mainDiv element
   const mainDiv = document.getElementById("user-albums");
   // div elem for user album
   const divElement = document.createElement("div");
   // div elem for photos
   const photosDiv = document.createElement("div");

   const albumId = 1;
   // fetch albums API
   const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}?_expand=user&_embed=photos`);
   const data = await response.json();

   // h2 elem to display album title
   const h2Element = document.createElement("h2");
   h2Element.textContent = data.title;
   // div elem to display album author
   const albumAuthor = document.createElement("div");
   albumAuthor.classList.add("album-author");
   albumAuthor.innerHTML = `<b>Author:</b> ${data.user.name}`;


   divElement.append(h2Element, albumAuthor, photosDiv);
   mainDiv.append(divElement);
   console.log(data);
}