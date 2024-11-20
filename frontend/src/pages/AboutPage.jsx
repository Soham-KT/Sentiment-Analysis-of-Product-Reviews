import "../styles/AboutPage.css";
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
              <h3>MERN Developer</h3>
              <p>
              I am Akanksha Pal, a BTech-MTech dual degree student at IIPS, DAVV, currently in my 4th year of the CS/IT program. Academically, I have consistently excelled, maintaining a CGPA of 9.0 and earning a reputation as an overachiever since school. My creative mindset and problem-solving abilities enable me to approach challenges with innovative solutions. With a strong foundation in core computer science fundamentals, I am passionate about leveraging technology to solve real-world problems. My primary interests lie in Web Development and Data Structures & Algorithms, where I specialize in front-end development using React and have a solid understanding of databases.Beyond my current expertise, I am eager to expand my horizons by exploring  fields other emerging technologies.
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
