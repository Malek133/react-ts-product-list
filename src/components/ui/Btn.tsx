import { ButtonHTMLAttributes,ReactNode } from "react"

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
children:ReactNode;
className:string;
wi?:"w-full" |"w-fit";
}

const Button = ({children,className,wi="w-full",...rest}:IProps) => {
 
  return (
    <>
    <button className=
{`${className} text-white ${wi} m-3  p-2 border-1 rounded-lg flex justify-center`} 
   {...rest}>
        {children}</button>
    </>
  )
}

export default Button