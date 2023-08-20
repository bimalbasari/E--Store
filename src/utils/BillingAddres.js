import Cookies from "js-cookie";
export const getBillAddress = () => {
    const address = Cookies.get('billAddress');
    return address ? JSON.parse(address) : {}
}

export const setBillAddress = (billAddress) => {
    Cookies.set("billAddress", JSON.stringify(billAddress));
}
