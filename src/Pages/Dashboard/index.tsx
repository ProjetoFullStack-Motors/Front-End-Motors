import {
  Modal,
  CreateAdForm,
  Header,
  Footer,
  UserAvatar,
} from "../../Components";
import { useUserContext, useModal, useCarContext } from "../../Hooks";
import { SalesList } from "../../Components";
import { StyledDashboardPage } from "./style";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { TJwtDecode } from "../../Providers/UserContext/@types";
import { createPortal } from "react-dom";
import UserSalePagination from "../../Components/UserSalePagination";
import EditAdForm from "../../Components/Forms/EditAdForm";
import DeleteAdModal from "../../Components/Forms/DeleteAdModal";
import { motion } from "framer-motion";

const Dashboard = () => {
  const { setModal, modal } = useModal();

  const { user, retrieveUser, userSales, setUserSales } = useUserContext();
  const { change } = useCarContext();

  useEffect(() => {
    const token = localStorage.getItem("frontEndMotors:token");

    if (token) {
      const tokenDecoded: TJwtDecode = jwt_decode(token);

      retrieveUser(tokenDecoded.userId);
    }
  }, [change]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      <StyledDashboardPage>
        <Header />

        <div className="dashboard-container">
          <div className="dashboard-header-purple"></div>
          <div className="user-info-container">
            <UserAvatar
              img={user?.userImage}
              username={`${user?.firstName} ${user?.lastName}`}
              size="big"
            />
            <div className="user-name-container">
              <h2 className="user-name">{`${user?.firstName} ${user?.lastName}`}</h2>
              <span className="user-role">
                {user?.role == "seller" ? "Anunciante" : "Comprador"}
              </span>
            </div>
            <p className="user-description">{user?.description}</p>

            {user?.role == "seller" ? (
              <div className="seller-button-container">
                <button
                  className="seller-button"
                  onClick={() => setModal("Criar anúncio")}>
                  Criar Anúncio
                </button>
              </div>
            ) : null}
          </div>

          <div className="sales-container">
            <h2>Anúncios</h2>
            <div className="sales-list-container">
              <SalesList owner={user?.role!} sales={userSales} />
            </div>

            <UserSalePagination setState={setUserSales} />
          </div>
        </div>
        {modal === "Criar anúncio"
          ? createPortal(
              <Modal title={"Criar anúncio"}>
                <CreateAdForm />
              </Modal>,
              document.body
            )
          : null}

        {modal === "Editar anúncio"
          ? createPortal(
              <Modal title={"Editar anúncio"}>
                <EditAdForm />
              </Modal>,
              document.body
            )
          : null}
        {modal === "Excluir anúncio"
          ? createPortal(
              <Modal title={"Excluir anúncio"}>
                <DeleteAdModal />
              </Modal>,
              document.body
            )
          : null}

        <Footer />
      </StyledDashboardPage>
    </motion.div>
  );
};

export default Dashboard;
