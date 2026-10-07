const technologies = [
  { name: "JavaScript", tag: "Language", desc: "High-level, interpreted programming language of the web." },
  { name: "TypeScript", tag: "Language", desc: "Typed superset of JavaScript that compiles to plain JavaScript." },
  { name: "Python", tag: "Language", desc: "Interpreted language renowned for readability, backend, and data science." },
  { name: "Rust", tag: "Language", desc: "Systems language emphasizing memory safety and zero-cost abstractions." },
  { name: "Go", tag: "Language", desc: "Compiled language engineered by Google for concurrent distributed systems." },
  { name: "HTML5", tag: "Markup", desc: "Standard markup language defining the semantic structure of web documents." },
  { name: "CSS3", tag: "Style", desc: "Style sheet language used for describing presentation and visual design." },
  { name: "Node.js", tag: "Runtime", desc: "Asynchronous event-driven JavaScript runtime built on Chrome's V8 engine." },
  { name: "Deno", tag: "Runtime", desc: "Secure runtime for JavaScript and TypeScript by the creator of Node." },
  { name: "Bun", tag: "Runtime", desc: "Fast all-in-one JavaScript runtime, bundler, test runner, and package manager." },
  { name: "PostgreSQL", tag: "Database", desc: "Powerful open-source object-relational database management system." },
  { name: "Redis", tag: "Database", desc: "In-memory data structure store used as distributed cache and message broker." },
  { name: "MongoDB", tag: "Database", desc: "Document-oriented NoSQL database storing data in JSON-like format." },
  { name: "SQLite", tag: "Database", desc: "Lightweight, serverless, self-contained SQL database engine." },
  { name: "GraphQL", tag: "API", desc: "Query language for APIs providing clients exact requested data." },
  { name: "REST API", tag: "API", desc: "Architectural style for distributed hypermedia systems over HTTP." },
  { name: "WebSockets", tag: "Protocol", desc: "Full-duplex, bidirectional communication channels over a single TCP connection." },
  { name: "Docker", tag: "DevOps", desc: "Platform for developing, shipping, and running apps in isolated containers." },
  { name: "Git", tag: "VCS", desc: "Distributed version control system tracking source code history." },
  { name: "Linux", tag: "OS", desc: "Open-source Unix-like kernel powering servers, containers, and cloud hosts." },
  { name: "WebAssembly", tag: "Binary", desc: "Low-level binary format for client-side execution at near-native speed." },
  { name: "Vite", tag: "Tooling", desc: "Next-generation frontend tooling providing lightning-fast HMR." },
  { name: "Nginx", tag: "Server", desc: "High-performance reverse proxy, load balancer, and HTTP cache server." },
  { name: "Web Audio API", tag: "Web API", desc: "High-level browser system for controlling audio operations on the web." }
];

const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("resultCount");
const itemList = document.getElementById("itemList");

function render() {
  const query = searchInput.value.toLowerCase().trim();

  const filtered = technologies.filter((item) => {
    return (
      item.name.toLowerCase().includes(query) ||
      item.tag.toLowerCase().includes(query) ||
      item.desc.toLowerCase().includes(query)
    );
  });

  resultCount.textContent = `${filtered.length} result${filtered.length === 1 ? "" : "s"}`;

  if (filtered.length === 0) {
    itemList.innerHTML = '<li class="empty-state">No results found matching your search.</li>';
    return;
  }

  itemList.innerHTML = filtered
    .map(
      (item) => `
      <li class="tech-item">
        <div>
          <h3 class="tech-title">${escapeHtml(item.name)}</h3>
          <p class="tech-desc">${escapeHtml(item.desc)}</p>
        </div>
        <span class="tech-tag">${item.tag}</span>
      </li>
    `
    )
    .join("");
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

searchInput.addEventListener("input", render);

render();
