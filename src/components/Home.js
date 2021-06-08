import React from 'react';
import {MarketData} from "./tools/MarketData";
import {
    Link,
    makeStyles, Paper,
    Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow,
} from "@material-ui/core";

export default function Home() {
    const [isLoading, data] = MarketData([]);

    const useStyles = makeStyles({
            content: {
                top: "150px",
                position: "absolute",
                left: "10%",
                right: "10%"
            },
            table: {
                minWidth: 650,
            },
            profile_link: {
                textDecoration: "none",
                color: "black",
            }
        }
    )

    const classes = useStyles();

    if (isLoading) {
        return (
            <React.Fragment>
                Loading
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <div className={classes.content}>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell>Icon</TableCell>
                                    <TableCell>Coin</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Market cap</TableCell>
                                    <TableCell>1h</TableCell>
                                    <TableCell>24h</TableCell>
                                    <TableCell>7d</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell>{row.cmc_rank}</TableCell>
                                        <TableCell> <img
                                            src={"https://s2.coinmarketcap.com/static/img/coins/64x64/" + row.id + ".png"}
                                            alt="icon"/></TableCell>
                                        <TableCell align="left">
                                            <Link className={"profile_link"}
                                              href={"coins/" + row.id}>{row.name} {" - "} {row.symbol}</Link>
                                        </TableCell>
                                        <TableCell>${row.quote.USD.price}</TableCell>
                                        <TableCell>${row.quote.USD.market_cap}</TableCell>
                                        <TableCell>{row.quote.USD.percent_change_1h}%</TableCell>
                                        <TableCell>{row.quote.USD.percent_change_24h}%</TableCell>
                                        <TableCell>{row.quote.USD.percent_change_7d}%</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </React.Fragment>
        )
    }
}