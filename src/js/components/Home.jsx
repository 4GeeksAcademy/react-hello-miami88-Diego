import React, { useEffect } from "react";
import { Card } from "./Card";
import { Jumbotron } from "./Jumbotron";
import { Navbar } from "./Navbar";
import { useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export const Home = () => {

  const [people, setPeople] = useState([
    { name: "Alice", age: 30 },
	{ name: "Bob", age: 25 },
	{ name: "Charlie", age: 35 },
	{ name: "Diana", age: 28 }
  ]);
  
  return (
    <div className="Home">
		<Navbar />
		<Jumbotron />
		<Card name={people[0].name} age={people[0].age} />
		<Card name={people[1].name} age={people[1].age} />
		<Card name={people[2].name} age={people[2].age} />
		<Card name={people[3].name} age={people[3].age} />
		<footer className="bg-dark text-white text-center py-3">
	  <p>&copy; Diego :p</p>
	</footer>
	</div>
  );
};



export default Home;
