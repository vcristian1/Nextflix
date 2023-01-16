import { CheckIcon } from '@heroicons/react/outline'


function Table() {
  return (
    <table>
      <tbody className="divide-y divide-[gray]">
        <tr className="tableRow">
          <td className="tableDataTitle">Monthly price</td>
          
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Video quality</td>
          
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Resolution</td>
          
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">
            Watch on your TV, computer, mobile phone and tablet
          </td>
          
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">
            Downloads
          </td>
          
        </tr>
      </tbody>
    </table>
  )
}

export default Table