import style from "./navbar.module.scss";

import { SitePaths } from "../../../app/constants/Paths";
import { Link, NavLink } from "react-router";
import useStyles from "../../../app/hooks/useStyle";
import { useState } from "react";

export function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const s = useStyles(style);
  return (
    <nav className={s(`page-header`)}>
      <div className={s(`quick-contact`)}>
        <div className={s(`tel-email`, `body-arranged-md`)}>
          <Link to="mailto:biuro@maxdance.pl" className={s(`email`)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="var(--primary-color-1)"
            >
              <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v58q0 59-40.5 100.5T740-280q-35 0-66-15t-52-43q-29 29-65.5 43.5T480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480v58q0 26 17 44t43 18q26 0 43-18t17-44v-58q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h200v80H480Zm0-280q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z" />
            </svg>
            <p>biuro@maxdance.pl</p>
          </Link>
          <Link to="tel:+48500204400" className={s(`tel`)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="25px"
              viewBox="0 -960 960 960"
              width="25px"
              fill="var(--primary-color-1)"
            >
              <path d="M760-480q0-117-81.5-198.5T480-760v-80q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480h-80Zm-160 0q0-50-35-85t-85-35v-80q83 0 141.5 58.5T680-480h-80Zm198 360q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
            </svg>
            <p>500 204 400</p>
          </Link>
        </div>
      </div>
      <div className={s(`navbar-content`, `body-arranged-md`)}>
        <div className={s(`brand-logo`)}>
          <Link to={SitePaths.INDEX.absolute}>
            <img src="\images\guest\maxdance-logo.png" alt="" />
          </Link>
        </div>
        <ul className={s(`header-links ${showSidebar ? "active" : ""}`)}>
          <li
            className={style["button-hamburger-close"]}
            onClick={() => {
              setShowSidebar(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              viewBox="0 -960 960 960"
              width="50"
              fill="var(--primary-color-1)"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </li>
          <li>
            <NavLink
              to={SitePaths.INDEX.absolute}
              className={({ isActive }) =>
                s(isActive ? "active nav-link" : "nav-link")
              }
              onClick={() => {
                setShowSidebar(false);
              }}

              // className={activeLink === "link1" ? "active" : ""}
              // onClick={() => handleClick("link1")}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to={SitePaths.ABOUT_US.absolute}
              className={({ isActive }) =>
                s(isActive ? "active nav-link" : "nav-link")
              }
              onClick={() => {
                setShowSidebar(false);
              }}
            >
              O NAS
            </NavLink>
          </li>
          <li>
            <NavLink
              to={SitePaths.INSTRUCTORS.absolute}
              className={({ isActive }) =>
                s(isActive ? "active nav-link" : "nav-link")
              }
              onClick={() => {
                setShowSidebar(false);
              }}
            >
              INSTRUKTORZY
            </NavLink>
          </li>
          <li>
            <NavLink
              to={SitePaths.OFFERT.absolute}
              className={({ isActive }) =>
                s(isActive ? "active nav-link" : "nav-link")
              }
              onClick={() => {
                setShowSidebar(false);
              }}
            >
              OFERTA
            </NavLink>
          </li>
          <li>
            <NavLink
              to={SitePaths.LESSON_PLAN.absolute}
              className={({ isActive }) =>
                s(isActive ? "active nav-link" : "nav-link")
              }
              onClick={() => {
                setShowSidebar(false);
              }}
            >
              GRAFIK
            </NavLink>
          </li>
          <li>
            <NavLink
              to={SitePaths.GALLERY.absolute}
              className={({ isActive }) =>
                s(isActive ? "active nav-link" : "nav-link")
              }
              onClick={() => {
                setShowSidebar(false);
              }}
            >
              GALERIA
            </NavLink>
          </li>
          <li>
            <NavLink
              to={SitePaths.PRICE_LIST.absolute}
              className={({ isActive }) =>
                s(isActive ? "active nav-link" : "nav-link")
              }
              onClick={() => {
                setShowSidebar(false);
              }}
            >
              CENNIK
            </NavLink>
          </li>
          <li>
            <NavLink
              to={SitePaths.CONTACT.absolute}
              className={({ isActive }) =>
                s(isActive ? "active nav-link" : "nav-link")
              }
              onClick={() => {
                setShowSidebar(false);
              }}
            >
              KONTAKT
            </NavLink>
          </li>
        </ul>
        <div
          className={s("button-hamburger-open")}
          onClick={() => {
            console.log("XD");
            setShowSidebar(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="50"
            viewBox="0 -960 960 960"
            width="50"
            fill="var(--primary-color-1)"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </div>
      </div>
    </nav>
  );
}
