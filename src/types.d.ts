import { FunctionComponent, PropsWithChildren } from "react";

declare module "react" {
  type FCC<P = {}> = FunctionComponent<PropsWithChildren<P>>;
}

declare global {
  export type Nullable<T> = T | null;
  export type NotRequired<T> = T | undefined;
  export type UUID = string;
  export type GeoPoint<T> = { readonly lat: T; readonly lon: T };
}

declare module "*.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg" {
  import React from "react";

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

type OptionalRecord<K extends keyof any, T> = {
  [P in K]?: T;
};
