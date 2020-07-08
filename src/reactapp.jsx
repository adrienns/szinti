import React from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Form from "./pages/form/form";
import "./reactapp.css";
import HomePage from "./pages/homepage";
import NotFoundPage from "./pages/404.jsx";
import NavBar from "./navbar/navbar";
import AboutUs from "./pages/aboutus/aboutus.jsx";
import FinalNecklacesDisplay from "./products_display/FinalNecklacesDisplay";
import Footer from "./footer/footer.jsx";
import Cart from "./pages/cart/Cart";

import RingsInfo from "./rings/RingsInfo";
import NecklacesInfo from "./single_product_page/NecklacesInfo";
import { ProductProvider } from "./product_context";
import Model from "./products_display/modal";
import ScrollToTop from "react-router-scroll-top";
const LINKS = [
  { label: "Necklaces", link: "necklaces" },
  { label: "Earings", link: "earings" },
  { label: "Rings", link: "rings" },
  { label: "Wedding Jewelery", link: "wedding" },
  { label: "Collections", link: "collection" },
  { label: "About me", link: "aboutus" },
  { label: "Contact us", link: "form" },
];

const LINKMAP = LINKS.reduce(function (map, obj) {
  map[obj.label] = obj.link;
  return map;
}, {});

class ReactApp extends React.Component {
  render() {
    return (
      <ProductProvider>
        <Router>
          <div className="app">
            <header className="header">
              <NavBar links={LINKS} />
            </header>
            <div className="main-container">
              <Switch>
                <Route
                  path={`/${LINKMAP["About me"]}`}
                  exact
                  strict
                  component={AboutUs}
                />

                <Route
                  path="/organicproduct"
                  exact
                  strict
                  component={NecklacesInfo}
                />

                <Route
                  path={`/${LINKMAP["Rings"]}`}
                  exact
                  strict
                  component={RingsInfo}
                />
                <Route
                  path={`/${LINKMAP["Necklaces"]}`}
                  exact
                  strict
                  component={FinalNecklacesDisplay}
                />
                <Route path="/cart" exact strict component={Cart} />
                <Route
                  path={`/${LINKMAP["Contact us"]}`}
                  exact
                  strict
                  component={Form}
                />

                <Route path="/" exact component={Home} />
                <Route component={NotFoundPage} />
                <Route path="/" exact component={Home} />

                <Redirect to="/404" />
              </Switch>
              <Model />
            </div>
            <div className="footer">
              <Footer />
            </div>
          </div>
        </Router>
      </ProductProvider>
    );
  }
}

export const Home = () => (
  <div>
    <HomePage />
  </div>
);

ReactDOM.render(<ReactApp />, document.getElementById("root"));

export default ReactApp;
