import { useState } from "react";
import Params from "./Params";
import Headers from "./Headers";
import Form from "./Form";
import JsonReq from "./JSON";

const tabList = [
  {
    label: "Params",
    color: "text-warning",
  },
  {
    label: "JSON",
    color: "",
  },
  {
    label: "Form",
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
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

const panels: Record<string, React.FC> = {
  Params,
  JSON: JsonReq,
  Form,
  Headers,
};

const Request = () => {
  const [activeTab, setActiveTab] = useState<string>("Params");

  const Component = panels[activeTab] || Params;

  return (
    <section className="w-full flex flex-col gap-2 p-2 bg-base-200 rounded-md shadow-md border border-base-100">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <Component />
    </section>
  );
};

export default Request;
