import React from 'react';
import TableRow from './TableRow';

const NeutrientsTable = ({neutrientList}) => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Nutrients
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Amount
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Unit
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Precentage Of Daily Need
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        neutrientList.map((neutrient) => (
                            <TableRow key={neutrient.name} neutrient={neutrient}/>
                        ))
                    }
                </tbody>
            </table>
      </div>
    )
}

export default NeutrientsTable;