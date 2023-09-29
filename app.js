"use strict";
const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
const currentDate = new Date();
const currentHour = currentDate.getHours();

// display the side bar when the hamburger icon is clicked
const displayMenu = () => {
  sideMenu.style.display = "block";
};

// hides the side bar when the hamburger icon is clicked
const hideMenu = () => {
  sideMenu.style.display = "none";
};
menuBtn.addEventListener("click", displayMenu);
closeBtn.addEventListener("click", hideMenu);

// change dashboard theme to light/dark mode
const changeTheme = () => {
  document.body.classList.toggle("dark-theme-variables");
  themeToggler.querySelector("span").classList.toggle("active");
};
themeToggler.addEventListener("click", changeTheme);
if (currentHour > 18) {
  changeTheme()
}


// fill in recent orders with data generated from the order.js file
orders.forEach((order) => {
  const tr = document.createElement("tr");

  const trContent = `
                      <td>${order.productName}</td>
                      <td>${order.productNumber}</td>
                      <td>${order.paymentStatus}</td>
                      <td class="${
                        order.shippingStatus.toLocaleLowerCase() === "declined"
                          ? "danger"
                          : order.shippingStatus.toLocaleLowerCase() ===
                            "pending"
                          ? "warning"
                          : order.shippingStatus.toLocaleLowerCase() ===
                            "approved"
                          ? "success"
                          : "primary-purple"
                      }">${order.shippingStatus}</td>
                      <td class="primary-purple">Details</td>`;

  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});
