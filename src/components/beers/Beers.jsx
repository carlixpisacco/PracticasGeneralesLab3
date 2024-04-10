import AvailableBeers from '../availableBeers/AvailableBeers';
import ListBeers from '../listBeers/ListBeers';
import RedIpaBeers from '../redIpaBeers/RedIpaBeers';
import StyleBeers from '../styleBeers/StyleBeers';


import './Beers.css'

const Beers = () => {

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
            available: true,
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

    return (
        <div>
            <div>
                <h1>Lista de cervezas:</h1>
                <ListBeers
                    birras={beers} />
            </div>
            <div>
                <h1>Cervezas disponibles:</h1>
                {beers.map((beer) => ( //cuando hay un mapeo donde envio las props de esta forma, me crea un componente por cada objeto del arreglo
                    <AvailableBeers
                        key={beer.id}
                        name={beer.beerName}
                        available={beer.available} />
                ))}
            </div>

            <div>
                <RedIpaBeers
                    birras={beers} />
                
                <StyleBeers
                    birras={beers} />

            /</div>

        </div>
    )

};

export default Beers