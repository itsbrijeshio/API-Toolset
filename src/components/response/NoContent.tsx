import { TbDatabaseSearch } from "react-icons/tb";

const NoContent = () => {
  return (
    <div className="h-100 flex items-center justify-center bg-base-200 rounded-md shadow-md">
      <div>
        <TbDatabaseSearch className="mx-auto mb-2 animate animate-pulse" size={30} />
        <p className="text-gray-500">Not Sent</p>
      </div>
    </div>
  );
};

export default NoContent;
