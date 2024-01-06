"use client";
import { MutableRefObject, useEffect } from "react";

/**
 * useOutsideClick
 * ----------------
 * when click occured outside of a group of element
 * @param ref all element refs that is clickable
 * @param state current state of parent
 * @param callback outside clicked function
 */
export default function useOutsideClick(
  refs: Array<MutableRefObject<any>>,
  state: boolean,
  callback: () => void
) {
  const handler = (e: MouseEvent) => {
    if (!state) return;
    const target = e.target;
    const refsWereClicked = refs.some((ref) => ref?.current?.contains(target));
    if (!refsWereClicked) return callback();
  };

  useEffect(() => {
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [state, refs]);
}
