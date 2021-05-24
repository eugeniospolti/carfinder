import TableWrapper, { IColumn, ITableOptions , ITableWrapperProps } from "../../../components/TableWrapper";

const columns: IColumn[] = [
    {
        name: 'Maker',
        field: 'maker',
        type: 'string',
        isSortable: true
    },
    {
        name: 'Model',
        field: 'model_name',
        type: 'string',
        isSortable: true
    },
    {
        name: 'Year',
        field: 'year',
        type: 'number',
        isSortable: true
    },
    {
        name: 'Color',
        field: 'color',
        type: 'string',
        isSortable: true
    },
    {
        name: 'Monthly Price',
        field: 'monthlyPrice',
        type: 'number',
        isSortable: true
    },
    {
        name: 'Available Date',
        field: 'availableDate',
        type: 'date',
        convert: (value:Date):string => {  return ( value ? value.toDateString(): "" )},
        isSortable: true  
    }
]

const tableOptions: ITableOptions = {
    columns,
    keyField: 'id',  
    tableProps: { variant : 'simple'},
    headerProps: {  bg : 'gray.400' },
    rowProps: { _hover : { color: 'white', backgroundColor:'brand.light', cursor:'pointer' } } , 
    isSelectedProps: { color: 'white', backgroundColor:'brand.dark' }
}

export default function CarList(props) {

    const tableProps: ITableWrapperProps = {
        tableOptions,
        data: props.cars,
        selectedRow: props.selectedRow,
        setSelectedRow: props.setSelectedRow,
        sortBy: props.sortBy,
        setSortBy: props.setSortBy
    };

    return (
        <TableWrapper {...tableProps}></TableWrapper>
    )
}
