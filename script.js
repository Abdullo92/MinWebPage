//=================min project 1 show menu burger==================//
const btnOpne = document.querySelector('#btn_opne');
const nav = document.querySelector('#nav');

btnOpne.addEventListener('click', () => {
        nav.classList.toggle('active')
});

//=================== min project 2 show News =======================//
const btnNoti = document.querySelector('#news');
const ulMenu = document.querySelector('#ul-menu');

btnNoti.addEventListener('click', () => {
    createNews();
})
function createNews() {
     const textNoti = document.createElement('div');
     textNoti.classList.add('news')
     textNoti.innerText = 'HELLO! We are sorry! This page is not complete now...'
     ulMenu.appendChild(textNoti);
     
     setTimeout(() => {
        textNoti.remove();
     },3000)
};

// ================== min project 3 show Attention =====================// 
const textAtten = "Hi there!  Congratulation🙌   This page will start work as soon as possible...";
let index = 0;
function textCongratulation() {
     const atten = document.querySelector('.attention');
     atten.innerText = textAtten.slice(0, index);
     index++

     if (index > textAtten.length) {
             index = 0;
     }
}
setInterval(textCongratulation, 100);

//==================min project 4 PopUp Registration ===========================//
const openPopup = document.querySelector('#open_popup');
const closePopup = document.querySelector('#close_popup');
const containerPopup = document.querySelector('#popup_container')

openPopup.addEventListener('click', () => {
     containerPopup.classList.add('active')
});
closePopup.addEventListener('click', () => {
     containerPopup.classList.remove('active')
})


// ================ min project 5 folling smailey =========================//

// function createSmailey() {
//         const smailey = document.createElement('div');
//         smailey.classList.add('smailey');
//         smailey.style.right = Math.random()* 100 + 'vw';
//         smailey.style.animationDuration = Math.random()* 1 + 4 + 's'; 
//         smailey.innerText = '⭐ '
//         document.body.appendChild(smailey);

//         setTimeout(() => {
//             smailey.remove();
//         },5000)
// }
// setInterval(createSmailey, 100);

// ====================== min project 6 Background Changer  Color Random======================= //

// const bgChenger = document.getElementById('bg_change_random');

// bgChenger.addEventListener('click', () => {
//       document.body.style.background = randomBg(); 
// })

// function randomBg() {
//         return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
// }

// ====================== min project 7 Background Changer  Color to Dark======================= //

const bgDark = document.querySelector('#bg_change_dark');

bgDark.addEventListener('click', () => {
       document.body.classList.toggle('dark')
});


// ============================ min project 8 Carusel container ========================== //

// const imgs = document.getElementById('imgs_conatiner');
// const img = document.querySelectorAll('#imgs_conatiner img')
// let idxC = 0;
// function nextImg() {
//         idxC++
//         if (idxC > img.length -1) {
//                 idxC = 0;
//         }
//         imgs.style.transform = `translateX(${-idxC * 250}px)`;
      
// }
// setInterval(nextImg, 2000);

// ===================== min project 9 ZOOM img transform origin ===========================//
// const zoomContainer = document.querySelector('#zoom_container');
// const zoomImg = document.querySelector('.zoom_img');

// zoomContainer.addEventListener('mousemove', (e) => {
//         const x = e.clientX - e.target.offsetLeft;
//         const y = e.clientY - e.target.offsetTop

//         zoomImg.style.tarnsformOrigin = `${x}px ${y}px`
//         zoomImg.style.tarnsform = 'scale(2)';
// });
