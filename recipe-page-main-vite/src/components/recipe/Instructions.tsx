import { InstructionsData } from "@/domains/Recipe";
import styled from "styled-components";

const Instructions = ({ data }: { data: InstructionsData[] }) => {
  return (
    <Wrapper>
      <h2>Instructions</h2>
      <List type="1">
        {data.map((d) => (
          <InstructionItem key={d.num} data={d} />
        ))}
      </List>
    </Wrapper>
  );
};

const InstructionItem = ({ data }: { data: InstructionsData }) => {
  return (
    <ListItem>
      <ListItemText>
        <BoldText>{data.step}</BoldText>: {data.description}
      </ListItemText>
    </ListItem>
  );
};

const List = styled.ol`
  list-style-type: revert;
  list-style-position: outside;
  padding-left: calc(1em + 8px);
  color: var(--color-brandy-red);
  font-weight: var(--font-weight-bold);
`;

const ListItem = styled.li`
  & + li {
    margin-top: 8px;
  }
`;

const ListItemText = styled.div`
  margin-left: 16px;
  color: var(--color-wenge-brown);
  font-weight: var(--font-weight-regular);
`;

const BoldText = styled.span`
  font-weight: var(--font-weight-bold);
`;

const Wrapper = styled.div`
  padding-bottom: var(--spacing);
  border-bottom: 1px solid var(--color-white-coffee);
`;

export default Instructions;
