import "react-toastify/dist/ReactToastify.css";
import { GlobalStyles } from "./Styles/globalStyles";
import AppRoutes from "./Routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <GlobalStyles />
      <AppRoutes />
    </>
  );
}

export default App;
