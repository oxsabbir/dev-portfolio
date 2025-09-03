type InputProps = {
  className?: string;
} & React.InputHTMLAttributes<HTMLTextAreaElement>;

export default function TextArea({ className, ...rest }: InputProps) {
  return (
    <textarea
      rows={5}
      {...rest}
      className={`md:p-5 p-4 text-lg  bg-background border border-offBorder rounded-lg ${className} `}
    />
  );
}
