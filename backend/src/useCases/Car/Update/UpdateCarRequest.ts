export interface UpdateCarRequest {
    id: string;
    maker: string;
    model: string;
    year: number;
    color: string;
    monthlyPrice: number;
    availableDate: Date;
}