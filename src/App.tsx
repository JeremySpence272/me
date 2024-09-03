import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Body from "./Body";
import ButtonNav from "./ButtonNav";
import Header from "./Header";
import MicrosoftComponent from "./MicrosoftComponent";

export enum PageType {
  home = "home",
  education = "education",
  experience = "experience",
  projects = "projects",
  msft = "msft", // Add the new page type
}

export interface PageProps {
  currentPage: PageType;
  handlePageChange: (newPage: PageType) => void;
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>(PageType.home);

  const handlePageChange = (newPage: PageType) => {
    if (currentPage === newPage) {
      setCurrentPage(PageType.home);
      return;
    }
    setCurrentPage(newPage);
  };

  return (
    <Router>
      <Header />
      <ButtonNav
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Body
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          }
        />
        <Route path="/msft" element={<MicrosoftComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
