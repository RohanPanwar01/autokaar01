import React, { useState, useEffect, useRef } from "react";
import Services from "./Ourservice";
import "./Homepage.css";
import CarInfo from './Carage';
import sectionImg from "../image/section.jpg";
import section2Img from "../image/section2.jpg";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
// import foam from '../image/inside service/exterior wash.webp';
// import ppf from '../image/inside service/PPf.jpg';
// import antirust from '../image/serviceimage/anti rust.jpg';
// import ac from '../image/inside service/ac vent.webp';



function Homepage() {
  const [activeSection, setActiveSection] = useState(0);
  const [hasSlid, setHasSlid] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [location, setLocation] = useState("Bhopal");
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const totalSections = 2;

  const items = [
    "PPF", "Ceramic Coating", 
    "Interior Treatments", "Exterior Treatments", "Air Conditioner", "AC",
    "Engine Protection", "Headlamp Restoration", "AC Care",
    "Windshield Restoration", "Antirust Coatings", "Services","Wash",
    "Exterior And Interior Wash","Exterior Wash","Paint Protection Films (PPF)",
    "1 Year-5 Year Package","Economical Interior Cleaning","Foam Based Interior Cleaning",
    "Antibactarial GermKlean","Deep Cleaning","UV - Paint Protection","Paint Correction",
    "Surface Refinement","Surface Correction",'AC Duct Cleaning',"AC Evaporator Coil Cleaning",
    "Underbody Antirust Coating","Silencer Coating","Internal Panel protection","Engine Dressing",
  ];

  useEffect(() => {
    if (!hasSlid) {
      const interval = setInterval(() => {
        setActiveSection((prevSection) => {
          const nextSection = (prevSection + 1) % totalSections;
          if (nextSection === 0) {
            clearInterval(interval);
            setHasSlid(true);
          }
          return nextSection;
        });
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [hasSlid, totalSections]);

  const handleSectionChange = (sectionIndex) => {
    setActiveSection(sectionIndex);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectLocation = (loc) => {
    setLocation(loc);
    setIsDropdownOpen(false);
  };

  const handleChangeQuery = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value) {
      const results = items.filter(item =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredItems(results);
      setShowSuggestions(true);
      setHighlightedIndex(-1);
    } else {
      setShowSuggestions(false);
      setFilteredItems([]);
    }
  };

  const handleSearch = () => {
    if (!query) return;

    const results = items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(results);
    setShowSuggestions(false);

    if (results.includes("CAR WASH")) {
      navigate("/foamwash");
    } else if (results.includes("Paint Protection Films (PPF)")) {
      navigate("/paintprotectionfilm");
    } else if (results.includes("Ceramic Coating")) {
      navigate("/ceramiccoating");
    } else if (results.includes("Interior Treatments")) {
      navigate("/interiortreatment");
    } else if (results.includes("Exterior Treatments")) {
      navigate("/exteriortreatment");
    } else if (results.includes("AC Care","Air Conditioner", "AC",)) {
      navigate("/airconditioner");
    } else if (results.includes("Engine Protection")) {
      navigate("/engineprotection");
    } else if (results.includes("Headlamp Restoration")) {
      navigate("/headlamprestoration");
    } else if (results.includes("Windshield Restoration")) {
      navigate("/windshieldrestoration");
    } else if (results.includes("Antirust Coatings")) {
      navigate("/antirustprotection");
    } else {
      // Optionally handle if no matching route is found
      console.log("No matching service found.");
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      setHighlightedIndex((prevIndex) => Math.min(prevIndex + 1, filteredItems.length - 1));
      e.preventDefault();
  } else if (e.key === "ArrowUp") {
      setHighlightedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      e.preventDefault();
    } else if (e.key === 'Enter') {
      if (highlightedIndex >= 0 ) {
        handleSuggestionClick(filteredItems[highlightedIndex]);
      } else {
        handleSearch();
      }
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setShowSuggestions(false);
    handleSearch(); // Optionally trigger search upon selecting suggestion
    setHighlightedIndex(-1);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };
  const closeSuggestions = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setShowSuggestions(false);
    }
  };


  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  useEffect(() => {
    document.addEventListener('mousedown', closeSuggestions);
    return () => {
      document.removeEventListener('mousedown', closeSuggestions);
    };
  }, []);

  return (
    <div className="homepage">
      {/* Hero Section 1 */}
      <section
        id="hero-section"
        className={`hero-section ${activeSection === 0 ? 'active' : 'inactive'}`}
      >
        <div className="hero-content">
          <h1 className="animated-heading" style={{ fontFamily: '"Chakra Petch", sans-serif' }}>
            GET COUPONS & OFFERS
          </h1>
          <p className="animated-paragraph">
            Worry no more, now you can book your car services online and also
            get benefited from the coupons available. With online booking, you
            can save your time and money both.
          </p>
        </div>
        <div className="hero-image">
          <img src={section2Img} alt="Car 1" />
        </div>
      </section>

      {/* Hero Section 2 */}
      <section
        id="hero-section-1"
        className={`hero-section ${activeSection === 1 ? 'active' : 'inactive'}`}
      >
        <div className="hero-content">
          <h1 className="animated-heading" style={{ fontFamily: '"Chakra Petch", sans-serif' }}>
            MAINTENANCE & REPAIR SERVICES
          </h1>
          <p className="animated-paragraph">
            AUTOKARR is one of the leading units specializing in providing car
            care equipment and tools worldwide. Need to buy car care tools,
            accessories? This will be a useful choice.
          </p>
        </div>
        <div className="hero-image2">
          <img src={sectionImg} alt="Car 2" />
        </div>
      </section>

      {/* Pagination Dots */}
      <div className="pagination-dots11">
        <span
          className={`dot ${activeSection === 0 ? 'active' : ''}`}
          onClick={() => handleSectionChange(0)}
        ></span>
        <span
          className={`dot ${activeSection === 1 ? 'active' : ''}`}
          onClick={() => handleSectionChange(1)}
        ></span>
      </div>

      {/* Search Bar and Suggestions */}
      <div className="search-container" ref={dropdownRef}>
        <div
          className="location-dropdown"
          onClick={toggleDropdown}
          ref={dropdownRef}
        >
          <span className="location-icon">
            <FontAwesomeIcon icon={faLocationDot} />
          </span>
          <span className="location-text" style={{ fontFamily: '"Chakra Petch", sans-serif' }}>
            {location}
          </span>
          <span className="dropdown-arrow">▼</span>
          {isDropdownOpen && (
            <div className="dropdown-menu" style={{ fontFamily: '"Chakra Petch", sans-serif' }}>
              {["Bhopal", "Indore", "Pune"].map((loc) => (
                <div
                  key={loc}
                  className="dropdown-item"
                  onClick={() => selectLocation(loc)}
                >
                  {loc}
                </div>
              ))}
            </div>
          )}
        </div>

        <input


          type="text"
          className="search-input"
          placeholder="Search for services..."
          value={query}
          onChange={handleChangeQuery}
          onKeyDown={handleKeyDown}
          
        />

        <button className="search-button" onClick={handleSearch}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>

        {showSuggestions && filteredItems.length > 0 && (
          <ul className="suggestions-list">
            {filteredItems.map((item, index) => (
              <li key={index}
              className={index === highlightedIndex ? 'highlighted' : ''}
              onClick={() => handleSuggestionClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* <div id="popular-services-container">
      <h3 className="section-title">Popular Car Services</h3>
      <div className="popularservice-grid">
      <div className="popularservice-item" id="battery-replacement">
          <img src={foam} alt="Battery Replacement" />
          <p>Foam Wash</p>
        </div>
        <div className="popularservice-item" id="oil-change">
          <img src={ppf} alt="Oil Change" />
          <p>PPF</p>
        </div>
        <div className="popularservice-item" id="tire-rotation">
          <img src={antirust} alt="Tire Rotation" />
          <p>Antirust Coatings</p>
        </div>
        <div className="popularservice-item" id="brake-inspection">
          <img src={ac} alt="Brake Inspection" />
          <p>AC Care</p>
        </div>
      </div>
</div> */}

      <CarInfo />

      <section className="business-stats">
        <div className="stat">
          <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>7+</h2>
          <p>More than 7 years of operation in the field of Car Services</p>
        </div>
        <div className="stat">
          <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>22K+</h2>
          <p>International standard process and large factory system.</p>
        </div>
        <div className="stat">
          <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>500K+</h2>
          <p>Employees in the whole system include many leading engineers.</p>
        </div>
        <div className="stat">
          <h2 style={{ fontFamily: '"Chakra Petch", sans-serif' }}>99%</h2>
          <p>Service technology to satisfy customers' needs and interests.</p>
        </div>
      </section>

      <Services />
    </div>
  );
}

export default Homepage;
