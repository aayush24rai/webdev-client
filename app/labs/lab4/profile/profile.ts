export type Role = "" | "STUDENT" | "TA" | "FACULTY";
export type Theme = "light" | "dark";
export type Profile = {
  firstName: string;
  lastName: string;
  password: string;
  dob: Date | null;
  role: Role;
  newsletter: boolean;
  topics: string[];
  theme: Theme;
};
export type ProfileErrors = Partial<Record<keyof Profile, string>>;

export const TOPICS = ["HTML", "CSS", "React"];

export const emptyProfile: Profile = {
  firstName: "",
  lastName: "",
  password: "",
  dob: null,
  role: "",
  newsletter: false,
  topics: [],
  theme: "light",
};

const pad = (n: number) => String(n).padStart(2, "0");
export const dateToHtml = (date: Date | null) =>
  date ? `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}` : "";
export const htmlToDate = (value: string): Date | null => {
  if (!value) return null;
  const [y, m, d] = value.split("-").map(Number);
  return new Date(y, m - 1, d);
};

export function validateProfile(p: Profile): ProfileErrors {
  const errors: ProfileErrors = {};
  if (!p.firstName.trim()) errors.firstName = "First name is required.";
  if (!p.lastName.trim()) errors.lastName = "Last name is required.";
  if (p.password.length < 8) errors.password = "Password must be at least 8 characters.";
  if (!p.dob) errors.dob = "Date of birth is required.";
  if (!p.role) errors.role = "Choose a role.";
  if (p.topics.length === 0) errors.topics = "Pick at least one topic.";
  return errors;
}
