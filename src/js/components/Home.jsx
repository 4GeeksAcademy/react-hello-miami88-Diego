import React, { useState } from "react"; // Corrected imports
import { Card } from "./Card"; 
import { Navbar } from "./Navbar"; 
import { Jumbotron } from "./Jumbotron"; 
import { Footer } from "./Footer"; 

//create your first component
export const Home = () => {

  const [people, setPeople] = useState([
    { name: "Alice", age: 30, Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ex." },
	{ name: "Bob", age: 25, Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ex." },
	{ name: "Charlie", age: 35, Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ex." },
	{ name: "Diana", age: 28, Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ex.", src: "https://images.unsplash.com/photo-1513735539099-cf6e5d559d82?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFub3JhbWF8ZW58MHx8MHx8fDA%3D" },
  { name: "Ethan", age: 32, Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ex.", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuiVVAUhUDwAVTciSjHtGZYIa90g81vgwb8A&s" },
  { name: "Fiona", age: 27, Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ex.", src: "https://as2.ftcdn.net/v2/jpg/01/07/82/55/1000_F_107825577_lYRRtJEDqwuvFoKxBxdmyqIeGYgxDBCo.jpg" },
  ]);
  
  return (
    <div className="Home">
		<Navbar />
		<Jumbotron />
        {/* This is the required "row" container that enables the 3-column layout */}
        <div className="row"> 
            {people.map((person, index) => (
                <Card key={index} name={person.name} age={person.age} description={person.Description} src={(person.src)}/>
            ))}
        </div>
		<Footer /> 
	</div>
  );
};

export default Home;
