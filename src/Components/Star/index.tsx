import fullstar from "../../assets/Vector.png";
import emptystar from "../../assets/Vector(1).png";

interface StarProps {
  rating: string;
}

function Star({ rating }: StarProps) {
  const stars = [1, 2, 3, 4, 5];
  const ratingNumber = parseInt(rating, 10);
  return (
    <div className="flex flex-row justify-between h-5 w-[100px]">
      {stars.map((star, index) =>
        ratingNumber >= star ? (
          <img
            src={fullstar}
            alt="étoile pleine"
            className="h-[13] w-[13.45]"
            key={index}
          />
        ) : (
          <img
            src={emptystar}
            alt="étoile vide"
            className="h-[13] w-[13.45]"
            key={index}
          />
        )
      )}
    </div>
  );
}

export default Star;