import { useState } from "react";
import SectionManager from "./SectionManager.jsx";
import StickyNavbar from "./StickyNavbar.jsx";

export default function FullPageRouter() {
  const [index, setIndex] = useState(0);

  return (
    <>
      <StickyNavbar index={index} setIndex={setIndex} />
      <SectionManager index={index} setIndex={setIndex} />
    </>
  );
}
