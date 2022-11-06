/* list-showing function */
var AllAuthors = document.querySelectorAll(".author");
var bloglist = document.getElementById("dangminhhoang");
function showList(x){

    if(x.className == 'blog-list'){x.className = 'blog-list show dropdown_menu-1'}
    else{x.className = 'blog-list'}     
}  

for (const author of AllAuthors){
    author.addEventListener('click', showList(bloglist))
}
