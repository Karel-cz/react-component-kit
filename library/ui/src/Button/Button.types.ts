import type { ColorScheme } from "../tools/colors";

export type ButtonProps = {
  children?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  removeDefaultStyle?: boolean;
  type?: "button" | "submit" | "reset";
  label?: string;
  tooltip?: string;
  isPending?: boolean;
  colorScheme?: ColorScheme;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
};
