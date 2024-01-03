import img1 from "../assets/img/testimonials-1.jpg";
import img2 from "../assets/img/testimonials-2.jpg";
import img3 from "../assets/img/testimonials-3.jpg";

const Profiles = () => {
  return (
    <div className="profile-section">
      <h2>Whate people are saying...</h2>
      <div className="profile-cards-section">
        <div className="profile-card">
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <h3>Margaret E.</h3>
          </div>
          <div>
            <p>"Lorem ipsum dolor sit amet."</p>
          </div>
        </div>
        <div className="profile-card">
          <div>
            <img src={img2} alt="" />
          </div>

          <div>
            <h3>Fred S.</h3>
          </div>
          <div>
            <p>
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
              mollitia aliquid exercitationem eum id facilis, odio magnam minima
              nulla obcaecati."
            </p>
          </div>
        </div>
        <div className="profile-card">
          <div>
            <img src={img3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
