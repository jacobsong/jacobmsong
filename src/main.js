document.addEventListener("DOMContentLoaded", function() {
  const sideNav = document.querySelector(".sidenav");
  const collapsible = document.querySelector(".collapsible.expandable");

  M.Sidenav.init(sideNav);
  M.Collapsible.init(collapsible, { accordion: false });

  showPage("aboutmebtn", "aboutme");
});

function showPage(selectedElem, selectedPage) {
  const pages = ["aboutme", "resume", "portfolio", "contact"];
  const elems = ["aboutmebtn", "resumebtn", "portfoliobtn", "contactbtn"];

  for (let page of pages) {
    if (selectedPage === page) {
      document.getElementById(page).style.display = "block";
    } else {
      document.getElementById(page).style.display = "none";
    }
  }

  for (let elem of elems) {
    if (selectedElem === elem) {
      document.getElementById(elem).classList.add("sidenav-clicked");
    } else {
      document.getElementById(elem).classList.remove("sidenav-clicked");
    }
  }
  window.scrollTo(0, 0);
}
