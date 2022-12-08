import styled from 'styled-components';

const handleColor = (variant) =>
  ({
    student: 'var(--accent-yellow)',
    tutor: 'var(--accent-purple)',
    search: 'var(--accent-yellow)',
    latest: 'var(--accent-purple)',
  }[variant]);

export const Picture = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  border: 2.5px solid var(--white);

  @media screen and (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;
export const PictureContainer = styled.article`
  padding: 0.25rem;
  border-radius: 100%;
  background-color: ${(props) => handleColor(props.type)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-self: flex-start;
`;
