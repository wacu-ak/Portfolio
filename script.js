// ---------- Data ----------

// Skills: an array of strings
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Git",
  "GitHub",
];

// Projects: an array of objects (each has string properties)
const projects = [
  {
    title: "Personal Portfolio",
    description: "A simple page that showcases my work and skills as a software engineer.",
    tech: "HTML, CSS, JavaScript"
  },
];

// ---------- Render skills with a loop ----------
const skillsList = document.getElementById("skills-list");

for (let i = 0; i < skills.length; i++) {
  const item = document.createElement("li");
  item.textContent = skills[i];
  skillsList.appendChild(item);
}

// ---------- Render project cards with a loop ----------
const projectsGrid = document.getElementById("projects-grid");

for (const project of projects) {
  const card = document.createElement("article");
  card.className = "card";

  const title = document.createElement("h3");
  title.textContent = project.title;

  const description = document.createElement("p");
  description.textContent = project.description;

  const tech = document.createElement("p");
  tech.className = "tech";
  tech.textContent = "Tech: " + project.tech;

  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(tech);
  projectsGrid.appendChild(card);
}