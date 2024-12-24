// Sample usage for modify properties of HTMLInputElement
// export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
//   value?: string;
//   placeholder?: string;
//   size?: "small" | "medium" | "large";
//   className?: string; // Allow users to pass in their own className
// }

//

export type NavProps = {
  children?: React.ReactNode;
  className?: string;
};