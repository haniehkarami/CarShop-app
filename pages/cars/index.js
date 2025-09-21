import CarsPage from "@/Components/templates/CarsPage";
import carsData from "../../data/carsData";
import Categorize from "@/Components/module/Categorize";
import SearchBar from "@/Components/module/SearchBar";

function Details() {
  return (
    <div>
      <SearchBar />
      <Categorize />
      <CarsPage data={carsData} />
    </div>
  );
}

export default Details;
