import "../styles/Aboutpage.css";
import Developer1 from "../assets/Developer1.png"; // Replace with actual image paths
import Developer2 from "../assets/Developer2.png"; // Replace with actual image paths

function AboutPage() {
  return (
    <main>
      <section className="about-section">
        <h1 className="about-heading">Meet the Team</h1>
        <div className="about-container">
          <div className="developer-card">
            <img src={Developer1} alt="Akanksha Pal" className="developer-img" />
            <div className="developer-info">
              <h2>Akanksha Pal</h2>
              <h3> Developer</h3>
              <p>
                Akanksha Pal is a full-stack developer with extensive experience in web technologies. Passionate about creating clean and efficient code, she enjoys tackling complex challenges with a focus on user experience.
              </p>
            </div>
          </div>
          <div className="developer-card">
            <img src={Developer2} alt="Soham Kothari" className="developer-img" />
            <div className="developer-info">
              <h2>Soham Kothari</h2>
              <h3>AI/ML Brain</h3>
              <p>
              Hey there, I am Soham Kothari. I have more than two years of experience working on data science and machine learning projects. Currently pursuing integrated B.Tech. and M.Tech. in Information Technology at International Institute of Professional Studies with a current CGPA of 8.40.


              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
