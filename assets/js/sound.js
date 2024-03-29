window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sounds')
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual')
    // This is the array of Color
    const colors = [
        '#60d394',
        '#d39090',
        '#c060d3',
        '#d3d160',
        '#2c8f6e',
        '#073828'
    ]
    // Looping through the pad
    pads.forEach( (pad, index) => {
        pad.addEventListener('click', () => {
            sounds[index].currentTime = 0
            sounds[index].play()
            createBubbles(index)
        } )
    } )
    // Create a function that makes bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble)
        bubble.style.backgroundColor = colors[index]
        bubble.style.animation = 'jump 1s ease'
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this)
        })
    }
})