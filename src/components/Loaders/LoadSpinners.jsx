import { useState } from "react";
import ClipLoader from "react-spinners/BounceLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const LoadSpinners = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("black");

  return (
    <div className="sweet-loading m-10">
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default LoadSpinners;
{
  /* <button onClick={() => setLoading(!loading)}>Toggle Loader</button> */
}
{
  /* <input
        value={color}
        onChange={(input) => setColor(input.target.value)}
        placeholder="Color of the loader"
      /> */
}
