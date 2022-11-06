/* list-showing function */
var AllAuthor = document.getElementsByClassName("author");
var bloglist = document.getElementById("dangminhhoang");
function showList(x){

    if(x.className == 'blog-list'){x.className = 'blog-list show dropdown_menu-1'}
    else{x.className = 'blog-list'}     
}  

AllAuthor.forEach (a => {a.addEventListener("click", showList(bloglist))})
