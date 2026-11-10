"use client";
import { createContext, ReactNode, useContext, useState } from "react";
import { emptyProfile, Profile } from "../profile/profile";

type ProfileContextValue = { profile: Profile; setProfile: (profile: Profile) => void };
const ProfileContext = createContext<ProfileContextValue | null>(null);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<Profile>(emptyProfile);
  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>{children}</ProfileContext.Provider>
  );
}

export function useProfileContext() {
  const ctx = useContext(ProfileContext);
  if (!ctx) throw new Error("useProfileContext must be used inside ProfileProvider");
  return ctx;
}
