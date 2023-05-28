import LatestArticlesSection from '../components/LatestArticlesSection'
import ArticlesSection from '../components/ArticlesSection'
import HeroBanner from '../components/HeroBanner'

const Home = () => {
  return (
    <div className="px-2">
    <LatestArticlesSection />
    <ArticlesSection />
    <HeroBanner />
  </div>
  )
}

export default Home