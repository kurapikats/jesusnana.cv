import React from 'react'

const SideNav = props => (
  <ul id="slide-out" className="side-nav">
    <li>
      <div className="user-view">
        <div className="background">
          <img src="/img/sidenav-bg.jpg" alt="Leather" />
        </div>
        <a href="#!user">
          <img className="circle" src="/img/onin-profile-pic.jpg" alt="Onin" />
        </a>
        <a href="#!name">
          <span className="white-text name">Jesus B. Nana (0908 215 0659)</span>
        </a>
        <a href="#!email">
          <span className="white-text email">
            jesus.nana@gmail.com
          </span>
        </a>
      </div>
    </li>

    <li>
      <a href="#professional-attributes" className="waves-effect right-align">
        Professional Attributes
      </a>
    </li>
    <li>
      <a href="#technical-skills" className="waves-effect right-align">
        Technical Skills
      </a>
    </li>
    <li>
      <a href="#company-work" className="waves-effect right-align">
        Company Work &amp; Responsibilities
      </a>
    </li>
    <li>
      <a href="#software-development" className="waves-effect right-align">
        Software Development Expertise
      </a>
    </li>
    <li>
      <a href="#work-experiences" className="waves-effect right-align">
        Work Experiences
      </a>
    </li>
    <li>
      <a href="#certifications" className="waves-effect right-align">
        Certifications
      </a>
    </li>
    <li>
      <a href="#projects" className="waves-effect right-align">
        Projects
      </a>
    </li>
    {/* <li>
      <a href="#educational-attainments" className="waves-effect right-align">
        Educational Attainments
      </a>
    </li> */}
    <li>
      <a href="#character-references" className="waves-effect right-align">
        Character References
      </a>
    </li>
    <li>
      <a href="#contact" className="waves-effect right-align">
        Contact
      </a>
    </li>
  </ul>
)

export default SideNav
