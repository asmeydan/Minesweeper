const container = document.getElementById("container");

for(let i = 1; i <= 80; i++) {
    const div = document.createElement(`div`);
    div.innerHTML = `
    <input type="text" value="3" disabled>
    <div class="cover" id="${i}"></div>`;
    container.appendChild(div);
    div.className = "block";
}