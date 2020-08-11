class Marker {
    stillAlive() {
        const mark = document.createElement('div').classList.add('mark')
        document.querySelector('.roundsMarkers').appendChild(mark)
        return 1;
    }

    deadOne() {
        const mark = document.createElement('div').classList.add('mark,dead')
        document.querySelector('.roundsMarkers').appendChild(mark)
        return 0;
    }


}