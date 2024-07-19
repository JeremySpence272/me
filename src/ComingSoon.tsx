import React from "react";

const comingSoon: React.FC = () => {
  return (
    <div className="text-slate-700">
      <h1 className="text-xl mt-16 ml-12 font-bold font-subrayada">
        coming soon...{" "}
      </h1>
      <p className="ml-12 italic"> in the meantime:</p>
      <p className="ml-12 mt-4">
        <a
          className="text-slate-500 underline"
          href="https://www.linkedin.com/in/jspence272/"
        >
          linkedin
        </a>
      </p>
      <p className="ml-12">
        <a
          className="text-slate-500 underline"
          href="mailto@j.spence@columbia.edu"
        >
          j.spence@columbia.edu
        </a>
      </p>
    </div>
  );
};

export default comingSoon;
