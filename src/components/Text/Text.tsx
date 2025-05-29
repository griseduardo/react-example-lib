import React from "react";
import styled from "styled-components";

export interface TextProps {
  children: React.ReactNode;
  color?: string;
  weight?: "normal" | "bold";
  fontWeight?: number;
  fontSize?: string;
  fontFamily?: string;
}

export interface StyledTextProps {
  $color?: string;
  $weight?: "normal" | "bold";
  $fontWeight?: number;
  $fontSize?: string;
  $fontFamily?: string;
}

export const StyledText = styled.span<StyledTextProps>`
  ${(props) => props.$color && `color: ${props.$color};`}
  ${(props) => props.$fontSize && `font-size: ${props.$fontSize};`}
  font-weight: ${(props) =>
    props.$fontWeight
      ? props.$fontWeight
      : props.$weight
        ? props.$weight
        : "normal"};
  ${(props) => props.$fontFamily && `font-family: ${props.$fontFamily};`}
`;

const Text = ({
  children,
  color = "#000",
  weight = "normal",
  fontWeight,
  fontSize = "16px",
  fontFamily,
}: TextProps) => (
  <StyledText
    $color={color}
    $weight={weight}
    $fontWeight={fontWeight}
    $fontSize={fontSize}
    $fontFamily={fontFamily}
  >
    {children}
  </StyledText>
);

export default Text;
