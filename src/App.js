import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Start1 from "./pages/Start1";
import {Map1} from "./pages/Map1/Map1";
import {Greeting} from "./pages/Greeting/Greeting";
import {Frame} from "./pages/Frame/Frame";
import {Main} from "./pages/Main/Main";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/map":
        title = "";
        metaDescription = "";
        break;
      case "/greeting":
        title = "";
        metaDescription = "";
        break;
      case "/notice":
        title = "";
        metaDescription = "";
        break;
      case "/main":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Start1 />} />
      <Route path="/map" element={<Map1 />} />
      <Route path="/greeting" element={<Greeting />} />
      <Route path="/notice" element={<Frame />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  );
}
export default App;
