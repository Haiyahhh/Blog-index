
function remote() {
    const index_container = document.querySelector(".bi-container");
    if (index_container != null){
        create_bi();
    }
}
remote();
function create_bi() {
    const index_container = document.querySelector(".bi-container");
    
    const hForIndex = document.createElement("h2");
    hForIndex.classList.add("index-heading");
    hForIndex.innerText = "Tất Cả Blog";

    index_container.appendChild(hForIndex);
    
    const mainList = document.createElement("ul");
    mainList.classList.add("table-of-blogs");
    index_container.appendChild(mainList);

    
    const authorList = [
        "Đặng Minh Hoàng", 
        "Giang Quang Thắng", 
    ];
    const authorLinkList = [
        "https://www.facebook.com/profile.php?id=100048950438793", /* Đặng Minh Hoàng */
        "https://www.facebook.com/profile.php?id=100082225691260", /* Giang Quang Thắng */
    ];

    const author_blogs = [
        /* [link blog, tên blog], */
            /* Đặng Minh Hoàng */
        [
            ["https://cybtechnophileblog.blogspot.com/2022/10/blog-post_5.html","nháp1"],
            ["https://cybtechnophileblog.blogspot.com/2022/10/blog-post_5.html","nháp1"],
            ["https://cybtechnophileblog.blogspot.com/2022/10/blog-post_5.html","nháp1"],
            ["https://cybtechnophileblog.blogspot.com/2022/10/blog-post_5.html","nháp1"],
        ],
            /* Giang Quang Thắng */
        [],
    ]

    for (let i = 0; i< authorList.length; ++i){
        const content_list  = document.createElement("li");
        content_list.classList.add("content");
        mainList.appendChild(content_list);

        const author_name_div = document.createElement("div");
        author_name_div.classList.add("author");

        const blog_ul = document.createElement("ul");
        blog_ul.classList.add("blog-list");

        content_list.appendChild(author_name_div);
        content_list.appendChild(blog_ul);

        const author_name_span = document.createElement("span");
        author_name_span.classList.add("author-name");
        author_name_span.innerText = authorList[i];
        author_name_div.appendChild(author_name_span);

        const author_profile_link = document.createElement("a");
        author_profile_link.classList.add("profile")
        author_profile_link.setAttribute("href", authorLinkList[i]); 
        author_name_div.appendChild(author_profile_link);

        const profile_span = document.createElement("span");
        profile_span.innerText = "Xem Profile";
        author_profile_link.appendChild(profile_span);
        
        for (let j=0; j < author_blogs[i].length; ++j){
            const blog_li = document.createElement("li");
            blog_li.classList.add("blog");
            blog_ul.appendChild(blog_li);

            const blog_link = document.createElement("a");
            blog_link.setAttribute("href", author_blogs[i][j][0] );
            blog_link.innerText = author_blogs[i][j][1];
            blog_li.appendChild(blog_link);
        }
    }

}

function slide_down_animation(){
    const AllAuthors = document.getElementsByClassName("author");
    for (let i = 0; i < AllAuthors.length; ++i) {
        AllAuthors[i].addEventListener("click", function() {
            let panel = AllAuthors[i].nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } 
            else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

}
slide_down_animation();
