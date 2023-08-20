const { useRouter } = require("next/router")

const ThankYou = () => {
    const router = useRouter()
    console.log("router", router.query)
    return (
        <>
            <h1>Thank you for shopping</h1>
        </>
    )
}
export default ThankYou