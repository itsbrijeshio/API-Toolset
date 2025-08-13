import MarkdownPreview from "@uiw/react-markdown-preview";
import { useApi } from "../../contexts";
import { useEffect, useState } from "react";

const HTML = () => {
  const { response } = useApi();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className="relative !bg-base-100">
        {loading && (
          <div className="absolute w-full top-0 left-0 h-100 flex items-center justify-center !bg-base-100">
            <div>
              <span className="block loading loading-spinner mx-auto"></span>
              <span className="ml-2 text-base-content">Loading Page</span>
            </div>
          </div>
        )}
        <iframe
          srcDoc={String(response?.html)}
          title="HTML Response"
          className="h-100 w-full p-2 overflow-y-scroll !bg-base-100"
        ></iframe>
      </div>
    </>
  );
  return (
    <MarkdownPreview
      source={String(response?.html)}
      className="max-h-100 h-fit p-2 overflow-y-scroll !bg-base-100"
    />
  );
};

export default HTML;
