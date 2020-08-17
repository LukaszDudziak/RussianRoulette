document.querySelector('.gameStart').addEventListener('click', () => {
    const game = new Game;
}, {
    //blocking user from creating more games in one attempt
    once: true
})