import styled from '@emotion/styled';

export const ProductOneWrapper = styled.div({
  zIndex: 1000,
  width: '100%',
});

export const ProductTwoWrapper = styled.div({
  left: '100%',
  display: 'none',
  width: 'calc(100% + 280px)',
  zIndex: 1,
  top: -48,
  backgroundColor: '#fff',
  position: 'absolute',
  borderTopRightRadius: '20px',
  borderBottomRightRadius: '20px',
  boxShadow: '8px 4px 12px rgba(0, 0, 0, 0.12)',
  padding: '48px 0',
  height: 'calc(100% + 48px + 48px)',
});

export const ProductOne = styled.div({
  display: 'flex',
  '&:hover': {
    borderRight: '2px solid #DE1B1B',
    color: '#DE1B1B',
    '& > div': {
      display: 'block',
    },
  },
});

export const ProductTwoContent = styled.div({
  borderLeft: '1px solid #D2DADE',
  height: '100%',
});

export const ProductTwo = styled.div({
  paddingLeft: '3rem',
  paddingRight: '3rem',
  height: '100%',
  overflowY: 'auto',
});
