import { CiSquarePlus } from 'react-icons/ci';
import styled from 'styled-components';

const NavBar = () => {
    return (
        <NavBarBackground>
            <Start>
                <Logo>To Do List</Logo>
            </Start>
            <End>
                <Item><CiSquarePlus size="48" /></Item>
            </End>
        </NavBarBackground>
    )
}

const NavBarBackground = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
`

const Logo = styled.div`
    font-size: 1.75rem;
    font-weight: 600;
`
const Start = styled.div`
    align-items: center;
    justify-content: flex-start;
`

const End = styled.div`
    align-items: center;
    justify-content: flex-end;
`

const Item = styled.div`
    line-height: 0;
    user-select: none;
    svg {
        color: #4e4e4e;
        cursor: pointer;
        transition: all 200ms ease;
        :hover {
            transform: scale(1.1);
        }
        :active {
            transform: scale(1.2);
        }
    }
`

export default NavBar;