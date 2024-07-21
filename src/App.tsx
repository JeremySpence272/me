import { useState } from "react";
import Body from "./Body";
import ButtonNav from "./ButtonNav";
import Header from "./Header";

export enum PageType {
  home = "home",
  education = "education",
  experience = "experience",
  projects = "projects",
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
    <>
      <Header />
      <ButtonNav
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <Body currentPage={currentPage} handlePageChange={handlePageChange} />
    </>
  );
};

export default App;

// Current bio
// Primary logos timeline
/*
 columbia
 cs.trade
 cs
 nyu
 playbook
*/

// links to [projects][education][]
