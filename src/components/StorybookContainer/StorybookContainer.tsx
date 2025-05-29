import React from "react";
import styled from "styled-components";

export interface StorybookContainerProps {
  children: React.ReactNode;
}

export const StyledStorybookContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const StorybookContainer = ({ children }: StorybookContainerProps) => (
  <StyledStorybookContainer>{children}</StyledStorybookContainer>
);

export default StorybookContainer;
