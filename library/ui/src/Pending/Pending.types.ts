
export type PendingType = "circular" | "horizontal";

export type PendingProps = {
  className?: string;
  type?: PendingType;
  size?: number;
};

export default PendingProps;
