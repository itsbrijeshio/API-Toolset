import { useApi } from "../../contexts";

const ErrorResponse = () => {
  const { response } = useApi();

  return (
    <div className="h-50 p-2 bg-base-200 rounded-md shadow-md border border-base-100">
      <div className="flex items-center gap-2 p-2">
        <span className="text-error font-black">
          {response.status} {response.statusText}
        </span>
        <span>-</span>
        <span>({Object.keys(response?.headers || {})?.length}) headers</span>
      </div>
      <h2 className="text-lg font-bold text-red-600">Error</h2>
      <p className="text-sm text-red-500">
        {response?.error || "An unexpected error occurred."}
      </p>
      {response?.status && (
        <p className="mt-2 text-sm text-gray-500">
          Status Code: {response.status}
        </p>
      )}
    </div>
  );
};

export default ErrorResponse;
