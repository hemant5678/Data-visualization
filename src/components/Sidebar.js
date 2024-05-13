import React from "react";
import "./Css/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li className="menu">
          <div class="dropdown dropdown-center dropend dropdown-menu-dark">
            <p
              class=" dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dashboard
            </p>
            <ul class="dropdown-menu ">
              <li>
                <a class="dropdown-item" href="#">
                  Intensity
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Relevance
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Likelihood
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  City
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Country
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Region
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Topic
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="menu">Add Data</li>
        <li className="menu">Contact Us</li>
        <li className="menu">Setting</li>
        <li className="menu">Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
