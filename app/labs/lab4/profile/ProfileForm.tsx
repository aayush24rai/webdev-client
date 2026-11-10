"use client";
import { useState } from "react";
import { emptyProfile, Profile, ProfileErrors, validateProfile } from "./profile";
import ProfileFields from "./ProfileFields";
import ProfileAlert from "./ProfileAlert";

export default function ProfileForm() {
  const [profile, setProfile] = useState<Profile>(emptyProfile);
  const [errors, setErrors] = useState<ProfileErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const save = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors(validateProfile(profile));
    setSubmitted(true);
  };
  return (
    <form id="wd-profile-form" onSubmit={save} noValidate>
      <h2>Profile</h2>
      <ProfileAlert id="wd-profile-alert" submitted={submitted} errors={errors} />
      <ProfileFields prefix="wd-profile" profile={profile} errors={errors} onChange={setProfile} />
      <button type="submit" id="wd-profile-save" className="mt-2">
        Save
      </button>
      <hr />
    </form>
  );
}
