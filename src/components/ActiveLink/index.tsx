import { useRouter } from 'next/router';
import Link, { LinkProps } from "next/link";
import { ReactElement, cloneElement } from "react";

interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    activeClassName: string
}

export function ActiveLink({ children, activeClassName, ...rest}: ActiveLinkProps) {
    
    const { asPath } = useRouter()

    const className = asPath === rest.href
        ? activeClassName
        : '';

    return (
        // Clonando o elemento children e adicionando a class nele, o elemento Link nao recebe a class e sim o elemento dentro do Link
        <Link {...rest}>
            {cloneElement(children, {
                className
            })}
        </Link>
    )
}