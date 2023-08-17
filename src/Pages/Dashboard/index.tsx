import { Modal, CreateAdForm } from "../../Components";
import { useUserContext, useModal } from "../../Hooks";
import { SalesList } from "../../Components";

const Dashboard = () => {
    const { setModal } = useModal();
    const { user } = useUserContext();

    console.log(user);
    return (
        <>
            <div>
                <h1>Dashboard</h1>
                <button onClick={() => setModal("Criar anúncio")}>
                    Criar Anúncio
                </button>
                <SalesList owner={user?.role!} sales={user?.sales!} />
            </div>
            <Modal title={"Criar anúncio"}>
                <CreateAdForm />
            </Modal>
            <Modal title={"Editar anúncio"}>Formulário de editar anúncio</Modal>
        </>
    );
};

export default Dashboard;
