import { ReactNode } from "react";

export interface CardProps {
    children: ReactNode,
    wrapperClassNames: string
}
const Card = ({children, wrapperClassNames}: CardProps) => {
    return (
        <div className={`${wrapperClassNames} flex text-red-600`}>
            <>
            <span className="text-lime-600">Test</span>
            {children}
            </>
        </div>
    )
}

export default Card;