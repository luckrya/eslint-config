import * as React from "react";

// ใ2ๆกใ plugin:react-hooks/recommended
export function useWindowTitle() {
  const [name, setName] = React.useState("Mary");

  React.useEffect(() => {
    document.title = name;
  }, []);
}
