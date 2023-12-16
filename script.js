let styleType = {
    menuHeigthClosed: "5%",
    menuHeigthOpen: "15%",
    marginMenuClosed: "-8rem",
    marginMenuOpen: "2rem",
    pageTopClosed: "7%",
    pageTopOpen: "17%",
};
let pages = {
    pageIndexer: [
        {
            name: "Home",
            path: "./pages/home.html"
        },
        {
            name: "About me",
            path: "./pages/about-me.html"
        }
    ],
    getPage: async function (name) {
        let path = "./pages/default.html";
        await this.pageIndexer.forEach((value, index) => {
            if(name === value.name)
                path = value.path;
        });
        return path;
    }
}
let menu = document.getElementById('menu');
let  ul = menu.lastElementChild;
let li = ul.children;
let page = document.getElementById('page');

for(let indexer = 0; indexer < li.length; indexer++) {
    li[indexer].addEventListener('click', () => {
        for(let i = 0; i < li.length; i++) {
            li[i].classList.remove('selected');
        }
        openURL(li[indexer].textContent);
        li[indexer].classList.add('selected');
    });
}
document.getElementById("menu-checker").addEventListener('click', () => {
    if(menu.style.height === styleType.menuHeigthClosed) {
        menu.style.height = styleType.menuHeigthOpen;
    }
    else {
        menu.style.height = styleType.menuHeigthClosed;
    }
    if(ul.style.marginTop === styleType.marginMenuClosed) {
        ul.style.marginTop = styleType.marginMenuOpen;
    }
    else {
        ul.style.marginTop = styleType.marginMenuClosed;
    }
    if(page.style.top === styleType.pageTopClosed) {
        page.style.top = styleType.pageTopOpen;
    }
    else {
        page.style.top = styleType.pageTopClosed;
    }
});
li[0].click();

async function openURL(content) {
    const path = await pages.getPage(content);
    fetch(path)
        .then(response => response.text())
        .then(data => {
            page.innerHTML = data;
        });
}