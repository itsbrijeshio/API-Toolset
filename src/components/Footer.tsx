const Footer = () => {
  return (
    <footer className="w-full flex justify-center items-center p-4 bg-base-200 ">
      <div className="text-center">
        <span className="block">
          &copy; {new Date().getFullYear()} DevToolbox. All rights reserved.
        </span>
        <span>
          Build with ❤️ by{" "}
          <a
            href="https://github.com/itsbrijeshio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Brijesh Kumar
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
