import { useEffect, useState } from "react";
import { ICar } from "../../../core/models/car.model";;
import ListingService from "../services/listing-api.service";
import ListingHeader from "../components/listing-header"
import Listing from '../components/listing';
import { useDebounce } from '../../../core/hooks';

export default function ListingOverview() {

  const [cars, setCars] = useState<ICar[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
 
  useEffect(() => {
    loadCars();
  },[]);

  useEffect(
    () => {
      loadCars();
    },
    [debouncedSearchTerm]
  );

  const loadCars = () => {
    const queryOptions = {search: debouncedSearchTerm }; 
    ListingService.getCars(queryOptions)
      .then(cars => {      
        setCars(cars.data);
      })
  }

  return (
    <>
      <ListingHeader title="Available Cars" setSearchTerm={setSearchTerm} ></ListingHeader>
      <Listing cars={cars} ></Listing>
     </>
  )
}

