document.getElementById('menu-btn').addEventListener('click', function (e) {
    e.preventDefault();
    $('.slider').toggleClass('collapsed');
    $('.main').toggleClass('expanded');
});
