// Sample usage for modify properties of HTMLInputElement
// export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
//   value?: string;
//   placeholder?: string;
//   size?: "small" | "medium" | "large";
//   className?: string; // Allow users to pass in their own className
// }

//
export interface KeyDisplayerProps {
  value: string;
  className?: string;
  size?: "small" | "medium" | "large" | "fill";
  children?: React.ReactNode;
  onClick: () => void;
}

export interface KeyDisplayProps {
  className?: string;
  size?: "small" | "medium" | "large" | "fill";
  children?: React.ReactNode;
  onClick: () => void;
}

export interface WrapperProps {
  className?: string;
  size?: "small" | "medium" | "large" | "fill";
  children?: React.ReactNode;
}