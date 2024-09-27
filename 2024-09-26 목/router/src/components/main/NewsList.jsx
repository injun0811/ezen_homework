import { Link } from 'react-router-dom';
import { useAxios } from '../hooks/useAxios';
import { MainContainer } from './style';
import NewsItem from './NewsItem';

const NewsList = () => {
    const API_KEY = '1ff9d280cad1461283e9660e9f092190';
    const url = `https://newsapi.org/v2/everything?q=tesla&from=2024-09-25&sortBy=publishedAt&apiKey=${API_KEY}`;
    const { data } = useAxios(url);
    if (!data) return <div>Loading...</div>;
    const dataList = data.articles;
    return (
        <MainContainer>
            <ul className="newsList">
                {dataList.map((item) => (
                    <NewsItem key={item.id} item={item} />
                ))}
            </ul>
        </MainContainer>
    );
};

export default NewsList;
