import * as React from "react";
import Loadable from "react-loadable";
import LazyLoadModule from "./lazyLoadModule";

export function Loading(props: { error: any }) {
  return props && props.error ? (
    <div>{"Error in loading module"}</div>
  ) : (
    <div>{"Loading....."}</div>
  );
}

export const loaderWrapper = (loader: any) =>
  Loadable({
    loader,
    loading: Loading,
    render(loaded: any, props: any) {
      const module = loaded.default;
      return (
        <LazyLoadModule view={module.view} name={module.name} {...props} />
      );
    },
  });

export const homePage = loaderWrapper(() =>
  import(/* "home"*/ "../common/modules/spaceListView")
);
