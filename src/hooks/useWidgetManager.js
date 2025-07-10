import { useCallback } from "react";

const useWidgetManager = (widgets, setWidgets) => {
  const addWidget = useCallback(
    (newWidget) => {
      setWidgets((prev) => [...prev, newWidget]);
    },
    [setWidgets]
  );

  const removeWidget = useCallback(
    (id) => {
      setWidgets((prev) => prev.filter((w) => w.id !== id));
    },
    [setWidgets]
  );

  const moveWidget = useCallback(
    (fromIndex, toIndex) => {
      setWidgets((prev) => {
        const updated = [...prev];
        const [moved] = updated.splice(fromIndex, 1);
        updated.splice(toIndex, 0, moved);
        return updated;
      });
    },
    [setWidgets]
  );

  return { addWidget, removeWidget, moveWidget };
};

export default useWidgetManager;
