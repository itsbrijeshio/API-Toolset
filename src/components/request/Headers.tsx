import { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoAddOutline } from "react-icons/io5";
import { useApi } from "../../contexts";

const defaultHeaders = [
  {
    name: "Content-Type",
    value: "application/json",
  },
];

const Headers = () => {
  const { setRequest } = useApi();
  const [count, setCount] = useState(1);
  const [headers, setHeaders] =
    useState<{ name: string; value: string }[]>(defaultHeaders);

  const handleIncrement = () => {
    if (count < 10) setCount((pre) => pre + 1);
  };

  const handleDecrement = () => {
    if (count > 1) setCount((pre) => pre - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const newHeaders: Record<string, string> = {};
      for (const x in headers) {
        const { name, value } = headers[x];
        if (!name || !value) continue;
        newHeaders[name] = value;
      }
      setRequest((prev) => ({ ...prev, headers: newHeaders }));
    }, 1000);
    // Cleanup function to clear the timer
    return () => clearTimeout(timer);
  }, [headers, setRequest]);

  return (
    <div className="max-h-100 h-fit flex flex-col gap-2 overflow-y-scroll pt-1">
      {Array.from({ length: count }, (_, index) => (
        <div
          key={index}
          className="flex items-center gap-2 px-2 hover:bg-base-100 rounded-md"
        >
          <input
            type="text"
            placeholder="name"
            value={headers?.[index]?.name || ""}
            onChange={(e) => {
              const newHeaders = { ...headers };
              newHeaders[index] = {
                ...newHeaders[index],
                name: e.target.value,
              };
              setHeaders(newHeaders);
            }}
            className="input input-sm border-0 active:shadow !bg-transparent"
          />
          <input
            type="text"
            placeholder="value"
            value={headers[index]?.value || ""}
            onChange={(e) => {
              const newHeaders = { ...headers };
              newHeaders[index] = {
                ...newHeaders[index],
                value: e.target.value,
              };
              setHeaders(newHeaders);
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

export default Headers;
