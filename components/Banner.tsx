import Image from "next/image"
import { Movie } from '../typings';
import { useEffect, useState} from 'react'
import { baseUrl } from '../constants/movie'

interface Props {
    netflixOriginals: Movie[]
}

function Banner({ netflixOriginals }: Props) {
    const [movie, setMovie] = useState<Movie | null>(null)

    useEffect(() => {
        // Generates a random index so a new movie populates the banner background.
        setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
    },[netflixOriginals])

    console.log(movie);

    return (
        <div>
            <div className="absolute top-0 left-0 h-[95vh] w-screen">
                {/* //Next.js component */}
                <Image 
                alt="movie cover" 
                src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
                layout="fill"
                />
            </div>
        </div>
    )
}

export default Banner