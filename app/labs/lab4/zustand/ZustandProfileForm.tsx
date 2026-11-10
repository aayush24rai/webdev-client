"use client";
import { useState } from "react";
import { ProfileErrors, validateProfile } from "../profile/profile";
import ProfileFields from "../profile/ProfileFields";
import ProfileAlert from "../profile/ProfileAlert";
import { useProfileStore } from "./profileStore";

export default function ZustandProfileForm() {
  const profile = useProfileStore((s) => s.profile);
  const setProfile = useProfileStore((s) => s.setProfile);
  const [errors, setErrors] = useState<ProfileErrors>({});
  const [submitted, setSubmitted] = useState(false);
  return (
    <form
      id="wd-zustand-profile-form"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        setErrors(validateProfile(profile));
        setSubmitted(true);
      }}
    >
      <h3>Profile (Zustand)</h3>
      <ProfileAlert id="wd-zustand-profile-alert" submitted={submitted} errors={errors} />
      <ProfileFields prefix="wd-zustand-profile" profile={profile} errors={errors} onChange={setProfile} />
      <button type="submit" id="wd-zustand-profile-save" className="mt-2">
        Save
      </button>
    </form>
  );
}
