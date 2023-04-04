import { ReactNode } from 'react';
import styled from 'styled-components';

interface BackgroundProps {
    children: ReactNode;
}

const Background = ({ children }: BackgroundProps) => {
    return (
        <NavBarBackground>
            {children}
        </NavBarBackground>
    )
}

const NavBarBackground = styled.div`
    position: absolute;
    top: 0.75rem; left: 0.75rem; bottom: 0.75rem; right: 0.75rem;
    padding: 1.0rem;
    background-color: #fff;
`
export default Background;