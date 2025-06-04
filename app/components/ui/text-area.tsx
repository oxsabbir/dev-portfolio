type InputProps = {
  className?: string;
} & React.InputHTMLAttributes<HTMLTextAreaElement>;

export default function TextArea({ className, ...rest }: InputProps) {
  return (
    <textarea
      {...rest}
      className={`p-5 text-lg  bg-background border border-offWhite rounded-lg ${className} `}
    />
  );
}
