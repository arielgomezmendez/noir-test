import "@/styles/globals.css";
import { CssBaseline } from "@mui/material";
import { GoogleFonts } from "next-google-fonts";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleFonts />
      <CssBaseline />
      <Component {...pageProps} />;
    </>
  );
}
