import CarsList from "@/Components/templates/CarsList";
import carsData from "@/data/carsData";
import React from "react";

function Suv() {
  const suvCars = carsData.filter((car) => car.category === "suv");

  return <CarsList data={suvCars}/>;
}

export default Suv;
