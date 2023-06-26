"use client"
import React, { useEffect, useState } from 'react';

import Header from '../../../components/Header/header';
import RelatedRecipeCard from '../../../components/Related-recipe-card/Related-recipe-card'
import LoadingSpinner from '../../../components/Loding-spinner/Loding';
import { usePathname, useRouter } from 'next/navigation';
import { API_KEY } from '../../../api_key';

const FoodRecipe = ({params}) => {
  const pathname = usePathname();
  const routers = useRouter();
  const [loading, setLoading] = useState(true);
  const [foodRecipeListData, setFoodRecipeListData] = useState([]);

  const foodName = params.id.replace('%20', ' ');

  useEffect(() => {
      setLoading(true);
      console.log(API_KEY);
      // const serchQuery = params.id.replace(" ", "%20")
      const url = `https://api.spoonacular.com/recipes/search?query=${params.id}&apiKey=${API_KEY}`;
      console.log(url);
      console.log(foodRecipeListData.length===0);

      const res = fetch(
        url, 
        {
          cache: "no-store",
        }
      )
      .then((res) => res.json())
      .then((data) => {
        setFoodRecipeListData(data['results']);
        setLoading(false);
      })
      .catch((error) => {
        throw new Error(error.message);
      })

  }, [])

  const pushToDetailsPage = (id) => {
    routers.push(`${pathname}/${id}`)
  }

  return (
    <div className='bg-white rounded-lg h-full w-full overflow-hidden overflow-y-auto'>
      <Header className='mb-6'>
            <div className='mb-2'>
            <h1 className='text-black text-3xl font-semibold'>
                Your having a {params.id.replace('%20', ' ')} right now enjoy 
            </h1>
            </div>
        </Header>
        <div>
          {
            loading ?
              <div className='mt-10 justify-center items-center'>
                <LoadingSpinner description='Looking for Recipies'/>
              </div>
            : 
            <div className='mt-2 mb-7 px-6'>
                <h1 className='text-black font-semibold'>Related Recipies</h1>
              {
                (foodRecipeListData.length === 0) ?
                  <div class="mt-5 flex items-center justify-center w-100 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    <div class="px-3 py-1 text-lg font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">Sorry No Recipies Found</div>
                  </div> :
                  <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                    {
                      foodRecipeListData.map((recipe) => (
                        <RelatedRecipeCard key={recipe.id} foodName={params.id} {...recipe} />
                      ))
                    }
                  </div>
              }
            </div>
          }
        </div>
    </div>
  )
}

export default FoodRecipe;