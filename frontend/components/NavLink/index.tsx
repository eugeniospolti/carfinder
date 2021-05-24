import { Link } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface NavLinkProps {
    text?: string;
    url: string;
    children?: ReactNode;
}

export default function NavLink (props: NavLinkProps) {
    return (
        <Link
        fontWeight="bold"
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none'
        }}
        href={props.url}>
        { props.children ? props.children : props.text}
        </Link>
    ) 
}