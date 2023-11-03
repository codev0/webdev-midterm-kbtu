import { FormEventHandler } from "react";
import { Header } from "./Header";
import { ProfileData } from "./data";

export const Profile = () => {
  const handleForm: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const fd = new FormData(event.target as HTMLFormElement);
    for (const f of fd.entries()) {
      console.info(f);
    }
  };

  return (
    <div className="container">
      <Header />
      <h1>Profile Page</h1>
      <div>
        <form onSubmit={handleForm}>
          <label>
            Your login
            <input type="text" name="name" defaultValue={ProfileData.login} />
          </label>
          <label>
            Your name
            <input type="text" name="name" defaultValue={ProfileData.name} />
          </label>
          <label>
            Your lastname
            <input
              type="text"
              name="lastname"
              defaultValue={ProfileData.lastname}
            />
          </label>
          <label>
            Your email
            <input
              type="email"
              name="lastname"
              defaultValue={ProfileData.email}
            />
          </label>
          <label>
            Your bio
            <textarea name="bio" defaultValue={ProfileData.bio} />
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};
