window.onscroll = function () {
    scrollFunction();
};

window.onload = function(){
    genterateContentList();
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("top-button").style.display = "block";
    } else {
        document.getElementById("top-button").style.display = "none";
    }
}

// 点击按钮，返回顶部
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function genterateContentList() {
    let pTitle = document.getElementsByClassName("paragraph-title");
    let contentTitle = document.getElementById("content-list");
    for (var i = 0; i < pTitle.length; i++){
        let link = document.createElement('a')
        let list = document.createElement('li');
        list.id = "list-item" + i;
        // 设置锚点，点击目录跳转到相应文章
        pTitle[i].id = "para" + i;
        link.href = "#" + pTitle[i].id;

        link.innerText = pTitle[i].innerText;
        list.appendChild(link);
        contentTitle.appendChild(list);
    }
}