import { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoAddOutline } from "react-icons/io5";
import { useApi } from "../../contexts";

const Params = () => {
  const { setRequest } = useApi();
  const [count, setCount] = useState(2);
  const [params, setParams] = useState<{ name: string; value: string }[]>([]);

  const handleIncrement = () => {
    if (count < 10) setCount((pre) => pre + 1);
  };

  const handleDecrement = () => {
    if (count > 1) setCount((pre) => pre - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const newParams: Record<string, string> = {};
      for (const x in params) {
        const { name, value } = params[x];
        if (!name || !value) continue;
        newParams[name] = value;
      }
      setRequest((prev) => ({ ...prev, params: newParams }));
    }, 1000);
    // Cleanup function to clear the timer
    return () => clearTimeout(timer);
  }, [params, setRequest]);

  return (
    <div className="h-fit flex flex-col gap-2 overflow-y-scroll pt-1">
      {Array.from({ length: count }, (_, index) => (
        <div
          key={index}
          className="flex items-center gap-2 px-2 hover:bg-base-100 rounded-md"
        >
          <input
            type="text"
            placeholder="name"
            value={params?.[index]?.name || ""}
            onChange={(e) => {
              const newParams = { ...params };
              newParams[index] = {
                ...newParams[index],
                name: e.target.value,
              };
              setParams(newParams);
            }}
            className="input input-sm border-0 active:shadow !bg-transparent"
          />
          <input
            type="text"
            placeholder="value"
            value={params[index]?.value || ""}
            onChange={(e) => {
              const newParams = { ...params };
              newParams[index] = {
                ...newParams[index],
                value: e.target.value,
              };
              setParams(newParams);
            }}
            className="input input-sm border-0 active:shadow !bg-transparent"
          />
          <button
            type="button"
            className="btn btn-sm btn-ghost rounded-full"
            onClick={handleDecrement}
          >
            <RiDeleteBinLine size={15} className="text-error" />
          </button>
        </div>
      ))}
      <div>
        <button type="button" className="btn btn-sm" onClick={handleIncrement}>
          <IoAddOutline size={15} />
        </button>
      </div>
    </div>
  );
};

export default Params;
