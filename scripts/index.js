
/*** FUNCTIONS ***/
function animationParallax (){
    let windowBottom = document.documentElement.scrollTop + window.screen.height;
    while (titles[0] != null && titles[0].getBoundingClientRect().top < windowBottom){
        let children = titles[0].children;
        for (let child=0; child < children.length; child++){
            children[child].animate([
                // keyframes
                {
                    opacity: 0,
                    transform: 'translateY(-300px)'
                }, {
                    opacity: 1,
                    transform: 'translateY(0px)'
                }
            ], {
                // timing options
                duration: 1000,
            });
        }
        titles.shift();
    }
}

/*** START ***/
let titles = Array.from(document.querySelectorAll(".parallax"));
animationParallax();
window.onscroll = animationParallax;