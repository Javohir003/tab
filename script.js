let tabs = document.querySelectorAll('.tab-btn'),
    all_content = document.querySelectorAll('.content');


tabs.forEach((tab, index)=> {
    tab.addEventListener('click', (e)=> {
        tabs.forEach((tab_item)=> tab_item.classList.remove('active'))
        tab.classList.add('active')



        all_content.forEach((content)=> content.classList.remove('active'))
        all_content[index].classList.add('active')

        let line = document.querySelector('.line');
        line.style.width = e.target.offsetWidth + 'px';
        line.style.left = e.target.offsetLeft + 'px'


    })
})