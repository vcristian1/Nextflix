import { Product } from "@stripe/firestore-stripe-payments"

interface Props {
    products: Product[]
}

function Table({ products }) {
  return (
    <table>
        <tbody className="divide-y divide-[gray]">
            <tr className="tableRow">
                <td className="tableDataTitle">Price</td>
                {products.map((product) => (
                    <td className="tableDataFeature" key={product.id}>
                        ${product.prices[0].unit_amount! / 100}
                    </td>
                ))}
            </tr>
            <tr className="tableRow">
                <td className="tableDataTitle">Quality</td>
                {products.map((product) => (
                    <td className="tableDataFeature" key={product.id}>
                        {product.metadata.videoQuality}
                    </td>
                ))}
            </tr>
            <tr className="tableRow">
                <td className="tableDataTitle">Resolution</td>
                {products.map((product) => (
                    <td className="tableDataFeature" key={product.id}>
                        {product.metadata.resolution}
                    </td>
                ))}
            </tr>
        </tbody>
    </table>
  )
}

export default Table