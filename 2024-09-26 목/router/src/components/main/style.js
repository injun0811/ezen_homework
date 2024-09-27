import styled from "styled-components";

export const MainContainer = styled.form`
    .newsList {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        height: 480px;
        overflow-y: scroll;
        gap: 20px; /* 카드 사이의 간격 */
        padding: 20px; /* 컨테이너 내부 여백 */
        justify-content: space-evenly; /* 카드 균등 분배 */

        .newsItem {
            flex: 0 1 calc(33.333% - 20px); /* 3열 레이아웃, 간격 고려 */
            background-color: #ffffff;
            border-radius: 8px; /* 모서리 둥글게 */
            box-shadow: 0 4px 8px rgba(0,0,0,0.1); /* 그림자 효과 */
            transition: transform 0.3s ease; /* 호버 효과를 위한 전환 */
            overflow: hidden; /* 내부 콘텐츠 넘침 방지 */
            position: relative;

            &:hover {
                transform: translateY(-5px); /* 호버 시 약간 위로 이동 */
            }

             
            h3 {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 8px;
            }

            p {
                font-size: 14px;
                color: #666;
            }

            a {
                border-radius: 20%;
                background: darkorange;
                padding: 0;
                display: block;
                height: 30px;
                width: 50px;
                left: 88%;
                bottom: 2%;
                position: absolute;
                color: white;
                font-weight: bold;
                text-align: center;
                align-content: center;
            }
            
            
        }
        
    }
`;