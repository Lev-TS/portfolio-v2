import styled from 'styled-components';

export const CommentContainer = styled.div`
  position: relative;
  padding-bottom: 20px;
  display: flex;
  font-family: ${(props) => props.theme.fonts.landingPageComment};

  ${(props) =>
    props.align
      ? `
        text-align: right;
        margin-right: 20px;
        justify-content: flex-end;
      `
      : `margin-left: 20px;`}

  @media screen and (max-width: 1124px) {
    display: none;
  }
`;

export const MarksWrapper = styled.div`
  position: absolute;
  padding: 0 170px;
  top: -40px;
  ${(props) => !props.align && `transform: rotate(180deg);`}

  .marks-icon-fill {
    fill: ${(props) => props.theme.colors.darkGrey};
    fill-opacity: 0.15;
  }
`;

export const Text = styled.p`
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-align: inherit;
  font-style: italic;
  max-width: 245px;
`;
