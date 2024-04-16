
import './App.css';
import Beers from './components/beers/Beers';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChangeDolar from './components/changeDolar/ChangeDolar';
import { useState } from 'react';
import NewBeer from './components/newBeer/NewBeer';

const beers = [
  {
    id: 1,
    beerName: "American",
    beerStyle: "IPA",
    price: 3,
    available: true,
  },
  {
    id: 2,
    beerName: "Argenta",
    beerStyle: "IPA",
    price: 4,
    available: false,
  },
  {
    id: 3,
    beerName: "Irish",
    beerStyle: "Red",
    price: 4,
    available: true,
  },
  {
    id: 4,
    beerName: "Scotish",
    beerStyle: "Red",
    price: 3,
    available: true,
  },
  {
    id: 5,
    beerName: "DeEssoCiTratta",
    beerStyle: "APA",
    price: 3,
    available: true,
  },
  {
    id: 6,
    beerName: "Santa APA",
    beerStyle: "APA",
    price: 3,
    available: true
  },
  {
    id: 7,
    beerName: "German",
    beerStyle: "Pilsen",
    price: 1,
    available: true,
  },
  {
    id: 8,
    beerName: "London Porter",
    beerStyle: "Porter",
    price: 2,
    available: false,
  },
  {
    id: 9,
    beerName: "Scotish ALE",
    beerStyle: "Red",
    price: 5,
    available: false,
  },
];

function App() {
  const [priceDolar, setPriceDolar] = useState();
  const [newBeers, setNewBeers] = useState(beers);

  const newPrice = (enteredNewPrice) => {
    setPriceDolar(enteredNewPrice);
  }

  const generateUniqueId = () => {
    return newBeers[newBeers.length - 1].id + 1;
  }

  const addNewBeer = (enteredNewBeer) => {
    const newBeer = {
      ...enteredNewBeer,
      id: generateUniqueId(),
    };

  setNewBeers((prev) => [...prev, newBeer]);

  }

  return (

    <div>
      <div>
        <ChangeDolar changePriceDolar={newPrice} />
        <NewBeer addNewBeer = {addNewBeer}/>
      </div>
      <Beers
        precio={priceDolar}
        beers={newBeers} />
    </div>
  )
}

export default App
