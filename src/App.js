
import './App.css';
import { Routes, Route } from "react-router-dom";

import CarouselNav from './pages/CarouselNav';
import { MainNavbar } from './pages/MainNavbar';
import AccountsPage from "./pages/AccountsPage";
import SciencePage from "./pages/SciencePage";
import BiologyPage from "./pages/BiologyPage";
import ComputersPage from "./pages/ComputersPage";
import MathematicsPage from "./pages/MathematicsPage";
import SocialPage from "./pages/SocialPage";

import WhatIsTDS from "./components/accounts/WhatIsTDS";
import WhatIsRTI from "./components/accounts/WhatIsRTI";
import WhatIsIncomeTax from "./components/accounts/WhatIsIncomeTax";
import WhatIsBNS from "./components/accounts/WhatIsBNS";
import DoYouKnowAboutPF from "./components/accounts/DoYouKnowAboutPF";
import DetailsAboutITR from "./components/accounts/DetailsAboutITR";


function App() {
  return (
    <>
      <MainNavbar />
      <CarouselNav />
      <Routes>
        <Route path='/Accounts' element={<AccountsPage />} >
          <Route path="what is TDS" element={<WhatIsTDS />} />
          <Route path="what-is-RTI" element={<WhatIsRTI />} />
          <Route path="what-is-incommeTax" element={<WhatIsIncomeTax />} />
          <Route path="what-is-BNS" element={<WhatIsBNS />} />
          <Route path="do-you-know-about PF" element={<DoYouKnowAboutPF />} />
          <Route path="details-about ITR" element={<DetailsAboutITR />} />
        </Route>

        <Route path='/Science' element={<SciencePage />} >
          <Route path="what is science" element={<WhatIsTDS />} />
          <Route path="details about ancient science in india" element={<WhatIsRTI />} />
          <Route path="what is space exploration" element={<WhatIsIncomeTax />} />
          <Route path="details about nuclear science" element={<WhatIsBNS />} />
          <Route path="what is climate change" element={<DoYouKnowAboutPF />} />
          <Route path="what is modern science" element={<DetailsAboutITR />} />
        </Route>

        <Route path='/Biology' element={<BiologyPage />} >
          <Route path="what is TDS" element={<WhatIsTDS />} />
          <Route path="what-is-RTI" element={<WhatIsRTI />} />
          <Route path="what-is-incommeTax" element={<WhatIsIncomeTax />} />
          <Route path="what-is-BNS" element={<WhatIsBNS />} />
          <Route path="do-you-know-about PF" element={<DoYouKnowAboutPF />} />
          <Route path="details-about ITR" element={<DetailsAboutITR />} />
        </Route>

        <Route path='/Computers' element={<ComputersPage />} >
          <Route path="what is TDS" element={<WhatIsTDS />} />
          <Route path="what-is-RTI" element={<WhatIsRTI />} />
          <Route path="what-is-incommeTax" element={<WhatIsIncomeTax />} />
          <Route path="what-is-BNS" element={<WhatIsBNS />} />
          <Route path="do-you-know-about PF" element={<DoYouKnowAboutPF />} />
          <Route path="details-about ITR" element={<DetailsAboutITR />} />
        </Route>
        <Route path='/Mathematics' element={<MathematicsPage />} >
          <Route path="what is TDS" element={<WhatIsTDS />} />
          <Route path="what-is-RTI" element={<WhatIsRTI />} />
          <Route path="what-is-incommeTax" element={<WhatIsIncomeTax />} />
          <Route path="what-is-BNS" element={<WhatIsBNS />} />
          <Route path="do-you-know-about PF" element={<DoYouKnowAboutPF />} />
          <Route path="details-about ITR" element={<DetailsAboutITR />} />
        </Route>

        <Route path='/Social' element={<SocialPage />} >
          <Route path="what is TDS" element={<WhatIsTDS />} />
          <Route path="what-is-RTI" element={<WhatIsRTI />} />
          <Route path="what-is-incommeTax" element={<WhatIsIncomeTax />} />
          <Route path="what-is-BNS" element={<WhatIsBNS />} />
          <Route path="do-you-know-about PF" element={<DoYouKnowAboutPF />} />
          <Route path="details-about ITR" element={<DetailsAboutITR />} />
        </Route>
      </Routes>
      {/* <ContentPage/> */}


    </>
  );
}

export default App;