import AllButton from "@/Components/module/AllButton";
import Categorize from "@/Components/module/Categorize";
import SearchBar from "@/Components/module/SearchBar";
import CarsPage from "@/Components/templates/CarsPage";
import carsData from "@/data/carsData";

function Index() {
  const cars = carsData.slice(0, 3);
  return (
    <div>
      <SearchBar />
      <Categorize />
      <AllButton />
      <CarsPage data={cars} />
    </div>
  );
}
export default Index;
