import { IBeer, IFormInputs } from "../../../models/products";
import { CreateForm } from "../../organisms/create-form/CreateForm";
import { StyledCreateBeer } from "./CreateBeer.styled";
import { useBeersService } from "../../../services/useBeersService";

export const CreateBeer = () => {
    const {createBeer} = useBeersService();
    
    const handleCreateBeer = (data: IFormInputs) => {
        const newBeer: IBeer = {
            ...data,
            id: Math.random(),
            rating: {
                average: 0,
                reviews: 0
            }
        };
        createBeer(newBeer);
        alert("New beer created!");
    };

    return (
        <StyledCreateBeer>
            <CreateForm createData={handleCreateBeer}></CreateForm>
        </StyledCreateBeer>
    )
}

export default CreateBeer;