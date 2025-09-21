import CarsList from "@/Components/templates/CarsList";
import carsData from "@/data/carsData";
import React from "react";

function Hatchback() {
  const hatchbackCars = carsData.filter((car) => car.category === "hatchback");

  
  return <CarsList data={hatchbackCars}/>;
}

export default Hatchback;
