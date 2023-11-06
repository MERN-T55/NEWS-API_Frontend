import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
function Nav() {
  return (
    <div>
      {/* Jumbotron */}
      <div class="p-3 text-center bg-white border-bottom">
        <div class="container">
          <div class="row">
            {/* Left elements */}
            <div class="col-md-4 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
              <h4>NewsAggregator</h4>
            </div>
            {/* Left elements */}

            {/* Center elements */}
            <div class="col-md-4">
              <form class="d-flex input-group w-auto my-auto mb-3 mb-md-0">
                <input
                  autocomplete="off"
                  type="search"
                  class="form-control rounded"
                  placeholder="Search"
                />
                <button type="button" class="btn btn-light">
                  <span class="input-group-text border-0 d-none d-lg-flex">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </span>
                  <span class="d-lg-none">Search</span>
                </button>
              </form>
            </div>
            {/* Center elements */}

            {/* Right elements */}
            <div class="col-md-4 d-flex justify-content-center justify-content-md-end align-items-center">
              <div class="d-flex">
                <Link to="/login" className="nav-link me-3">
                  Login
                </Link>
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </div>
            </div>

            {/* Right elements */}
          </div>
        </div>
      </div>
      {/* Jumbotron */}

      {/* Navbar */}
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container d-flex justify-content-between">
          <ul class="navbar-nav">
            <li class="nav-item me-2 me-lg-0 d-none d-md-inline-block">
              <a class="nav-link" href="#">
                For You
              </a>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item me-2 me-lg-0 d-none d-md-inline-block">
              <a class="nav-link" href="#">
                Weather
              </a>
            </li>
            <li class="nav-item me-2 me-lg-0 d-none d-md-inline-block">
              <a class="nav-link" href="#">
                Entertainment
              </a>
            </li>
            <li class="nav-item me-2 me-lg-0 d-none d-md-inline-block">
              <a class="nav-link" href="#">
                Technology
              </a>
            </li>
            <li class="nav-item me-2 me-lg-0 d-none d-md-inline-block">
              <a class="nav-link" href="#">
                Sports
              </a>
            </li>
            <li class="nav-item me-2 me-lg-0 d-none d-md-inline-block">
              <a class="nav-link" href="#">
                Science
              </a>
            </li>
            <li class="nav-item me-2 me-lg-0 d-none d-md-inline-block">
              <a class="nav-link" href="#">
                Health
              </a>
            </li>
            <li class="nav-item me-2 me-lg-0 d-none d-md-inline-block">
              <a class="nav-link" href="#">
                Business
              </a>
            </li>
            <li class="nav-item me-2 me-lg-0 d-none d-md-inline-block">
              <a class="nav-link" href="#">
                India
              </a>
            </li>
            <li class="nav-item me-2 me-lg-0 d-none d-md-inline-block">
              <a class="nav-link" href="#">
                World
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Navbar */}
    </div>
  );
}
export default Nav;
