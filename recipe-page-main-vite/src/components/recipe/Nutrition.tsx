import { NutritionData } from "@/domains/Recipe";
import styled from "styled-components";

const Nutrition = ({ data }: { data: NutritionData }) => {
  return (
    <div>
      <h2>Nutrition</h2>
      <SubText>
        The table below shows nutritional values per serving without the
        additional fillings.
      </SubText>
      <Table>
        <Row>
          <Cell>
            <LeftData>Calories</LeftData>
          </Cell>
          <Cell>
            <RightData>{data.calories}kcal</RightData>
          </Cell>
        </Row>

        <Row>
          <Cell>
            <LeftData>Carbs</LeftData>
          </Cell>
          <Cell>
            <RightData>{data.carbs}g</RightData>
          </Cell>
        </Row>
        <Row>
          <Cell>
            <LeftData>Protein</LeftData>
          </Cell>
          <Cell>
            <RightData>{data.protein}g</RightData>
          </Cell>
        </Row>
        <Row>
          <Cell>
            <LeftData>Fat</LeftData>
          </Cell>
          <Cell>
            <RightData>{data.fat}g</RightData>
          </Cell>
        </Row>
      </Table>
    </div>
  );
};

const SubText = styled.p`
  margin-bottom: 24px;
`;

const Table = styled.table`
  width: 100%;
`;

const Row = styled.tr`
  padding: 12px 32px;

  &:not(:last-of-type) {
    border-bottom: 1px solid var(--color-white-coffee);
  }
`;

const Cell = styled.td`
  display: table-cell;
  max-width: 0px;
`;

const LeftData = styled.div`
  margin: 12px 32px;
`;

const RightData = styled.div`
  font-weight: var(--font-weight-bold);
  color: var(--color-brandy-red);
`;

export default Nutrition;
