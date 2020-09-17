/*********  FUNCTIONS *************/
//Create windows for skills
function createSkills(){
    let divSkills = document.querySelector("#skills");
    for (let i=0; i < skills.length; i++){
        let div = document.createElement("div");
        //Defines style for image
        div.style.backgroundImage = "url(assets/skills/" + skills[i].img + ")";
        div.style.backgroundSize = "contain";
        div.style.backgroundRepeat = "no-repeat";

        let title = document.createElement("h1");
        title.innerText = skills[i].title;

        let desc = document.createElement("p");
        desc.innerText = skills[i].desc;

        div.appendChild(title);
        div.appendChild(desc);
        divSkills.appendChild(div);
    }
}

/********   START   ******************/
createSkills();