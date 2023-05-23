navigationBetweenWindows();

function navigationBetweenWindows() {
   const headerElement = document.createElement("header");
   const navElement = document.createElement("nav");
   const ulElement = document.createElement("ul");
   ulElement.classList.add("window-elements");

   const homeObj = {"name":"HOME","link":"/"};
   const usersObj = {"name":"USERS","link":"/users.html"};
   const postsObj = {"name":"POSTS","link":"/posts.html"};
   const albumsObj = {"name":"ALBUMS","link":"/albums.html"};

   const home = createNavigation(homeObj.name, homeObj.link);
   const users = createNavigation(usersObj.name, usersObj.link);
   const posts = createNavigation(postsObj.name, postsObj.link);
   const albums = createNavigation(albumsObj.name, albumsObj.link);
   
   
   headerElement.append(navElement);
   navElement.append(ulElement);
   ulElement.append(home, users, posts, albums);
   document.body.prepend(headerElement);

   // Active window
   const windowLinks = [homeObj, usersObj, postsObj, albumsObj];
   activeWindow(windowLinks);
}

function activeWindow(windowNames) {
   const activeWindow = window.document.location.pathname;
   const aElements = document.querySelectorAll("a.window-link");

   windowNames.forEach(element => {
      if (activeWindow === element.link) {
         
         aElements.forEach(elem2 => {
            if (element.name === elem2.textContent) {
               elem2.classList.add("active-link");
            }
         });
      }
   });
}

function createNavigation(name, link) {
   const navigation = document.createElement("li");
   navigation.innerHTML = `<a href="${link}" class="window-link">${name}</a>`;

   return navigation;
}