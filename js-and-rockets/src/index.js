// Please run your solution from this file

console.log("Hello from %csrc/index.js", "font-weight:bold");

const results = document.querySelector("#results");
fetch("https://api.spacexdata.com/v3/launches/past")
  .then(response => response.json())
  .then((data) => {
    data.Search.forEach((result) => {
      const spacedata = `<li class="list-inline-item">
        <p>${flight_number}</p>
        <p>${mission_name}</p>
        <p>${payloads_count}</p>
      </li>`;
      results.insertAdjacentHTML("beforeend", spacedata);
    });
  });
