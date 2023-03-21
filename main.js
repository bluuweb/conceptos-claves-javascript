
const app = document.getElementById('app');
const games = [
  {
    name: 'Super Mario Bros',
    year: 1985,
    genre: 'Platform',
    stock: 10,
  },
  {
    name: 'The Legend of Zelda',
    year: 1986,
    genre: 'Adventure',
    stock: 5,
  },
  {
    name: 'Tetris',
    year: 1984,
    genre: 'Puzzle',
    stock: 15,
  }
]

const [gameOne, gameTwo, gameThree] = games;

const btnClass = (stock) => stock > 0 ? 'btn-primary' : 'btn-danger disabled';

function Card({name, year, genre}){

  return `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
      <h5 class="card-title">${name.toUpperCase()}</h5>
      <p class="card-text">${year} - ${genre}</p>
      <a href="#" class="btn ${btnClass(stock)}">Go somewhere</a>
    </div>
  </div>
  `
}

app.innerHTML += Card(gameOne);
app.innerHTML += Card(gameTwo);
app.innerHTML += Card(gameThree);