import React from 'react';
import {MarketData} from "./tools/MarketData";
import {
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
                                    <TableCell>Coin</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Market cap</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell>{row.cmc_rank}</TableCell>
                                        <TableCell align="left">{row.name}</TableCell>
                                        <TableCell>${row.quote.USD.price}</TableCell>
                                        <TableCell>${row.quote.USD.market_cap}</TableCell>
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