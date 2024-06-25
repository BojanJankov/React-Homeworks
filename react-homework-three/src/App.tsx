import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import { NavLinkModel } from "./Model/core.model";
import HomePage from "./Pages/HomePage/HomePage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import ItemPage from "./Pages/ItemPage/ItemPage";
import DestinationPage from "./Pages/DestinationPage/DestinationPage";
import TripDetailsPage from "./Pages/TripDetailsPage/TripDetailsPage";
import SummaryPage from "./Pages/SummaryPage/SummaryPage";

function App() {
  const navLinkData: NavLinkModel[] = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/destination",
      text: "Destination",
    },
    {
      path: "/trip-details",
      text: "Trip details",
    },
  ];

  return (
    <section className="App">
      <Header title="Packing App" navLinkData={navLinkData} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/item-page/:gender" element={<ItemPage />} />
          <Route path="/destination" element={<DestinationPage />} />
          <Route path="/trip-details" element={<TripDetailsPage />} />
          <Route path="/summary" element={<SummaryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </section>
  );
}

export default App;
