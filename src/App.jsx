import Header from './components/Header'
import Hero from './components/Hero'
import Announcements from './components/Announcements'
import Discover from './components/Discover'
import Services from './components/Services'
import ResearchResources from './components/ResearchResources'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Announcements />
      <Discover />
      <Services />
      <ResearchResources />
      <Footer />
    </div>
  )
}

export default App