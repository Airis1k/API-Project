navigationBetweenWindows();

function navigationBetweenWindows() {
   const home = createNavigation("HOME", "/");
   const users = createNavigation("USERS", "/users.html");
   const posts = createNavigation("POSTS", "/posts.html");
   const albums = createNavigation("ALBUMS", "/albums.html");

   document.body.prepend(home, users, posts, albums);
}

function createNavigation(name, link) {
   const navigation = document.createElement("a");
   navigation.innerHTML = `<li>${name}</li>`;
   navigation.href = link;

   return navigation;
}

// TODO: Pasirinkta nuoroda turi buti paryskinta