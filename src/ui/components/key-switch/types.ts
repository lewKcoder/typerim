import { FunctionComponent } from "react";

type Props = {
  label: string;
  onClick: () => void;
};

export type Component = FunctionComponent<Props>;
