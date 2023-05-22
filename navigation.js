navigationBetweenWindows();

function navigationBetweenWindows() {
   // USERS
   const usersNav = document.createElement("a");
   usersNav.innerHTML = "<li>USERS</li>";
   usersNav.href = "/users.html";

   // POSTS
   const postsNav = document.createElement("a");
   postsNav.innerHTML = "<li>POSTS</li>";
   postsNav.href = "/posts.html";

   // prepend to body
   document.body.prepend(usersNav, postsNav);
}
