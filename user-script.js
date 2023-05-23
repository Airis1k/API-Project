init();

function init() {
   getUserData();
}

async function getUserData() {
   // Select main div elem
   const mainDiv = document.getElementById("user-info");
   // div for every single user
   const divElement = document.createElement("div");

   // Fetch user API
   const response = await fetch("https://jsonplaceholder.typicode.com/users/");
   const data = await response.json();

   // h2 elem to display user nickname
   const h2Element = document.createElement("h2");
   h2Element.textContent = data[0].username;
   // ul elem for user info
   const ulElement = document.createElement("ul");
   // full name
   const nameElement = document.createElement("li");
   nameElement.innerHTML = `<b>Full Name:</b> ${data[0].name}`;
   // email
   const emailElement = document.createElement("li");
   emailElement.innerHTML = `<b>Email:</b> ${data[0].email}`;
   // address
   const addressElement = document.createElement("li");
   // google maps link
   const mapURL = 
   `https://www.google.com/maps/search/?api=1&query=${data[0].address.geo.lat},${data[0].address.geo.lng}`;
   addressElement.innerHTML = 
   `<b>Address:</b> <a href="${mapURL}" target="_blank">${data[0].address.city}, ${data[0].address.street} St., ${data[0].address.suite}, ZIP: ${data[0].address.zipcode}</a>`;
   // phone
   const phoneElement = document.createElement("li");
   phoneElement.innerHTML = `<b>Phone:</b> ${data[0].phone}`;
   // website
   const webElement = document.createElement("li");
   webElement.innerHTML = 
   `<b>Website:</b> <a href="https://www.google.com/" target="_blank">${data[0].website}</a>`;
   // company
   const companyElement = document.createElement("li");
   companyElement.innerHTML = `<b>Company:</b> ${data[0].company.name} CO.`;

   console.log(data[0]);

   ulElement.append(nameElement, emailElement, addressElement, phoneElement, webElement, companyElement);
   // insert h2 elem to div. Then insert div to mainDiv elem
   divElement.append(h2Element, ulElement);
   mainDiv.append(divElement);
}