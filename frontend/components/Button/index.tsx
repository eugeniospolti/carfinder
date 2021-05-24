import { Button } from '@chakra-ui/react';


export function ButtonPrimary(props) {
    return (
        <Button bg="brand.normal" color={'white'} _hover={{backgroundColor:'brand.dark'}} 
            onClick={props.onClick} form={props.form} {...props}>
            {props.children}
        </Button>
    )
} 

export function ButtonOutline(props) {
    return (
        <Button variant="outline" ml={3} onClick={props.onClick} {...props}>
            {props.children}
        </Button>
    )
} 

