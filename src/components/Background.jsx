import { background } from "../utils/constants";

const Background = () => {
  return (
    <div className="w-full h-full">
        <img src={background}
        alt='Background' 
        />
      </div>
  );
}

export default Background;