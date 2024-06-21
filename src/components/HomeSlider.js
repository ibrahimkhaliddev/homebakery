import SimpleImageSlider from "react-simple-image-slider";
import Homehero1 from "../img/Home-hero1.png";
import Homehero2 from "../img/Home-hero2.png";

const images = [{ url: Homehero2 }, { url: Homehero1 }];

function HomeSlider() {
  return (
    <div>
      <SimpleImageSlider
        width="100%"
        height={720}
        images={images}
        showBullets={true}
      />
    </div>
  );
}

export default HomeSlider;
