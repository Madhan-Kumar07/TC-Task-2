
let hostels = [
    { id: 1, name: "Garnet A", status: "working", votes: 12 },
    { id: 2, name: "Agate Hostel", status: "broken", votes: 3 },
    { id: 3, name: "Coral ", status: "working", votes: 8 },{id: 4,name:"Garnet B",status:"broken",votes:3}
];

function renderHostels() {
    const container = document.getElementById('hostel-list');
    container.innerHTML = '';
    
    hostels.forEach(hostel => {
        const card = document.createElement('div');
        card.className = 'hostel-card';
        card.innerHTML = `
            <div>
                <h3>${hostel.name}</h3>
                <span class="status-badge ${hostel.status}">${hostel.status.toUpperCase()}</span>
                <small style="display:block; margin-top:5px; color:#666;">Recent Confirmations: ${hostel.votes}</small>
            </div>
            <div class="btn-group">
                <button class="btn-yes" onclick="vote(${hostel.id}, 'yes')">Yes</button>
                <button class="btn-no" onclick="vote(${hostel.id}, 'no')">No</button>
            </div>
        `;
        container.appendChild(card);
    });
}

function vote(id, type) {
    const hostel = hostels.find(h => h.id === id);
    if (type === 'yes') {
        hostel.votes++;
        if (hostel.votes >= 5) hostel.status = 'working';
    } else {
        hostel.votes = Math.max(0, hostel.votes - 1);
        if (hostel.votes === 0) hostel.status = 'broken';
    }
    renderHostels();
}

// Initial Render
renderHostels();