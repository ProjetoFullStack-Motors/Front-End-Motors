import ReactDOM from "react-dom";
import { StyledModal } from "./style";
import { TModalProps } from "./@types";
import useModal from "../../Hooks/useModal";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useKeyDown } from "../../Hooks";

const Modal = ({ children, title }: TModalProps) => {
  const { modal, setModal } = useModal();

  const closeModal = () => {
    setModal(null);
    document.body.style.overflow = "unset";
  };

  const buttonRef = useKeyDown("Escape", (element: any) => {
    element.click();
  });

  if (modal === title) {
    document.body.style.overflow = "hidden";
    return ReactDOM.createPortal(
      <StyledModal onClick={() => closeModal()}>
        <div
          className="modal-container"
          onClick={(event) => event.stopPropagation()}>
          <div className="modal-header">
            <h2>{title}</h2>
            <button
              className="modal-close-button"
              onClick={() => closeModal()}
              title="Fechar janela"
              ref={buttonRef}>
              <CloseRoundedIcon />
            </button>
          </div>
          {children}
        </div>
      </StyledModal>,
      document.getElementById("modal")!
    );
  }
};

export default Modal;
