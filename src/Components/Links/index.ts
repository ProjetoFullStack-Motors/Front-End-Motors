import { Link } from "react-router-dom";
import styled from "styled-components";

interface LinkProps {
  $width?: number;
  $size?: number;
  $weight?: string;
  $border?: boolean;
  $color?: string;
  $background?: string;
  $display?: boolean;
  $disable?: boolean;
  $minWidth?: number;
  $maxWidth?: number;
  $align?: string;
}

const LinkStyle = styled(Link)<LinkProps>`
  min-height: var(--button-height-1);
  border-radius: var(--button-border);

  border: ${({ $border }) => ($border ? "var(--border-button-1)" : "none")};

  text-align: ${({ $align }) => ($align ? "center" : "none")};
  padding-top: 12px;

  width: ${({ $width }) =>
    $width ? `var(--button-width-${$width})` : "var(--button-width-1)"};

  min-width: ${({ $minWidth }) =>
    $minWidth ? `var(--button-width-${$minWidth})` : "none"};

  max-width: ${({ $maxWidth }) =>
    $maxWidth ? `var(--button-width-${$maxWidth})` : "none"};

  background-color: ${({ $background }) =>
    $background ? `var(--${$background})` : "var(--brand-1)"};

  color: ${({ $color }) => ($color ? `var(--${$color})` : "var(--grey-10)")};

  font-size: ${({ $size }) =>
    $size ? `var(--font-body-${$size})` : "var(--font-body-1)"};

  font-weight: ${({ $weight }) =>
    $weight ? `var(--${$weight})` : "var(--font-semibold)"};

  @media (min-width: 1024px) {
    display: ${({ $display }) => ($display ? "none" : "block")};
  }

  cursor: ${({ $disable }) => ($disable ? "none" : "pointer")};
`;

export default LinkStyle;
