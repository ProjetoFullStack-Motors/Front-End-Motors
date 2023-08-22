import "react-toastify/dist/ReactToastify.css";
import { GlobalStyles } from "./Styles/globalStyles";
import AppRoutes from "./Routes";
import { ToastContainer } from "react-toastify";
import Modal from "./Components/Modal/index";
import { createPortal } from "react-dom";
import EditAddressForm from "./Components/Forms/EditAddressForm";
import EditOrDeleteProfileForm from "./Components/Forms/EditOrDeleteProfileForm";
import { useModal } from "./Hooks";
import DeleteProfileModal from "./Components/Forms/DeleteProfile";

function App() {
  const { modal } = useModal();
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

      {modal && modal == "Editar perfil"
        ? createPortal(
            <Modal title="Editar perfil">
              {" "}
              <EditOrDeleteProfileForm />
            </Modal>,
            document.body
          )
        : null}
      {modal && modal == "Editar endereço"
        ? createPortal(
            <Modal title="Editar endereço">
              {" "}
              <EditAddressForm />
            </Modal>,
            document.body
          )
        : null}
      {modal && modal == "Excluir perfil"
        ? createPortal(
            <Modal title="Excluir perfil">
              {" "}
              <DeleteProfileModal />
            </Modal>,
            document.body
          )
        : null}
    </>
  );
}

export default App;
