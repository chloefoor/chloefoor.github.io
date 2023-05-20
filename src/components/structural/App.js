import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';
import Thesis from '../pages/Thesis';
import AwardsHonors from '../pages/AwardsHonors';

import History from '../pages/schoolwork/History';
import CSIS from '../pages/schoolwork/CSIS';
import Involvement from '../pages/schoolwork/Involvement';

import DCHS from '../pages/careers/DCHS';
import WES from '../pages/careers/WES';
import StudentHistorian from '../pages/careers/StudentHistorian';
import NVP from '../pages/careers/NVP';
import HIAH from '../pages/careers/HIAH';
import Sentry from '../pages/careers/Sentry';

import NoMatch from '../pages/NoMatch';

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="/thesis" element={<Thesis />}></Route>
            <Route path="/awardshonors" element={<AwardsHonors />}></Route>

            <Route path="/schoolwork/history" element={<History />}></Route>
            <Route path="/schoolwork/computerinfoscience" element={<CSIS />}></Route>
            <Route path="/schoolwork/involvement" element={<Involvement />}></Route>

            <Route path="/careers/dchs" element={<DCHS />}></Route>
            <Route path="/careers/wes" element={<WES />}></Route>
            <Route path="/careers/studenthistorian" element={<StudentHistorian />}></Route>
            <Route path="/careers/nvp" element={<NVP />}></Route>
            <Route path="/careers/hiah" element={<HIAH />}></Route>
            <Route path="/careers/sentry" element={<Sentry />}></Route>

            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
