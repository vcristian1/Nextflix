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
        <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
            <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
                <Image
                alt="movie-cover"
                layout="fill"
                src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
                objectFit="cover"
                />
            </div>

            <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
                {movie?.overview}
            </p>
        </div>
    )
}

export default Banner