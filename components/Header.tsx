import { SearchIcon } from '@heroicons/react/solid'

function Header() {
  return (
    <header>
        <div className="flex items-center space-x-5 md:space-x-10 lg:space-x-14">
            <img
            src="https://rb.gy/ulxxee"
            width={100}
            height={100}
            className="cursor-pointer object-contain"
            />

            <ul className="hidden space-x-4 md:flex">
                <li className="headerLink">Home</li>
                <li className="headerLink">TV Shows</li>
                <li className="headerLink">Movies</li>
                <li className="headerLink">New & Popular</li>
                <li className="headerLink">My List</li>
            </ul>
        </div>

        <div>
            <SearchIcon className='hidden sm:inline'/>
        </div>
    </header>
  )
}

export default Header