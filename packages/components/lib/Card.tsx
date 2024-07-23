import { ReactNode } from "react";

export interface CardProps {
    children: ReactNode,
    wrapperClassNames: string
}
const Card = ({children, wrapperClassNames}: CardProps) => {
    return (
        <div className={wrapperClassNames}>
            {children}
        </div>
    )
}

export default Card;