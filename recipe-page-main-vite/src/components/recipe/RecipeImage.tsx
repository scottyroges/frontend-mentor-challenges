import { QUERIES } from "@/constants";
import styled from "styled-components";

const RecipeImage = ({ image }: { image: string }) => {
  return (
    <ImageWrapper>
      <Image src={image} />
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  border-radius: 12px;
  overflow: hidden;

  @media ${QUERIES.phoneAndDown} {
    border-radius: 0px;
    margin-left: -32px;
    margin-right: -32px;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
`;

export default RecipeImage;
