import { memo } from "react";
import { StyledContainer, StyledImage } from "./Image.styled";

interface IImageProps {
    imageUrl: string;
    title: string;
}

export const Image: React.FC<IImageProps> = memo(({imageUrl, title}) => {

    return (
        <StyledContainer>
            <StyledImage src={imageUrl} alt={title}></StyledImage>
        </StyledContainer>
    )
});