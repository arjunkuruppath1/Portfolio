import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/mhdstk/projectAccounting" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                </div>
            </header>
            <div className="body">
              <h3>Project accounting software</h3>
              <p> To design and develop a web application to report the development hours and generate the desired reports.
              Design and develop APIs for various software features. </p>
            </div>
            <footer> <ul className="tech-list"> <li>Python</li> <li>Django Rest Framework</li> <li>PostgreSql</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/Sooraj-K-P/matchcraft/tree/feature_matching" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
               
              </div>
            </header>
            <div className="body">
              <h3>Yatmatch</h3>
              <p>
              Yatmatch is a platform that uses AI to help yacht brokers find the perfect yacht for their clients. It does this by connecting brokers with yachts that match their client's needs
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Django REST API</li>
                <li>Django</li>
                <li>React js</li>
                <li>PostgreSql</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/arjunkuruppath1/HR_Portal" target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                
              </div>
            </header>
            <div className="body">
              <h3>HR portal application</h3>
              <p>
              An an application that enables a company to manage its hr operations and streamline the communication between employees and their managers.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Django</li>
                <li>Bootstrap</li>
                <li>Channels</li>
                <li>HTML</li>
                <li>Elastic Search</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/arjunkuruppath1/Google_Font_Checker" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
               
              </div>
            </header>
            <div className="body">
              <h3>Google font checker</h3>
              <p>Web crawler that lists all the websites from Germany that load Google fonts from google instead of loading them locally in a CSV file.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Django</li>
                <li>Selenium</li>
                <li>Beautiful soup</li>
                <li>Celery</li>
                <li>Redis</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/arjunkuruppath1/Sell-Buy_Application" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                
              </div>
            </header>
            <div className="body">
              <h3>Sell & Buy application</h3>
              <p>An application used to sell/buy things, an enrolled user can act both as a seller or buyer at the same time.Users can post their product for sale in any category. Buyer can specify their price and show interest.Sellers can or cannot compromise on the buyers price</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>Django</li>
                <li>Bootstrap</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Sqlite</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                
              </div>
            </header>
            <div className="body">
              <h3>Todo App</h3>
              <p>
                Used Flask framework for application development.Developed frontend and entire backend modules using Python on Flask Web framework.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Flask</li>
                <li>Python</li>
                <li>Html</li>
                <li>css</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        
      </div>
    </Container>
  );
}