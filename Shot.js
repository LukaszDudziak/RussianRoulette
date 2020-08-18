class Shot {
    //creating shot class
    constructor(shootingGun, activePlayer) {
        //creating getters for method's results
        let _result = this.shoot(shootingGun);
        this.getShotResult = () => _result;
        let _change = this.changeShooter(activePlayer);
        this.getShooterId = () => _change;
    }

    shoot(shootingGun) {
        let gunCylinder = shootingGun.loadedCylinder;
        //boolean value - if true, gun was loaded, otherwise bullet wasn't in chamber
        if (gunCylinder.shift() == 1) {
            return true;
        } else {
            shootingGun.giveToOtherPlayer()
            return false;
        }
    }
    //changing shooting player, by returning active player id
    changeShooter(activePlayer) {
        if (activePlayer == 1) {
            return 2;
        } else {
            return 1;
        }
    }
}