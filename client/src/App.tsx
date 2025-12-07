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
import DissociativeDisorders from './conditions/DissociativeDisorders'
import ChildhoodTrauma from './conditions/ChildhoodTrauma'
import SexualAbuse from './conditions/SexualAbuse'
import LowSelfEsteem from './conditions/LowSelfEsteem'
import LifeTransitions from './conditions/LifeTransitions'
import AdjustmentDisorders from './conditions/AdjustmentDisorders'
import AngerManagement from './conditions/AngerManagement'
import StressManagement from './conditions/StressManagement'
import BodyDysmorphic from './conditions/BodyDysmorphic'
import OppositionalDefiant from './conditions/OppositionalDefiant'
import SeparationAnxiety from './conditions/SeparationAnxiety'
import AttachmentIssues from './conditions/AttachmentIssues'
import Agoraphobia from './conditions/Agoraphobia'
import WomensMentalHealth from './conditions/WomensMentalHealth'
import LGBTQIAMentalHealth from './conditions/LGBTQIAMentalHealth'
import Schizophrenia from './conditions/Schizophrenia'
import TemplateService from './services/template-service/template-service'
import IndividualTherapy from './services/individual-therapy/individual-therapy'
import CouplesCounseling from './services/couples-counseling/couples-counseling'
import AdolescentMentalHealth from './services/adolescent-mental-health/adolescent-mental-health'
import TelehealthServices from './services/telehealth-services/telehealth-services'
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h2>About Page</h2>} />
        <Route path="/services/template-service" element={<TemplateService />} />
        <Route path="/services/individual-therapy" element={<IndividualTherapy />} />
        <Route path="/services/couples-counseling" element={<CouplesCounseling />} />
        <Route path="/services/adolescent-mental-health" element={<AdolescentMentalHealth />} />
        <Route path="/services/telehealth-services" element={<TelehealthServices />} />
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
        <Route path="/conditions/dissociative-disorders" element={<DissociativeDisorders />} />
        <Route path="/conditions/childhood-trauma" element={<ChildhoodTrauma />} />
        <Route path="/conditions/sexual-abuse" element={<SexualAbuse />} />
        <Route path="/conditions/low-self-esteem" element={<LowSelfEsteem />} />
        <Route path="/conditions/life-transitions" element={<LifeTransitions />} />
        <Route path="/conditions/adjustment-disorders" element={<AdjustmentDisorders />} />
        <Route path="/conditions/anger-management" element={<AngerManagement />} />
        <Route path="/conditions/stress-management" element={<StressManagement />} />
        <Route path="/conditions/body-dysmorphic" element={<BodyDysmorphic />} />
        <Route path="/conditions/oppositional-defiant" element={<OppositionalDefiant />} />
        <Route path="/conditions/separation-anxiety" element={<SeparationAnxiety />} />
        <Route path="/conditions/attachment-issues" element={<AttachmentIssues />} />
        <Route path="/conditions/agoraphobia" element={<Agoraphobia />} />
        <Route path="/conditions/womens-mental-health" element={<WomensMentalHealth />} />
        <Route path="/conditions/lgbtqia-mental-health" element={<LGBTQIAMentalHealth />} />
        <Route path="/conditions/schizophrenia" element={<Schizophrenia />} />
      </Routes>
    </>
  )
}

export default App
