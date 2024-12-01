import { StyledHero, StyledHeader } from "./Hero.styled";

interface IHeroProps {
    imageUrl: string;
    title: string;
}

export const Hero: React.FC<IHeroProps> = ({imageUrl, title}) => {

    return (
        <StyledHero image={imageUrl}>
            <StyledHeader>{title}</StyledHeader>
        </StyledHero>
    )
}