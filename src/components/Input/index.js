import { useEffect } from 'react';
import { useMemo, useRef } from 'react';
import { useTheme } from 'styled-components';

import elementHasFocus from '../../utils/elementHasFocus';

import { Container, InputStyled } from './styles';

export default function Input({ error, children, ...rest }) {
  const theme = useTheme();
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const cssOverride = useMemo(() => ({
    hover: {
      backgroundColor: theme.colors.secondary.lighter,
      borderColor: theme.colors.secondary.light,
    },
    default: {
      backgroundColor: theme.colors.secondary.light,
      borderColor: theme.colors.secondary.lighter,
    },
  }));

  useEffect(() => {
    handleInputNoHovered();
  }, []);

  function handleFocusInput() {
    inputRef.current.focus();
    handleInputHovered();
  }
  
  function handleBlurInput() {
    if(elementHasFocus(inputRef.current)) {
      return;
    }

    handleInputNoHovered();
  }
  
  function handleInputHovered() {
    const { style: containerStyle } = containerRef.current;
    const { style: inputStyle } = inputRef.current;
    
    containerStyle.backgroundColor = cssOverride.hover.backgroundColor;
    containerStyle.borderColor = cssOverride.hover.borderColor;
    inputStyle.backgroundColor = cssOverride.hover.backgroundColor;
    inputStyle.borderColor = cssOverride.hover.borderColor;
  }
  
  function handleInputNoHovered() {
    const { style: containerStyle } = containerRef.current;
    const { style: inputStyle } = inputRef.current;

    containerStyle.backgroundColor = cssOverride.default.backgroundColor;
    containerStyle.borderColor = cssOverride.default.borderColor;
    inputStyle.backgroundColor = cssOverride.default.backgroundColor;
    inputStyle.borderColor = cssOverride.default.borderColor;
  }

  return (
    <Container
      role="button"
      ref={containerRef}
      onClick={handleFocusInput}
      onMouseOver={handleInputHovered}
      onMouseLeave={handleBlurInput}
    >
      <div className="main-container">
        {children}
        <InputStyled
          ref={inputRef}
          onFocus={handleInputHovered}
          onBlur={handleInputNoHovered}
          {...rest}
        />
      </div>
      {error && <span id="error">{error}</span>}
    </Container>
  );
}