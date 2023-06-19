import React from 'react';

const ColorChanger = () => {
  const initialColorVariables = {
    background_color: '#F1F6F9',
    nav_start_logo: 'rgb(27, 27, 27)',
    nav_end_logo: '#232b2b',
    nav_link_bg: '#00a6de',
    text_color: 'black',
    btn_bg_color: 'ghostwhite',
    diagonal_heading_before: '#F1F6F9',
    diagonal_heading_after: 'rgb(20,20,20)',
    project_card_border: '#394867',
    project_btn_bg: '#282828',
    edu_line_start: '#3ca8e8',
    edu_line_end: '#2931b3',
    edu_circle: '#FF9F55',
    edu_container_bg: '#89CFFD',
    hero_start: '#8e9eab',
    hero_end: '#eef2f3',
  };

  const [colorVariables, setColorVariables] = React.useState(initialColorVariables);
  const [isReset, setIsReset] = React.useState(true);

  const handleButtonClick = () => {
    if (isReset) {
      // Change the color variables
      setColorVariables((prevState) => ({
        ...prevState,
        background_color: '#282828',
        nav_start_logo: 'rgb(27, 27, 27)',
        nav_end_logo: '#232b2b',
        nav_link_bg: '#00a6de',
        text_color: 'white',
        btn_bg_color: 'ghostwhite',
        diagonal_heading_before: 'transparent',
        diagonal_heading_after: 'rgb(20,20,20)',
        project_card_border: '#394867',
        project_btn_bg: '#282828',
        edu_line_start: '#3ca8e8',
        edu_line_end: '#2931b3',
        edu_circle: '#FF9F55',
        edu_container_bg: '#89CFFD',
        hero_start: '#000000',
        hero_end: '#434343',
        // Update other color variables as needed
      }));
    } else {
      // Reset the color variables to initial values
      setColorVariables(initialColorVariables);
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
    <button onClick={handleButtonClick}>
      {isReset ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
};

export default ColorChanger;



  
  