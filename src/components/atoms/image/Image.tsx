import { StyledContainer, StyledImage } from "./Image.styled";

interface IImageProps {
    imageUrl: string;
    title: string;
}

export const Image: React.FC<IImageProps> = ({imageUrl, title}) => {

    return (
        <StyledContainer>
            <StyledImage src={imageUrl} alt={title}></StyledImage>
        </StyledContainer>
    )
}