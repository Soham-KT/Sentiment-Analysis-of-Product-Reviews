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
              Hi, I’m Soham Kothari, an aspiring Machine Learning Engineer with over two years of experience in data science and machine learning. Pursuing an integrated B.Tech. and M.Tech. in Information Technology with a CGPA of 8.40, I’ve worked on projects like a Flappy Bird bot using reinforcement learning, a Dockerized voice assistant, advanced gender classification software with YOLOv5, and an LSTM stock prediction model with a 1.9% error margin. I’ve also led the development of my college’s website and a library management system, gaining leadership experience. Additionally, I presented research on gradient descent and multiprocessing performance at an international conference in London.


              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
