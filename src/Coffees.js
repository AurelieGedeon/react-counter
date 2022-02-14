import React, { useState, useEffect } from "react";

function Coffees() {
  const [coffeeList, setCoffeeList] = useState();
  useEffect(() => {
    fetch("https://api.sampleapis.com/coffee/hot")
      .then((response) => response.json())
      .then((data) => setCoffeeList(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <section className="coffee-container" id="coffees">
      <h2>Coffee List</h2>
      {!coffeeList ? (
        <h3> Loading Recipes...</h3>
      ) : (
        <ol>
          {coffeeList.map((coffee) => {
            return <li key={coffee.id}> {coffee.title}</li>;
          })}
        </ol>
      )}
    </section>
  );
}

export default Coffees;
