import React from "react";

const getAttribution = ({ name }) => <>Photo by {name}</>;

export default [
  {
    description: "Seattle",
    attribution: getAttribution({
      name: "Ganapathy Kumar",
      username: "gkumar2175",
    }),
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Seattle_Kerry_Park_Skyline.jpg/280px-Seattle_Kerry_Park_Skyline.jpg",
  },
  {
    description: "Seattle",
    attribution: getAttribution({
      name: "Pooja Kumar",
      username: "gkumar2175",
    }),
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Seattle_Kerry_Park_Skyline.jpg/280px-Seattle_Kerry_Park_Skyline.jpg",
  },
  {
    description: "Seattle",
    attribution: getAttribution({
      name: "Harold Kumar",
      username: "gkumar2175",
    }),
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Seattle_Kerry_Park_Skyline.jpg/280px-Seattle_Kerry_Park_Skyline.jpg",
  },
];
