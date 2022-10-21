/* list-showing funcion */
var author = document.getElementById("author");
var bloglist = document.getElementById("dangminhhoang");
function showList(){

    if(bloglist.className == 'blog-list'){bloglist.className = 'blog-list show dropdown_menu-1'}
    else{bloglist.className = 'blog-list'}     
}  
/*-------------*/



/* create blog index */
author.addEventListener("click", function(){showList();}) 


const index_container = document.querySelector(".bi-container");
            
function create_bi (){
    const hForIndex = document.createElement("h2");
    hForIndex.classList.add("index-heading");
    hForIndex.innerText = "Tất Cả Blog";

    index_container.appendChild(hForIndex);

    const ul1 = document.createElement("ul");
    ul1.classList.add("table-of-blogs");

    index_container.appendChild(ul1);

    /* I want to create new li in ul1 based on the number of author, any new author will add a new li */
    const li_content = document.createElement("li");
    li_content.classList.appendChild("content");

    ul1.appendChild(li_content);
}
create_bi();

/*-----------*/
