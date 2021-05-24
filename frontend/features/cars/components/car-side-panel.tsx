import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormControl, FormErrorMessage, FormLabel, Input, NumberInput, NumberInputField, Select, Stack } from "@chakra-ui/react"
import React, { useEffect }  from "react"
import { ButtonOutline, ButtonPrimary } from "../../../components/Button"
import { DateToStringFormat } from '../../../core/helpers';

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const carValidationSchema = yup.object().shape({
    maker: yup.string().required(),
    model_name: yup.string().required(),
    year: yup.number().required(),
    color: yup.string().required(),
    monthlyPrice: yup.number().moreThan(0).required(),
    availableDate: yup.date().nullable().transform((curr, orig) => { return orig === '' ? null : curr}).notRequired()
});

type CarFormInputs = {
    maker: string;
    model_name: string;
    year: number;
    color: string;
    monthlyPrice: number;
    availableDate?: Date;
  };

export default function CarSidePanel(props) {
  
    const hasCar = !!props.car.id;
    const { register, handleSubmit, reset, formState: { errors } } = useForm<CarFormInputs>({
        mode: "onBlur",
        resolver: yupResolver(carValidationSchema),
        defaultValues: {...props.car, availableDate: DateToStringFormat(props.car.availableDate) }
      });

    useEffect(() => {
        reset({...props.car, availableDate: DateToStringFormat(props.car.availableDate) });
    }, [props.car.id])

    const handleOnclose = () => {
        reset();
        if (props.onClose)
            props.onClose();
    }

    return (
        <Drawer
          isOpen={props.isOpen}
          placement="right"
          onClose={handleOnclose}
          size={'lg'}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>{hasCar ? `Edit car`:`Add new car`}</DrawerHeader>
  
            <DrawerBody>

                <form
                    id="carForm"
                    onSubmit={
                        handleSubmit(data => {
                            props.save(data);
                            reset();
                        })}>
                    <Stack direction="column" spacing={4}>
                        <FormControl id="maker" isRequired isInvalid={!!errors?.maker?.message} >
                            <FormLabel>Maker</FormLabel>
                            <Input type="text" name="maker" {...register("maker")}/>
                            <FormErrorMessage>{errors?.maker?.message}</FormErrorMessage>
                        </FormControl>
                        <FormControl id="model_name" isRequired isInvalid={!!errors?.model_name?.message}>
                            <FormLabel>Model</FormLabel>
                            <Input type="text" name="model_name"  {...register("model_name")} />
                            <FormErrorMessage>{errors?.model_name?.message}</FormErrorMessage>
                        </FormControl>
                        <Stack direction="row" spacing={4}>
                            <FormControl id="year" isRequired>
                                <FormLabel>Year</FormLabel>
                                <Select placeholder="Select the year" name="year" 
                                {...register("year")} 
                                isInvalid={!!errors?.year?.message}>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                    <option value="2017">2017</option>
                                    <option value="2016">2016</option>
                                    <option value="2015">2015</option>
                                </Select>
                                <FormErrorMessage>{errors?.year?.message}</FormErrorMessage>
                            </FormControl>

                            <FormControl id="color" isRequired>
                                <FormLabel>Color</FormLabel>
                                <Select placeholder="Select the color" name="color" 
                                 {...register("color")}
                                 isInvalid={!!errors?.color?.message} >
                                    <option value="White">White</option>
                                    <option value="Black">Black</option>
                                    <option value="Red">Red</option>
                                    <option value="Gray">Gray</option>
                                </Select>
                                <FormErrorMessage>{errors?.color?.message}</FormErrorMessage>
                            </FormControl>
                        </Stack>

                        <Stack direction="row" spacing={4}>
                            <FormControl id="monthlyPrice" isRequired>
                                <FormLabel>Monthly Price</FormLabel>
                                <NumberInput defaultValue={0} precision={2} isInvalid={!!errors?.monthlyPrice?.message} >
                                    <NumberInputField name="monthlyPrice" {...register("monthlyPrice")}  />
                                </NumberInput>
                                <FormErrorMessage>{errors?.monthlyPrice?.message}</FormErrorMessage>
                             </FormControl>

                             <FormControl id="availableDate">
                                <FormLabel htmlFor="availableDate">Available date</FormLabel>
                                <Input type="text" name="availableDate" placeholder="MM-DD-YYYY" {...register("availableDate")} isInvalid={!!errors?.availableDate?.message}/> 
                                <FormErrorMessage>{errors?.availableDate?.message}</FormErrorMessage>                         
                            </FormControl>
                        </Stack>                        
                    </Stack>
                </form>              
            </DrawerBody>
  
            <DrawerFooter justifyContent={'flex-start'} >
              <ButtonPrimary form="carForm" type="submit" >Save</ButtonPrimary>
              <ButtonOutline onClick={handleOnclose}>Cancel</ButtonOutline>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
    )
  } 