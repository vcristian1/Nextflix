import { ChevronLeftIcon } from "@heroicons/react/solid"
import { ChevronRightIcon } from "@heroicons/react/solid"
import { Movie } from "../typings"

interface Props {
    title: string
    movies: Movie[]
}

function Row({title, movies}: Props) {
  return (
    <div>
      <h2>{title}</h2>

      {/* Left and Right Scroll Icons */}
      <div>
        <ChevronLeftIcon />
        <ChevronRightIcon />
      </div>
    </div>
  )
}

export default Row