import React from 'react';

import CaloricBreakdownTableRow from './CaloricBreakdown-table-row';

const CaloricBreakdownTable = ({caloricbreakdowonObject}) => {

    const convertObjectToList = (obj) => {
        const listOfObjects = [];
        for (const key in obj) {
            const newObject = {};
            newObject[key.replace('percent', '')] = obj[key];
            listOfObjects.push(newObject);
        }
        return listOfObjects;
    };

    const caloriList = convertObjectToList(caloricbreakdowonObject);

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Calories
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Percentage
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        caloriList.map((breakdown) => (
                            <CaloricBreakdownTableRow breakdown={breakdown}/>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CaloricBreakdownTable