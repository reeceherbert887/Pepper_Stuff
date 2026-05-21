const API_BASE = "http://localhost:5000";

async function fetchData(endpoint) {
    try {
        const res = await fetch(`${API_BASE}/${endpoint}`);
        return await res.json();
    } catch (err) {
        console.error("API Error:", err);
        return [];
    }
}

async function loadFacilities() {
    const data = await fetchData("facilities");
    renderList("facilities-container", data);
}

async function loadCourses() {
    const data = await fetchData("courses");
    renderList("courses-container", data);
}

async function loadHistory() {
    const data = await fetchData("history");
    renderList("history-container", data);
}

function renderList(id, data) {
    const container = document.getElementById(id);
    container.innerHTML = "";

    if (!data.length) {
        container.innerHTML = "<p>No data available</p>";
        return;
    }

    data.forEach(item => {
        const div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `
            <h2>${item.title || item.name}</h2>
            <p>${item.description || ""}</p>
        `;

        container.appendChild(div);
    });
}