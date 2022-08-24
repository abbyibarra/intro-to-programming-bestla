//insert copyright text in footer 
let today = new Date();
let thisYear = today.getFullYear();

let footer = document.querySelector("footer");

let copyright = document.createElement("p");
copyright.innerHTML = `Abigail Ibarra ${thisYear}`;

footer.appendChild(copyright);

//create list of skills
let skills = ["Google Suite", "Microsoft Office", "JavaScript"];
let skillsSection = document.getElementById('skills');
let skillsList = skillsSection.querySelector('ul');

for (let i=0; i < skills.length; i++) {
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
}