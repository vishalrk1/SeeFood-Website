import React from 'react'

const TableRow = ({neutrient}) => {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {neutrient.name}
            </th>
            <td className="px-6 py-4">
                {neutrient.amount}
            </td>
            <td className="px-6 py-4">
                {neutrient.unit}
            </td>
            <td className="px-6 py-4">
                {neutrient.percentOfDailyNeeds} %
            </td>
        </tr>
    )
}

export default TableRow