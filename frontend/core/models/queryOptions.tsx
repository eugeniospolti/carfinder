export interface IQueryOptions {
    search?: string;
    limit?: number;
    offset?: number;
    sort?: string;
}


const toQueryString = (params) => {
    return Object.keys(params).map((key) => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
    }).join('&')
}

export { toQueryString }