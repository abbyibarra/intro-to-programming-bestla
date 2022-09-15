//insert copyright text in footer 
let today = new Date();
let thisYear = today.getFullYear();

let footer = document.querySelector('footer');

let copyright = document.createElement('p');
copyright.innerHTML = `Abigail Ibarra ${thisYear}`;
copyright.id = "footer";

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

//handle message form submit + disply messages in list
let messageForm = document.getElementsByName('leave_message');
messageForm[0].addEventListener('submit', (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let email = e.target.email.value;
    let message = e.target.message.value;
    console.log(name);
    console.log(email);
    console.log(message);
    
    //add list item
    let messageSection = document.getElementById('messages');
    let messageList = messageSection.querySelector('ul');
    let newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href = "mailto: ${email}">${name}</a><span> wrote: ${message} </span>`;
    newMessage.id = "message";

    //remove button
    let removeButton = document.createElement('button');
    removeButton.textContent = "remove";
    removeButton.type = 'button';
    removeButton.addEventListener('click', (e) => {
        let entry = removeButton.parentNode;
        entry.remove();
    });
    removeButton.id = "remove";

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm[0].reset();
});

// //fetch GitHub repositories
// let githubRequest = new XMLHttpRequest();
// githubRequest.open("GET", "https://api.github.com/users/abbyibarra/repos");
// githubRequest.send();

// //handle response from server
// githubRequest.addEventListener('load', (e) => {
//     let repositories = JSON.parse(githubRequest.response);
//     console.log(repositories);

//     //display repositories in list
//     let projectSection = document.getElementById('projects');
//     let projectList = projectSection.querySelector('ul');

//     for (let i = 0; i < repositories.length; i++) {
//      let project = document.createElement('li');
//         let link = document.createElement('a');
//         link.href = repositories[i].html_url;
//         link.innerHTML = repositories[i].name;
//         project.appendChild(link);
//         projectList.appendChild(project);
//     }
// });

//working with fetch api
fetch('https://api.github.com/users/abbyibarra/repos')
    .then(response => response.json())
    .then(repositories => {
        let projectSection = document.getElementById('projects');
        let projectList = projectSection.querySelector('ul');

        for (let i = 0; i < repositories.length; i++) {
        let project = document.createElement('li');
        let link = document.createElement('a');
        link.href = repositories[i].html_url;
        link.innerHTML = repositories[i].name;
        project.appendChild(link);
        projectList.appendChild(project);
    }
    })
    .catch(error => alert("Oops, it's not working", error))