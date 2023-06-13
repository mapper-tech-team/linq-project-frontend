import { createContext, useEffect, useState } from "react";
import UserService from "../services/UserService";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [token, setToken] = useState({});

    const getUserToken = (email, senha) => {
        return  UserService.login(email, senha).then((res) => {
           setToken(res.data);
        })
    }    

    const getUser = (email, senha) => {
        return UserService.obterUsuario(email, senha).then((res) => {
           setUser(res.data);
        })
    }

    useEffect(() => {
        const userToken = localStorage.getItem("user_token");
    }, []);

    const signin = (email, password) => {
        UserService.obterUsuario(email, password).then((res) => {
            setUser(res.data);
            localStorage.setItem("user_email", res.data.email);
        });
        UserService.login(email, password).then((response) => {
            setToken(response.data);
            localStorage.setItem("user_token", response.data.token);
        });
    }

    const signup = (email, password) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_db"));

        const hasUser = usersStorage?.filter((user) => user.email === email);

        if (hasUser?.length) {
            return "Já existe uma conta cadastrada com este e-mail.";
        }

        let newUser;

        if (usersStorage) {
            newUser = [...usersStorage, { email, password }];
        } else {
            newUser = [{ email, password }];
        }

        localStorage.setItem("users_db", JSON.stringify(newUser));

        return;
    }

    const signout = () => {
        setUser(null);
        localStorage.removeItem("user_token");
        localStorage.removeItem("user_email");
        localStorage.removeItem("user_perfil");
        localStorage.removeItem("user_id");
    };

    return (
        <AuthContext.Provider
            value={{ user, signed: !!user, signin, signup, signout }}
        >
            {children}
        </AuthContext.Provider>
    );
};