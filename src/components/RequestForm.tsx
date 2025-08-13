import { useFormik } from "formik";
import { VscLoading } from "react-icons/vsc";
import { useMutateApi } from "../hooks";
import { useApi } from "../contexts";
import axios from "axios";

const RequestForm = () => {
  const { setResponse, request } = useApi();
  const { mutate, isPending } = useMutateApi({
    onSuccess: (data: Record<string, string>) => {
      const res = { ...data, isPending: false };
      setResponse({ ...res });
    },
    onError: (err: Record<string, string>) => {
      if (axios.isAxiosError(err)) {
        const details = err?.response?.data || {};
        const data = { ...details, isPending: false };
        setResponse(data);
      }
    },
  });

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      url: "https://jsonplaceholder.typicode.com/todos/1",
      method: "get",
      headers: {},
      params: {},
    },
    onSubmit: (values) => {
      if (request?.form) {
        request.data = request.form;
        delete request.form;
        request.headers = {
          "Content-Type": "application/x-www-form-urlencoded",
        };
      } else {
        if (typeof request.json === "string") {
          request.data = JSON.parse(request.json || "{}");
          delete request.json
          request.headers = {
            "Content-Type": "application/json",
          };
        }
      }
      values = { ...values, ...request };

      if (values.url && values.method) {
        setResponse({ isPending: true });
        mutate(values);
      }
    },
  });

  return (
    <section>
      <form
        onSubmit={handleSubmit}
        className="w-full flex items-center gap-2 p-2 rounded-md shadow-md bg-base-200 border border-base-100"
      >
        {/* <button type="button" className="btn btn-sm btn-primary">
          <span>GET</span>
          <CgArrowsV size={20} />
        </button> */}
        <select
          name="method"
          defaultValue={values.method}
          className="select select-ghost select-sm w-fit"
          onChange={handleChange}
        >
          <option disabled={true}>{/* <CgArrowsV size={20} /> */}</option>
          <option value={"get"}>GET</option>
          <option value={"post"}>POST</option>
          <option value={"put"}>PUT</option>
          <option value={"patch"}>PATCH</option>
          <option value={"delete"}>DELETE</option>
          <option value={"head"}>HEAD</option>
          <option value={"options"}>OPTIONS</option>
        </select>
        <input
          type="url"
          name="url"
          value={values.url}
          className="w-full outline-0 border-0"
          placeholder="https://httpie.com/api/products"
          onChange={handleChange}
          autoComplete="off"
        />
        <button
          type="submit"
          className="btn btn-sm btn-info"
          disabled={isPending}
        >
          {isPending ? (
            <VscLoading size={20} className="animate animate-spin" />
          ) : (
            <span>SEND</span>
          )}
        </button>
      </form>
    </section>
  );
};

export default RequestForm;
