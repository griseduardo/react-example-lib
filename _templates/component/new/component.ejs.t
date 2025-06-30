---
to: src/components/<%=name%>/<%=name%>.tsx
---
import React from "react";
import styled from "styled-components";

export interface <%=name%>Props {
}

export interface Styled<%=name%>Props {
}

export const Styled<%=name%> = styled.<%=html%><Styled<%=name%>Props>`
`;

const <%=name%> = ({
}: <%=name%>Props) => (
  <Styled<%=name%>
  >
  </Styled<%=name%>>
);

export default <%=name%>;
