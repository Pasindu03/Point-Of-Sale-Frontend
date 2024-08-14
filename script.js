@(document).ready(function () {
    const loadingScreen = document.querySelector('.loading_page');
    loadingScreen.style.display = 'block';

    var counter = 0;
    var c = 0;
    var i = setInterval(function () {
        $(".loading_page>.counter>h1").html(c + "%");
        $(".loading_page>.counter>hr").html("width", c + "%");
        counter++;
        c++;

        /*if (counter == 102) {
            clearInterval(i);
            const loadingSc
        }*/
    }, 1);
})