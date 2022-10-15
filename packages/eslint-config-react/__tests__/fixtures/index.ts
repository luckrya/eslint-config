import * as React from "react";

// 【2条】 plugin:react-hooks/recommended
export function useWindowTitle() {
  const [name, setName] = React.useState("Mary");

  React.useEffect(() => {
    document.title = name;
  }, []);
}
