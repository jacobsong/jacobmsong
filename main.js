document.addEventListener("DOMContentLoaded", function() {
  const sideNav = document.querySelector(".sidenav");
  M.Sidenav.init(sideNav, {});
});

function showPage(elem, selectedPage) {
  const pages = ["aboutme", "resume", "portfolio", "contact"];
  for (let page of pages) {
    if (selectedPage === page) {
      document.getElementById(page).style.display = "block";
    } else {
      document.getElementById(page).style.display = "none";
    }
  }
  elem.parentElement.classList.add("active");
}
