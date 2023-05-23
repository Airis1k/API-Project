navigationBetweenWindows();

function navigationBetweenWindows() {
   const ulElement = document.createElement("ul");

   const home = createNavigation("HOME", "/");
   const users = createNavigation("USERS", "/users.html");
   const posts = createNavigation("POSTS", "/posts.html");
   const albums = createNavigation("ALBUMS", "/albums.html");

   ulElement.append(home, users, posts, albums);
   document.body.prepend(ulElement);
}

function createNavigation(name, link) {
   const navigation = document.createElement("li");
   navigation.innerHTML = `<a href="${link}">${name}</a>`;

   return navigation;
}

// TODO: Pasirinkta nuoroda turi buti paryskinta; Pataisyti navigacijos stiliu