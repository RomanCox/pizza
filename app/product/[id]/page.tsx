interface ProductPageProps {
    params: {
        id: string;
    }
}

const ProductPage = ({params: {id}}: ProductPageProps) => {
    return (
        <>
            product {id}
        </>
    )
}

export default ProductPage;