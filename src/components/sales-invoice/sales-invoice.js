import React, { Component } from 'react';

class salesInvoice extends Component {
    render() {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Invoice No.</th>
                        <th scope="col">Customer</th>
                        <th scope="col">Solid Items</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">#4743783</th>
                        <td>Bella Hunter</td>
                        <td>5</td>
                        <td>1200 AED</td>
                    </tr>
                    <tr>
                        <th scope="row">#7656458</th>
                        <td>Victoria Hill</td>
                        <td>10</td>
                        <td>1200 AED</td>
                    </tr>
                    <tr>
                        <th scope="row">#4432980</th>
                        <td>Bella Hunter</td>
                        <td>10</td>
                        <td>1200 AED</td>
                    </tr>
                    <tr>
                        <th scope="row">Invoices: 3</th>
                        <td>Customers: 2</td>
                        <td>Sold: 25</td>
                        <td>Total: 3600 AED</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default salesInvoice;