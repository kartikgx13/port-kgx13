import "../styles/styles.css"
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as React from "react";
import { useCallback } from "react";
import ScrollToTop from "../../components/ScrollToTop";
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }) {
const timeoutRef = React.useRef();

  const clearTimer = React.useCallback(
    () => clearTimeout(timeoutRef.current),
    []
  );

  React.useEffect(() => {
    if (timeoutRef.current) clearTimer();

    timeoutRef.current = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1000);

    return () => {
      clearTimer();
    };
  }, [clearTimer]);
  return (
    <Component {...pageProps} />
  )
}
