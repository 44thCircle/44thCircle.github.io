function getQuote(target) {
    var titles = [
        'and those who were seen dancing were thought to be insane by those who could not hear the music.',
        'to live is to suffer, to survive is to find some meaning in the suffering.',
        'convictions are more dangerous enemies of truth than lies.',
        'reality is that which, when you stop believing in it, doesn\'t go away.'
    ];

    var i = (Math.random() * titles.length) | 0;
    target.innerText = titles[i];
}

function getRandomString () {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.?!@#$%^&*()_-+=[]{}|\"<>,/`~";

    for (var i = 0; i < 20; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

window.onload = (function () {
    var target = document.getElementById('headerText');
    getQuote(target);
    
    var target = document.getElementById('bodyText');
    target.innerText = getRandomString();
})