var btn = document.getElementById('btn');


var body = document.querySelector('body');




btn.addEventListener('click', get_random_color);





function get_random_color() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 16; i++) {
        document.body.style.backgroundColor = color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

