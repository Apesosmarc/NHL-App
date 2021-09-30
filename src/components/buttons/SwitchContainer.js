import React from "react";
import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function SwitchContainer() {
  const [enabled, setEnabled] = useState(false);

  //default is off unless statepassed as true
  // teamcolor conditional
  return (
    <div className="py-4 bg-darkBg flex justify-end px-7 sm:px-28 lg:px-56 mx-auto lg:order-first">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-purple-600" : "bg-lightText"
        } relative inline-flex items-center h-7 w-16 rounded-full`}
      >
        <br />
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-9" : "translate-x-0"}
             bg-lightGray inline-block h-8 w-8 rounded-full shadow-lg transform ring-0 transition ease-in-out duration-200`}
        />
      </Switch>
    </div>
  );
}
