type InputProps = {
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className, ...rest }: InputProps) {
  return (
    <input
      {...rest}
      className={`md:p-5 p-4  text-lg  bg-background border border-offWhite rounded-lg ${className} `}
    />
  );
}
