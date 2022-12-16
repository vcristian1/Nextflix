import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import requests from '../utils/requests'
import Row from '../components/Row'
import { Movie } from '../typings'
interface Props {
  netflixOriginals: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[]
}

const Home = ({ 
  netflixOriginals,
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  romanceMovies,
  topRated,
  trendingNow,
}: Props) => {
  return (
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>     
      <main className='relative pl-4 pb-24 lg:space-y-24 lg:pl-16'>
        {/* Extremely important to pass in netflixOriginals below or an err will occur */}
        <Banner netflixOriginals={netflixOriginals}/>
          <section className='md:space-y-24'>
          <Row title="Trending Now" films={trendingNow} />
          <Row title="Top Rated" films={topRated} />
          <Row title="Action Thrillers" films={actionMovies} />
          {/* My List */}
          <Row title="Comedies" films={comedyMovies} />
          <Row title="Scary Movies" films={horrorMovies} />
          <Row title="Romance Movies" films={romanceMovies} />
          <Row title="Documentaries" films={documentaries} />
        </section>
      </main>
      {/* Modal */}
    </div>
  )
}

export default Home

// Function for server side rendering
export const getServerSideProps = async () => {

  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
    // We use promise.all to resolve all of these fetch requests together
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ])

  return {
    props: {
      //Use .results to access the movies
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  }
}