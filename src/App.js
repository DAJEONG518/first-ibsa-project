import { BrowserRouter,Routes, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import Total from './components/Total';
import Section01 from './components/Section01';
import Section02 from './components/Section02';
import Section03 from './components/Section03';
import Section04 from './components/Section04';
import CoverLetter from './components/CoverLetter';
import Liaison from './components/Liaison';

function App() {
  return (
    <BrowserRouter>
    <Menu />       {/*메뉴 */}
    <Routes>
      <Route path='/' element={<Total />}/>                            {/* 다 포함되어있는 Total */}
      <Route path='/setion01' element = {<Section01 />}/>       {/* 포부 */}
      <Route path='/section02' element = {<Section02 />}/>      {/* 다룰줄 아는 스택 */}
      <Route path='/section03' element = {<Section03 />}/>      {/* 구현한 Web프로젝트 */}
      <Route path='/section04' element = {<Section04 />}/>      {/* 실전 경험 영역 */}
      <Route path='/coverletter' element = {<CoverLetter />}/>  {/* 자기소개 */}
    </Routes>
    <Liaison />      {/* 연락처 */}
    </BrowserRouter>
  );
}

export default App;
