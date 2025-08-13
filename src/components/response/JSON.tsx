import MarkdownPreview from "@uiw/react-markdown-preview";
import { useApi } from "../../contexts";

const JsonRes = () => {
  const { response } = useApi();
  return (
    <MarkdownPreview
      source={"```json \n" + response?.json + "\n```"}
      className="max-h-100 h-fit overflow-y-scroll !bg-base-100"
    />
  );
};
export default JsonRes;
