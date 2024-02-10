import { PrepTimeData } from "@/domains/Recipe";
import styled from "styled-components";

const PreparationTime = ({ data }: { data: PrepTimeData }) => {
  return (
    <Wrapper>
      <Title>Preparation Time</Title>
      <List>
        <ListItem>
          <ListItemText>
            <BoldText>Total</BoldText>: {data.total}
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <BoldText>Preparation</BoldText>: {data.preparation}
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <BoldText>Cooking</BoldText>: {data.cooking}
          </ListItemText>
        </ListItem>
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--color-snow);
  padding: 28px;
`;

const Title = styled.h3`
  color: var(--color-dark-raspberry);
  margin-bottom: 16px;
`;

const List = styled.ul`
  list-style-type: disc;
  list-style-position: inside;
  color: var(--color-dark-raspberry);
  padding-left: 8px;
`;

const ListItem = styled.li`
  & + li {
    margin-top: 8px;
  }
`;

const ListItemText = styled.span`
  margin-left: 16px;
  color: var(--color-wenge-brown);
`;

const BoldText = styled.span`
  font-weight: var(--font-weight-bold);
`;

export default PreparationTime;
