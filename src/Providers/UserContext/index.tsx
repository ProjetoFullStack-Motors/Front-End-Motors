import { createContext, useEffect, useState } from "react";
import {
    TUserContext,
    TUserDataToken,
    TUserName,
    TUser,
    TUserProvidersProps,
    TErrorResponse,
    TUserMail,
    TJwtDecode,
    TAddressResponse,
    TAddressPartial,
    TUpdateUserPartial,
    TCommentRequest,
    TCommentsArray,
} from "./@types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { TLoginData } from "../../Components/Forms/LoginForm/validator";
import { api } from "../../Services/api";
import jwt_decode from "jwt-decode";
import axios, { AxiosError } from "axios";
import { useModal } from "../../Hooks";
import { TUserRegisterData } from "../../Components/Forms/RegisterForm/validator";
import { TUserSales } from "../CarContext/@types";
import { commentSchemaArray } from "./schemas";

const UserContext = createContext({} as TUserContext);

const UserProvider = ({ children }: TUserProvidersProps) => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState<TUserName | null>(null);
    const [user, setUser] = useState<TUser | null>(null);
    const [userSales, setUserSales] = useState<TUserSales[]>([]);
    const { setModal } = useModal();
    const [previousPage, setPreviousPage] = useState<string | null>(null);
    const [nextPage, setNextPage] = useState<string | null>(null);
    const [pagesAmount, setPagesAmount] = useState(0);
    const [comments, setComments] = useState<TCommentsArray | []>([]);

    const userLogin = async (data: TLoginData) => {
        try {
            const response = await api.post("/users/login", data);
            const { token } = response.data;

            const tokenDecoded: TJwtDecode = jwt_decode(token);

            api.defaults.headers.common.Authorization = `Bearer ${token}`;

            localStorage.setItem("frontEndMotors:token", token);
            toast.success("Login realizado com sucesso!");

            retrieveUser(tokenDecoded.userId);

            tokenDecoded.role === "seller"
                ? navigate("/dashboard")
                : navigate("/");
        } catch (error) {
            toast.error("E-mail ou senha inválido(s)!");
            console.log(error);
        }
    };

    const userRegister = async (data: TUserRegisterData) => {
        try {
            await api.post("/users", data);
            const token = localStorage.getItem("frontEndMotors:token");

            api.defaults.headers.common.Authorization = `Bearer ${token}`;

            toast.success("Usuário cadastrado com sucesso!");
            navigate("dashboard");
        } catch (error) {
            toast.error("Cadastro inválido!");
            console.log(error);
        }
    };

    const logoutUser = () => {
        localStorage.removeItem("frontEndMotors:token");
        navigate("/");
        setUser(null);
    };

    const retrieveUser = async (id: string) => {
        try {
            const response = await api.get(`/salesAd/users/${id}`);
            setUserName({
                firstName: response.data.user.firstName,
                lastName: response.data.user.lastName,
            });
            setUser(response.data.user);
            setUserSales(response.data.data);
            const { prevPage, count, nextPage } = response.data;
            if (count > 12) {
                setPagesAmount(Math.ceil(count / 12));
            }

            setPreviousPage(prevPage);
            setNextPage(nextPage);
        } catch (error) {
            const currentError = error as AxiosError<TErrorResponse>;
            toast.error(currentError.response?.data.message);
            logoutUser();
            console.log(error);
        }
    };

    const retrieveProfileViewUser = async (
        id: string,
        setState: React.Dispatch<React.SetStateAction<TUser | null>>,
        setState2: React.Dispatch<React.SetStateAction<TUserSales[]>>
    ) => {
        try {
            const response = await api.get(`/salesAd/users/${id}`);
            setState(response.data.user);
            setState2(response.data.data);
            const { prevPage, count, nextPage } = response.data;
            if (count > 12) {
                setPagesAmount(Math.ceil(count / 12));
            }

            setPreviousPage(prevPage);
            setNextPage(nextPage);
        } catch (error) {
            const currentError = error as AxiosError<TErrorResponse>;
            toast.error(currentError.response?.data.message);

            console.log(error);
        }
    };

    const recoverPassword = async (data: TUserMail) => {
        try {
            await api.post("/recoverPass", data);
            setModal(null);
            navigate("/login");
            toast.success("Senha enviado por e-mail");
        } catch (error) {
            const currentError = error as AxiosError<TErrorResponse>;
            toast.error(currentError.response?.data.message);
            console.log(error);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("frontEndMotors:token") || null;
        const userData = token ? jwt_decode<TUserDataToken>(token) : null;
        if (!userData) {
            return;
        }
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        retrieveUser(userData?.sub!);
    }, []);

    const changeUserAddress = async (data: TAddressPartial) => {
        const token = localStorage.getItem("frontEndMotors:token") || null;
        try {
            const changeAddress = await api.patch<TAddressResponse>(
                "/address",
                data,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            user!.address = changeAddress.data;

            setUser(user);

            toast.success("Endereço atualizado com sucesso");
        } catch (error) {
            console.log(error);
            toast.error("Não foi possível atualizar o endereço");
        }
    };

    const getUserSalesPagination = async (
        pageUrl: string,
        setState: React.Dispatch<React.SetStateAction<TUserSales[]>>
    ) => {
        try {
            const response = await axios.get(pageUrl);

            const { prevPage, nextPage, data, count } = response.data;

            setState(data);
            setPreviousPage(prevPage);
            setNextPage(nextPage);

            if (count > 12) {
                setPagesAmount(Math.ceil(count / 12));
            }
        } catch (error) {}
    };

    const updateUserInformation = async (
        id: string,
        data: TUpdateUserPartial
    ) => {
        const token = localStorage.getItem("frontEndMotors:token") || null;
        try {
            const response = await api.patch(`/users/update/${id}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setUser({ ...user!, ...data });
            setUserName({
                firstName: response.data.firstName,
                lastName: response.data.lastName,
            });

            toast.success("Perfil atualizado com sucesso");
        } catch (error) {
            console.log(error);
            toast.error("Não foi possível atualizar o perfil");
        }
    };

    useEffect(() => {}, [user]);

    const deleteUserProfile = async (id: string) => {
        const token = localStorage.getItem("frontEndMotors:token") || null;
        try {
            await api.delete(`/users/delete/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            logoutUser();
        } catch (error) {
            console.log(error);
            toast.error("Não foi possível excluir sua conta");
        }
    };

    const readCommentSaleAd = async (id: string) => {
        const response = await api.get(`/comments/salesAd/${id}`);

        const comments: TCommentsArray = commentSchemaArray.parse(
            response.data.comments
        );

        setComments(comments);
    };
    const createCommentSaleAd = async (id: string, data: TCommentRequest) => {};

    return (
        <UserContext.Provider
            value={{
                userName,
                user,
                userLogin,
                logoutUser,
                recoverPassword,
                userRegister,
                setUser,
                retrieveUser,
                changeUserAddress,
                retrieveProfileViewUser,
                userSales,
                getUserSalesPagination,
                previousPage,
                nextPage,
                pagesAmount,
                setUserSales,
                updateUserInformation,
                deleteUserProfile,
                readCommentSaleAd,
                comments,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
