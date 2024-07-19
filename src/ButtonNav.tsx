import { PageProps, PageType } from "./App";

type NavLogo = {
  path: string;
  page: PageType;
};

const ButtonNav: React.FC<PageProps> = ({ currentPage, handlePageChange }) => {
  const logos: NavLogo[] = [
    {
      path: "src/logos/me.png",
      page: PageType.home,
    },
    {
      path: "src/logos/columbia.png",
      page: PageType.education,
    },
    {
      path: "src/logos/cs.png",
      page: PageType.experience,
    },
    {
      path: "src/logos/playbook.png",
      page: PageType.projects,
    },
  ];

  return (
    <div className="flex flex-col absolute left-36 top-8 items-center space-y-4">
      {logos.map((logo, index) => (
        <button
          key={index}
          className={`pb-4 ${
            currentPage !== PageType.home &&
            logo.page === PageType.home &&
            "pb-0"
          } ${logo.page !== PageType.home && "border-b-2 border-slate-900"}`}
          onClick={() => handlePageChange(logo.page)}
        >
          <img
            src={logo.path}
            alt={logo.page.toString()}
            className={`rounded-full mb-4 box-content ${
              logo.page === PageType.home ? "w-36 h-36 mb-8" : "w-20 h-20"
            } ${
              logo.page === currentPage && logo.page !== PageType.home
                ? "border-slate-200 border-8 w-24 h-24"
                : "border-none"
            } `}
          />
          <p
            className={`${
              logo.page === PageType.home && "hidden"
            }  uppercase font-sourceSans font-semibold mx-auto text-slate-900 ${
              logo.page === currentPage ? "text-sm" : "text-xs"
            }`}
          >
            {logo.page}
          </p>
        </button>
      ))}
    </div>
  );
};

export default ButtonNav;
