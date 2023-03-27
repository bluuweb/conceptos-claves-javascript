const app = document.getElementById("app");
const spinner = document.getElementById("spinner");

spinner.innerHTML = `
<div class="d-flex align-items-center">
  <strong>Loading...</strong>
  <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
</div>
`;

const fakePromise = (msg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(msg);
    }, 2000);
  });

const getGames = async () => {
  try {
    const hola = await fakePromise("Hola mundo");
    console.log(hola);
    const res = await fetch("data.json");
    if (!res.ok) {
      throw { ok: false, msg: "error 404" };
    }
    const data = await res.json();
    data.forEach((item) => {
      app.innerHTML += Card(item);
    });
  } catch (error) {
    console.log(error);
  } finally {
    spinner.innerHTML = "";
  }
};
getGames();

const btnClass = (stock) => (stock > 0 ? "btn-primary" : "btn-danger disabled");

function Card({ name, year, genre, stock }) {
  return `
  <div class="card mb-2">
  <div class="card-body">
      <h5 class="card-title">${name.toUpperCase()}</h5>
      <p class="card-text">${year} - ${genre}</p>
      <a href="#" class="btn ${btnClass(stock)}">Go somewhere</a>
    </div>
  </div>
  `;
}
