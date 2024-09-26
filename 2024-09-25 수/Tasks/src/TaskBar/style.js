import styled from 'styled-components';

export const TaskBarBox = styled.div`
    box-sizing: border-box;
    width: 200px;
    background-color: rgb(247, 246, 243);

    position: relative;
    h2 {
        font-size: 25px;
        text-align: center;
        padding: 20px;
    }
    .btn {
        border-radius: 50%;
        width: 60px;
        height: 60px;
        border: none;
        background: #000;
        font-size: 20px;
        color: #fff;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 50px;
        cursor: pointer;
    }
`;
