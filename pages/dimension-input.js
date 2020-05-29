import { observer } from "mobx-react-lite";
import { useStore } from "./store";

export const WidthInput = observer(() => {
  const { width, setWidth } = useStore();

  return (
    <div className="card">
      <label for="Width">Width</label>
      <input
        type="text"
        name="Width"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
      />
    </div>
  );
});

export const HeightInput = observer(() => {
  const { height, setHeight } = useStore();

  return (
    <div className="card">
      <label for="Height">Height</label>
      <input
        type="text"
        name="Height"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
    </div>
  );
});
