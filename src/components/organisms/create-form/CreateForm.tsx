import { IFormInputs } from "../../../models/products";
import { Button } from "../../atoms/button/Button"
import { StyledForm } from "./CreateForm.styled"
import { useForm, SubmitHandler } from "react-hook-form"
import { FormItem } from "../../molecules/form-item/FormItem";
import { memo } from "react";

interface IFormProps {
    createData: (data: IFormInputs) => void;
}

export const CreateForm: React.FC<IFormProps> = memo(({createData}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInputs>()
    
    const onSubmit: SubmitHandler<IFormInputs> = (data) => {
        createData(data);
    };

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <FormItem name="name" register={register} error={errors.name} />
            <FormItem name="price" register={register} error={errors.price} />
            <FormItem name="image" register={register} error={errors.image} />
            
            <Button label="Submit" type="submit" position="left"></Button>
        </StyledForm>
    )
});