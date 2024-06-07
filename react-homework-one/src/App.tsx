import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import ItemPage from "./Pages/ItemPage/ItemPage";
import { NavLink } from "./interfeces/navlink";

function App() {
  const appTitle: string = "Travel app";

  const navLink: NavLink[] = [
    {
      text: "Home",
      path: "/home",
    },
    {
      text: "Items",
      path: "/items",
    },
    {
      text: "About Us",
      path: "/about-us",
    },
    {
      text: "Contact",
      path: "/contact",
    },
  ];

  return (
    <section className="App">
      <Header title={appTitle} navLink={navLink} />
      <main>
        <ItemPage />
      </main>
      <Footer />
    </section>
  );
}

export default App;
