import styled from "styled-components";
import { ThemeType } from "@/styles/theme";

export const ThemeStyles = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }: { theme: ThemeType }) => theme.colors.background};

  color: ${({ theme }: { theme: ThemeType }) => theme.colors.tertiary};

  h1 {
    color: ${({ theme }: { theme: ThemeType }) => theme.colors.primary};
  }

  h2 {
    color: ${({ theme }: { theme: ThemeType }) => theme.colors.secondary};
  }
`;
