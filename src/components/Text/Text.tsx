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
  color: ${(props) => (props.$color ? props.$color : "#000")};
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : "16px")};
  font-weight: ${(props) =>
    props.$fontWeight
      ? props.$fontWeight
      : props.$weight
        ? props.$weight
        : "normal"};
  font-family: ${(props) => (props.$fontFamily ? props.$fontFamily : "Arial")};
`;

const Text = ({
  children,
  color,
  weight,
  fontWeight,
  fontSize,
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
