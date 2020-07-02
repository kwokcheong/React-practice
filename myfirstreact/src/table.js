import React , { Component } from 'react'

class Table extends Component{
    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Job</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Charlie</td>
                        <td>Janitor</td>
                    </tr>
                    <tr>
                        <td>Charlie</td>
                        <td>Janitor</td>
                    </tr>
                    <tr>
                        <td>Charlie</td>
                        <td>Janitor</td>
                    </tr>
                    <tr>
                        <td>Charlie</td>
                        <td>Janitor</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Table;