var author = document.getElementById("author");
var bloglist = document.getElementById("dangminhhoang")
function showList(){

    if(bloglist.className == 'blog-list'){bloglist.className = 'blog-list show dropdown_menu-1'}
    else{bloglist.className = 'blog-list'}     
}

author.addEventListener("click", function(){showList();}) 
