//@@viewOn:imports
import React from "react";
import colors from "../tools/colors";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  button: (
    removeDefaultStyle?: boolean,
    disabled?: boolean,
    pending?: boolean,
    hover?: boolean,
    focus?: boolean
  ) => {
    if (removeDefaultStyle) {
      return {};
    }

    const primary = colors.primary; // modern blue token
    const background = disabled
      ? colors.surface
      : pending
      ? primary
      : hover
      ? colors.primaryDark
      : primary;
    const color = disabled ? colors.muted : colors.text;

    return {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0.5rem 1rem",
      border: "none",
      borderRadius: 8,
      background: background,
      color: color,
      cursor: disabled ? "not-allowed" : "pointer",
      fontWeight: 600,
      boxShadow: focus ? "0 8px 20px rgba(37,99,235,0.15)" : "0 4px 10px rgba(2,6,23,0.08)",
      transition: "transform 120ms ease, box-shadow 120ms ease, background 160ms ease",
      transform: hover && !disabled ? "translateY(-1px)" : "none",
      outline: "none",
      WebkitTapHighlightColor: "transparent",
    };
  },
};
//@@viewOff:css

//@@viewOn:helpers

//@@viewOff:helpers

//@@viewOn:propsTypes
export type ButtonProps = {
  children?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  removeDefaultStyle?: boolean;
  type?: "button" | "submit" | "reset";
  label?: string;
  tooltip?: string;
  isPending?: boolean;
};
//@@viewOff:propsTypes

const Button = ({
  children,
  label,
  disabled = false,
  className,
  removeDefaultStyle = false,
  type = "button",
  tooltip,
  isPending = false,
}: ButtonProps) => {
  const [hover, setHover] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  //@@viewOn:private
  //@@viewOff:private

  //@@viewOn:render
  const isDisabled = disabled || isPending;

  const Spinner = () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
      style={{ display: "block" }}
    >
      <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.25)" strokeWidth="4" />
      <path d="M22 12a10 10 0 00-10-10" stroke="rgba(255,255,255,0.95)" strokeWidth="4" strokeLinecap="round">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 12 12"
          to="360 12 12"
          dur="0.9s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );

  return (

    <button
      disabled={isDisabled}
      className={className}
      style={Css.button(removeDefaultStyle, disabled, isPending, hover, focus)}
      type={type}
      title={tooltip}
      aria-label={tooltip ?? (typeof children === "string" ? children : undefined)}
      aria-busy={isPending || undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    >
      {isPending ? <Spinner /> : (children || label)}
    </button>

  );
  //@@viewOff:render
};

//@@viewOn:exports
export { Button };
export default Button;
//@@viewOff:exports
