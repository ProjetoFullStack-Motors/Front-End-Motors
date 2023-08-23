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
import { useEffect, useState } from "react";
import { TJwtDecode } from "../../Providers/UserContext/@types";
import { createPortal } from "react-dom";
import UserSalePagination from "../../Components/UserSalePagination";

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

  const [currentPage, setCurrentPage] = useState(1);
  const salesPerPage = 12;

  const indexOfLastSale = currentPage * salesPerPage;
  const indexOfFirstSale = indexOfLastSale - salesPerPage;
  const currentSales = user?.sales?.slice(indexOfFirstSale, indexOfLastSale);
  const pageNumbers = Math.ceil(user?.sales?.length! / salesPerPage);

  return (
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
            <SalesList owner={user?.role!} sales={currentSales!} />
          </div>

          <UserSalePagination
            currentPage={currentPage}
            pageNumbers={pageNumbers}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
      {createPortal(
        <Modal title={"Criar anúncio"}>
          <CreateAdForm />
        </Modal>,
        document.body
      )}

      <Modal title={"Editar anúncio"}>Formulário de editar anúncio</Modal>
      <Footer />
    </StyledDashboardPage>
  );
};

export default Dashboard;
