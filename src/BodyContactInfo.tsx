import React from "react";
import { PageType } from "./App";

interface ContactProps {
  handlePageChange: (newPage: PageType) => void;
}
const BodyContactInfo: React.FC<ContactProps> = ({ handlePageChange }) => {
  return (
    <>
      <p className="mb-4">
        I'm currently seeking software, product, & growth roles at an early
        stage startup where I can apply my diverse experiences and help drive
        bottom line growth.
      </p>
      <p>
        Feel free to reach out through{" "}
        <a
          className="underline cursor-pointer"
          href="https://www.linkedin.com/in/jspence272/"
        >
          LinkedIn
        </a>{" "}
        or email at{" "}
        <a
          className="underline cursor-pointer"
          href="mailto@j.spence@columbia.edu"
        >
          j.spence@columbia.edu{" "}
        </a>
        .
      </p>
    </>
  );
};

export default BodyContactInfo;
