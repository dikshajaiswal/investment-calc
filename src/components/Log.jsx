import { formatter } from "../util/investment";

export default function Log({ netReturns }) {
    console.log("logging here");
    console.log(netReturns);
    return (
        <div>
            <ol id="mylog">
                Year -- Interest -- YearEndValue -- AnnualInvestment
            </ol>
            <ol id="log">
                {netReturns.map((curReturn) => (
                    <li key={`${curReturn.year}`}>
                        {curReturn.year}   {formatter.format(curReturn.interest)}    {formatter.format(curReturn.valueEndOfYear)}    {formatter.format(curReturn.annualInvestment)}
                    </li>
                ))}
            </ol>
        </div>
    );
}