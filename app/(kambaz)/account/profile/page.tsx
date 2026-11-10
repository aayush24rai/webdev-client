"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAccount, type User } from "../AccountContext";

const inputClass =
  "mb-2 w-full rounded border border-neutral-300 px-3 py-2";

export default function Profile() {
  const { currentUser, setCurrentUser } = useAccount();
  const router = useRouter();
  const [profile, setProfile] = useState<User | null>(currentUser);
  useEffect(() => {
    if (!currentUser) router.replace("/account/signin");
  }, [currentUser, router]);
  if (!currentUser || !profile) return null;
  const signout = () => {
    setCurrentUser(null);
    router.push("/account/signin");
  };
  return (
    <div id="wd-profile-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Profile</h1>
      <input
        id="wd-username"
        value={profile.username}
        placeholder="username"
        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
        className={`wd-username ${inputClass}`}
      />
      <input
        id="wd-password"
        value={profile.password}
        placeholder="password"
        type="password"
        onChange={(e) => setProfile({ ...profile, password: e.target.value })}
        className={`wd-password ${inputClass}`}
      />
      <input
        id="wd-firstname"
        value={profile.firstName}
        placeholder="First Name"
        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
        className={inputClass}
      />
      <input
        id="wd-lastname"
        value={profile.lastName}
        placeholder="Last Name"
        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
        className={inputClass}
      />
      <input
        id="wd-email"
        value={profile.email}
        type="email"
        placeholder="email"
        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
        className={inputClass}
      />
      <select
        id="wd-role"
        value={profile.role}
        onChange={(e) => setProfile({ ...profile, role: e.target.value })}
        className={`${inputClass} bg-white`}
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
        <option value="TA">TA</option>
      </select>
      <button
        id="wd-update-profile-btn"
        type="button"
        onClick={() => setCurrentUser(profile)}
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white"
      >
        Update
      </button>
      <button
        id="wd-signout-btn"
        type="button"
        onClick={signout}
        className="mb-2 block w-full rounded bg-red-600 px-3 py-2 text-center text-white"
      >
        Sign out
      </button>
    </div>
  );
}
