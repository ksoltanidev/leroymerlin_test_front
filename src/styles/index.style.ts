import styled from "styled-components";
import { ThemeType } from "@/styles/theme";

export const StyledPageContainer = styled.div`
  padding: 1rem;
  height: 100%;
  overflow-x: auto;
`;

export const StyledSearchContainer = styled.div`
  border: 1px solid ${({ theme }: { theme: ThemeType }) => theme.colors.primary};
  border-radius: 5px;
  background: #252525;
  padding: 0 1rem 1rem 1rem;

  h2 {
    font-size: 1rem;
  }

  input {
    width: calc(100% - 1rem);
    padding: 0.5rem;
  }
`;

export const StyledEmptySearchContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding: 10px;
  gap: 1rem;
  border-radius: 5px;
  border: 1px solid ${({ theme }: { theme: ThemeType }) => theme.colors.primary};
  background: #252525;
  p {
    width: 0;
    flex-grow: 1;
    flex-shrink: 0;
  }
`;

export const StyledWarningContainer = styled.div`
  width: 90px;
  height: 90px;
  background-color: ${({ theme }: { theme: ThemeType }) => theme.colors.primary};
`;

export const StyledMonsterText = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  //border-bottom: 1px solid ${({ theme }: { theme: ThemeType }) => theme.colors.primary};
`;

export const StyledSeparator = styled.div<{ randomGradientValue: number }>`
  width: 90%;
  margin: 0 auto;
  height: 2px;
  background: ${({ theme, randomGradientValue }) => `linear-gradient(
    11deg,
    ${theme.colors.primary} 0%,
    ${theme.colors.primary} ${40 + randomGradientValue}%,
    ${theme.colors.background} ${50 + randomGradientValue}%,
    ${theme.colors.background} ${60 + randomGradientValue}%,
    ${theme.colors.primary} ${70 + randomGradientValue}%,
    ${theme.colors.primary} 100%
  );`};
`;
