import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <hr />
      <div>🐤 Twitter Clone</div>
      <hr />
      <Link to="/">Home</Link> * <Link to="/profile">Profile</Link>
      <hr />
    </header>
  );
};
