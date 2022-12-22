function randomRange(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

class Gift {
  constructor() {
    this.isOpen = false;
    this.create();
  }

  create() {
    this.giftElement = document.createElement("div");
    this.top = 0;

    this.giftElement.style.position = "absolute";
    this.giftElement.style.top = this.top + "px";
    this.giftElement.style.left = randomRange(0, BG_WIDTH - GIFT_WIDTH) + "px";

    this.giftElement.style.width = GIFT_WIDTH + "px";
    this.giftElement.style.height = GIFT_HEIGHT + "px";
    this.giftElement.style.background = 'url("./images/gift.png") no-repeat';

    bg.appendChild(this.giftElement);
  }

  move(santa) {
    this.top++;

    if (this.top > BG_HEIGHT - (SANTA_HEIGHT + 1.5 * GIFT_HEIGHT)) {
      const giftLeft = Number(this.giftElement.style.left.split("px")[0]);

      if (
        santa.left < giftLeft + GIFT_WIDTH &&
        santa.left + SANTA_WIDTH > giftLeft
      ) {
        this.isOpen = true;
        this.open();
        santa.giftCount++;
        const giftCount = document.getElementById("giftCount");
        giftCount.innerText = `${santa.giftCount}`;
        const isGameEnded = santa.giftCount >= santa.missionGift;

        if (isGameEnded) {
          setTimeout(() => {
            alert("선물을 모두 받았어요!");
            location.reload();
          }, 200);
        }
        return;
      }

      if (this.top > BG_HEIGHT - GIFT_HEIGHT) {
        this.isOpen = true;
        this.remove();
        return;
      }
    }

    this.giftElement.style.top = this.top + "px";
  }

  remove() {
    this.giftElement.remove();
  }

  open() {
    this.giftElement.style.backgroundPosition = "-45px";

    setTimeout(() => {
      this.remove();
    }, 3000);
  }
}
