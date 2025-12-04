import './App.css'
import Home from './home'
import Navbar from './navbar'
import Sleep from './conditions/sleep'
import Depression from './conditions/Depression'
import Anxiety from './conditions/Anxiety'
import PTSD from './conditions/PTSD'
import PersonalityDisorders from './conditions/PersonalityDisorders'
import NarcissisticAbuse from './conditions/NarcissisticAbuse'
import PanicDisorder from './conditions/PanicDisorder'
import BipolarDisorder from './conditions/BipolarDisorder'
import SubstanceUse from './conditions/SubstanceUse'
import OCD from './conditions/OCD'
import Grief from './conditions/Grief'
import TemplateService from './services/template-service/template-service'
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h2>About Page</h2>} />
        <Route path="/services/template-service" element={<TemplateService />} />
        <Route path="/conditions/sleep" element={<Sleep />} />
        <Route path="/conditions/depression" element={<Depression />} />
        <Route path="/conditions/anxiety" element={<Anxiety />} />
        <Route path="/conditions/ptsd" element={<PTSD />} />
        <Route path="/conditions/personality-disorders" element={<PersonalityDisorders />} />
        <Route path="/conditions/narcissistic-abuse" element={<NarcissisticAbuse />} />
        <Route path="/conditions/panic-disorder" element={<PanicDisorder />} />
        <Route path="/conditions/bipolar-disorder" element={<BipolarDisorder />} />
        <Route path="/conditions/substance-use" element={<SubstanceUse />} />
        <Route path="/conditions/ocd" element={<OCD />} />
        <Route path="/conditions/grief" element={<Grief />} />
      </Routes>
    </>
  )
}

export default App
