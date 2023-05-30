import { Button, Page } from "../../components/index.ts";

import "./main.css";

import phone from "../../assets/images/phone.jpg";
import tablet from "../../assets/images/tablet.jpg";
import laptop from "../../assets/images/laptop.jpg";

const Main: React.FC = () => {
  const onClickShopNow = () => {}; // will be added

  return (
    <Page title="Tech Store">
      <p>
        Buy electronics online at best prices. <br />
        Shop from a huge range of electronic products such as mobile phones,
        tablets & laptops.
      </p>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={phone} alt="phone" />
          </div>
          <div className="carousel-item">
            <img src={tablet} alt="tablet" />
          </div>
          <div className="carousel-item">
            <img src={laptop} alt="laptop" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <Button value="Shop Now" onClick={onClickShopNow} />
    </Page>
  );
};

export default Main;
