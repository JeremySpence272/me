import { PageProps, PageType } from "./App";

type NavLogo = {
  path: string;
  page: PageType;
};

const ButtonNav: React.FC<PageProps> = ({ currentPage, handlePageChange }) => {
  const logos: NavLogo[] = [
    {
      path: "/logos/me.jpg",
      page: PageType.home,
    },
    {
      path: "/logos/columbia.png",
      page: PageType.education,
    },
    {
      path: "/logos/cs.png",
      page: PageType.experience,
    },
    {
      path: "/logos/playbook.png",
      page: PageType.projects,
    },
  ];

  return (
    <div>
      <img
        src={logos.find((logo) => logo.page === PageType.home)!.path}
        alt="home"
        className="w-36 absolute left-4 md:left-12 lg:left-36 top-8 rounded-full cursor-pointer"
        onClick={() => handlePageChange(logos[0].page)}
      />

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-col absolute top-52 md:left-20 lg:left-44 items-center space-y-4">
        {logos
          .filter((logo) => logo.page !== PageType.home)
          .map((logo, index) => (
            <button
              key={index}
              className={`pb-4 ${
                currentPage !== PageType.home &&
                logo.page === PageType.home &&
                "pb-0"
              } ${
                logo.page !== PageType.home &&
                "border-b-2 border-slate-900 ml-0"
              }`}
              onClick={() => handlePageChange(logo.page)}
            >
              <img
                src={logo.path}
                alt={logo.page.toString()}
                className={`rounded-full mb-4 box-content ${
                  logo.page === PageType.home
                    ? "w-36 h-36 mb-8 ml-0"
                    : "w-20 h-20"
                } ${
                  logo.page === currentPage && logo.page !== PageType.home
                    ? "border-slate-200 border-8 w-24 h-24"
                    : "border-none"
                }`}
              />
              <p
                className={`${
                  logo.page === PageType.home && "hidden"
                } uppercase font-sourceSans font-semibold mx-auto text-slate-900 ${
                  logo.page === currentPage ? "text-sm" : "text-xs"
                }`}
              >
                {logo.page}
              </p>
            </button>
          ))}
      </div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden flex-col mt-8 space-y-4">
        <div className="flex justify-center space-x-12">
          {logos
            .filter((logo) => logo.page !== PageType.home)
            .map((logo, index) => (
              <button
                key={index}
                className="pb-4"
                onClick={() => handlePageChange(logo.page)}
              >
                <img
                  src={logo.path}
                  alt={logo.page.toString()}
                  className={`rounded-full mb-4 box-content w-20 h-20 ${
                    logo.page === currentPage &&
                    "border-slate-200 border-8 w-24 h-24"
                  }`}
                />
                <p className="uppercase font-sourceSans font-semibold text-center text-slate-900 text-xs">
                  {logo.page}
                </p>
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ButtonNav;
