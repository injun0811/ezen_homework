import styled from 'styled-components';

export const TaskFormBox = styled.form`
    box-sizing: border-box;
    .title,
    .content {
        outline: none;

        box-sizing: border-box;
        width: 100%;
    }
    .title {
        padding-bottom: 20px;
        font-size: 35px;
        margin-bottom: 30px;
        border: none;
        border-bottom: 2px solid #e9e4e4;
    }
    .content {
        min-height: 500px;
        font-size: 18px;
        border: none;
        resize: none;
    }
`;
