import { Modal } from "../../Components";
import useModal from "../../Hooks/useModal";

const Dashboard = () => {
    const { setModal } = useModal();
    return (
        <>
            <div>
                <h1>Dashboard</h1>
                <button onClick={() => setModal("Criar anúncio")}>
                    Criar Anúncio
                </button>
            </div>
            <Modal title={"Criar anúncio"}>Formulário</Modal>
        </>
    );
};

export default Dashboard;
