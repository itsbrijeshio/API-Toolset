import MarkdownPreview from "@uiw/react-markdown-preview";
import { useApi } from "../../contexts";

const Raw = () => {
  const { response } = useApi();

  return (
    <MarkdownPreview
      source={"```\n" + response?.raw + "\n```"}
      className="max-h-100 h-fit overflow-y-scroll !bg-base-100"
    />
  );
};

export default Raw;
