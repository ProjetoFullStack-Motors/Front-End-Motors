import { Header, Footer, UserAvatar } from "../../Components";
import { useUserContext } from "../../Hooks";
import { SalesList } from "../../Components";
import { StyledDashboardPage } from "../Dashboard/style";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import { TJwtDecode, TUser } from "../../Providers/UserContext/@types";
import { useParams } from "react-router-dom";
import { TUserSales } from "../../Providers/CarContext/@types";
import UserSalePagination from "../../Components/UserSalePagination";
import { motion } from "framer-motion";
import Loading from "../../Components/Loading";

const ProfileViewUser = () => {
  const { id } = useParams();
  const { user, retrieveUser, retrieveProfileViewUser, loading } =
    useUserContext();
  const [ProfileUser, setProfileUser] = useState<TUser | null>(null);
  const [salesProfileUser, setSalesProfileUser] = useState<TUserSales[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("frontEndMotors:token");
    if (token) {
      const tokenDecoded: TJwtDecode = jwt_decode(token);

      retrieveUser(tokenDecoded.userId);
    }

    retrieveProfileViewUser(id!, setProfileUser, setSalesProfileUser);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
                  img={ProfileUser?.userImage}
                  username={`${ProfileUser?.firstName} ${ProfileUser?.lastName}`}
                  size="big"
                />
                <div className="user-name-container">
                  <h2 className="user-name">{`${ProfileUser?.firstName} ${ProfileUser?.lastName}`}</h2>
                  <span className="user-role">Anunciante</span>
                </div>
                <p className="user-description">{ProfileUser?.description}</p>
              </div>

              <div className="sales-container">
                <h2>Anúncios</h2>
                <div className="sales-list-container">
                  <SalesList owner={user?.role!} sales={salesProfileUser} />
                </div>
                <UserSalePagination setState={setSalesProfileUser} />
              </div>
            </div>
            <Footer />
          </StyledDashboardPage>
        </motion.div>
      )}
    </>
  );
};

export default ProfileViewUser;
