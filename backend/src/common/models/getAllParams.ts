export enum CAR_STATUS {
    All = 'all',
    Available = 'available'
}

export interface IGetAllParams {
    search: string;
    limit: number; 
    offset: number;
    sort: string;
    status?: CAR_STATUS;  
}