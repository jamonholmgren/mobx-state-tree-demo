import { observer } from "mobx-react-lite";
import { useStore } from "./store";

export const AreaResult = observer(() => {
  const { area } = useStore();

  return (
    <a className="card">
      <h3>
        Area &rarr; <code>{area}</code>
      </h3>
    </a>
  );
});

export const PerimeterResult = observer(() => {
  const { perimeter } = useStore();

  return (
    <a className="card">
      <h3>
        Perimeter &rarr; <code>{perimeter}</code>
      </h3>
    </a>
  );
});
