import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html{
    
}
html,body{
    font-family: 'Open Sans Condensed', sans-serif;
    padding: 10px 80px;
    background:linear-gradient(180deg, #fdfbfb 0%,#ebedee 100% );
    min-height: 100%;
    @media screen and (max-width : 800px){
        padding:10px;
        margin:0px;
    }
}
a{
    color: black;
    text-decoration: none;
}
*{
    box-sizing: border-box;
}
`;
