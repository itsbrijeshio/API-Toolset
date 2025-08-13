import { useApi } from "../../contexts";

const ErrorResponse = () => {
  const { response } = useApi();

  console.log(response.status);
  return (
    <div className="h-50 p-2 bg-base-200 rounded-md shadow-md border border-base-100">
      <div className="flex items-center gap-2 p-2">
        <span className="text-error font-black">
          {String(response?.status)} -{String(response?.statusText) || "Error"}
        </span>
        <span>-</span>
        <span>({Object.keys(response?.headers || {})?.length}) headers</span>
      </div>
      <h2 className="text-lg font-bold text-red-600">Error</h2>
      <p className="text-sm text-red-500">
        {String(response?.error) || "An unexpected error occurred."}
      </p>
      {response && (
        <p className="mt-2 text-sm text-gray-500">
          Status Code: {String(response.status)}
        </p>
      )}
    </div>
  );
};

export default ErrorResponse;
