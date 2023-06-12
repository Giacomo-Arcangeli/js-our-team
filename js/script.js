// creo l'array di oggetti

 const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        photo: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg'
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
            <p><b class="text-danger">Ruolo:</b> ${memberTeam['role']}</p>
            <p><b class="text-danger">Foto:</b> ${memberTeam['photo']}</p>
        </li>
    `;
}

list.innerHTML = teamList;


