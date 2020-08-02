class Gun {

    constructor() {
        this._bulletsNumber = document.querySelector(`input[name = BulletsNumber]:checked`).id;
        this.loadedCylinder = this.bulletsPosition(this._bulletsNumber);

    }

    bulletsPosition = _bulletsNumber => {
        //creating empty cylinder
        let cylinder = [0, 0, 0, 0, 0, 0]
        //setting bullets in chambers
        for (let i = 0; i < _bulletsNumber; i++) {
            //random proposition for chamber
            let cylinderProposition = Math.floor(Math.random() * 6);
            //checking if bullet slot is empty, if it is, whole for goes agains
            if (cylinder[cylinderProposition] != 1) {
                cylinder[cylinderProposition] = 1;
            } else {
                i--;
            }
        }
        //returning loaded gun
        return cylinder;
    }

    spin

}