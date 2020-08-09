class Game {
    constructor() {
        this.gun = new Gun();
        this.activePlayer;
        this.shot;
        document.querySelector('.gameStart').addEventListener('click', this.startGame())
    }

    startGame = () => {

        // console.log('działa')
        this.gun.spinCylinder()
        this.activePlayer = this.gun.spinWithGun();
        console.log(this.activePlayer)
        document.querySelector('.gun .shot').addEventListener('click', () => {
            let shootingGun = this.gun;
            let activePlayer = this.activePlayer;
            console.log(this.activePlayer)
            this.shot = new Shot(shootingGun, activePlayer)
            if (this.shot.getShotResult() == true) {
                if (activePlayer = 1) {
                    console.log("BANG! Mike is DEAD")
                } else {
                    console.log('BANG! Nick is DEAD')
                }
            } else {
                this.activePlayer = this.shot.changeShooter(this.activePlayer)
            }
        })
    }
}