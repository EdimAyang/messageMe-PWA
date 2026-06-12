import styled, { css } from "styled-components";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface StyledButtonProps {
  $variant: ButtonVariant;
  $size: ButtonSize;
  $fullWidth?: boolean;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
}

const sizeStyles = {
  sm: css`
    height: 40px;
    padding: 0 16px;
  `,

  md: css`
    height: 48px;
    padding: 0 20px;
  `,

  lg: css`
    height: 56px;
    padding: 0 24px;
  `,
};

const variantStyles = {
  primary: css`
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};

    &:hover:not(:disabled) {
      opacity: 0.9;
    }
  `,

  secondary: css`
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};

    &:hover:not(:disabled) {
      opacity: 0.9;
    }
  `,

  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.text};

    &:hover:not(:disabled) {
      background: rgba(255, 255, 255, 0.05);
    }
  `,
};

const StyledButton = styled.button<StyledButtonProps>`
  border: none;
  outline: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: ${({ theme }) => theme.spacing.sm};

  border-radius: ${({ theme }) => theme.radius.md};

  font-size: ${({ theme }) => theme.typography.body.size};
  font-weight: 600;

  transition: all 0.2s ease;

  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};

  ${({ $size }) => sizeStyles[$size]}
  ${({ $variant }) => variantStyles[$variant]}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? "Loading..." : children}
    </StyledButton>
  );
};
