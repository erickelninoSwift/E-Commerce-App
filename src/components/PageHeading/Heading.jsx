export const Heading = ({ title, secondary }) => {
  return (
    <>
      <div className="lg:flex lg:items-center lg:justify-center  mt-5">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            {title}
          </h2>
        </div>
      </div>
      {secondary}
    </>
  );
};
