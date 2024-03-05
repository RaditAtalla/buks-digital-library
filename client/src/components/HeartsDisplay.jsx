import { Star } from "react-feather";

const HeartsDisplay = ({ amount }) => {
  if (amount == null) {
    return <p>Belum dirating</p>;
  } else if (amount == 1) {
    return (
      <div className="flex items-center gap-[10px]">
        <Star />
        <p className="text-[1.15rem]">1</p>
      </div>
    );
  } else if (amount == 2) {
    return (
      <div className="flex items-center">
        <Star />
        <Star />
        <p className="ms-[10px] text-[1.15rem]">2</p>
      </div>
    );
  } else if (amount == 3) {
    return (
      <div className="flex items-center">
        <Star />
        <Star />
        <Star />
        <p className="ms-[10px] text-[1.15rem]">3</p>
      </div>
    );
  } else if (amount == 4) {
    return (
      <div className="flex items-center">
        <Star />
        <Star />
        <Star />
        <Star />
        <p className="ms-[10px] text-[1.15rem]">4</p>
      </div>
    );
  } else if (amount == 5) {
    return (
      <div className="flex items-center">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
        <p className="ms-[10px] text-[1.15rem]">5</p>
      </div>
    );
  } else {
    return <p>Invalid rating</p>;
  }
};

export default HeartsDisplay;
