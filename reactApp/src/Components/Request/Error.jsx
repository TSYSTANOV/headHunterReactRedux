import React from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Error() {
  useEffect(() => {
    toast("Error getData, please try again...");
  }, []);

  return <h2>Error getData, please try again...</h2>;
}
export { Error };
