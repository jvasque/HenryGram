import React from "react";
import styled from "styled-components";

const DividerStyled = styled.div`
  height: 48px;
  margin: 0 32px;
  border: solid 1px var(--color-border);
  width: 0px;
`;

export default function Divider() {
  return <DividerStyled />;
}
