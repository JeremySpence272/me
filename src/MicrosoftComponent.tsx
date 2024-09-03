import BodyContactInfo from "./BodyContactInfo";

const MicrosoftComponent = () => {
  return (
    <section className="w-full lg:w-9/12 mx-auto mt-4 flex flex-col">
      <div>
        <div className="ml-8 mt-6 md:ml-56 lg:ml-44 mr-8 lg:mr-12 bg-slate-100 rounded-r-lg font-sourceSans text-md pl-8 py-4">
          <a
            className="underline"
            href="/documents/MS Leap Resume.pdf"
            download
          >
            Download Resume
          </a>
        </div>
        <div className="ml-8 mt-6 md:ml-56 lg:ml-44 mr-8 lg:mr-12 bg-slate-100 rounded-r-lg font-sourceSans text-md pl-8 py-4">
          <a
            className="underline"
            href="/documents/Letter of Explanation.pdf"
            download
          >
            Download Letter of Explanation
          </a>
        </div>
        <div className="ml-8 mt-6 md:ml-56 lg:ml-44 mr-8 lg:mr-12 bg-slate-100 rounded-r-lg font-sourceSans text-md pl-8 py-4">
          <a
            className="underline"
            href="/documents/Personal Projects.pdf"
            download
          >
            Download Personal Projects One Pager
          </a>
        </div>
        <div className="ml-8 mt-6 md:ml-56 lg:ml-44 mr-8 lg:mr-12 bg-slate-100 rounded-r-lg font-sourceSans text-md pl-8 py-4">
          <a className="underline" href="/">
            Go Home
          </a>
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

export default MicrosoftComponent;
