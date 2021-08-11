import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import CartLink from "../components/CartLink";
// import AddInventory from "../components/formComponents/AddInventory";
import Inventory from "../components/Inventory";

const Admin = (props) => {
  const { logout, user } = useAuth0();
  const namespace = process.env.REACT_APP_NameSpace;
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    if (
      user &&
      user[`${namespace}`] &&
      user[`${namespace}`].length > 0 &&
      user[`${namespace}`][0] === "admin"
    )
      setAdmin(true);
  }, [namespace, user]);
  const handleLogout = () => {
    return logout({ returnTo: window.location.origin });
  };
  return (
    <>
      <CartLink />

      {admin ? (
        <Inventory />
      ) : (
        <>
          <p>You are Not authorised to Chnage</p>
          <button
            onClick={handleLogout}
            className="bg-black hover:bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            logout
          </button>
        </>
      )}
    </>
  );
};

export default Admin;
