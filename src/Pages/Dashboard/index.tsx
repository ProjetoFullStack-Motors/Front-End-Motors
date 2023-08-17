import {
  Modal,
  CreateAdForm,
  Header,
  Footer,
  UserAvatar,
} from "../../Components";
import { useUserContext, useModal } from "../../Hooks";
import { SalesList } from "../../Components";
import { StyledDashboardPage } from "./style";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { TJwtDecode } from "../../Providers/UserContext/@types";

const Dashboard = () => {
  const { setModal } = useModal();

  const { user, retrieveUser } = useUserContext();
  useEffect(() => {
    const token = localStorage.getItem("frontEndMotors:token");

    if (token) {
      const tokenDecoded: TJwtDecode = jwt_decode(token);

      retrieveUser(tokenDecoded.userId);
    }
  }, []);

  return (
    <StyledDashboardPage>
      <Header />
      <div className="dashboard-container">
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
                onClick={() => setModal("Criar anúncio")}
              >
                Criar Anúncio
              </button>
            </div>
          ) : null}
        </div>

        <SalesList owner={user?.role!} sales={user?.sales!} />
      </div>
      <Modal title={"Criar anúncio"}>
        <CreateAdForm />
      </Modal>
      <Modal title={"Editar anúncio"}>Formulário de editar anúncio</Modal>
      <Footer />
    </StyledDashboardPage>
  );
};

export default Dashboard;
