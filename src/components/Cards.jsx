import img1 from "../assets/img/bg-showcase-1.jpg";
import img2 from "../assets/img/bg-showcase-2.jpg";
import img3 from "../assets/img/bg-showcase-3.jpg";

const Cards = () => {
  return (
    <>
      <div className="cards-area">
        <div className="center-cards">
          <div className="card-texts">
            <h2>Fully responsive design</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
              similique debitis amet. Ut, ipsum accusamus. Quas similique
              distinctio laborum necessitatibus.
            </p>
          </div>
        </div>
        <div className="center-cards">
          <img src={img1} alt="image 1" />
        </div>
      </div>
      <div className="cards-area">
        <div className="center-cards">
          <img src={img2} alt="image 2" />
        </div>
        <div className="center-cards">
          <div className="card-texts">
            <h2>Updated for Bootstrap 5</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
              similique debitis amet. Ut, ipsum accusamus. Quas similique
              distinctio laborum necessitatibus.
            </p>
          </div>
        </div>
      </div>
      <div className="cards-area">
        <div className="center-cards">
          <div className="card-texts">
            <h2>Easy to Use & Customize</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
              similique debitis amet. Ut, ipsum accusamus. Quas similique
              distinctio laborum necessitatibus.
            </p>
          </div>
        </div>
        <div className="center-cards">
          <img src={img3} alt="image 3" />
        </div>
      </div>
    </>
  );
};

export default Cards;
