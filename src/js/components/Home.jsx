import React, { useState } from "react"; // Corrected imports
import { Card } from "./Card";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Footer } from "./Footer";

//create your first component
export const Home = () => {
  // i can just keep adding more item to this but make sure to also add it on line 26 for it to owrk
  const images = [
    "https://as2.ftcdn.net/v2/jpg/01/91/79/33/1000_F_191793364_6ZAWwd1nVmtIg6RK2NMy7eOiBdJH0hPw.jpg",
    "https://cdn.realisticasia.com/photos/Phong%20blogs/Bali%20Travel%20Guide/Nusa%20Panida,%20Bali.jpg",
    "https://dynamic-media.tacdn.com/media/photo-o/2f/de/45/49/caption.jpg?f=webp&w=1000&h=700",
    "https://dynamic-media.tacdn.com/media/photo-o/30/4e/c2/b7/caption.jpg?f=webp&w=1000&h=700",
    "https://i0.wp.com/www.lonelyspeck.com/wp-content/uploads/2019/09/alabama-hills-at-moonrise.jpg?w=525&ssl=1",
    "https://as2.ftcdn.net/v2/jpg/01/32/62/81/1000_F_132628105_OBMh7kfO0JUqaDHJciEna0caOtAQSdah.jpg",
  ];
  const pickRandomIndex = (array) => {
    return Math.floor(Math.random() * array.length);
  };
  const [people] = useState([
    {
      name: "Alice",
      age: 30,
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ex.",
      src: images[pickRandomIndex(images)],
    },
    {
      name: "Bob",
      age: 25,
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ex.",
      src: images[pickRandomIndex(images)],
    },
    {
      name: "Charlie",
      age: 35,
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ex.",
      src: images[pickRandomIndex(images)],
    },
    {
      name: "Diana",
      age: 28,
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ex.",
      src: images[pickRandomIndex(images)],
    },
    {
      name: "Ethan",
      age: 32,
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ex.",
      src: images[pickRandomIndex(images)],
    },
    {
      name: "Fiona",
      age: 27,
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ex.",
      src: images[pickRandomIndex(images)],
    },
  ]);

  return (
    <div className="Home">
      <Navbar />
      <Jumbotron />
      {/* This is the required "row" container that enables the 3-column layout */}
      <div className="container bg-light">
        <div className="row">
          {people.map((person, index) => (
            <Card
              key={index}
              name={person.name}
              age={person.age}
              description={person.Description}
              src={person.src}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
