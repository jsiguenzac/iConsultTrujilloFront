/// <reference types="react-scripts" />

import * as React from "react";

declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.gif";

type TIntrinsicElement = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

declare global {
  namespace JSX {
    interface IntrinsicElements extends HTMLElement {
      "cc-button": TIntrinsicElement;
      "cc-icon": TIntrinsicElement;
      "cc-input": TIntrinsicElement;
      "cc-loader": TIntrinsicElement;
      "cc-textarea": TIntrinsicElement;
    }
  }
}
