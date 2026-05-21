/* Pepper HTML project navigation and page content.
   Kept simple for Pepper/Choregraphe's tablet browser. */

function goTo(page) {
    window.location.href = page;
}

// Some pages originally called goToPage(), so keep this alias.
function goToPage(page) {
    goTo(page);
}

const pepperData = {
    facilities: [
        {
            title: "Robotics and Computing Labs",
            description: "Specialist spaces for programming, robotics, electronics and practical demonstrations."
        },
        {
            title: "Study Areas",
            description: "Quiet spaces and group working areas for coursework, projects and revision."
        },
        {
            title: "Student Support",
            description: "Support services are available to help with learning, wellbeing and university life."
        }
    ],
    courses: [
        {
            title: "Robotics",
            description: "Learn about robots, sensors, programming, simulation and autonomous systems."
        },
        {
            title: "Computer Science",
            description: "Study software development, data, networks, artificial intelligence and problem solving."
        },
        {
            title: "Engineering and Technology",
            description: "Explore practical technology, electronics, design and real-world technical projects."
        }
    ],
    history: [
        {
            title: "University History",
            description: "This section can introduce visitors to the background and development of the university."
        },
        {
            title: "Innovation",
            description: "The university has grown through teaching, research, collaboration and new technology."
        },
        {
            title: "Today",
            description: "Pepper can help present information in an interactive and friendly way."
        }
    ]
};

function renderList(containerId, data) {
    const container = document.getElementById(containerId);

    if (!container) {
        return;
    }

    container.innerHTML = "";

    if (!data || data.length === 0) {
        container.innerHTML = '<p class="status-text">No data available.</p>';
        return;
    }

    data.forEach(function (item) {
        const div = document.createElement("div");
        div.className = "card";

        const title = document.createElement("h2");
        title.textContent = item.title || item.name || "Information";

        const description = document.createElement("p");
        description.textContent = item.description || "";

        div.appendChild(title);
        div.appendChild(description);
        container.appendChild(div);
    });
}

function loadFacilities() {
    renderList("facilities-container", pepperData.facilities);
}

function loadCourses() {
    renderList("courses-container", pepperData.courses);
}

function loadHistory() {
    renderList("history-container", pepperData.history);
}
