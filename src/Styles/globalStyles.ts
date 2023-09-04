import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }

    :root{
        --brand-1: #4529E6;
        --brand-2: #5126EA;
        --brand-3: #B0A6F0;
        --brand-4: #EDEAFD;
        --grey-0: #0B0D0D;
        --grey-1: #212529;
        --grey-2: #495057;
        --grey-3: #868E96;
        --grey-4: #ADB5BD;
        --grey-5: #CED4DA;
        --grey-6: #DEE2E6;
        --grey-7: #E9ECEF;
        --grey-8: #F1F3F5;
        --grey-9: #F8F9FA;
        --grey-10: #FDFDFD;
        --white: #FFFFFF;
        --alert-1: #CD2B31;
        --alert-2: #FDD8D8;
        --alert-3: #FFE5E5;
        --sucess-1: #18794E;
        --sucess-2: #CCEBD7;
        --sucess-3: #DDF3E4;
        --random-1: #E34D8C;
        --random-2: #C04277;
        --random-3: #7D2A4D;
        --random-4: #7000FF;
        --random-5: #6200E3;
        --random-6: #36007D;
        --random-7: #349974;
        --random-8: #2A7D5F;
        --random-9: #153D2E;
        --random-10: #6100FF;
        --random-11: #5700E3;
        --random-12: #30007D;

        --modal-background: rgba(33, 37, 41, 0.6);

        --font-heading-1: 2.75rem; 
        --font-heading-2: 2.25rem; 
        --font-heading-3: 2rem; 
        --font-heading-4: 1.75rem; 
        --font-heading-5: 1.5rem; 
        --font-heading-6: 1.25rem; 
        --font-body-1: 1rem; 
        --font-body-2: .875rem; 

        --font-bold: 700;
        --font-semibold: 600;
        --font-medium: 500;
        --font-base: 400;

        --button-border: 2px;
        --input-border: 4px;

        --button-width-0: 5rem; 
        --button-width-1: 6.25rem; 
        --button-width-2: 6.75rem; 
        --button-width-3: 7.875rem; 
        --button-width-4: 12.875rem; 
        --button-width-5: 17.438rem; 
        --button-width-6: 100%;
        --button-width-7: 48%;
        --button-width-8: 80%;
        --button-width-9: 9.375rem; 
        --button-width-10: 10.313rem;  

        --button-height-1: 3rem; // 48px

        --border-button-1: 1.5px solid var(--grey-1);
    }

    body {
        font-family: 'Lexend', 'sans-serif';
    }

    ::-webkit-scrollbar {
            width: 8px;
        }

    ::-webkit-scrollbar-thumb {
            background: var(--brand-1);
            border-radius: 50px;
    }

    button {
        cursor: pointer;
    }

    .container{
        max-width: 1600px;
    }
`;
