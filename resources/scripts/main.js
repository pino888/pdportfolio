let buttone1 = document.getElementById('butexa1-1');
let buttone2 = document.getElementById('butexa1-2');
let examplebox1 = document.getElementById('example1');

const hoverbutton1 = () => {
    buttone1.style.display = 'block';
    buttone2.style.display = 'block';
}

const nohoverbutton1 = () => {
    buttone1.style.display = 'none';
    buttone2.style.display = 'none';
}

examplebox1.onmouseover = hoverbutton1;
examplebox1.onmouseout = nohoverbutton1;


let avatartext = document.getElementById('avatarspeak');
let avatarpic = document.getElementById('avatar');
let miniavatartext = document.getElementById('miniavatarspeak');
let miniavapic = document.getElementById('miniavatar');
let clickcount = 0;

const clickavatar = () => {
    if (clickcount === 0) {
        avatartext.innerHTML = 'Ouch...';
        clickcount++;
    }
    else if (clickcount === 1) {
        avatartext.innerHTML = 'Hey!';
        clickcount++;
    }
    else if (clickcount === 2) {
        avatartext.innerHTML = 'Stop poking me!';
        clickcount++;
    }
    else if (clickcount === 3) {
        avatartext.innerHTML = 'If you do it again, I will leave.';
        clickcount++;
    }
    else if (clickcount === 4) {
        avatartext.innerHTML = 'Arrrgh...';
        avatarpic.style.display = 'none';
        miniavapic.style.display = 'inline';
        miniavatartext.style.display = 'inline';
        clickcount++;
    }
}

avatarpic.onmouseup = clickavatar;