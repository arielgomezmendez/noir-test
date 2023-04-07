import "@/styles/globals.css";
import { CssBaseline } from "@mui/material";
import { GoogleFonts } from "next-google-fonts";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap" />
      <CssBaseline />
      <Component {...pageProps} />;
    </>
  );
}
