import { useRef, useEffect } from "react";

const useDocumentTitle = (title) => {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    document.title = title
      ? `${title} - ${defaultTitle.current}`
      : `${defaultTitle.current}`;
  }, [title]);
};

export default useDocumentTitle;
