import React from "react";
function ItemInfo({ name, info, image, party }) {
  <section>
    <div>{image}</div>
    <div>
      <p>{name}</p>
      <p>{party}</p>
      <p>{info}</p>
    </div>
    <div>
      <button
        className="w-full md:w-2/12 h-12 md:h-14 border-2 border-white shadow-md rounded-xl text-white font-semibold capitalize hover:bg-teal-500 hover:border-teal-500 transition duration-300"
        aria-label="Get started with BetaVote"
      ></button>
    </div>
  </section>;
}
