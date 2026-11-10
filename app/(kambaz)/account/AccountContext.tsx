"use client";
import { createContext, useContext, useState, type ReactNode } from "react";
import { users } from "../database";

export type User = (typeof users)[number];

type AccountContextType = {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
};

const AccountContext = createContext<AccountContextType>({
  currentUser: null,
  setCurrentUser: () => {},
});

export function AccountProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  return (
    <AccountContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AccountContext.Provider>
  );
}

export function useAccount() {
  return useContext(AccountContext);
}
