import "./styles.css";
import ImageCarousel from "./components/ImageCarousel";
import { imageData } from "./components/imageData";

export default function App() {
  const count = 3;
  return <ImageCarousel imageData={imageData} count={count} />;
}
