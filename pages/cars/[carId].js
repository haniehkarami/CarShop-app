import CarDetails from "@/Components/templates/CarDetails";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";

function CarDetail() {
  const router = useRouter();
  const { carId } = router.query;
  console.log(carId);

  const carDetails = carsData[carId - 1];

  return <CarDetails {...carDetails} />;
}

export default CarDetail;
