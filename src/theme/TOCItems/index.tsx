import React, { useContext } from "react";
// eslint-disable-next-line import/no-unresolved
import TOCItems from "@theme-original/TOCItems";
import { CustomContentContext } from "../../custom-content";
import styles from "./styles.module.css";

export default function TOCItemsWrapper(props) {
  const { tocContent } = useContext(CustomContentContext);
  console.log("hi");

  return (
    <>
      <TOCItems {...props} />
      {tocContent && (
        <div
          className={`custom-content custom-content-toc ${styles.content}`}
          dangerouslySetInnerHTML={{ __html: tocContent }}
        ></div>
      )}
    </>
  );
}
