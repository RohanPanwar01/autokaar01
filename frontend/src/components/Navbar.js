import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../image/LOGO-03.png";
import {Link } from 'react-router-dom'
import { FaBars, FaTimes, FaChevronDown, FaChevronLeft ,FaChevronUp } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeNestedDropdown, setActiveNestedDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (dropdownId) => {
    setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId);
    setActiveNestedDropdown(null); 
  };
  
  const toggleNestedDropdown = (nestedDropdownId) => {
    setActiveNestedDropdown(
      activeNestedDropdown === nestedDropdownId ? null : nestedDropdownId
    );
  };

  const handleClickOutside = (e) => {
    const sidebar = document.querySelector('.mobile-sidebar');
    if (sidebar && !sidebar.contains(e.target)) {
      setIsMobileMenuOpen(false);
    }
  };
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false); 
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="header">
    <div className="navbar-ajs">
      <div className="navbar-logo-ajs">
        <a href="/"><img src={logo} alt="Logo" /></a>
      </div>

      <div className="mobile-menu-icon-ajs" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Desktop Menu */}
      <ul className="desktop-menu-web">
        <li className="dropdown-web" style={{ fontFamily: '"Chakra Petch", sans-serif' }}>
          <Link to="/">HOME</Link>
        </li>
        <li className="dropdown-web" style={{ fontFamily: '"Chakra Petch", sans-serif' }}>
          <Link to="/services" onClick={() => toggleDropdown("services")} >
            SERVICES{" "}
            {activeDropdown === "services" ? (<FaChevronUp  className="active-icon" />) : (<FaChevronDown className="inactive-icon" />)}        </Link>  
          {activeDropdown === "services" && (
            <ul className="sub-menu-web">
              <li className="sub-item-web">
              <Link
                    to="/foamwash"
                    onClick={() => toggleNestedDropdown("foam-wash")}
                  >
                    Wash{" "}
                    {activeNestedDropdown === "foam-wash" ? 
                    (<FaChevronLeft  className="active-icon" />
                 ) : (
                 <FaChevronDown className="inactive-icon" />
                 )}
                  </Link>
                  {activeNestedDropdown === "foam-wash" && (
                  <ul className="inside-menu">          
                    <li>
                      <Link to="/foamwash">Exterior And Interior Wash</Link>
                    </li>
                    <li>
                      <Link to="/foamwash">Exterior Wash</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="sub-item-web">
                <Link
                  to="/paintprotectionfilm"
                  onClick={() => toggleNestedDropdown("paint-protection")}
                >
                  Paint Protection Films (PPF){" "}
                  {activeNestedDropdown === "paint-protection" ? 
                  (<FaChevronLeft  className="active-icon" />) : (<FaChevronDown className="inactive-icon" />)}
                </Link>
                {activeNestedDropdown === "paint-protection" && (
                  <ul className="inside-menu">          
                    <li>
                      <Link to="/paintprotectionfilm">Paint Protection Films (PPF)</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="sub-item-web">
                <Link
                  to="/ceramiccoating"
                  onClick={() => toggleNestedDropdown("ceramic-coating")}
                >
                  Ceramic Coating{" "}
                  {activeNestedDropdown === "ceramic-coating" ? 
                  (<FaChevronLeft  className="active-icon" />) : (<FaChevronDown className="inactive-icon" />)}
                </Link>
                {activeNestedDropdown === "ceramic-coating" && (
                  <ul className="inside-menu">
                    <li>
                      <Link to="/ceramiccoating">1 Year-5 Year Package</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="sub-item-web">
                <Link
                  to ="/interiortreatment"
                  onClick={() => toggleNestedDropdown("interior-treatment")}
                >
                  Interior Treatments{" "}
                  {activeNestedDropdown === "interior-treatment" ? 
                  (<FaChevronLeft  className="active-icon" />) : (<FaChevronDown className="inactive-icon" />)}
                </Link>
                {activeNestedDropdown === "interior-treatment" && (
                  <ul className="inside-menu">
                    <li>
                      <Link to="/interiortreatment">Economical Interior Cleaning</Link>
                    </li>
                    <li>
                      <Link to="/interiortreatment">Foam Based Interior Cleaning</Link>
                    </li>
                    <li>
                      <Link to="/interiortreatment">Antibactarial GermKlean</Link>
                    </li>
                    <li>
                      <Link to="/interiortreatment">Deep Cleaning</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="sub-item-web">
                <Link
                  to="/exteriortreatment"
                  onClick={() => toggleNestedDropdown("exterior-treatment")}
                >
                  Exterior Treatments {" "}
                  {activeNestedDropdown === "exterior-treatment" ? 
                  (<FaChevronLeft  className="active-icon" />) : (<FaChevronDown className="inactive-icon" />)}
                </Link>
                {activeNestedDropdown === "exterior-treatment" && (
                  <ul className="inside-menu">
                     <li>
                      <Link to="/exteriortreatment">UV - Paint Protection</Link>
                    </li>
                    <li>
                      <Link to="/exteriortreatment">Paint Correction</Link>
                    </li>
                    <li>
                      <Link to="/exteriortreatment">Surface Refinement</Link>
                    </li>
                    <li>
                      <Link to="/exteriortreatment">Surface Correction</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="sub-item-web">
                <Link
                  to="/airconditioner"
                  onClick={() => toggleNestedDropdown("airconditioner")}
                >
                  AC Care {" "}
                  {activeNestedDropdown === "airconditioner" ? 
                  (<FaChevronLeft  className="active-icon" />) : (<FaChevronDown className="inactive-icon" />)}
                </Link>
                {activeNestedDropdown === "airconditioner" && (
                  <ul className="inside-menu">
                    <li>
                      <Link to="/airconditioner">AC Duct Cleaning</Link>
                    </li>
                    <li>
                      <Link to="/airconditioner">AC Evaporator Coil Cleaning</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="sub-item-web">
                <Link
                  to="/antirustprotection"
                  onClick={() => toggleNestedDropdown("antirustprotection")}
                >
                  Antirust Coatings {" "}
                  {activeNestedDropdown === "antirustprotection" ? 
                  (<FaChevronLeft  className="active-icon" />) : (<FaChevronDown className="inactive-icon" />)}
                </Link>
                {activeNestedDropdown === "antirustprotection" && (
                  <ul className="inside-menu">
                    <li>
                      <Link to="/antirustprotection">Underbody Antirust Coating</Link>
                    </li>
                    <li>
                      <Link to="/antirustprotection">Silencer Coating </Link>
                    </li>
                    <li>
                      <Link to="/antirustprotection">Internal Panel protection </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="sub-item-web">
                <Link
                  to="/engineprotection"
                  onClick={() => toggleNestedDropdown("engineprotection")}
                >
                  Engine Protection {" "}
                  {activeNestedDropdown === "engineprotection" ? 
                  (<FaChevronLeft  className="active-icon" />) : (<FaChevronDown className="inactive-icon" />)}
                </Link>
                {activeNestedDropdown === "engineprotection" && (
                  <ul className="inside-menu">
                    <li>
                      <Link to="/engineprotection">Engine Dressing</Link>
                    </li>
                    <li>
                      <Link to="/engineprotection">Engine Lacquer Coating</Link>
                    </li>
                    <li>
                      <Link to="/engineprotection">Rodent Repellent Spray</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="sub-item-web">
                <Link
                  to="/windshieldrestoration"
                  onClick={() => toggleNestedDropdown("windshieldrestoration")}
                >
                  Windshield Restoration {" "}
                  {activeNestedDropdown === "windshieldrestoration" ? 
                  (<FaChevronLeft  className="active-icon" />) : (<FaChevronDown className="inactive-icon" />)}
                </Link>
                {activeNestedDropdown === "windshieldrestoration" && (
                  <ul className="inside-menu">
                     <li>
                      <Link to="/windshieldrestoratio">Surface Correction done on Front and <br/> Rear Windshield against Minute Scratches </Link>
                    </li>
                    <li>
                      <Link to="/windshieldrestoration">Cleaning of all 6 Glasses from Hard Water Marks </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className="sub-item-web">
                <Link 
                  to ="/headlamprestoration"
                  onClick={() => toggleNestedDropdown("headlamprestoration")}
                >
                  Headlamp Restoration{" "}
                  {activeNestedDropdown === "headlamprestoration" ? 
                  (<FaChevronLeft  className="active-icon" />) : (<FaChevronDown className="inactive-icon" />)}
                </Link>
                {activeNestedDropdown === "headlamprestoration" && (
                  <ul className="inside-menu">
                    <li>
                      <Link to="/headlamprestoration">Headlamp</Link>
                    </li>
                  </ul>
                )}
              </li>            
            </ul>
          )}
        </li>
        {/* <li className="dropdown-web" style={{ fontFamily: '"Chakra Petch", sans-serif' }}>
            <Link to="" onClick={() => toggleDropdown("customer-support")}>
             SUPPORT{" "}
              {activeDropdown === "customer-support" ?(<FaChevronUp  className="active-icon" />) : (<FaChevronDown className="inactive-icon" />)}
            </Link>
            {activeDropdown === "customer-support" && (
              <ul className="sub-menu-web">
                <li className="sub-item-web">
                <Link
                    to="#customer"
                    onClick={() => toggleNestedDropdown("customer-support")}
                  >
                   Customer Support {" "}
                  </Link>
                </li>
                <li className="sub-item-web">
                  <Link
                    to="/become-a-partner"
                    onClick={() => toggleNestedDropdown("channel-partner")}
                  >
                   Channel Partner {" "}
                  </Link>
              </li>
                <li className="sub-item-web">
                  <Link
                    to="/"
                    onClick={() => toggleNestedDropdown("faq")}
                  >
                    FAQ{" "}
                  </Link>
              </li>
              </ul>
            )}
          </li> */}
        <li className="dropdown-web"style={{ fontFamily: '"Chakra Petch", sans-serif' }}>
          <Link to="/become-a-partner">BECOME A PARTNER</Link>
        </li>
        <li className="dropdown-web">
         <Link to="/bookanappointment" ><button className="navbar-contact-ajs" style={{ fontFamily: '"Chakra Petch", sans-serif' }}>BOOK AN APPOINTMENT</button>
          </Link>
        </li>
      </ul>

      {/* Sidebar for mobile */}
      <div className={`mobile-sidebar ${isMobileMenuOpen ? "open" : ""}`}>
        <ul className="navbar-links-ajs mobile-menu">
          <li style={{ fontFamily: '"Chakra Petch", sans-serif' }}>
            <Link to="/">HOME</Link >
          </li>
          <li className="dropdown-ajs" style={{ fontFamily: '"Chakra Petch", sans-serif' }}>
            <Link to="/services" onClick={() => toggleDropdown("services")}>
              SERVICES{" "}
              {activeDropdown === "services" ? (<FaChevronUp  className="active-icon" />) : (<FaChevronDown className="inactive-icon" />)}
            </Link>
            {activeDropdown === "services" && (
              <ul className="dropdown-menu-ajs">
                <li className="dropdown-item-ajs">
                <Link
                    to="/foamwash"
                    onClick={() => toggleNestedDropdown("foamwash")}
                  >
                  Wash{" "}
                    {activeNestedDropdown === "foamwash" ? 
                    (<FaChevronUp  className="active-icon" />) : (<FaChevronDown className="inactive-icon" />)}
                  </Link>
                  {activeNestedDropdown === "foamwash" && (
                    <ul className="nested-dropdown-menu-ajs">
                      <li>
                      <Link to="/foamwash" onClick={handleLinkClick}>Exterior And Interior Wash</Link>
                    </li>
                    <li>
                      <Link to="/foamwash" onClick={handleLinkClick}>Exterior Wash</Link>
                    </li>                     
                    </ul>
                  )}
                </li>
                <li className="dropdown-item-ajs">
                  <Link
                    to="/paintprotectionfilm"
                    onClick={() => toggleNestedDropdown("paint-protection")}
                  >
                    Paint Protection Films (PPF){" "}
                    {activeNestedDropdown === "paint-protection" ? 
                    (<FaChevronUp  className="active-icon" />) : (<FaChevronDown className="inactive-icon" />)}
                  </Link>
                  {activeNestedDropdown === "paint-protection" && (
                    <ul className="nested-dropdown-menu-ajs">
                      <li>
                        <Link to="/paintprotectionfilm"  onClick={handleLinkClick}>Paint Protection Films (PPF)</Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="dropdown-item-ajs">
                  <Link
                    to="/ceramiccoating"
                    onClick={() => toggleNestedDropdown("ceramic-coating")}
                  >
                    Ceramic Coating{" "}
                    {activeNestedDropdown === "ceramic-coating" ? 
                    (<FaChevronUp  className="active-icon" />) : (<FaChevronDown className="inactive-icon" />)}
                  </Link>
                  {activeNestedDropdown === "ceramic-coating" && (
                    <ul className="nested-dropdown-menu-ajs">
                      <li>
                        <Link to="/ceramiccoating" onClick={handleLinkClick}>1 Year-5 Year Package</Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="dropdown-item-ajs">
                  <Link
                    to="/interiortreatment"
                    onClick={() => toggleNestedDropdown("interior-treatment")}
                  >
                    Interior Treatments {" "}
                    {activeNestedDropdown === "interior-treatment" ?
                    (<FaChevronUp  className="active-icon" />) : (<FaChevronDown className="inactive-icon" />)}
                  </Link>
                  {activeNestedDropdown === "interior-treatment" && (
                    <ul className="nested-dropdown-menu-ajs">
                      <li>
                        <Link to="/interiortreatment" onClick={handleLinkClick}>Economical Interior Cleaning</Link>
                      </li>
                      <li>
                        <Link to="/interiortreatment" onClick={handleLinkClick}>Foam Based Interior Cleaning</Link>
                      </li>
                      <li>
                        <Link to="/interiortreatment" onClick={handleLinkClick}>Antibactarial GermKlean</Link>
                      </li>
                       <li>
                      <Link to="/interiortreatment"onClick={handleLinkClick}>Deep Cleaning</Link>
                    </li>
                    </ul>
                  )}
                </li>
                <li className="dropdown-item-ajs">
                  <Link
                    to="/exteriortreatment"
                    onClick={() => toggleNestedDropdown("exterior-treatment")}
                  >
                    Exterior Treatments {" "}
                    {activeNestedDropdown === "exterior-treatment" ?
                    (<FaChevronUp  className="active-icon" />) : (<FaChevronDown className="inactive-icon" />)}
                  </Link>
                  {activeNestedDropdown === "exterior-treatment" && (
                    <ul className="nested-dropdown-menu-ajs">
                      <li>
                        <Link to="/exteriortreatment" onClick={handleLinkClick}>UV - Paint Protection</Link>
                      </li>
                      <li>
                      <Link to="/exteriortreatment" onClick={handleLinkClick}>Paint Correction</Link>
                    </li>
                      <li>
                        <Link to="/exteriortreatment"onClick={handleLinkClick}>Surface Refinement</Link>
                      </li>
                      <li>
                        <Link to="/exteriortreatment"onClick={handleLinkClick}>Surface Correction</Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="dropdown-item-ajs">
                <Link
                  to="/airconditioner"
                  onClick={() => toggleNestedDropdown("airconditioner")}
                >
                  AC Care{" "}
                  {activeNestedDropdown === "airconditioner" ? 
                  (<FaChevronUp  className="active-icon" />) : (<FaChevronDown className="inactive-icon" />)}
                </Link>
                {activeNestedDropdown === "airconditioner" && (
                  <ul className="nested-dropdown-menu-ajs">
                    <li>
                      <Link to="/airconditioner"onClick={handleLinkClick}>AC Duct Cleaning</Link>
                    </li>
                    <li>
                      <Link to="/airconditioner"onClick={handleLinkClick}>AC Evaporator Coil Cleaning</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="dropdown-item-ajs">
                <Link
                  to="/antirustprotection"
                  onClick={() => toggleNestedDropdown("antirustprotection")}
                >
                  Antirust Coatings{" "}
                  {activeNestedDropdown === "antirustprotection" ? 
                  (<FaChevronUp  className="active-icon" />) : (<FaChevronDown className="inactive-icon" />)}
                </Link>
                {activeNestedDropdown === "antirustprotection" && (
                  <ul className="nested-dropdown-menu-ajs">
                   <li>
                      <Link to="/antirustprotection"onClick={handleLinkClick}>Anti Rust Protection</Link>
                    </li>
                    <li>
                      <Link to="/antirustprotection"onClick={handleLinkClick}>Silencer Coating </Link>
                    </li>
                    <li>
                      <Link to="/antirustprotection"onClick={handleLinkClick}>Internal Panel protection </Link>
              </li>
                  </ul>
                )}
                </li>                   
              <li className="dropdown-item-ajs">
                <Link
                  to="/engineprotection"
                  onClick={() => toggleNestedDropdown("engineprotection")}
                >
                  Engine Protection{" "}
                  {activeNestedDropdown === "engineprotection" ? 
                  (<FaChevronUp  className="active-icon" />) : (<FaChevronDown className="inactive-icon" />)}
                </Link>
                {activeNestedDropdown === "engineprotection" && (
                  <ul className="nested-dropdown-menu-ajs">
                    <li>
                      <Link to="/engineprotection"onClick={handleLinkClick}>Engine Dressing</Link>
                    </li>
                    <li>
                      <Link to="/engineprotection"onClick={handleLinkClick}>Engine Lacquer Coating</Link>
                    </li>
                    <li>
                      <Link to="/engineprotection"onClick={handleLinkClick}>Rodent Repellent Spray</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="dropdown-item-ajs">
                <Link
                  to="/windshieldrestoration"
                  onClick={() => toggleNestedDropdown("windshieldrestoration")}
                >
                  Windshield Restoration {" "}
                  {activeNestedDropdown === "windshieldrestoration" ? 
                  (<FaChevronUp  className="active-icon" />) : (<FaChevronDown className="inactive-icon" />)}
                </Link>
                {activeNestedDropdown === "windshieldrestoration" && (
                  <ul className="nested-dropdown-menu-ajs">
                  <li><Link to="/windshieldrestoratio"onClick={handleLinkClick}>Surface Correction done on Front and <br/> Rear Windshield against Minute Scratches </Link></li>
                    <li>
                      <Link to="/windshieldrestoration"onClick={handleLinkClick}>Cleaning of all 6 Glasses from Hard Water Marks </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="dropdown-item-ajs">
                <Link
                  to="/headlamprestoration"
                  onClick={() => toggleNestedDropdown("headlamprestoration")}
                >
                  Headlamp Restoration {" "}
                  {activeNestedDropdown === "headlamprestoration" ? 
                  (<FaChevronUp  className="active-icon" />) : (<FaChevronDown className="inactive-icon" />)}
                </Link>
                {activeNestedDropdown === "headlamprestoration" && (
                  <ul className="nested-dropdown-menu-ajs">
                    <li>
                      <Link to="/headlamprestoration"onClick={handleLinkClick}>Headlamp</Link>
                    </li>
                  </ul>
                )}
              </li>
              </ul>
            )}
          </li>
          {/* <li className="dropdown-ajs" style={{ fontFamily: '"Chakra Petch", sans-serif' }}>
            <Link to="" onClick={() => toggleDropdown("")}>
            SUPPORT{" "}
              {activeDropdown === "" ?(<FaChevronUp  className="active-icon" />) : (<FaChevronDown className="inactive-icon" />)}
            </Link>
            {activeDropdown === "" && (
              <ul className="dropdown-menu-ajs">
                <li className="dropdown-item-ajs">
                <Link
                    to="/"
                    onClick={() => toggleNestedDropdown("customer-support")}
                  >
                  Customer Support {" "}
                  </Link>
                </li>
                <li className="dropdown-item-ajs">
                  <Link
                    to="/become-a-partner"
                    onClick={() => toggleNestedDropdown("channel-partner")}
                  >
                  Channel Partner{" "}
                  </Link>
              </li>
                <li className="dropdown-item-ajs">
                  <Link
                    to="/"
                    onClick={() => toggleNestedDropdown("faq")}
                  >
                    FAQ{" "}
                  </Link>
              </li>
              </ul>
            )}
          </li> */}
          <li style={{ fontFamily: '"Chakra Petch", sans-serif' }}>
            <Link to="/become-a-partner"onClick={handleLinkClick}>BECOME A PARTNER</Link>
          </li>
          <li>
         <Link to="/bookanappointment"onClick={handleLinkClick}> <button className="navbar-contact-ajs" style={{ fontFamily: '"Chakra Petch", sans-serif' }}>BOOK AN APPOINTMENT</button></Link>
        </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
