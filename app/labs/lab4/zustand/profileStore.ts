import { create } from "zustand";
import { emptyProfile, Profile } from "../profile/profile";

type ProfileState = { profile: Profile; setProfile: (profile: Profile) => void };

export const useProfileStore = create<ProfileState>((set) => ({
  profile: emptyProfile,
  setProfile: (profile) => set({ profile }),
}));
