// creo l'array di oggetti

 const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'img/wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'img/angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'img/walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'img/scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'img/barbara-ramos-graphic-designer.jpg'
    }
]; 

console.log(team);

// recupero l'elemento lista dal DOM
const list = document.querySelector('ul');

// stampo in pagina la lista di oggetti
let teamList = '';

for (let i = 0; i < team.length; i++){
    memberTeam = team[i];
    teamList += `
        <li>
            <p><b class="text-danger">Nome:</b> ${memberTeam['name']}</p>
            <p><b class="text-primary">Ruolo:</b> ${memberTeam['role']}</p>
            <p class="border-bottom border-success"><b class="text-success">Foto:</b> <img class="img-thumbnail img-fluid rounded-5" src="${memberTeam['photo']}"></p>
        </li>
    `;
}

list.innerHTML = teamList;


