import CheckIcon from "@heroicons/react/solid/CheckIcon"
import { Product } from "@stripe/firestore-stripe-payments"


interface Props {
    products: Product[]
    selectedPlan: Product
}

function Table({ products, selectedPlan }) {
  return (
    <table>
        <tbody className="divide-y divide-[gray]">
            <tr className="tableRow">
                <td className="tableDataTitle">Monthly Price</td>
                {products.map((product) => (
                    <td className={`tableDataFeature ${selectedPlan?.id === product.id ? "text-[#e50914]" : "text-[gray]"}`} key={product.id}>
                        ${product.prices[0].unit_amount! / 100}
                    </td>
                ))}
            </tr>
            <tr className="tableRow">
                <td className="tableDataTitle">Video Quality</td>
                {products.map((product) => (
                    <td className={`tableDataFeature ${selectedPlan?.id === product.id ? "text-[#e50914]" : "text-[gray]"}`} key={product.id}>
                        {product.metadata.videoQuality}
                    </td>
                ))}
            </tr>
            <tr className="tableRow">
                <td className="tableDataTitle">Resolution</td>
                {products.map((product) => (
                    <td className={`tableDataFeature ${selectedPlan?.id === product.id ? "text-[#e50914]" : "text-[gray]"}`} key={product.id}>
                        {product.metadata.resolution}
                    </td>
                ))}
            </tr>
            <tr className="tableRow">
                <td className="tableDataTitle">Watch on your TV, computer, mobile phone and tablet</td>
                {products.map((product) => (
                    <td className={`tableDataFeature ${selectedPlan?.id === product.id ? "text-[#e50914]" : "text-[gray]"}`} key={product.id}>
                        <CheckIcon className='h-7 w-7'>{product.metadata.portability}</CheckIcon>
                    </td>
                ))}
            </tr>
        </tbody>
    </table>
  )
}

export default Table