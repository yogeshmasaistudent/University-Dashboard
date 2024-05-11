import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import AboutUsSectionImg from "../../utils/images/about-us-section-img.jpg";
import ChooseSection from "../../components/ChooseSection/ChooseSection";
import Person1 from "../../utils/images/person1.jpg";
import Person2 from "../../utils/images/person2.jpg";
import Person3 from "../../utils/images/person3.jpg";
import Person4 from "../../utils/images/person4.jpg";
import Person5 from "../../utils/images/person5.jpg";
import Person6 from "../../utils/images/person6.jpg";
import Person7 from "../../utils/images/person7.jpg";
import Person8 from "../../utils/images/person8.jpg";
import Person9 from "../../utils/images/person9.jpg";

const persons = [
  {
    id: 1,
    img: [Person1],
  },
  {
    id: 2,
    img: [Person2],
  },
  {
    id: 3,
    img: [Person3],
  },
  {
    id: 4,
    img: [Person4],
  },
  {
    id: 5,
    img: [Person5],
  },
  {
    id: 6,
    img: [Person6],
  },
  {
    id: 7,
    img: [Person7],
  },
  {
    id: 8,
    img: [Person8],
  },
  {
    id: 9,
    img: [Person9],
  },
];

function About() {
  return (
    <>
      <div className="about-page">
        <header className="height-75">
          <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
            <h1 className="text-center fw-semibold">About Us</h1>
            <p className="text-center w-75 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
              recusandae harum ullam repellat cum? Nisi unde, incidunt natus ut
              ratione dolore quasi at dolores molestias.
            </p>
          </div>
        </header>

        <div className="container my-5">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0">
              <h2 className="mb-4 mb-lg-5">Study with us</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequatur, sunt saepe fugit dolores error mollitia doloribus
                optio, recusandae aperiam, nihil eius rem eum eaque sequi. Earum
                perspiciatis laudantium at quo sapiente perferendis distinctio,
                voluptatum obcaecati ipsa, eos nesciunt saepe adipisci placeat
                ducimus! Dignissimos quaerat fugiat consequuntur tempora fuga
                eveniet nobis!
              </p>
              <p className="mb-4 mb-lg-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                quas ipsa assumenda eos veritatis nemo fuga dolore saepe eius,
                laborum earum magni id quae quidem tempore tempora consequuntur
                eveniet voluptatibus, suscipit atque, voluptatem blanditiis
                deleniti perferendis dolores. Architecto corporis sit suscipit
                labore modi sint facilis alias laboriosam facere et? Quo eum
                neque dolores iure, nam voluptates nesciunt quisquam modi maxime
                alias! Blanditiis vel dicta voluptates ab vero quia incidunt
                facilis ratione deserunt, inventore atque necessitatibus?
              </p>
              <Link to="/contact">
                <button
                  type="button"
                  className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
                >
                  Contact Us
                </button>
              </Link>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <img src={AboutUsSectionImg} className="img-fluid w-75" alt="" />
            </div>
          </div>
        </div>

        <div className="bg-dark text-light py-5">
          <ChooseSection />
        </div>

        <div className="bg-body-tertiary py-5">
          <div className="container">
            <h2 className="text-center mb-5">Our Winners</h2>
            <div className="row g-4">
              {persons.map((person) => (
                <div key={person.id} className="col-md-4">
                  <img src={person.img} className="img-fluid" alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container my-5">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-md-4">
              <Link to="/contact">
                <button
                  type="button"
                  className="btn btn-outline-danger btn-lg mb-5 mb-md-4"
                >
                  Get In Touch
                </button>
              </Link>
              <ul className="footer-social-icons list-unstyled d-flex justify-content-between">
                <Link to="/contact">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#dc3545"
                      class="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                    </svg>
                  </li>
                </Link>
                <Link to="/contact">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#dc3545"
                      class="bi bi-instagram"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                    </svg>
                  </li>
                </Link>
                <Link to="/contact">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#dc3545"
                      class="bi bi-tiktok"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                    </svg>
                  </li>
                </Link>
                <Link to="/contact">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="#dc3545"
                      class="bi bi-youtube"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z" />
                    </svg>
                  </li>
                </Link>
              </ul>
            </div>
            <div className="col-md-7 col-lg-6">
              <div className="d-row d-md-flex justify-content-between align-items-center">
                <div className="col-12 col-md-6 col-lg-5 mb-5 mt-4 my-md-0">
                  <ul className="footer-navigation list-unstyled mb-0">
                    <Link to="/" className="text-decoration-none text-danger">
                      <li className="text-uppercase fw-semibold">Home</li>
                    </Link>
                    <Link
                      to="/courses"
                      className="text-decoration-none text-danger"
                    >
                      <li className="text-uppercase fw-semibold">
                        Our courses
                      </li>
                    </Link>
                    <Link
                      to="/about"
                      className="text-decoration-none text-danger"
                    >
                      <li className="text-uppercase fw-semibold">About us</li>
                    </Link>
                    <Link
                      to="/blog"
                      className="text-decoration-none text-danger"
                    >
                      <li className="text-uppercase fw-semibold">Blog</li>
                    </Link>
                    <Link
                      to="/contact"
                      className="text-decoration-none text-danger"
                    >
                      <li className="text-uppercase fw-semibold">
                        Get In Touch
                      </li>
                    </Link>
                  </ul>
                </div>
                <div className="col-12 col-md-6 col-lg-7">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <p>Main Address - 47 Street Name,Banlore</p>
                    </li>
                    <li>
                      <p>Phone Number - 0900800700</p>
                    </li>
                    <li>
                      <p>Email -masai@university.co.uk</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-body-tertiary">
          <div className="container">
            <p className="p-3 m-0 text-center">copyright @ made by Yogesh </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default About;
