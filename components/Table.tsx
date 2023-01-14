import { Product } from "@stripe/firestore-stripe-payments"

interface Props {
    products: Product[]
}

function Table({ products }) {
  return (
    <table>
        <tbody>
            <tr>
                <td>Monthly price</td>
                {products.map((product) => (
                    <td className="tableDataFeature" key={product.id}>
                        ${product.prices[0].unit_amount! / 100}
                    </td>
                ))}
            </tr>
        </tbody>
    </table>
  )
}

export default Table