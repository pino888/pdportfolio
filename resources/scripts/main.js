let buttone1_1 = document.getElementById('butexa1-1');
let buttone1_2 = document.getElementById('butexa1-2');
let buttone2_1 = document.getElementById('butexa2-1');
let buttone2_2 = document.getElementById('butexa2-2');
let buttone3_1 = document.getElementById('butexa3-1');
let buttone3_2 = document.getElementById('butexa3-2');
let buttone4_1 = document.getElementById('butexa4-1');
let buttone4_2 = document.getElementById('butexa4-2');
let examplebox1 = document.getElementById('example1');
let examplebox2 = document.getElementById('example2');
let examplebox3 = document.getElementById('example3');
let examplebox4 = document.getElementById('example4');

const hoverbutton1 = () => {
    buttone1_1.style.display = 'block';
    buttone1_2.style.display = 'block';
}

const nohoverbutton1 = () => {
    buttone1_1.style.display = 'none';
    buttone1_2.style.display = 'none';
}

const hoverbutton2 = () => {
    buttone2_1.style.display = 'block';
    buttone2_2.style.display = 'block';
}

const nohoverbutton2 = () => {
    buttone2_1.style.display = 'none';
    buttone2_2.style.display = 'none';
}

const hoverbutton3 = () => {
    buttone3_1.style.display = 'block';
    buttone3_2.style.display = 'block';
}

const nohoverbutton3 = () => {
    buttone3_1.style.display = 'none';
    buttone3_2.style.display = 'none';
}

const hoverbutton4 = () => {
    buttone4_1.style.display = 'block';
    buttone4_2.style.display = 'block';
}

const nohoverbutton4 = () => {
    buttone4_1.style.display = 'none';
    buttone4_2.style.display = 'none';
}

examplebox1.onmouseover = hoverbutton1;
examplebox1.onmouseout = nohoverbutton1;
examplebox2.onmouseover = hoverbutton2;
examplebox2.onmouseout = nohoverbutton2;
examplebox3.onmouseover = hoverbutton3;
examplebox3.onmouseout = nohoverbutton3;
examplebox4.onmouseover = hoverbutton4;
examplebox4.onmouseout = nohoverbutton4;


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