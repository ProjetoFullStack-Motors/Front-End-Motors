import { useContext } from "react";
import { ModalContext } from "../Providers";

const useModal = () => {
    const modalContext = useContext(ModalContext);

    return modalContext;
};

export default useModal;
