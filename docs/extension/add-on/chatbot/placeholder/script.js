// List of section fragments to include
let sections = [
  'player.html',
  'world.html',
  'server.html',
  'timezone.html',
  'offset.html'
];

// Move 'examples.html' to the end after sorting A-Z
sections = sections
  .sort((a, b) => a.localeCompare(b))       // sort a-z
  .concat('examples.html');                 // add examples back at end

// Target the main content container
const main = document.getElementById('main-content');

// Dynamically fetch and append each fragment
sections.forEach(file => {
  fetch(`parts/${file}`)
    .then(response => {
      if (!response.ok) throw new Error(`Could not load ${file}`);
      return response.text();
    })
    .then(html => {
      const section = document.createElement('section');
      section.innerHTML = html;
      main.appendChild(section);
    })
    .catch(err => {
      console.error(err);
    });
});
