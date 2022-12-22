const start = document.getElementById('start')
const player = new Santa();
let gifts = [];

const count = document.getElementById('count')
const gameTitle = document.getElementById('gameTitle')
const santaName = document.getElementById('santaName')
count.innerText = `${player.missionGift}개의 선물을 받아야해요! 🎄`
gameTitle.innerText = `${santaName.innerText || '산타'}가 주는 선물! 💕`


function init() {
  start.classList.add('hidden')
   
  document.addEventListener(
    'keydown',
    function (e) {
      checkKey(e, true);
    },
    false
  );

  document.addEventListener(
    'keyup',
    function (e) {
      checkKey(e, false);
    },
    false
  );

  setInterval(function () {
    initGift();
  }, 2000);
  
  window.requestAnimationFrame(updateAllgifts);
}

function checkKey(e, isMoving) {
  if (isMoving) {
    const keyID = e.keyCode || e.which;

    switch (keyID) {
      case 39:
        player.move('right');
        e.preventDefault();
        break;
      case 37:
        player.move('left');
        e.preventDefault();
        break;
    }
  } else {
    player.stop();
  }
}

function initGift() {
  const gift = new Gift();
  gifts.push(gift);
}

function updateAllgifts() {
  gifts.forEach((el, idx) => {
    if (!el.isOpen) {
      el.move(player);
    } else {
      gifts.splice(idx, 1);
    }
  });

  window.requestAnimationFrame(updateAllgifts);
}

start.addEventListener('click', init);
