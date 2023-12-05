import apolloClient from "./apollo";
import { jwtDecode } from "jwt-decode"

interface DecodedToken {
  exp: number;
  // otras propiedades que puedan existir en tu token
}

export const getToken = (): string | null => {
  decodedToken();
  return config();
};

export const setCredit = async (available: string) => {
  await localStorage?.setItem("credit", available);
};

export const getCredit = (): string | null => {
  return localStorage?.getItem("credit");
};

export const config = (): string | null => {
  return localStorage?.getItem("token");
};

export const setToken = async (token: string) => {
  await localStorage?.setItem("token", token);
};

export const getOrderId = (): string | null => {
  try {
    return localStorage?.getItem("orderId");
  } catch {
    return null;
  }
};

export const setOrderId = (orderId: string) => {
  return localStorage?.setItem("orderId", orderId);
};

export const removeOrderId = () => {
  return localStorage?.removeItem("orderId")
}

export const logout = () => {
  try {
    localStorage?.clear();
    apolloClient?.clearStore();
  } catch (error) {
    console.log(error);
  }
};

export const decodedToken = () => {
  const token = config();

  if (!token) {
    return true;
  }

  try {
    const decoded: DecodedToken = jwtDecode(token);

    const expire = new Date(decoded?.exp * 1000);
    const todayClass = new Date();

    const diferenciaMilisegundos = todayClass.getTime() - expire.getTime();
    const diferenciaHoras = Math.floor(
      diferenciaMilisegundos / (1000 * 60 * 60)
    );

    if (diferenciaHoras >= -1) {
      logout();
      return true;
    } else {
      return false;
    }
  } catch (error) {
    logout();
    return true;
  }
};
