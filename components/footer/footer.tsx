import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-4 text-sm">
      <p>
        Made with ❤️ by{" "}
        <Link
          href={"https://www.linkedin.com/in/suhell-khan/"}
          className="font-medium text-blue-600 underline underline-offset-2"
        >
          Suhel
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
