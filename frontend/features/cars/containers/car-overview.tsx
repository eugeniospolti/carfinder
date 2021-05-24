import { useEffect, useState } from "react";
import { newCar } from "../models/car.model";
import { ICar } from "../../../core/models/car.model";
import CarService from "../services/car-api.service";
import CarListHeader from "../components/car-list-header"
import CarList from '../components/car-list';
import CarSidePanel from '../components/car-side-panel';
import { Divider, useDisclosure } from "@chakra-ui/react";
import { useShowToast , TOAST_STATUS, useDebounce } from '../../../core/hooks';
import { Pagination } from "../../../components";

export default function CarOverview() {

  const [cars, setCars] = useState<ICar[]>([]);
  const [selectedCar, setSelectedCar] = useState<string>(null);
  const [currentCar, setCurrentCar] = useState<ICar>(newCar);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ showToast ] = useShowToast();
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortBy, setSortBy] = useState('monthlyPrice');
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(0);
  const [filter, setFilter] = useState('available');
 
  useEffect(() => {
    loadCars();
  },[]);

  useEffect(() => {
    if (selectedCar)
    { 
      CarService.getCar(selectedCar)
      .then(car => {    
        setCurrentCar(car);
        onOpen();
      })
    }
  }, [selectedCar]);

  useEffect(() => {
    if (!isOpen) {
      setCurrentCar(newCar);
      setSelectedCar(null);
    }      
  }, [isOpen]);

  useEffect(
    () => {
      loadCars();
    },
    [debouncedSearchTerm,rowsPerPage,sortBy,page,filter]
  );

  const loadCars = () => {
    const queryOptions = {search: debouncedSearchTerm, limit: rowsPerPage, offset: page , sort: sortBy, status: filter }; 
    CarService.getCars(queryOptions)
      .then(cars => {      
        setCars(cars.data);
        setTotalCount(cars.totalCount);
      })
  }

  const save = (savedCar:ICar) => {
    if (savedCar) {      
        CarService.saveCar(savedCar)
        .then(response => {
          loadCars();
          showToast('Car saved successfully!');
          onClose();
        })
        .catch(error => {
          showToast('Ops! Failed to save car!',TOAST_STATUS.Error);
        })
    }    
  }

  return (
    <>
      <CarListHeader title="Find Cars" addNewCar={onOpen} setSearchTerm={setSearchTerm} filter={filter} onFilterChange={setFilter}></CarListHeader>
      <CarList cars={cars} selectedRow={selectedCar} setSelectedRow={setSelectedCar} sortBy={sortBy} setSortBy={setSortBy}></CarList>
      <CarSidePanel isOpen={isOpen} onClose={onClose} car={currentCar} save={save}></CarSidePanel>
      <Divider></Divider>
      <Pagination rowsPerPage={rowsPerPage} onChange={setRowsPerPage} totalCount={totalCount} page={page} setPage={setPage}></Pagination>
    </>
  )
}

