import styled from '@emotion/styled';

const MainContainer = styled.section`

  display: flex;
  justify-content: center;
  align-items: start;
  height: 100vh;
  background: grey;

  .app-container {
    width: 600px;
    height: 100%;
    background: #FFFFFF;
    position: relative;

    overflow-y: auto;

    .navbar {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }
  }
`;

export default MainContainer;
