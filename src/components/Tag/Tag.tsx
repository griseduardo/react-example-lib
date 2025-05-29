import React from "react";
import styled from "styled-components";
import Text from "../Text/Text";

export interface TagProps {
  type?: "default" | "success" | "alert" | "error";
  text: string;
  textColor?: string;
  textFontWeight?: number;
  textFontSize?: string;
  textFontFamily?: string;
  backgroundColor?: string;
  format?: "square" | "semiRounded" | "rounded";
  borderRadius?: string;
  size?: "small" | "medium" | "large";
  padding?: string;
}

export interface StyledTagProps {
  $type?: "default" | "success" | "alert" | "error";
  $textColor?: string;
  $textFontWeight?: number;
  $textFontSize?: string;
  $textFontFamily?: string;
  $backgroundColor?: string;
  $format?: "square" | "semiRounded" | "rounded";
  $borderRadius?: string;
  $size?: "small" | "medium" | "large";
  $padding?: string;
}

export const StyledTag = styled.div<StyledTagProps>`
  border: none;
  padding: ${(props) =>
    props.$padding
      ? props.$padding
      : props.$size === "large"
        ? "15px 20px"
        : props.$size === "medium"
          ? "10px 12px"
          : props.$size === "small" && "7px"};
  background-color: ${(props) =>
    props.$backgroundColor
      ? props.$backgroundColor
      : props.$type === "error"
        ? "#e97451"
        : props.$type === "alert"
          ? "#f8de7e"
          : props.$type === "success"
            ? "#50c878"
            : props.$type === "default" && "#d3d3d3"};
  pointer-events: none;
  border-radius: ${(props) =>
    props.$borderRadius
      ? props.$borderRadius
      : props.$format === "rounded"
        ? "30px"
        : props.$format === "semiRounded"
          ? "5px"
          : props.$format === "square" && "0"};
  width: fit-content;
`;

const Tag = ({
  text = "Tag",
  type = "default",
  textColor = "#fff",
  textFontWeight = 600,
  textFontSize,
  textFontFamily,
  backgroundColor,
  format = "semiRounded",
  borderRadius,
  size = "medium",
  padding,
}: TagProps) => {
  const fontSize = textFontSize
    ? textFontSize
    : size === "large"
      ? "18px"
      : size === "small"
        ? "14px"
        : "16px";

  return (
    <StyledTag
      data-testid="tag"
      $type={type}
      $backgroundColor={backgroundColor}
      $format={format}
      $borderRadius={borderRadius}
      $size={size}
      $padding={padding}
    >
      <Text
        color={textColor}
        fontWeight={textFontWeight}
        fontSize={fontSize}
        fontFamily={textFontFamily}
      >
        {text}
      </Text>
    </StyledTag>
  );
};

export default Tag;
