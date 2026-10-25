import { createFileRoute, notFound } from '@tanstack/react-router'
import products from '../../data/products'
import { Storefront } from '../../components/Storefront'
export const Route = createFileRoute('/products/$productId')({
 loader: ({params}) => {const product=products.find(p=>p.id===Number(params.productId));if(!product)throw notFound();return product},
 component: ProductPage,
 notFoundComponent: () => <main className="empty"><h1>That piece isn’t here.</h1><a href="/">Explore the collection →</a></main>,
})
function ProductPage(){const product=Route.useLoaderData();return <Storefront initialProduct={product}/>}
