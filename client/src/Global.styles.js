import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    font-family: 'Open Sans Condensed', sans-serif;
    padding: 20px 40px;
    background:linear-gradient(180deg, #fdfbfb 0%,#ebedee 100% );

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
