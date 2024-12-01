import { UseFormRegister } from "react-hook-form";
import { IFormInputs } from "../../../models/products";
import { StyledInput } from "./input.styled";

interface IInputProps {
    register: UseFormRegister<IFormInputs>,
    name: keyof IFormInputs,
}

export const Input: React.FC<IInputProps> = ({register, name}) => {
    return (
        <StyledInput defaultValue={""} {...register(name, {required: true})} />
    );
}