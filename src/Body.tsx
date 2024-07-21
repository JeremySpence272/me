import { PageProps } from "./App";
import BodyContactInfo from "./BodyContactInfo";
import BodyInner from "./BodyInner";

const Body: React.FC<PageProps> = ({ currentPage }) => {
  return (
    <section className="w-full lg:w-9/12 mx-auto mt-4 flex flex-col">
      <div className="ml-8 md:ml-56 lg:ml-44 mr-8 lg:mr-12 bg-slate-100 rounded-r-lg font-sourceSans text-md">
        <div className="m-6">
          <BodyInner currentPage={currentPage} />
        </div>
      </div>
      <div className="ml-8 md:ml-56 lg:ml-44 mr-8 lg:mr-12 mt-2 bg-slate-600 text-white rounded-r-lg  font-sourceSans text-md">
        <div className="m-6">
          <BodyContactInfo />
        </div>
      </div>
    </section>
  );
};

export default Body;
