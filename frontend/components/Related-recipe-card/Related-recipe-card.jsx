import React from 'react'
import Link from 'next/link';

const RelatedRecipeCard = (recipe, foodName) => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{recipe.title}</h5>
                    </a>
                    <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                        <span className="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
                        Serves: {recipe.servings ? recipe.servings : 'Data Not Available'}
                    </span>
                    <p className="mt-2 mb-3 font-normal text-gray-700 dark:text-gray-400">{`${recipe.title} takes total ${recipe.readyInMinutes} minutes to prepare`}</p>
                    <Link href={`/pizza/${recipe.id}`} as={`${foodName}/${recipe.id}`}>
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </Link>
            </div>
        </div>
    )
}

export default RelatedRecipeCard;