import { useToast } from "@chakra-ui/react";

enum TOAST_STATUS {
    Success = 'success',
    Error = 'error'
}

enum TOAST_POSITIONS {
  Top = 'top',
  Top_Right = 'top-right',
  Top_Left =  'top-left',
  Bottom = 'bottom',
  Bottom_Right = 'bottom-right',
  Bottom_Left = 'bottom-left',
}


export default function useShowToast() {

    const toast = useToast();

    const showToast = ( title:string, 
                        status?:TOAST_STATUS, 
                        duration?:number,
                        position?: TOAST_POSITIONS ,
                        isClosable?: boolean) => {
        toast({
          title,
          status: status || TOAST_STATUS.Success,
          duration: duration || 3000,
          position: position || TOAST_POSITIONS.Bottom,          
          isClosable: isClosable || false,
        }) 
      }

    return [ showToast ]
} 

export { TOAST_STATUS, TOAST_POSITIONS }