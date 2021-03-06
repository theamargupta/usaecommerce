import { Link, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { fetchAllCategory } from "../graphql";
import HeaderLoader from "../components/Loaders/HeaderLoader";
import { useAuth0 } from "@auth0/auth0-react";

export default function Layout({ children, categories }) {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const history = useHistory();
  const [data, setdata] = useState({ allCategories: [] });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchAllCategory(setLoading).then((data2) => setdata(data2));
  }, []);
  const handleAdmin = () => {
    return isAuthenticated ? history.push("/admin") : loginWithRedirect();
  };
  return (
    <div>
      <nav>
        <div className="flex justify-center">
          <div
            className="
            mobile:px-12 sm:flex-row sm:pt-12 sm:pb-6 desktop:px-0
            px-4 pt-8 flex flex-col w-fw
          "
          >
            <div className="mb-4 sm:mr-16 max-w-48 sm:max-w-none">
              <Link to="/" aria-label="Home">
                <img
                  src="https://i.ibb.co/3BRNQ0y/logo3.png"
                  alt="logo"
                  width="130"
                  height="28"
                />
              </Link>
            </div>
            {loading ? (
              <HeaderLoader />
            ) : (
              <div className="flex flex-wrap mt-1">
                <Link to="/" aria-label="Home">
                  <p
                    className="
                    sm:mr-8 sm:mb-0
                    mb-4 text-left text-smaller mr-4
                  "
                  >
                    Home
                  </p>
                </Link>
                {data.allCategories.map((category, index) => (
                  <Link
                    to={`/category/${category.value}`}
                    aria-label={category.name}
                    key={index}
                  >
                    <p
                      className="
                          sm:mr-8 sm:mb-0
                          mb-4 text-left text-smaller mr-4
                        "
                    >
                      {category.name.charAt(0).toUpperCase() +
                        category.name.slice(1)}
                    </p>
                  </Link>
                ))}
                <Link to="/categories" aria-label="All categories">
                  <p
                    className="
                    sm:mr-8 sm:mb-0
                    mb-4 text-left text-smaller mr-4 
                  "
                  >
                    All
                  </p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
      <div className="mobile:px-10 px-4 pb-10 flex justify-center">
        <main className="w-fw">{children}</main>
      </div>
      <footer className="flex justify-center">
        <div
          className="
        sm:flex-row sm:items-center
        flex-col
        flex w-fw px-12 py-8
        desktop:px-0
        border-solid
        border-t border-gray-300"
        >
          <span className="block text-gray-700 text-xs">
            Copyright ?? 2021 Amar's Ecommerce. All rights reserved.
          </span>
          <div
            className="
            sm:justify-end sm:m-0
            flex flex-1 mt-4
          "
          >
            {/* <Link to="/admin" aria-label="Admin panel"> */}
            <p onClick={handleAdmin} className="text-sm font-semibold">
              Admins
            </p>
            {/* </Link> */}
          </div>
        </div>
      </footer>
      <ToastContainer autoClose={3000} />
    </div>
  );
}
