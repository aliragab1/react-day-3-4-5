import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { LanguageContext } from "../../context/language";

export default function Header() {
  const counter = useSelector((state) => state.counter.movies_number);
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Link className="nav-link mx-3 " to="/" activeClassName="active">
            Home
          </Link>
          <Link className="nav-link mx-3" to="/movies" activeClassName="active">
            Movies
          </Link>
          <Link
            className="nav-link mx-3"
            to="/register"
            activeClassName="active"
          >
            Register
          </Link>
          <Link
            className="nav-link mx-3 text-warning fs-5"
            to="/favourites"
            activeClassName="active"
          >
            Favourites: {counter}
          </Link>
        </Nav>
        <span className="text-light">
          <h5>Langugae: {lang}</h5>
          <button
            onClick={() => {
              setLang(lang === "ar" ? "en" : "ar");
            }}
          >
            change language
          </button>
        </span>
      </Container>
    </Navbar>
  );
}
