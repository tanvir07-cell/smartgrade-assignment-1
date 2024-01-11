import React from "react";
import SearchParams from "./SearchParams";
import ShowStudent from "./ShowStudent";

const Main = () => {
  return (
    <section className="py-24 lg:pt-[120px] lg:pb-28">
      <div className="container">
        <SearchParams />

        <ShowStudent />
      </div>
    </section>
  );
};

export default Main;
