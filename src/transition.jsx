import { useState, useEffect } from 'react';

function withFadeIn(Component) {
  return function FadeInComponent(props) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      setIsVisible(true);
    }, []);

    return (
      <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Component {...props} />
      </div>
    );
  };
}

export default withFadeIn;