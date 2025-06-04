type InputProps = {
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className, ...rest }: InputProps) {
  return <input {...rest} className={`bg-red-400 ${className} `} />;
}
