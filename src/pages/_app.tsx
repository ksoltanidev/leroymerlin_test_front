import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import { ThemeStyles } from "@/components/ThemeStyles/ThemeStyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ThemeStyles>
        <Component {...pageProps} />
      </ThemeStyles>
    </ThemeProvider>
  );
}
