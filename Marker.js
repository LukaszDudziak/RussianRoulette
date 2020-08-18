class Marker {
    constructor(isAlive) {
        //dope encapsulation
        let _condition = this.condition(isAlive);
        this.getCondition = () => _condition;
    }

    condition(isAlive) {
        //simple HTML element creator 
        let destination = document.querySelector('.roundsMarkers');
        let mark = document.createElement('div');
        mark.classList.add('marker');
        //input decides which class name is add to marker-object
        if (isAlive == 0) {
            mark.textContent = "X";
            mark.classList.add('dead');
            destination.append(mark);
        } else {
            mark.textContent = "O";
            destination.append(mark);
        }
    }
}