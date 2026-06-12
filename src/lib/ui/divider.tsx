import styled from "styled-components";

interface DividerProps {
  label?: string;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin:15px auto;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom:2rem;
`;

const Line = styled.div`
  flex: 1;
  height: 1px;
  background: ${({ theme }) => theme.colors.textSecondary};
`;

const Label = styled.span`
  font-size: ${({ theme }) => theme.typography.caption.size};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const SectionDivider = ({ label }: DividerProps) => (
  <Wrapper>
    <Line />
    {label && <Label>{label}</Label>}
    <Line />
  </Wrapper>
);