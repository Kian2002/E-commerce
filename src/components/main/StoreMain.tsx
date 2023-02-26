import React from "react";
import { Link } from "react-router-dom";

const StoreMain = () => {
  const itemId = 1;
  return (
    <div>
      StoreMain
      <p>
        <Link to={`item/${itemId}`}>
          Item number {itemId} [will be a component] Sidebar Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Tenetur quas obcaecati illo
          corporis officiis nobis delectus incidunt odio mlorem Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Eum perferendis
          praesentium molestias, incidunt eligendi velit ullam repellat
          doloremque quaerat architecto amet unde, rerum enim. Pariatur a cum
          rerum voluptatibus repellendus? Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Cum esse illo mollitia perferendis,
          quae sed nihil ipsa. Laborum, ea, qui consequatur adipisci ipsam ad
          distinctio voluptatem animi, similique exercitationem explicabo!
          aiores esse nulla reiciendis sed, cupiditate commodi suscipit adipisci
          excepturi ratione cum.
        </Link>
      </p>
    </div>
  );
};

export default StoreMain;
