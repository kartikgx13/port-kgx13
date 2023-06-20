import React from 'react';

const ColorChanger = () => {
  const initialColorVariables = {
    // initial color variables
    background_color: '#F1F6F9',
    nav_start_logo: 'rgb(27, 27, 27)',
    nav_end_logo: '#232b2b',
    nav_link_bg: '#E7a930',
    text_color: 'black',
    btn_bg_color: 'ghostwhite',
    diagonal_heading_before: '#F1F6F9',
    diagonal_heading_after: '#0A6EBD',
    project_card_border: '#394867',
    project_btn_bg: '#282828',
    edu_line_start: '#00B4DB',
    edu_line_end: '#0083B0',
    edu_circle: '#E7a930',
    hero_start: '#8e9eab',
    hero_end: '#eef2f3',
    nav_start: '#0A6EBD',
    nav_end: '#0A6EBD',
    main_btn_color: 'ghostwhite',
    edu_content: 'ghostwhite',
    skill_bg: 'transparent',
    git_btn: 'ghostwhite',
    git_text: 'white',
    edu_container_bg: '#89CFFD',
  };

  const [colorVariables, setColorVariables] = React.useState(() => {
    // Retrieve color variables from local storage or use initial values
    const storedColorVariables = localStorage.getItem('colorVariables');
    return storedColorVariables ? JSON.parse(storedColorVariables) : initialColorVariables;
  });

  const [isReset, setIsReset] = React.useState(true);

  const handleButtonClick = () => {
    if (isReset) {
      // Change the color variables
      const updatedColorVariables = {
        // updated color variables
        background_color: '#282828',
        nav_start_logo: '#F1F6F9',
        nav_end_logo: 'ghostwhite',
        nav_link_bg: '#e6bc43',
        text_color: 'white',
        btn_bg_color: '#34495e',
        diagonal_heading_before: 'transparent',
        diagonal_heading_after: '#000000',
        project_card_border: 'rgb(20,20,20)',
        project_btn_bg: 'rgb(20,20,20)',
        edu_line_start: '#3ca8e8',
        edu_line_end: '#2931b3',
        edu_circle: '#e6bc43',
        hero_start: '#000000',
        hero_end: '#434343',
        nav_start: '#45adff',
        nav_end: '#45adff',
        main_btn_color: '#45adff',
        edu_content: '#34495e',
        edu_container_bg : '#34495e',
        git_btn: 'rgb(20,20,20)',
        git_text:'white',
      };
      setColorVariables(updatedColorVariables);
      localStorage.setItem('colorVariables', JSON.stringify(updatedColorVariables));
    } else {
      // Reset the color variables to initial values
      setColorVariables(initialColorVariables);
      localStorage.removeItem('colorVariables');
    }

    // Toggle between reset and change mode
    setIsReset(!isReset);
  };

  React.useEffect(() => {
    const root = document.documentElement;
    Object.entries(colorVariables).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
  }, [colorVariables]);

  return (
    <>
      <div className="color-toggle-container">
      <label className="switch">
        <input type="checkbox" onChange={handleButtonClick} />
        <span className="slider"></span>
      </label>
      <div className="toggle-text">
        {isReset ? 'Dark Mode' : 'Light Mode'}
      </div>
      </div>
    </>
  );
};

export default ColorChanger;




  
  