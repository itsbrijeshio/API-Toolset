import { useState } from "react";
import HTML from "./HTML";
import Raw from "./Raw";
import JsonRes from "./JSON";
import Headers from "./Headers";
import { useApi } from "../../contexts";
import Loader from "./Loader";
import NoContent from "./NoContent";
import ErrorResponse from "./Error";

const tabList = [
  {
    label: "JSON",
    color: "text-warning",
  },
  {
    label: "Raw",
    color: "",
  },
  {
    label: "HTML",
    color: "text-error",
  },
  {
    label: "Headers",
    color: "text-success",
  },
];

const Tabs = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) => {
  const { response } = useApi();
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const tab = (e.currentTarget as HTMLButtonElement).dataset.tab;
    if (tab) setActiveTab(tab);
  };

  return (
    <div className="flex items-center gap-2">
      {tabList.map((tab, index) => (
        <button
          key={index}
          type="button"
          className={`btn btn-sm ${tab.color} ${
            activeTab == tab.label && "btn-active"
          }`}
          onClick={handleOnClick}
          data-tab={tab.label}
          disabled={!response?.[tab.label.toLowerCase()]}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

const panels: Record<string, React.FC> = {
  HTML,
  Raw,
  JSON: JsonRes,
  Headers,
};

const Response = () => {
  const [activeTab, setActiveTab] = useState<string>("JSON");
  const Component = panels[activeTab] || (() => <div>Select a tab</div>);
  const { response } = useApi();

  if (response?.error) {
    return <ErrorResponse />;
  }

  if (response?.isPending) {
    return <Loader />;
  }

  if (Object.values(response).length < 1) {
    return <NoContent />;
  }

  const status = parseInt(String(response?.status)) || 400;
  const statusColor =
    status < 400
      ? "text-success"
      : status >= 400 && status < 500
      ? "text-warning"
      : "text-error";

  return (
    <section className="w-full flex flex-col gap-2 p-2 bg-base-200 rounded-md shadow-md border border-base-100">
      <div className="flex items-center gap-2 p-2">
        <span className={`${statusColor} font-black`}>
          {String(response?.status)} {String(response?.statusText)}
        </span>
        <span>-</span>
        <span>({Object.keys(response?.headers || {})?.length}) headers</span>
      </div>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <Component />
    </section>
  );
};

export default Response;
