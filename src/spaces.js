import React from "react";

const spaces = [
  {
    id: 1,
    code: "&#x2001;",
    percentage: 100.0
  },
  {
    id: 2,
    code: "&#x2003;",
    percentage: 100.0
  },
  {
    id: 3,
    code: "&#x3000;",
    percentage: 100.0
  },
  {
    id: 4,
    code: "&#x2000;",
    percentage: 50.0
  },
  {
    id: 5,
    code: "&#x2002;",
    percentage: 50.0
  },
  {
    id: 6,
    code: "&#x2007;",
    percentage: 50.0
  },
  {
    id: 7,
    code: "&#x2004;",
    percentage: 33.0
  },
  {
    id: 8,
    code: "&#x00A0;",
    percentage: 25.0
  },
  {
    id: 9,
    code: "&#x2005;",
    percentage: 25.0
  },
  {
    id: 10,
    code: "&#x2008;",
    percentage: 25.0
  },
  {
    id: 11,
    code: "&#x205F;",
    percentage: 22.2
  },
  {
    id: 12,
    code: "&#x2009;",
    percentage: 20.0
  },
  {
    id: 13,
    code: "&#x2006;",
    percentage: 16.7
  },
  {
    id: 14,
    code: "&#x202F;",
    percentage: 12.5
  },
  {
    id: 15,
    code: "&#x200A;",
    percentage: 6.25
  }
];

const SpacesList = () => {
  return (
    <ul className="spacesList">
      {spaces.map((item) => {
        return (
          <li
            onClick={() => {
              navigator.clipboard.writeText(item.code);
            }}
            className="spacesListItem"
            key={"space_" + item.id}
          >
            {item.code} ({item.percentage} %)
          </li>
        );
      })}
    </ul>
  );
};

export default SpacesList;
