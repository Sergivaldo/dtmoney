import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    div{
        margin-top: -5rem;
        padding: 2rem;

        width: 22rem;
        height: 8.5rem;

        background-color:var(--shape);
        color: var(--text-title);

        border-radius:0.25rem;
        box-shadow:0.05rem 0.05rem 0.25rem rgba(0,0,0,0.05);

        header{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        strong{
            font-size: 2rem;
            font-weight:500;
        
        }

        &:nth-child(3){
            background-color:var(--green);
            color: #fff;
        }
    }

    
`