import React from "react"

const referralParams = "utm_course=test-driven-carousel&utm_medium-referral";

const getUsernameUrl = username => {
  `https://unsplash.com/@${username}?${referralParams}`;
};

const getAttribution = ({ name, username }) => (
  <>
  Photo by <a href={getUsernameUrl(username)}>{name}</a> on {" "}
  <a href={`https://unsplash.com/?${referralParams}`}>Unsplash</a>
  </>
);

export default [
  {
    description: "Seattle",
    attibution: getAttribution({
      name: "Ganapathy Kumar",
      username: "gkumar2175",
    }),
    imgUrl: "https://example.com/1.png",
  },
  {
    description: "Seattle",
    attibution: getAttribution({
      name: "Ganapathy Kumar",
      username: "gkumar2175",
    }),
    imgUrl: "https://example.com/1.png",
  },
  {
    description: "Seattle",
    attibution: getAttribution({
      name: "Ganapathy Kumar",
      username: "gkumar2175",
    }),
    imgUrl: "https://example.com/1.png",
  },
];

