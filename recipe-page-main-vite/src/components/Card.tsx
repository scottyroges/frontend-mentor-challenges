import { QUERIES } from "@/constants";
import styled from "styled-components";

const Card = ({ children, ...delegated }: { children?: React.ReactNode }) => {
  return <Wrapper {...delegated}>{children}</Wrapper>;
};

const Wrapper = styled.article`
  background: var(--color-white);
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  padding: 40px;
  max-width: 750px;

  @media ${QUERIES.phoneAndDown} {
    border-radius: 0px;
    padding: 32px;
    padding-top: 0px;
  }
`;

export default Card;
