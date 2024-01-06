import { RefObject } from "react";

type UseRefsExtractor<T> = {
  [K in keyof T]: string;
};

type Callback<T> = (ref: RefObject<T>) => string | undefined;

/**
 * useRefExtractor
 * ----------------
 * extract data from refs array
 * @param refs refs array
 * @param callback extractor function
 */
export default function useRefsExtractor<
  R extends Record<string, RefObject<any>>
>(refs: R, callback: Callback<any>): UseRefsExtractor<R> {
  const refsMap = Object
    .entries(refs)
    .map(([key, value]) => ([key, callback(value) || ""]));
  return Object.fromEntries(refsMap);
}
