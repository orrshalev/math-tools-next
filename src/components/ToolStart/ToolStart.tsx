import React, { Fragment } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

/**
 * Contents of accordion tabs in tools
 */
export type Tab = {
  id: number;
  label: string;
  description: JSX.Element;
};

/**
 * Contents of expected input on Tool Start component
 */
export type ToolProps = {
  title: string;
  description: string;
  tabs: Array<Tab>;
};

/**
 * Returns HTML elements needed to display tool start
 * @param props object containing title, description, and accordion tabs
 * @returns HTML element of tool start
 */
const ToolStart = (props: ToolProps) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full px-3">
        <div className="py-3">
          <h1 className="font-large text-5xl py-3">{props.title}</h1>
          <p className="font-large text-3xl py-3">{props.description}</p>
        </div>
        <Fragment>
          {props.tabs.map((tab) => (
            <Accordion key={tab.id} className="w-[80vw]">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${tab.id}a-content`}
                aria-label={`panel${tab.id}a-header`}
              >
                {tab.label}
              </AccordionSummary>
              <AccordionDetails className="mx-5">
                {tab.description}
              </AccordionDetails>
            </Accordion>
          ))}
        </Fragment>
      </div>
    </>
  );
};
export default ToolStart;
