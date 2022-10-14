function show_list() {
  document.getElementsById("dangminhhoang").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.author')) {
    var dropdowns = document.getElementsByClassName("blog-list");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}