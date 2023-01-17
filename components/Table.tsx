import { CheckIcon } from '@heroicons/react/outline'


function Table() {
  return (
    <table>
      <tbody className="divide-y divide-[gray]">
        <tr className="tableRow">
          <td className="tableDataTitle">Monthly price</td>
          <td className='tableDataFeature'>$9.99</td>
          <td className='tableDataFeature'>$15.49</td>
          <td className='tableDataFeature'>$19.99</td>
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Video quality</td>
          <td className='tableDataFeature'>Good</td>
          <td className='tableDataFeature'>Better</td>
          <td className='tableDataFeature'>Best</td>
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Resolution</td>
          <td className='tableDataFeature'>480p</td>
          <td className='tableDataFeature'>1080p</td>
          <td className='tableDataFeature'>4k</td>
          
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">
            Watch on your TV, computer, mobile phone and tablet
          </td>
          <td className='tableDataFeature'><CheckIcon className='h-7 w-7 text-[#E50914]'></CheckIcon></td>
          <td className='tableDataFeature'><CheckIcon className='h-7 w-7 text-[#E50914]'></CheckIcon></td>
          <td className='tableDataFeature'><CheckIcon className='h-7 w-7 text-[#E50914]'></CheckIcon></td>
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">
            Downloads
          </td>
          <td className='tableDataFeature'></td>
          <td className='tableDataFeature'><CheckIcon className='h-7 w-7 text-[#E50914]'></CheckIcon></td>
          <td className='tableDataFeature'><CheckIcon className='h-7 w-7 text-[#E50914]'></CheckIcon></td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table