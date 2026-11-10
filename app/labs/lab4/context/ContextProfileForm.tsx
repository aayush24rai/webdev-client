"use client";
import { useState } from "react";
import { ProfileErrors, validateProfile } from "../profile/profile";
import ProfileFields from "../profile/ProfileFields";
import ProfileAlert from "../profile/ProfileAlert";
import { ProfileProvider, useProfileContext } from "./ProfileContext";

function ContextProfileFormBody() {
  const { profile, setProfile } = useProfileContext();
  const [errors, setErrors] = useState<ProfileErrors>({});
  const [submitted, setSubmitted] = useState(false);
  return (
    <form
      id="wd-context-profile-form"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        setErrors(validateProfile(profile));
        setSubmitted(true);
      }}
    >
      <h3>Profile (React Context)</h3>
      <ProfileAlert id="wd-context-profile-alert" submitted={submitted} errors={errors} />
      <ProfileFields prefix="wd-context-profile" profile={profile} errors={errors} onChange={setProfile} />
      <button type="submit" id="wd-context-profile-save" className="mt-2">
        Save
      </button>
    </form>
  );
}

export default function ContextProfileForm() {
  return (
    <ProfileProvider>
      <ContextProfileFormBody />
    </ProfileProvider>
  );
}
