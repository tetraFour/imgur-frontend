import { RefObject, useEffect } from "react";

interface IUseOutsideClick {
  (
    ref: RefObject<any>,
    triggerRef: RefObject<any>,
    handler: (event) => void
  ): void;
}

export const useOnClickOutside: IUseOutsideClick = (
  ref,
  triggerRef,
  handler
): void => {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element || descendent elements || trigger button
      if (
        !ref.current ||
        ref.current.contains(event.target) ||
        triggerRef.current.contains(event.target)
      ) {
        return;
      } else {
        handler(event);
      }
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler, triggerRef]);
};
