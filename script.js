// Seed array with freelancers
const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
];
// Average price function
function calculateAveragePrice() {
    let total = 0;
    freelancers.forEach(f => total += f.price);
    return (total / freelancers.length).toFixed(2);
}

// Add freelancers to the DOM
function addFreelancersToDOM() {
    const freelancerList = document.getElementById('freelancerList');
    freelancerList.innerHTML = ''; // Empty

    freelancers.forEach(freelancer => {
        const tr = document.createElement('tr');

        const nameTd = document.createElement('td');
        nameTd.textContent = freelancer.name;
        tr.appendChild(nameTd);

        const occupationTd = document.createElement('td');
        occupationTd.textContent = freelancer.occupation;
        tr.appendChild(occupationTd);

        const priceTd = document.createElement('td');
        priceTd.textContent = `$${freelancer.price}`;
        tr.appendChild(priceTd);

        freelancerList.appendChild(tr);
    });
}

// Calculate the average and render freelancers
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('averagePrice').textContent = `$${calculateAveragePrice()}`;
    addFreelancersToDOM();
});

// Rerender interval
setInterval(addRandomFreelancer, 1000); 

// Available info for random freelancers
const availableNames = ["Luigui", "Carol", "Jeff"];
const availableOccupations = ["Designer", "Engineer", "Gardener"];
const availablePrices = [100, 20, 50, 80, 99, 10]

// Random freelancer function
function generateRandomFreelancer() {
    const randomName = availableNames[Math.floor(Math.random() * availableNames.length)];
    const randomOccupation = availableOccupations[Math.floor(Math.random() * availableOccupations.length)];
    const randomPrice = availablePrices[Math.floor(Math.random() * availablePrices.length)];
    return {
        name: randomName,
        occupation: randomOccupation,
        price: randomPrice
    };
}

// Add a random freelancer and render
function addRandomFreelancer() {
    const newFreelancer = generateRandomFreelancer();
    freelancers.push(newFreelancer);

    addFreelancersToDOM();
    document.getElementById('averagePrice').textContent = `$${calculateAveragePrice()}`;
}