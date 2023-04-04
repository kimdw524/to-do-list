import styled from 'styled-components';

export interface IListInfo {
    name: string;
}

const List = ({name}: IListInfo) => {
    return (
        <ListContainer>
            {name}
        </ListContainer>
    )
}

const ListContainer = styled.div`
    padding: 1.0rem;
    margin: 1.0rem;
    box-shadow: 2px 2px 2px 1px #bdbdbd;
    background-color: #fff;
    border: 1px solid #767676;
    :active {
        background-color: #eee;
        cursor: move;
    }
`

export default List;