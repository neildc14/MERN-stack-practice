import { useState } from "react";

function useChangeInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const bind = {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };


  const reset = () => {
    setValue(initialValue || "");
  };

  return [value, bind, reset];
}

export default useChangeInput;
