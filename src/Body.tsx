import { PageProps } from "./App";
import BodyContactInfo from "./BodyContactInfo";
import BodyInner from "./BodyInner";

const Body: React.FC<PageProps> = ({ currentPage, handlePageChange }) => {
  return (
    <section className="w-9/12 mx-auto mt-4 flex flex-col">
      <div className="ml-44 mr-36 bg-slate-100 rounded-r-lg font-sourceSans text-md">
        <div className="m-6">
          <BodyInner currentPage={currentPage} />
        </div>
      </div>
      <div className="ml-44 mr-36 mt-2 bg-slate-600 text-white rounded-r-lg  font-sourceSans text-md">
        <div className="m-6">
          <BodyContactInfo handlePageChange={handlePageChange} />
        </div>
      </div>
    </section>
  );
};

export default Body;
