import { useApi } from "../../contexts";

const Headers = () => {
  const { response } = useApi();

  return (
    <div className="max-h-100 h-fit overflow-y-scroll">
      <table className="table table-zebra w-full border-t border-base-100">
        <tbody>
          {Object.entries(response?.headers || {}).map(([key, value]) => (
            <tr key={key}>
              <td className="md:w-[150px] text-primary text-wrap">{key}</td>
              <td className="w-[10px]">:</td>
              <td className="text-wrap break-all">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Headers;
