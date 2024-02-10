import styled from "styled-components";

const Ingredients = ({ data }: { data: string[] }) => {
  return (
    <Wrapper>
      <h2>Ingredients</h2>
      <List>
        {data.map((d) => (
          <ListItem>
            <ListItemText>{d}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-bottom: var(--spacing);
  border-bottom: 1px solid var(--color-white-coffee);
`;

const List = styled.ul`
  color: var(--color-brandy-red);
  list-style-type: disc;
  list-style-position: outside;
  padding-left: calc(1em + 8px);
`;

const ListItem = styled.li`
  & + li {
    margin-top: 8px;
  }
`;

const ListItemText = styled.div`
  color: var(--color-wenge-brown);
  margin-left: 16px;
`;

export default Ingredients;
