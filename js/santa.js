class Santa {
  constructor() {
    this.santaElement = document.getElementById("santa");
    this.left = Number(getComputedStyle(this.santaElement).left.split("px")[0]);

    //산타 스피드
    this.speed = 5;
    this.isRightKey = false;
    this.isLeftKey = false;

    //산타가 받아야하는 선물의 개수
    this.missionGift = 6;
    this.giftCount = 0;
  }

  move(direction) {
    switch (direction) {
      case "right":
        this.setLeft(-this.speed);
        break;
      case "left":
        this.setLeft(this.speed);
        break;
      default:
    }
  }

  // stop() { }

  setLeft(left) {
    const newleft = this.left - left;

    if (newleft > BG_WIDTH - SANTA_WIDTH || newleft < 0) return;

    this.left = newleft;
    this.santaElement.style.left = this.left + "px";
  }
}
