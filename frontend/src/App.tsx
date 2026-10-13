import './App.css'

function App() {
  return (
    <main>

    {/* - your name
- your major or professional area of interest
- a short sentence or two about yourself
- one visual element, such as:
  - a photo
  - an avatar
  - an icon
  - another simple visual that fits the page */}

       {/* Nav bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
        <a className="navbar-brand" href="#">
          {/* My Portfolio */}
        </a>

        <div className="collapse navbar-collapse justify-content-end">
          <div className="navbar-nav">
            {/* Add navigation links here */}
          </div>
        </div>
      </nav>

      <div className="Top">
        <br />
        <br />
        <br />

        <h1 style={{fontFamily: "'Roboto Flex', Arial, sans-serif"}}>
          Portfolio
        </h1>

        <br />

        <h2 style={{ fontFamily: "'Roboto Flex', Arial, sans-serif"}}>
          Ella Kocher
        </h2>

        <div className="Bottom">
          <svg
            viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: "10%", width: "100%", display: "block"}}
          >
            <path
              d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"
              style={{ stroke: "none", fill: "#957980" }}
            />
          </svg>

          <br />
          <p></p>
          <br />

           <h2 style={{ fontFamily: "'Roboto Flex', Arial, sans-serif" }}>
            About Me
          </h2>

          <p style={{ fontFamily: "'Roboto Flex', Arial, sans-serif" }}>
            I am currently a Junior at Grove City College and am majoring in Computer Science with a minor in AI. I plan on focusing in Web Development or UX Design after college.
          </p>

          <br />
          <br />

          <div className="myImage">
            <img
              src="/images/EllaImage.jpg" className="img-fluid" alt="Image of Ella"
            />
          </div>

          <br />
          <br />
          <br />
          <br />
          <br />

        </div>
      </div>


      {/* <h1>Ella Kocher</h1>

      <h2>Portfolio</h2>

      <h2>About Me</h2>
      <p>
        I am currently a Junior at Grove City College and am majoring in Computer Science with a minor in AI. I plan on focusing in Web Development or UX Design after college.
      </p>

      <p>Initial frontend setup in progress.</p> */}
    </main>
  )
}

export default App
