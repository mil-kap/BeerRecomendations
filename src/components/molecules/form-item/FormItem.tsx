import { FieldError, UseFormRegister } from "react-hook-form"
import { Error } from "../../atoms/error/Error"
import { StyledFormItem } from "./FormItem.styled"
import { Label } from "../../atoms/label/Label"
import { Input } from "../../atoms/input/input"
import { IFormInputs } from "../../../models/products"
import { memo } from "react"

interface IFormItemProps {
    name: keyof IFormInputs,
    register: UseFormRegister<IFormInputs>,
    error?: FieldError
}

export const FormItem: React.FC<IFormItemProps> = memo(({name, register, error}) => {
    return (
        <StyledFormItem>
            <Label name={name} />
            <Input name={name} register={register} />
            {error && <Error error="This field is required" />}
        </StyledFormItem>
    )
});