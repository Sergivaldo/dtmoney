import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
        --background:#F0F2F5;
        --red:#E52E4D;
        --blue:#5429CC;
        --blue-light:#6933FF;
        --text-title:#363F5F;
        --text-body:#969CB3;
        --shape: #FFFFFF;
        --green:#33CC95;
    }

    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }

    html{

        @media(max-width:1080px){
            font-size: 93.75%;
        }

        @media(max-width:720px){
            font-size:87.5%;
        }
    }

    body{
        background: var(--background);
    }

    button{
        border:0;
    }

    html,button{
        font-family:'Poppins', sans-serif;
    }


    .react-modal-overlay{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        background-color:rgba(0,0,0,0.5);

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background-color:var(--background);
        padding:3rem;
        position: relative;
        border-radius:0.25rem;
    }

    .react-modal-close{
        position:absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background:transparent;
        cursor: pointer;
        transition:filter 0.125s;

        &:hover{
            filter:brightness(0.8);
        }
    }

`