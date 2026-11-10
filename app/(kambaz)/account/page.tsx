"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAccount } from "./AccountContext";

export default function AccountPage() {
  const { currentUser } = useAccount();
  const router = useRouter();
  useEffect(() => {
    router.replace(currentUser ? "/account/profile" : "/account/signin");
  }, [currentUser, router]);
  return null;
}
