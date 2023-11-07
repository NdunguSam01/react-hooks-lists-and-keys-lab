import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const mappedLinks=links.map(
    (link, index) =>
    {
      //Returing the anchor tag with the href set to the individual link preceeded by a # and also with a unique key of the index of the individual array item
      let url=`#${link}`
      return <a key={index} href={url}>{link}</a>
    }
  )
  return <nav>
    {mappedLinks}
  </nav>;
}

export default NavBar;
