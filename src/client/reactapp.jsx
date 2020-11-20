import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./global_vars";
import Form from "./pages/form/Form";
import "./reactapp.css";
import HomePage from "./pages/Homepage";
import NotFoundPage from "./pages/404";
import NavBar from "./navbar/navbar";
import AboutUs from "./pages/aboutus/AboutUs";
import FinalNecklacesDisplay from "./products_display/FinalNecklacesDisplay";
import FinalRingsDisplay from "./rings/FinalRingsDisplay";
import Footer from "./footer/Footer";
import Cart from "./pages/cart/Cart";
import ScrollToTop from "./ScrollToTop";
import { ProductProvider } from "./contexts/ProductContext";
import CartModal from "./pages/cart/CartModal";
import Modal from "./products_display/Modal";
import OrganicProduct from "./single_product_page/OrganicProduct";
import ResponsiveNavMenuOpen from "./navbar/ResponsiveNavMenuOpen";
import TermsandConditions from "./pages/TermsAndConditions";
import { defineMessages } from "react-intl";
import Topbar from "./TopBar/TopBar";
import Wrapper from "./Wrapper";
import CheckoutPage from "./checkout/CheckoutPage";

const LINKS = [
  defineMessages({
    label: { defaultMessage: "Necklaces", id: "app.necklace" },
    link: "necklaces",
  }),
  defineMessages({
    label: { defaultMessage: "Earings", id: "app.earing" },
    link: "earings",
  }),
  defineMessages({
    label: { defaultMessage: "Rings", id: "app.ring" },
    link: "rings",
  }),
  defineMessages({
    label: {
      defaultMessage: "Wedding Jewelery",
      id: "app.weddingjewel",
    },
    link: "wedding",
  }),
  defineMessages({
    label: {
      defaultMessage: "Collections",
      id: "app.collection",
    },
    link: "collection",
  }),
  defineMessages({
    label: { defaultMessage: "About me", id: "app.aboutus" },
    link: "aboutus",
  }),
  defineMessages({
    label: { defaultMessage: "Contact us", id: "app.contactus" },
    link: "form",
  }),
];

const LINKMAP = LINKS.reduce((map, obj) => {
  map[obj.label.id] = obj.link;
  return map;
}, {});

class ReactApp extends React.Component {
  state = {
    responsiveNavMenuOpen: false,
  };

  responsiveNavMenuHandler = () => {
    this.setState((prevState) => {
      return { responsiveNavMenuOpen: !prevState.responsiveNavMenuOpen };
    });
  };

  closeResponsiveNavMenu = () => {
    this.setState({ responsiveNavMenuOpen: false });
  };

  render() {
    return (
      <ProductProvider>
        <Router>
          <ScrollToTop />
          <div className="app">
            <header className="header">
              <Topbar />
              <NavBar
                links={LINKS}
                responsiveNavMenuHandler={this.responsiveNavMenuHandler}
              />
              <ResponsiveNavMenuOpen
                show={this.state.responsiveNavMenuOpen}
                links={LINKS}
                closeResponsiveNavMenu={this.closeResponsiveNavMenu}
              />
            </header>
            <div className="main-container">
              <Switch>
                <Route
                  path={`/${LINKMAP["app.aboutus"]}`}
                  exact
                  component={AboutUs}
                />
                ``
                <Route
                  path="/organicproduct/:slug"
                  exact
                  component={OrganicProduct}
                />
                <Route
                  path={`/${LINKMAP["app.ring"]}`}
                  exact
                  component={FinalRingsDisplay}
                />
                <Route
                  path={`/${LINKMAP["app.necklace"]}`}
                  exact
                  component={FinalNecklacesDisplay}
                />
                <Route path="/cart" exact strict component={Cart} />
                <Route
                  path={`/${LINKMAP["app.contactus"]}`}
                  exact
                  component={Form}
                />
                <Route
                  path="/terms&conditions"
                  exact
                  component={TermsandConditions}
                />
                <Route path="/checkout" exact component={CheckoutPage} />
                <Route path="/" exact component={Home} />
                <Route component={NotFoundPage} />
                <Redirect to="/404" />
              </Switch>
              <CartModal />
              <Modal />
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

ReactDOM.render(
  <Wrapper>
    <ReactApp />
  </Wrapper>,
  document.getElementById("root")
);

export default ReactApp;
