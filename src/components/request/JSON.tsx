import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { useCallback, useState } from "react";
import { useApi } from "../../contexts";

const JsonReq = () => {
  const { setRequest, request } = useApi();
  const J = request?.json || {};
  const [value, setValue] = useState(JSON.stringify(J) || "");

  const onChange = useCallback(
    (val: string) => {
      const timer = setTimeout(() => {
        try {
          setRequest({ ...request, json: JSON.parse(val) });
        } catch (error) {
          console.log(error);
        }
      }, 10);
      setValue(val);
      return () => {
        clearTimeout(timer);
      };
    },
    [request, setRequest]
  );

  return (
    <>
      <CodeMirror
        className="!bg-base-300"
        theme="dark"
        value={value}
        height="200px"
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
      />
    </>
  );
};

export default JsonReq;
