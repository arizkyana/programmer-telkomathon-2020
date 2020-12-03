import MainContainer from './main.style';

import SharedNavbar from '../../shared/navbar';

const MainLayout = ({ children }) => {
  return (
    <MainContainer>
      <div className="app-container">
        <SharedNavbar />
        {children}
      </div>
    </MainContainer>
  )
};

export default MainLayout;
