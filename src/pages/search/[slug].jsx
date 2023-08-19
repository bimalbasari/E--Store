import ProductCard from "@/components/cards/ProductCard";



const Search = ({ products }) => {
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 m-2">
            {products &&
                products.map(item => (
                    <div key={item.id}>
                        <ProductCard item={item} />
                    </div>
                )
                )}
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const search = context.params.slug;
    let products = [];
    console.log(search)
    try {
        const responce = await fetch(
            `https://dummyjson.com/products/search?q=${search}`
        );

        const result = await responce.json();

        products = result.products;
    } catch (err) {
        console.log(err);
        return { notFound: true };
    }
    return {
        props: {
            products,
        },
    };
};
export default Search
