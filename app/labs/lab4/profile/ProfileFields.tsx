"use client";
import { dateToHtml, htmlToDate, Profile, ProfileErrors, Role, Theme, TOPICS } from "./profile";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <div id={id} className="text-red-600 text-sm">
      {message}
    </div>
  );
}

export default function ProfileFields({
  prefix,
  profile,
  errors,
  onChange,
}: {
  prefix: string;
  profile: Profile;
  errors: ProfileErrors;
  onChange: (profile: Profile) => void;
}) {
  const set = <K extends keyof Profile>(key: K, value: Profile[K]) =>
    onChange({ ...profile, [key]: value });
  const toggleTopic = (topic: string) =>
    set(
      "topics",
      profile.topics.includes(topic)
        ? profile.topics.filter((t) => t !== topic)
        : [...profile.topics, topic]
    );
  return (
    <div className="flex flex-col gap-2 max-w-md">
      <label htmlFor={`${prefix}-first-name`}>First name</label>
      <input
        id={`${prefix}-first-name`}
        className="border p-1"
        value={profile.firstName}
        onChange={(e) => set("firstName", e.target.value)}
      />
      <FieldError id={`${prefix}-first-name-error`} message={errors.firstName} />

      <label htmlFor={`${prefix}-last-name`}>Last name</label>
      <input
        id={`${prefix}-last-name`}
        className="border p-1"
        value={profile.lastName}
        onChange={(e) => set("lastName", e.target.value)}
      />
      <FieldError id={`${prefix}-last-name-error`} message={errors.lastName} />

      <label htmlFor={`${prefix}-password`}>Password</label>
      <input
        id={`${prefix}-password`}
        type="password"
        className="border p-1"
        value={profile.password}
        onChange={(e) => set("password", e.target.value)}
      />
      <FieldError id={`${prefix}-password-error`} message={errors.password} />

      <label htmlFor={`${prefix}-dob`}>Date of birth</label>
      <input
        id={`${prefix}-dob`}
        type="date"
        className="border p-1"
        value={dateToHtml(profile.dob)}
        onChange={(e) => set("dob", htmlToDate(e.target.value))}
      />
      <FieldError id={`${prefix}-dob-error`} message={errors.dob} />

      <label htmlFor={`${prefix}-role`}>Role</label>
      <select
        id={`${prefix}-role`}
        className="border p-1"
        value={profile.role}
        onChange={(e) => set("role", e.target.value as Role)}
      >
        <option value="">Choose a role</option>
        <option value="STUDENT">Student</option>
        <option value="TA">Teaching assistant</option>
        <option value="FACULTY">Faculty</option>
      </select>
      <FieldError id={`${prefix}-role-error`} message={errors.role} />

      <label>
        <input
          id={`${prefix}-newsletter`}
          type="checkbox"
          checked={profile.newsletter}
          onChange={() => set("newsletter", !profile.newsletter)}
        />{" "}
        Email me the newsletter
      </label>

      <fieldset id={`${prefix}-topics`} className="border p-2">
        <legend>Topics</legend>
        {TOPICS.map((topic) => (
          <label key={topic} className="mr-3">
            <input
              id={`${prefix}-topic-${topic.toLowerCase()}`}
              type="checkbox"
              checked={profile.topics.includes(topic)}
              onChange={() => toggleTopic(topic)}
            />{" "}
            {topic}
          </label>
        ))}
      </fieldset>
      <FieldError id={`${prefix}-topics-error`} message={errors.topics} />

      <fieldset id={`${prefix}-theme`} className="border p-2">
        <legend>Theme</legend>
        {(["light", "dark"] as Theme[]).map((theme) => (
          <label key={theme} className="mr-3">
            <input
              id={`${prefix}-theme-${theme}`}
              type="radio"
              name={`${prefix}-theme`}
              checked={profile.theme === theme}
              onChange={() => set("theme", theme)}
            />{" "}
            {theme === "light" ? "Light" : "Dark"}
          </label>
        ))}
      </fieldset>
    </div>
  );
}
