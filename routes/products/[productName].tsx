/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
function ProductPage(props : PageProps){
    return (
        <h1>Product Page the product {props.params.productName}</h1>
    )
}
export default ProductPage;