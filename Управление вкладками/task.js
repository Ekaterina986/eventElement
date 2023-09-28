const listTabs = document.getElementsByClassName('tab');
let i = 0;
for (tab of listTabs) {
    const index = i;
    i++;
    tab.onclick = (e) => {
        document.getElementsByClassName('tab_active')[0].classList.remove('tab_active');
        e.currentTarget.classList.add('tab_active');
        document.getElementsByClassName('tab__content_active')[0].classList.remove('tab__content_active');
        document.getElementsByClassName('tab__content')[index].classList.add('tab__content_active');
    }
}