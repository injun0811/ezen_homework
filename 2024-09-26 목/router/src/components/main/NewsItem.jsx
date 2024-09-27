const NewsItem = ({ item }) => {
    const { name, title, description, url } = item;
    return (
        <li className="newsItem" key={name}>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={url} >Link</a>
        </li>
    );
};

export default NewsItem;
