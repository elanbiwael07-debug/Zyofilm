const popingButton = document.querySelectorAll('.PopIt')
const closePopMenu = document.querySelector('#closePopUp')
const popMenu = document.querySelector('#popUp')
const popBg = document.querySelector('#popBG')

for (let i = 0; i < popingButton.length; i++) {
    popingButton[i].addEventListener('click', popmenu)
}

//// New /////
function popmenu() {
    popMenu.classList.remove('none')
    popMenu.classList.add('popUpMenu')

    popBg.classList.remove('none')
    popBg.classList.add('popUpBG')
}

closePopMenu.addEventListener('click', () => {
    popMenu.classList.add('menuClosing')
    popBg.classList.add('bgClosing')
    setTimeout(() => {
        popMenu.classList.add('none')
        popMenu.classList.remove('menuClosing')
        popBg.classList.add('none')
        popBg.classList.remove('bgClosing')
    },  300);
})

popBg.addEventListener('click', () => {
    popMenu.classList.add('menuClosing')
    popBg.classList.add('bgClosing')
    setTimeout(() => {
        popMenu.classList.add('none')
        popMenu.classList.remove('menuClosing')
        popBg.classList.add('none')
        popBg.classList.remove('bgClosing')
    },  300);
})

popMenu.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevents the event from reaching outerDiv

});

// Video Playing //

const vidBtn = document.querySelector('#vidBtn')
const closePopVideo = document.querySelector('#closeVideo')
const popVideo = document.querySelector('#popVideo')

vidBtn.addEventListener('click', () => {
    popVideo.classList.remove('none')
    popVideo.classList.add('exicteVideo')

    popBg.classList.remove('none')
    popBg.classList.add('popUpBG')

    closeVideo.classList.remove('none')
    closeVideo.classList.add('exicteVideoIcon')

    popVideo.currentTime = 0;
    popVideo.play();
    popVideo.muted = false
})

closeVideo.addEventListener('click', () => {
    popVideo.classList.add('videoClosing')
    popBg.classList.add('bgClosing')
    closeVideo.classList.add('bgClosing')
    popVideo.pause();
    popVideo.muted = true;
    setTimeout(() => {
        popVideo.classList.add('none')
        popVideo.classList.remove('videoClosing')
        popBg.classList.add('none')
        closeVideo.classList.add('none')
        popBg.classList.remove('bgClosing')
        closeVideo.classList.remove('bgClosing')
    },  300);
})

popBg.addEventListener('click', () => {
    popVideo.classList.add('videoClosing')
    popBg.classList.add('bgClosing')
    closeVideo.classList.add('bgClosing')
    popVideo.pause();
    popVideo.muted = true;
    setTimeout(() => {
        popVideo.classList.add('none')
        popVideo.classList.remove('videoClosing')
        popBg.classList.add('none')
        closeVideo.classList.add('none')
        popBg.classList.remove('bgClosing')
        closeVideo.classList.remove('bgClosing')
    },  300);
})

popVideo.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevents the event from reaching outerDiv

});