class ScoreBoard {
  constructor() {
    this.tracker = {
      x: 0,
      o: 0
    }
  }

  addWin(player) {
    this.tracker[player] += 1;
  }

}