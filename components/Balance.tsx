import getUserBalance from "@/action/getUserBalance";
import { addCommas } from "@/lib/utils";

const Balance = async() => {
    const { balance } = await getUserBalance();

    return ( 
        <>
        <h4>Your Balance</h4>
        <h1> ${ addCommas(Number(balance?.toFixed(2) ?? 0)) } </h1> {/* left of ?? null then use on the right */}
        </> 
    );
}
 
export default Balance;