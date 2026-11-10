import Link from "next/link";
import ProfileForm from "../profile/ProfileForm";
import ContextProfileForm from "../context/ContextProfileForm";
import ZustandProfileForm from "../zustand/ZustandProfileForm";

export default function ProfileFormsPage() {
  return (
    <div id="wd-profile-forms" className="p-2">
      <h1>Profile Forms – useState vs Context vs Zustand</h1>
      <Link href="/labs/lab4" id="wd-profile-forms-back-link">
        Back to Lab 4
      </Link>
      <ProfileForm />
      <ContextProfileForm />
      <ZustandProfileForm />
    </div>
  );
}
