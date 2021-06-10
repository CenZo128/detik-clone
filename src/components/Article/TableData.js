import React, { useState } from 'react'

export default function TableData() {

    const [stats, setStats] = useState([
        {
            status: "Positif",
            total: 123456789,
            world_total: 12345
        },
        {
            status: "Negatif",
            total: 123456789,
            world_total: 12345
        },
        {
            status: "Sembuh",
            total: 123456789,
            world_total: 12345
        }
    ])
    return (
        <>
            <h3 className="text-blue mb-3">Perkembangan Populer</h3>
            <table className="table table-bordered">
                <thead>
                    <tr className="bg-gradient text-white">
                        <th>Status</th>
                        <th>Indonesia</th>
                        <th>Worldwide</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        stats.map(stat => {
                            const { status, total, world_total } = stat;
                            let kelas;
                            switch (status) {
                                case "Positif":
                                    kelas = "text-warning"
                                    break;
                                case "Negatif":
                                    kelas = "text-danger"
                                    break;
                                case "Sembuh":
                                    kelas = "text-success"
                                    break;
                            }
                            return (
                                <tr className={kelas}>
                                    <td><strong>{status}</strong></td>
                                    <td><p>{total}</p></td>
                                    <td><p>{world_total}</p></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
