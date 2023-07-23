import Link from "next/link";

const ProductCard = () => {
    return (

        <div className="card" style={{ width: '16rem' }}>
            <img src="/download.jpg" className="card-img-top  " width={"80%"} height={"80%"} alt="..." />
            <div className=" card-body ">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">example on the card title and make up the bulk of the card's content.</p>
                <div className="d-flex justify-content-end">
                    <Link href="#" className="btn btn-primary me-2 h-25">Buy</Link>
                    <Link href="#" className="btn btn-warning ms-2 h-25">Cart</Link></div>
            </div>
        </div>
    )
}

export default ProductCard;