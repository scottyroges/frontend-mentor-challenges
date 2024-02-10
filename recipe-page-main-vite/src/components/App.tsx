import styled from "styled-components";
import Card from "./Card";
import RecipeImage from "./recipe/RecipeImage";
import image from "@assets/images/image-omelette.jpeg";
import Recipe from "./recipe/Recipe";
import { RecipeData } from "@domains/Recipe";
import { QUERIES } from "@/constants";

function App() {
  const recipe: RecipeData = {
    title: "Simple Omelette Recipe",
    description:
      "An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.",
    prepTime: {
      total: "Approximately 10 minutes",
      preparation: "5 minutes",
      cooking: "5 minutes",
    },
    ingredients: [
      "2-3 large eggs",
      "Salt, to taste",
      "Pepper, to taste",
      "1 tablespoon of butter or oil",
      "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
    ],
    instructions: [
      {
        num: 1,
        step: "Beat the eggs",
        description:
          "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
      },
      {
        num: 2,
        step: "Heat the pan",
        description:
          "Place a non-stick frying pan over medium heat and add butter or oil.",
      },
      {
        num: 3,
        step: "Cook the omelette",
        description:
          "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
      },
      {
        num: 4,
        step: "Add fillings (optional)",
        description:
          "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
      },
      {
        num: 5,
        step: "Fold and serve",
        description:
          "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
      },
      {
        num: 6,
        step: "Enjoy",
        description: "Serve hot, with additional salt and pepper if needed.",
      },
    ],
    nutrition: {
      calories: 227,
      carbs: 0,
      protein: 20,
      fat: 22,
    },
  };
  return (
    <>
      <Wrapper>
        <StyledCard>
          <RecipeImage image={image} />
          <Recipe data={recipe} />
        </StyledCard>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.main`
  display: grid;
  place-content: center;
  min-height: 100%;
  padding-top: 125px;
  padding-bottom: 125px;

  @media ${QUERIES.phoneAndDown} {
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;

const StyledCard = styled(Card)`
  gap: 40px;

  @media ${QUERIES.phoneAndDown} {
    gap: 32px;
  }
`;

export default App;
