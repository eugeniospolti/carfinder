import { IQueryOptions, toQueryString } from '../../../core/models/queryOptions';
import api from  '../../../core/services/api';
import { ICar } from "../../../core/models/car.model";
import { MultiResult } from '../../../core/results';

const LISTING_API:string = '/cars';

const carMap = (car:ICar):ICar => {
    return {...car, availableDate: new Date(car.availableDate)}
} 

const ListingService = {

    getCars:(options:IQueryOptions = {}): Promise<MultiResult<ICar>> => {
        const queryParams = toQueryString(options);
        return api.get<MultiResult<ICar>>(`${LISTING_API}?${queryParams}`)
        .then(response => { return { data: response.data.data.map(car => carMap(car)), totalCount: response.data.totalCount }});
    }
}  

export default ListingService;