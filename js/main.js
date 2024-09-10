// sidebar menu toggle
const sidebar = document.getElementById("sidebar-open");
const collapsedSidebar = document.getElementById("sidebar-collapsed");
// const openSidebarIcon = document.getElementById("sidebar-collapsed-icon");
// const collapseSidebarIcon = document.getElementById("sidebar-open-icon");
function collapseSidebar() {
  sidebar.classList.add("hide");
  collapsedSidebar.classList.remove("hide");
}

function openSidebar() {
  sidebar.classList.remove("hide");
  collapsedSidebar.classList.add("hide");
}
