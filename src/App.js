import React, { useEffect } from "react";
import "./style/App.scss";
import RouteProvider from "./contexts/RouteContext";
import UserProvider from "./contexts/UserContext";
import SoundProvider from "./contexts/SoundContext";
import Index from "./pages/Index";

const App = () => {
  useEffect(() => {
    const redirectPage = () => {
      if (window.location.href.match(/female/)?.length)
        window.location.href =
          "https://www.foryoursweetheart.org/%E0%B8%86%E0%B8%B2%E0%B8%95%E0%B8%81%E0%B8%A3%E0%B8%9A%E0%B8%99%E0%B9%82%E0%B8%95%E0%B9%8A%E0%B8%B0%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3/TH/";
    };
    redirectPage();
  }, []);
  return (
    <UserProvider>
      <RouteProvider>
        <SoundProvider>
          <Index />
        </SoundProvider>
      </RouteProvider>
    </UserProvider>
  );
};

export default App;
