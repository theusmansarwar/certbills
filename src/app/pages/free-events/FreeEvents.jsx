import React from "react";
import FreeEventsHero from "@/app/Components/FreeEventsHero/FreeEventsHero";
import ExclusiveEvents from "@/app/Components/FreeEventsCard/ExclusiveEvents";

const FreeEvents = () => {
  return (
    <div>
      <FreeEventsHero />
      <ExclusiveEvents />
    </div>
  );
};

export default FreeEvents;
