import { IQueryOptions, toQueryString } from '../../../core/models/queryOptions';
import api from  '../../../core/services/api';
import { ICar } from  '../../../core/models/car.model';
import { MultiResult } from '../../../core/results';

const CAR_API:string = '/cars';

const carMap = (car:ICar):ICar => {
    return {...car, availableDate: car.availableDate ? new Date(car.availableDate) : null }
} 

const CarService = {

    getCar:(id:string): Promise<ICar>  => {
        return api.get<ICar>(`${CAR_API}/${id}`)
        .then(response => carMap(response.data));
    },
    getCars:(options:IQueryOptions = {}): Promise<MultiResult<ICar>> => {
        const queryParams = toQueryString(options);
        return api.get<MultiResult<ICar>>(`${CAR_API}?${queryParams}`)
        .then(response => { return { data: response.data.data.map(car => carMap(car)), totalCount: response.data.totalCount }});
    },
    saveCar:(car:ICar):Promise<ICar> => {
        const hasId = !!car.id;
        if(hasId)
        {
            return api.put<ICar>(`${CAR_API}/${car.id}`,car)
            .then(response => carMap(response.data));
        }
        else {
            return api.post<ICar>(`${CAR_API}`,car)
            .then(response => carMap(response.data));
        }
    }
}  

export default CarService;