import { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoAddOutline } from "react-icons/io5";
import { useApi } from "../../contexts";

const Form = () => {
  const { setRequest, request } = useApi();
  const [count, setCount] = useState(1);
  const [forms, setForm] = useState<{ name: string; value: string }[]>([]);

  const handleIncrement = () => {
    if (count < 10) setCount((pre) => pre + 1);
  };

  const handleDecrement = () => {
    if (count > 1) setCount((pre) => pre - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      let newForm: string = "";
      for (const x in forms) {
        const { name, value } = forms[x];
        if (!name || !value) continue;
        newForm += `${name}=${value}&`;
      }
      setRequest({ ...request, form: newForm });
    }, 1000);
    // Cleanup function to clear the timer
    return () => clearTimeout(timer);
  }, [forms, setRequest]);

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
            value={forms?.[index]?.name || ""}
            onChange={(e) => {
              const newForm = { ...forms };
              newForm[index] = {
                ...newForm[index],
                name: e.target.value,
              };
              setForm(newForm);
            }}
            className="input input-sm border-0 active:shadow !bg-transparent"
          />
          <input
            type="text"
            placeholder="value"
            value={forms[index]?.value || ""}
            onChange={(e) => {
              const newForm = { ...forms };
              newForm[index] = {
                ...newForm[index],
                value: e.target.value,
              };
              setForm(newForm);
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

export default Form;
