import React, { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

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
  const [open, setOpen] = useState(1);
  const handleOpen = (val: number) => {
    setOpen(open === val ? 0 : val);
  };

  return (
    <>
    <div>
      <div className="py-3">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
      <div className="mx-3 border rounded">
        <Fragment>
          {props.tabs.map((tab) => (
            <Accordion className="border px-4" key={tab.id} open={open === tab.id}>
              <AccordionHeader onClick={() => handleOpen(tab.id)}>
                {tab.label}
              </AccordionHeader>
              <AccordionBody>{tab.description}</AccordionBody>
            </Accordion>
          ))}
        </Fragment>
      </div>
      </div>
    </>
  );
};
export default ToolStart;
