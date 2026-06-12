import styled from "styled-components";
import { useState, useEffect } from "react";
import { EyeClosed, EyeIcon } from "lucide-react";

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.typography.bodySm.size};
  font-weight: 600;
`;

interface InputProps {
  $error?: boolean;
}

export const Input = styled.input<InputProps>`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid
    ${({ theme, $error }) =>
      $error ? theme.colors.error : theme.colors.textSecondary};
  margin-bottom: 1rem;

  padding: 12px 0;

  color: ${({ theme }) => theme.colors.text};

  &:focus {
    outline: none;
    border-bottom-color: ${({ theme, $error }) =>
      $error ? theme.colors.error : theme.colors.secondary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const PasswordInput = ({ ...props }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (!value) setShowPassword(false);
  }, [value, setShowPassword]);

  return (
    <Container>
      <Input
        type={showPassword ? "text" : "password"}
        {...props}
        onChange={(e) => setValue(e.target.value)}
      />

      {value && (
        <ToggleButton
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <EyeIcon size={24} /> : <EyeClosed size={24} />}
        </ToggleButton>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const ToggleButton = styled.button`
  position: absolute;

  right: 0;
  top: 40%;

  transform: translateY(-50%);

  background: transparent;
  border: none;

  cursor: pointer;

  color: ${({ theme }) => theme.colors.secondary};

  font-size: ${({ theme }) => theme.typography.bodySm.size};

  font-weight: 600;
`;
