import { useShallow } from "zustand/react/shallow";
import { IBeer, IFormInputs } from "../../../models/products";
import useBeerStore from "../../../store/useBeerStore";
import { CreateForm } from "../../organisms/create-form/CreateForm";
import { StyledCreateBeer } from "./CreateBeer.styled";

export const CreateBeer = () => {
    const {addBeer} = useBeerStore(useShallow(((state) => ({
        addBeer: state.addBeer
    }))));
    
    const handleCreateBeer = (data: IFormInputs) => {
        const newBeer: IBeer = {
            ...data,
            id: Math.random(),
            rating: {
                average: 0,
                reviews: 0
            }
        };
        addBeer(newBeer);
        alert("New beer created!");
    };

    return (
        <StyledCreateBeer>
            <CreateForm createData={handleCreateBeer}></CreateForm>
        </StyledCreateBeer>
    )
}

export default CreateBeer;