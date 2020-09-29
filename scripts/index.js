/*********  FUNCTIONS *************/
//Create windows for skills
function createSkills(){
    let divSkills = document.querySelector("#skills");
    for (let i=0; i < skills.length; i++){
        let div = document.createElement("div");
        //Defines style for image
        div.style.backgroundImage = "url(assets/skills/" + skills[i].img + ")";

        let title = document.createElement("h1");
        title.innerText = skills[i].title;

        let desc = document.createElement("p");
        desc.innerText = skills[i].desc;

        div.appendChild(title);
        div.appendChild(desc);
        divSkills.appendChild(div);
    }
}

//Create windows for team members
function createTeam(){
    let divTeam = document.querySelector("#other");
    for (let i=0; i < team.length; i++){
        let div = document.createElement("div");
        //Defines style for image
        div.style.backgroundImage = "url(assets/team/" + team[i].img + ")";

        let name = document.createElement("h2");
        name.innerText = team[i].name;

        let role = document.createElement("h3");
        role.innerText = team[i].role;

        div.appendChild(name);
        div.appendChild(role);
        divTeam.appendChild(div);
    }
}

/********   START   ******************/
createSkills();
createTeam();