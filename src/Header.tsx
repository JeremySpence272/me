const Header: React.FC = () => {
  return (
    <section className="w-full lg:w-9/12 mx-auto mt-10 flex flex-row items-center space-x-4">
      <div className="ml-44 md:ml-56 lg:ml-44 mr-8">
        <h1 className="font-subrayada text-5xl font-bold text-slate-900">
          Jeremy Spence
        </h1>
        <p className="font-sourceSans text-lg text-slate-700">
          Learning New Things. Current Fellow @ Columbia University
        </p>
      </div>
    </section>
  );
};

export default Header;
