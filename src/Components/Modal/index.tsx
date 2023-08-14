import ReactDOM from "react-dom";
import { StyledModal } from "./style";
import { TModalProps } from "./@types";
import useModal from "../../Hooks/useModal";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const Modal = ({ children, title }: TModalProps) => {
    const { modal, setModal } = useModal();
    if (modal === title) {
        return ReactDOM.createPortal(
            <StyledModal onClick={() => setModal(null)}>
                <div
                    className="modal-container"
                    onClick={(event) => event.stopPropagation()}
                >
                    <div className="modal-header">
                        <h2>{title}</h2>
                        <button
                            className="modal-close-button"
                            onClick={() => setModal(null)}
                            title="Fechar janela"
                        >
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
