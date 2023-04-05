import { ReactNode } from 'react';
import { AiFillPlusSquare } from 'react-icons/ai';
import styled from 'styled-components';

interface ISideBar {
    children: ReactNode
}

const SideBar = ({children}: ISideBar) => {
    return (
        <SideBarBackground>
            {children}
        </SideBarBackground>
    )
}

const SideBarBackground = styled.div`
    position: fixed;
    left: 0; top: 0; bottom: 0;
    width: var(--sidebar-width);
    padding-top: 1.0rem;
    background-color: #f3f6fe;
    text-align: center;
    z-index: 999;
`

export const Item = styled.div`
    position: relative;
    display: inline-block;
    line-height: 0;
    color: #afc1d7;
    cursor: pointer;
    transition: color 200ms ease;
    :hover {
        color: #2581f1;
    }
`

export default SideBar;