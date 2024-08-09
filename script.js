// Initial data
const teams = [
    { id: 1, name: "North Dakota Thunders", state: 'ND' },
    { id: 2, name: "Minnesota Frosts", state: 'MN' }
];

const players = [
    {
        name: 'Elle Bartlett',
        teamID: 2,
        height: 64, // 5 foot 4
        weight: 135,
        speed: 17,
        points: 82,
        fgPercentage: 84,
        ftPercentage: 92,
        steals: 71,
        blocks: 69
    },
    {
        name: 'Lex',
        teamID: 1,
        height: 70, // 5 foot 10
        weight: 224,
        speed: 13,
        points: 62,
        fgPercentage: 55,
        ftPercentage: 85,
        steals: 75,
        blocks: 50
    }
];

// Function to initialize the team and player lists
function initialize() {
    const teamSelect = document.getElementById('teamSelect');
    const teamList = document.getElementById('teamList');
    const playerList = document.getElementById('playerList');

    // Populate teams in the select dropdown
    teams.forEach(team => {
        const option = document.createElement('option');
        option.value = team.id;
        option.textContent = team.name;
        teamSelect.appendChild(option);
    });

    // Display teams
    teams.forEach(team => {
        const li = document.createElement('li');
        li.textContent = team.name;
        teamList.appendChild(li);
    });

    // Display players
    players.forEach(player => {
        const li = document.createElement('li');
        li.textContent = `${player.name} - ${teams.find(team => team.id === player.teamID).name}: ${player.points} PPG, ${player.steals} SPG, ${player.blocks} BPG`;
        playerList.appendChild(li);
    });
}

// Add new team
document.getElementById('teamForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const teamName = document.getElementById('teamName').value;
    const state = document.getElementById('state').value.toUpperCase();

    const newTeam = {
        id: teams.length + 1,
        name: `${state} ${teamName}`,
        state: state
    };

    teams.push(newTeam);
    const option = document.createElement('option');
    option.value = newTeam.id;
    option.textContent = newTeam.name;
    document.getElementById('teamSelect').appendChild(option);

    const li = document.createElement('li');
    li.textContent = newTeam.name;
    document.getElementById('teamList').appendChild(li);

    document.getElementById('teamForm').reset();
});

// Add new player
document.getElementById('playerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const playerName = document.getElementById('playerName').value;
    const teamID = parseInt(document.getElementById('teamSelect').value);
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const speed = parseFloat(document.getElementById('speed').value);
    const points = parseInt(document.getElementById('points').value);
    const fgPercentage = parseFloat(document.getElementById('fgPercentage').value);
    const ftPercentage = parseFloat(document.getElementById('ftPercentage').value);
    const steals = parseInt(document.getElementById('steals').value);
    const blocks = parseFloat(document.getElementById('blocks').value);

    const newPlayer = {
        name: playerName,
        teamID: teamID,
        height: height,
        weight: weight,
        speed: speed,
        points: points,
        fgPercentage: fgPercentage,
        ftPercentage: ftPercentage,
        steals: steals,
        blocks: blocks
    };

    players.push(newPlayer);

    const teamName = teams.find(team => team.id === teamID).name;
    const li = document.createElement('li');
    li.textContent = `${newPlayer.name} - ${teamName}: ${newPlayer.points} PPG, ${newPlayer.steals} SPG, ${newPlayer.blocks} BPG`;
    document.getElementById('playerList').appendChild(li);

    document.getElementById('playerForm').reset();
});

// Initialize the page
initialize();
