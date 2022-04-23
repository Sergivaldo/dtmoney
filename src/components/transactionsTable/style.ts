import styled from 'styled-components'

export const Container = styled.div`
    margin: 4rem 0;
    table{
        margin: 0 auto;
        width: 95%;
        border-spacing: 0 0.5rem;

        th,td{
        padding:1.2rem 2rem;
        font-weight:400;
        text-align: left;
        color: var(--text-body);
        }

        td{
            background-color: var(--shape);
            border-radius:0.25rem;
        }
     
        .title{
            color:var(--text-title);
        }

        .deposit{
            color:var(--green);
        }

        .withdraw{
            color:var(--red);
        }
    }

    


`