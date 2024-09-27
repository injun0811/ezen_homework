import styled from "styled-components";

export const PagesContainer = styled.form`
    .pages {
        width:1400px;
        height:560px;
        margin:30px auto;
        padding: 20px;
        background: salmon;
    }

    .menu {
        width:1400px;
        margin:30px auto;
        padding: 20px;
    }

    ul {
        display:flex;
        justify-content: space-around;

        li {

            a {
                padding: 20px;
                background: salmon;
            }
        }
    }

`;