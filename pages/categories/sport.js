import CarsList from "@/Components/templates/CarsList";
import carsData from "@/data/carsData";
import React from "react";

function Sport() {
  const sportCars = carsData.filter((car) => car.category === "sport");
  console.log(sportCars);
  return <CarsList data={sportCars} />;
}

export default Sport;
