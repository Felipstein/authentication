import { PuffLoader } from 'react-spinners';
import { useTheme } from 'styled-components';
import PropTypes from 'prop-types';

import { ButtonStyled } from './styles';

export default function AuthButton({ loading, disabled, children, ...rest }) {
  const theme = useTheme();

  return (
    <ButtonStyled disabled={disabled || loading} {...rest}>
      {loading ? <PuffLoader color={theme.colors.primary.background} size={28} /> : children}
    </ButtonStyled>
  );
}

AuthButton.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

AuthButton.defaultProps = {
  loading: false,
}