import React from "react";
import AddInventory from "../components/formComponents/AddInventory";
import ViewInventory from "../components/ViewInventory";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Inventory = (props) => {
  const [state, setState] = useState({
    viewState: "view",
  });
  const { logout } = useAuth0();

  const toggleViewState = (viewState) => {
    setState({ viewState });
  };
  const handleLogout = () => {
    return logout({ returnTo: window.location.origin });
  };
  return (
    <div>
      <div className="flex my-6">
        <p
          role="button"
          // className="mr-4 cursor-pointer hover:text-primary"
          className={`cursor-pointer hover:text-black text-1xl mr-4 ${
            state.viewState === "view"
              ? "border-blue-400  opacity-100 border-b-2"
              : "opacity-80"
          }  rounded-t`}
          onClick={() => toggleViewState("view")}
        >
          View Inventory
        </p>
        <h2
          role="button"
          className={`cursor-pointer hover:text-black text-1xl ${
            state.viewState === "add"
              ? "border-blue-400  opacity-100 border-b-2"
              : "opacity-80"
          }  rounded-t`}
          onClick={() => toggleViewState("add")}
        >
          Add Item
        </h2>
      </div>
      {state.viewState === "view" ? <ViewInventory /> : <AddInventory />}
      <button
        onClick={handleLogout}
        className="mt-4 bg-primary hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        Sign Out
      </button>
    </div>
  );
};

export default Inventory;
