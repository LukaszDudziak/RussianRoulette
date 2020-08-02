class Game {
    constructor() {
        // this.gun = new Gun();
        document.querySelector('.gameStart').addEventListener('click', this.startGame().bind(this))
    }


    startGame = () => {
        console.log('działa')
    }
}