"use client";
import { useStore } from "@tanstack/react-store";
import { Store } from "@tanstack/store";
import { useCallback } from "react";
import { User } from "./type";

// Define the login state type
export interface LoginState {
  token: string | null;
  user: User | null;
}

// Create a store for managing login state
export const loginStore = new Store<LoginState>({
  token: null,
  user: null,
});

// Function to load login state from localStorage
const loadLoginStateFromLocalStorage = (): Partial<LoginState> => {
  if (typeof window !== "undefined") {
    const savedState = localStorage.getItem("loginData");
    return savedState ? JSON.parse(savedState) : {};
  }
  return {}; // Return empty if not in browser
};

// Function to save login state to localStorage
const saveLoginStateToLocalStorage = (state: LoginState): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem("loginData", JSON.stringify(state));
  }
};

// Initialize store with saved state
const initialState = loadLoginStateFromLocalStorage();
loginStore.setState((state) => ({ ...state, ...initialState }));

// Function to update login state and persist it
export const updateLoginState = (
  token: string | null,
  user: User | null
): void => {
  loginStore.setState((state) => {
    const newState = { ...state, token, user };
    saveLoginStateToLocalStorage(newState);
    return newState;
  });
};

// Custom hook to access the login store
export const useLoginStore = () => {
  return useStore(loginStore, (state) => ({
    token: state.token,
    user: state.user,
  }));
};

// Logout function
export const useLogout = () => {
  const logout = useCallback(() => {
    loginStore.setState(() => ({
      token: null,
      user: null,
    }));
    if (typeof window !== "undefined") {
      localStorage.removeItem("loginData");
    }
  }, []);

  return { logout };
};
