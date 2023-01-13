import MuiModal from "@mui/material/Modal"
import { modalState, movieState } from "../atoms/modalAtom"
import { useRecoilState } from "recoil"
import { PlusIcon, ThumbUpIcon, VolumeOffIcon, VolumeUpIcon, XIcon } from "@heroicons/react/solid"
import { useEffect, useState } from "react"
import { Movie } from "../typings"
import { Element,Genre } from "../typings"
import ReactPlayer from "react-player"
import { FaPlay } from "react-icons/fa"

function Modal() {
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [movie, setMovie] = useRecoilState(movieState)
  const [trailer, setTrailer] = useState("")
  const [genres, setGenres] = useState<Genre[]>()
//Switch to true if you happen to demo and post the video in case of copyright infringement
  const [muted, setMuted] = useState(false)

  useEffect(() => {
    if (!movie) return

    async function fetchMovie() {
        const data = await fetch(`https://api.themoviedb.org/3/${
            movie?.media_type === 'tv' ? 'tv' : 'movie'
          }/${movie?.id}?api_key=${
            process.env.NEXT_PUBLIC_API_KEY
          }&language=en-US&append_to_response=videos`
          ).then((response) => response.json())
          .catch((err) => console.log(err.message))
        
          if (data?.videos) {
            const index = data.videos.results.findIndex((element: Element) => element.type 
            === "Trailer")
            // key in the movie data allows us to use the youtube player
            setTrailer(data.videos?.results[index]?.key)
          }
          if (data?.genres) {
            setGenres(data.genres)
          }
    }
    fetchMovie()
  },[movie])

  console.log(trailer)

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <MuiModal open={showModal} onClose={handleClose} className="fixex !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl 
    overflow-hidden overflow-y-scroll rounded-md scrollbar-hide">
        <>
            <button onClick={handleClose}
            className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]">
                <XIcon className="h-6 w-6" />
            </button>
            {/* fetches real time videos */}
            {/* Whenever you click on the modal, you have a react player which plays automatically with the playing prop with a url  */}
            {/* and the trailer variable which stores the trailer from the data being fetched from fetchMovie */}
            <div className="relative pt-[56.25%]">
                <ReactPlayer
                url={`https://www.youtube.com/watch?v=${trailer}`}
                width="100%"
                height="100%"
                style={{ position: 'absolute', top: '0', left: '0' }}
                playing
                muted={muted}
                />

                <div className="absolute bottom-10 flex w-full items-center justify-between px-10">
                    <div className="flex space-x-2">
                        <button className="flex items-center gap-x-2 rounded bg-white px-8 text-xl font-bold text-black transition hover:bg-[#e6e6e6]">
                        <FaPlay className="h-7 w-7 text-black"/>Play
                        </button>

                        <button className="modalButton">
                            <PlusIcon className="h-7 w-7"/>
                        </button>

                        <button className="modalButton">
                            <ThumbUpIcon className="h-7 w-7"/>
                        </button>
                    </div>
                    <button onClick={() => setMuted(!muted)}>
                        {muted ? (
                            <VolumeOffIcon className="h-6 w-6"/> 
                            ): ( 
                            <VolumeUpIcon className="h-6 w-6"/>
                            )}
                    </button>
                </div>
            </div>
            {/* Description, Ratings, and Date section of the modal*/}
            <div>
                <div>
                    <div className="flex items-center space-x-2 text-sm">
                        <p className="font-semibold text-green-400">{movie!.vote_average * 10}% Match</p>
                        <p className="font-light">{movie?.release_date || movie?.first_air_date}</p>
                        <div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs">
                            HD
                        </div>
                    </div>
                    <div>
                        <p className="w-5/6">{movie?.overview}</p>
                        <div>
                            <div>
                                <span>Genres: </span>
                                {genres?.map((genre) => genre.name).join(', ')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    </MuiModal>
  )
}

export default Modal