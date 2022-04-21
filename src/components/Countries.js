import axios from "axios"; // persmet de faire le fecth un peu plus rapidement
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]); // usestate renvoie une valeur gerée dans son etat
  const [rangeValue, setRangeValue] = useState(36); // le set permet de modifier la valuer de rangevalue
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];

  useEffect(() => {
    //le useEffect se joue lorsque le composant est monté
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);
  return (
    <div className="countries">
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="250"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        {radios.map((continent, index) => (
          <li key={index}>
            <input
              type="radio"
              name="continentRadio"
              checked={continent === selectedRadio}
              id={continent}
              onChange={(e) => setSelectedRadio(e.target.id)}
            />
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
      </ul>

      {selectedRadio && (
        <button onClick={() => setSelectedRadio("")}>Annuler le tri</button>
      )}

      <ul>
        {data
          .filter((country) => country.continents[0].includes(selectedRadio))
          .sort((a, b) => b.population - a.population)
          .slice(0, rangeValue)
          .map(
            (
              country,
              index // chaque liste aura sa clé unique est ici l'index
            ) => (
              <Card key={index} country={country} />
            )
          )}
      </ul>
    </div>
  );
};

export default Countries;
