
import './App.css';
import Beers from './components/beers/Beers';
import FamilyMember from './components/family/Family';
import Person from './components/persons/Persons';
import Product from './components/products/Products';

function App() {

  const products = ["table", "couch", "chair", "chair2"];
  const names = ["Parker", "Simons", "Lewis", "Poe"];
  const persons = [{ name: "Juan", age: 26 }, { name: "Gabriel", age: 27 }, {
    name:
      "Valentina", age: 22
  }, { name: "Paula", age: 25 }, { name: "Andrés", age: 20 }];

  const members = persons.sort((a, b) => b.age - a.age);
  
  return (

    <div>
      <Beers />

      <Product
        products={products} />

      <Person
        names={names} />

      <FamilyMember
        members={members} />

    </div>
  )
}

export default App
