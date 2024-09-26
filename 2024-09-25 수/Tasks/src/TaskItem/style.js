import styled from 'styled-components';

export const TaskItemBox = styled.li`
    cursor: pointer;
    border-bottom: 1px solid #999;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 5px 8px;
    box-sizing: border-box;

    &:hover {
        background: sandybrown;
    }

    span {
        display: block;
        width: calc(100% - 20px);
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    &.on {
        background-color: #666;
        font-weight: 500;
        color: #fff;
    }
    button {
        width: 15px;
        padding: 0;
        background: none;
        color: red;
        border: none;
        display: none;
        cursor: pointer;

        &:hover {
            background: white;
        }
    }
    &:hover button {
        display: block;
    }
`;
