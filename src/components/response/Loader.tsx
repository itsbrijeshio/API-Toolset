import { VscLoading } from "react-icons/vsc";

const Loader = () => {
  return (
    <div className="h-100 flex items-center justify-center bg-base-200 rounded-md shadow-md">
      <div>
        <VscLoading className="animate animate-spin mx-auto mb-2" size={30} />
        <span className="opacity-50">Transaction process...</span>
      </div>
    </div>
  );
};
export default Loader;
