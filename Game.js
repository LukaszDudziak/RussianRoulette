class Game {
    constructor() {
        this.gun = new Gun();
        this.activePlayer;
        this.shot;
        this.startGame();
        this.marker;
        // document.querySelector('.gameStart').addEventListener('click', this.startGame())
    }

    startGame = () => {

        // console.log('works')
        //first, i've got loaded gun, i have to spin cyllinder
        this.gun.spinCylinder()
        //than, with spinning gun, i have active player
        this.activePlayer = this.gun.spinWithGun();
        // console.log(this.activePlayer)
        //now, he can make shot
        document.querySelector('.gun .shot').addEventListener('click', () => {
            //i must create new variables, to prevent losing "this" from that stage, with arrow function i'm not creating new ones, just taking from function above
            let shootingGun = this.gun;
            let activePlayer = this.activePlayer;
            // console.log(this.activePlayer)
            //creating new shot 
            this.shot = new Shot(shootingGun, activePlayer)
            //checking what was shot result
            if (this.shot.getShotResult() == true) {
                //creating dead marker
                this.marker = new Marker(0);
                //disabling shot button after player death
                document.querySelector('.gun .shot').disabled = true;
                //delaying page reload after end of game
                setTimeout(function () {
                    location.reload()
                }, 5000);
                //checking which player was pulling trigger if bullet was in chamber
                if (activePlayer == 1) {
                    alert("BANG! Mike is DEAD");
                } else {
                    alert('BANG! Nick is DEAD');
                }
            } else {
                //creating white marker
                this.marker = new Marker(1);
                //passing gun to other player
                this.activePlayer = this.shot.changeShooter(this.activePlayer)
            }
        })
    }
}

//i should create variable in which will be result of shot, and this will provide info for creating new marks 