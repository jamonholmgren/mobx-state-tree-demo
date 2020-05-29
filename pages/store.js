import { useMemo } from "react";
import { types } from "mobx-state-tree";

export const RootStore = types
  .model({
    width: types.number,
    height: types.number,
  })
  .actions((store) => ({
    setWidth(value) {
      store.width = parseFloat(value);
    },
    setHeight(value) {
      store.height = parseFloat(value);
    },
  }))
  .views((store) => ({
    get area() {
      return store.width * store.height;
    },
    get perimeter() {
      return store.width * 2 + store.height * 2;
    },
  }));

let _store;
export const useStore = () => {
  const store = useMemo(() => {
    if (!_store) _store = RootStore.create({ width: 10, height: 10 });
    return _store;
  }, []);
  return store;
};
