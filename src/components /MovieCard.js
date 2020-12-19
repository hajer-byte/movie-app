import { Card } from "antd";
import StarRating from "./StarRating";
import "../index.css";

const { Meta } = Card;

function MovieCard({ film }) {
  const addStar = () => {};
  const { id, title, posterUrl, rate, description } = film;
  return (
    <div className="movieCard">
      <Card
        id={id}
        hoverable
        style={{ width: 240, height: 300 }}
        cover={<img alt={title} src={posterUrl} />}
      >
        <div className="title">{title}</div>
        <div className="StarRating">
          <StarRating rate={rate} addStar={addStar} />
        </div>
        <p className="description">{description}</p>
      </Card>
    </div>
  );
}

export default MovieCard;
