class Marker {
    constructor(isAlive) {
        let _condition = this.condition(isAlive);
        this.getCondition = () => _condition;
    }

    condition(isAlive) {
        let destination = document.querySelector('.roundsMarkers');
        let mark = document.createElement('div');
        mark.classList.add('marker');
        if (isAlive == 0) {
            mark.textContent = "X";
            mark.classList.add('dead');
            destination.append(mark);
            return 0;
        } else {
            mark.textContent = "O";
            destination.append(mark);
            return 1;
        }
    }
}