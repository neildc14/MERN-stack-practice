import { useState } from "react";

function useChangeInput() {
  const [value, setValue] = useState("");

  const bind = {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };

  return [value, bind];
}

export default useChangeInput;
