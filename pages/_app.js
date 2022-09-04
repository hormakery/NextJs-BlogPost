import "../styles/globals.css";
import Header from "../components/header/Header";
// import { createContext, Fragment, useState } from "react";

// export const ThemeContext = createContext(null);

function MyApp({ Component, pageProps }) {
  // const [theme, setTheme] = useState('light')

  // const toggleTheme=()=>{
  //   setTheme((curr) =>(curr === "light"? "dark" : "light"));
  // }

  return (
    <Fragment>
      <Header />
      <main className="container">
        <Component {...pageProps} />
      </main>
    </Fragment>
  );
}

export default MyApp;
