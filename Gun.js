class Gun {

    constructor() {
        this._bulletsNumber = document.querySelector(`input[name = BulletsNumber]:checked`).id;
        this.loadedCylinder = this.bulletsPosition(this._bulletsNumber);
        // this.getLoadedCylinder = () => _loadedCylinder;
    }

    //function which gonna create loaded cylinder with bullets in randon, unknown positions
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

    spin() {
        //random number of spins, one spin can change position from 0 to 5 positions ahead
        let spins = Math.floor(Math.random() * 6);
        let loadedCylinder = this.loadedCylinder;
        //i must create new variable, because overwritting "loadedCylinder" can cause situation, where existing bullet (1) will be overwritten by 0, and when it's posistion be checked, there will be 0 :| (dunno how to simplify this)
        let spinnedCylinder = [];
        console.log(spins)
        for (let i = 0; i < loadedCylinder.length; i++) {
            // console.log(loadedCylinder[(i + spins) % 6]);
            // console.log(loadedCylinder[i]);
            spinnedCylinder[(i + spins) % 6] = loadedCylinder[i];
        }
        //returning loaded revolver, ready for shot :D
        return spinnedCylinder;
    }
}