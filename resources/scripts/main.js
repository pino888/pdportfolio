let example = document.querySelectorAll('.example');


example.forEach(item => {
    item.addEventListener("mouseenter", event => {
        item.children[1].style.display = 'flex';
        item.children[2].style.display = 'flex';
        item.style.transform = 'translate(3px, 3px)';
        item.style.boxShadow = 'none';
    })
})
example.forEach(item => {
    item.addEventListener("mouseleave", event => {
        item.children[1].style.display = 'none';
        item.children[2].style.display = 'none';
        item.style.transform = 'translate(0px, 0px)';
        item.style.boxShadow = '5px 5px 10px';
    })
})


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

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }