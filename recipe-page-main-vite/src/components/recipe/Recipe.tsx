import styled from "styled-components";
import PreparationTime from "./PreparationTime";
import { RecipeData } from "@domains/Recipe";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import Nutrition from "./Nutrition";

const Recipe = ({ data }: { data: RecipeData }) => {
  return (
    <Wrapper>
      <Heading>
        <h1>{data.title}</h1>
        <p> {data.description}</p>
      </Heading>
      <PreparationTime data={data.prepTime} />
      <Ingredients data={data.ingredients} />
      <Instructions data={data.instructions} />
      <Nutrition data={data.nutrition} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  --spacing: 32px;
  display: flex;
  flex-direction: column;
  gap: var(--spacing);
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export default Recipe;
