import styled from "styled-components";

interface ButtonProps {
  $width?: number;
  $size?: number;
  $weight?: string;
  $border?: boolean;
  $color?: string;
  $background?: string;
}

const Button = styled.button<ButtonProps>`
  height: var(--button-height-1);
  border-radius: var(--button-border);

  border: ${({ $border }) => ($border ? "var(--border-button-1)" : "none")};

  width: ${({ $width }) =>
    $width ? `var(--button-width-${$width})` : "var(--button-width-1)"};

  background-color: ${({ $background }) =>
    $background ? `var(--${$background})` : "var(--brand-1)"};

  color: ${({ $color }) => ($color ? `var(--${$color})` : "var(--grey-10)")};

  font-size: ${({ $size }) =>
    $size ? `var(--font-body-${$size})` : "var(--font-body-1)"};

  font-weight: ${({ $weight }) =>
    $weight ? `var(--${$weight})` : "var(--font-semibold)"};
`;

export default Button;
