import { useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import { CheckCircle, Error, Info } from '@material-ui/icons';

export default function ToastMessage({ data: { id, text, type, duration = 5000}, onRemoveToast }) {
  const icons = useMemo(() => ({
    info: <Info />,
    success: <CheckCircle style={{ color: '#64F064' }} />,
    danger: <Error style={{color: '#F0342D' }} />,
  }));

  useEffect(() => {
    const idTimeout = setTimeout(handleRemoveToast, duration);

    return () => {
      clearTimeout(idTimeout);
    };
  }, []);

  function handleRemoveToast() {
    onRemoveToast(id);
  }

  return (
    <Container
      tabIndex={0}
      role="button"
      onClick={handleRemoveToast}
    >
      <div className="icon-container">
        {icons[type] || icons.info}
      </div>
      {text}
    </Container>
  );
}

ToastMessage.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['info', 'success', 'danger']),
    duration: PropTypes.number,
  }).isRequired,
  onRemoveToast: PropTypes.func.isRequired,
}