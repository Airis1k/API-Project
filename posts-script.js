init();

function init() {
   // getPostCommentsCount();
   getUserPosts();
}

async function getPostCommentsCount() {
   const response = await fetch("https://jsonplaceholder.typicode.com/posts?_embed=comments");
   const data = await response.json();

   data.forEach(element => {
      console.log(element.comments.length);
   });
}

async function getUserPosts() {
   // Select main div element
   const mainDiv = document.getElementById("posts");

   // fetch posts API
   const response = await fetch("https://jsonplaceholder.typicode.com/users?_embed=posts");
   const data = await response.json();

   data.forEach(element => {

      // create div for single user
      const divElement = document.createElement("div");
      divElement.classList.add("single-user");
      // display user name in h2 elem
      const h2Element = document.createElement("h2");
      // create navigation to user.html
      const aNavElement = document.createElement("a");
      aNavElement.textContent = element.name;
      aNavElement.href = "/user.html";
      // Insert a element to h2
      h2Element.append(aNavElement);
      // Create ul element
      const ulElement = document.createElement("ul");

      const userPost = element.posts;


      userPost.forEach((element) => {

         // Create li element for single post
         const liElement = document.createElement("li");
         // Create a elem
         const aElement = document.createElement("a");
         // display post titles
         aElement.textContent = element.title;
         aElement.href = "/post.html";

         // Insert a elem to li
         liElement.append(aElement);
         // Insert li elem to ul
         ulElement.append(liElement);
      });


      // Insert h2 & ul elements to div
      divElement.append(h2Element, ulElement);
      // Insert div element to mainDiv
      mainDiv.append(divElement);
   })
}