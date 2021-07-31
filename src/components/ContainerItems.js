import React from "react";

import ".././style.css";

import ItemListContainer from "./ItemListContainer";

function ContainerItems() {
  return (
    <div id="divGeneralItems">
      <ItemListContainer />
      <ItemListContainer />
      <ItemListContainer />
      <ItemListContainer />
      <ItemListContainer />
    </div>
  );
}

export default ContainerItems;
