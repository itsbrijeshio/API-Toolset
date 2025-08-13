import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full p-2 bg-base-200">
      <div className="container mx-auto flex justify-center items-center">
        <Link to={"/"}>
          <h1 className="text-2xl font-bold">DevToolBox</h1>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
