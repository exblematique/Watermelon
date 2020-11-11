
/*** FUNCTIONS ***/
function startAnimation(div){
    let children = div.children;
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
}

function manageAnimation(){
    let windowBottom = document.documentElement.scrollTop + window.screen.height;
    for (let i=0; i<animation.length; i++){
        while (animation[i][0] != null && animation[i][0].getBoundingClientRect().top < windowBottom){
            startAnimation(animation[i][0])
            animation[i].shift();
        }
    }
}

/*** VARIABLES ***/
let animation = [];
animation.push(Array.from(document.querySelectorAll(".parallax")));
animation.push(Array.from(document.querySelectorAll(".skills > div")));
animation.push(Array.from(document.querySelectorAll(".team > div")));
for (let i=0; i<animation[2].length; i++){
    if (animation[2]) let a=true;
}

/*** START ***/
manageAnimation();
window.onscroll = manageAnimation;