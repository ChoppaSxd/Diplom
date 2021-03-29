import React, { useState } from "react";
import "../components/Nav.css";
import "../components/Animation.css";
import "../components/Media.css";
import { Navbar, Nav, Container, Dropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navbars() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const NewsScreenOne = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="Nav">
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <Link onClick={NewsScreenOne} to="/main" className="logos">
              Циклова комісія інформатики
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home" className="d-flex">
                <Link onClick={NewsScreenOne} to="/main" href="#">
                  <Button
                    className="btn-hover-navs color-1"
                    variant="outline-dark"
                  >
                    Головна
                  </Button>
                </Link>
              </Nav.Link>
              <Nav.Link href="#someinfo" className="d-flex">
                <Link onClick={NewsScreenOne} to="/info" href="#">
                  <Button
                    className="btn-hover-navs color-2"
                    variant="outline-dark"
                  >
                    Викладачі
                  </Button>
                </Link>
              </Nav.Link>
              <Nav.Link href="#contacts" className="d-flex">
                <Link onClick={NewsScreenOne} to="/contact" href="#">
                  <Button
                    className="btn-hover-navs color-3"
                    variant="outline-dark"
                  >
                    Контакти
                  </Button>
                </Link>
              </Nav.Link>
              <Nav.Link href="#">
                <Dropdown
                  isOpen={dropdownOpen}
                  toggle={toggle}
                  className="d-flex"
                >
                  <Dropdown.Toggle
                    className="btn-outline-light btn-hover-navs color-8"
                    caret
                  >
                    Інше
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="1">
                      <Link
                        onClick={NewsScreenOne}
                        className="item_button"
                        to="/fotogalery"
                        href="#"
                      >
                        Фотогалерея
                      </Link>
                    </Dropdown.Item>
                    {/* <Dropdown.Item eventKey="2"><Link className="item_button" to="/booking" href="#">Бронювання</Link></Dropdown.Item> */}
                    <Dropdown.Item eventKey="2">
                      <Link
                        onClick={NewsScreenOne}
                        className="item_button"
                        to="/wedding"
                        href="#"
                      >
                        Студенту
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="3">
                      <Link
                        onClick={NewsScreenOne}
                        className="item_button"
                        to="/banquest"
                        href="#"
                      >
                        Про коледж
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="4">
                      <Link
                        onClick={NewsScreenOne}
                        className="item_button"
                        to="/corporate"
                        href="#"
                      >
                        Віртуальний тур
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="3">
                      <Link
                        onClick={NewsScreenOne}
                        className="item_button"
                        to="/newsinfo"
                        href="#"
                      >
                        Новини
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="4">
                      <Link
                        onClick={NewsScreenOne}
                        className="item_button"
                        to="/respond"
                        href="#"
                      >
                        Відгуки
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link>
            </Nav>
            <div className="button_booking">
              <Link to="/booking" href="#">
                <button className="btn btn-outline-light buttons_nav_booking">
                  Бронювати
                </button>
              </Link>
              <div className="move_circle_1"></div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
