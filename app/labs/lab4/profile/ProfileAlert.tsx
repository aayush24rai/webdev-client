import { ProfileErrors } from "./profile";
export default function ProfileAlert({
  id,
  submitted,
  errors,
}: {
  id: string;
  submitted: boolean;
  errors: ProfileErrors;
}) {
  if (!submitted) return null;
  const count = Object.keys(errors).length;
  if (count === 0) {
    return (
      <div id={id} role="status" className="bg-green-100 p-2 my-2">
        Profile saved.
      </div>
    );
  }
  return (
    <div id={id} role="alert" className="bg-red-100 p-2 my-2">
      Please fix {count} field(s) below.
    </div>
  );
}
