import { Table, Thead, Tbody, Tr, Th, Td,  } from "@chakra-ui/react"
import { TriangleDownIcon } from '@chakra-ui/icons'
import React from "react";

export interface IColumn {
    name: string;
    field: string;
    type: string;
    isSortable?: boolean;
    props?: any;
    convert?: ConvertColumnFunc;
}

interface ConvertColumnFunc {
    (value:any): any;
}

interface SetSelectedRowFunc {
    (row:any): void;
}

interface SetSortByFunc {
    (field:string): void;
}

export interface ITableOptions {
    columns: IColumn[];
    keyField:string;   
    tableProps?: any; 
    headerProps?: any;
    rowProps?: any; 
    isSelectedProps?: any;
 }

 export interface ITableWrapperProps {
     data: any[];
     tableOptions: ITableOptions;
     selectedRow: any;
     setSelectedRow: SetSelectedRowFunc;
     sortBy?: string;
     setSortBy?: SetSortByFunc;
}   

export default function TableWrapper(props: ITableWrapperProps ) {

    function handleRowSelection(row:string){
        if ( props.setSelectedRow)
          props.setSelectedRow(row);
    }

    function handleSortSelection(e){
        if (props.setSortBy)
          props.setSortBy(e.target.id);
    }

    return (
        <Table {...props.tableOptions.tableProps}>
            <Thead>
            <Tr {...props.tableOptions.headerProps}>
                {
                    props.tableOptions.columns.map( (column: IColumn) => {
                        return ( <Th {...column.props} key={column.field} id={column.field}
                            onClick={handleSortSelection}
                            sx={{cursor: column.isSortable ? 'pointer' : '', 
                            color: column.isSortable && props.sortBy === column.field ?  'white' : null }}  
                        >
                            {column.name}
                            {
                                column.isSortable && props.sortBy === column.field ? 
                                <TriangleDownIcon ml={1}></TriangleDownIcon> : null
                            }
                        </Th> )
                    })
                }
            </Tr>
            </Thead>
            <Tbody>
            {
                props.data.map( (row) => {

                    const isSelected =  props.selectedRow && props.selectedRow === row[props.tableOptions.keyField]; 
                    return (
                        <Tr key={row[props.tableOptions.keyField]} 
                        {...props.tableOptions.rowProps}
                        sx={ isSelected ?  {...props.tableOptions.isSelectedProps} : {}}
                        onClick={() => handleRowSelection(row[props.tableOptions.keyField])}
                        >
                        {
                            props.tableOptions.columns.map( (column: IColumn) =>
                            { 
                               return ( 
                               <Td {...column.props} key={column.field}>
                                { column.convert ? column.convert(row[column.field]) : row[column.field] }
                                </Td>
                               );
                            })
                        }
                        </Tr>   
                    )      
                })
            }
            </Tbody>
         </Table>
    )
}
