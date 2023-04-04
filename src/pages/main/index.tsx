import { CiSquarePlus } from 'react-icons/ci';
import styled from 'styled-components';
import NavBar, {Item} from "./NavBar";
import List from './List';
import type { IListInfo } from './List';
import { useState } from 'react';

const Main = () => {
    const [list, setList] = useState<IListInfo[]>([]);

    const newList = () => {
        let newName: string = window.prompt('제목을 입력해주세요. (ex: 오늘 할 일)') || '';
        if(list.find(e => e.name === newName)){
            alert('이미 같은 이름의 리스트가 존재합니다.');
            return;
        }
        setList(list.concat({name: newName}));
    }

    return (
        <>
            <NavBar>
                <Item><CiSquarePlus onClick={newList} size={48} /></Item>
            </NavBar>
            <ListContainer>
                {
                    list.map(i => {
                        return <List key={i.name} {...i} />
                    })
                }
            </ListContainer>
        </>
    )
}

const ListContainer = styled.div`
    
`

export default Main;