/* list-showing function */
var AllContents = document.querySelectorAll(".content");
function showList(x){

    if(x.className == 'blog-list'){x.className = 'blog-list show dropdown_menu-1'}
    else{x.className = 'blog-list'}     
}  
function apply_to_all_list(){
    AllContents.forEach((content) => {
        div = content.querySelector('div');
        ul = content.querySelector('ul');
        div.addEventListener("click",function(){showList(ul);});
    })
}

apply_to_all_list();
