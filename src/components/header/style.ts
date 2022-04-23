import styled from 'styled-components';

export const Container = styled.header`
    height: 12rem;
    background-color:var(--blue);



`

export const Content = styled.div`
    margin: 0 auto;
    padding-top:2rem;
    display: flex;
    justify-content: space-between;
    max-width:1120px;

    button{
        width: 12rem;
        height: 3rem;
        font-size: 1rem;
        font-weight:600;
        border-radius: 0.25rem;
        background-color: var(--blue-light);
        color: #fff;
        transition: filter 0.125s;
        cursor:pointer;

        &:hover{
            filter:brightness(0.9)
        }
    }

`