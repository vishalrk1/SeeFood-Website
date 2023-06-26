"use client"
import React, { useEffect, useState } from 'react';

import Header from '../../../../components/Header/header';
import Button from '../../../../components/Button/Button';
import HeroImage from '@/components/Hero/hero-image';
import LoadingScreen from '../../../../components/loading-screen/Loading-Screen';
import GreenIndicator from '../../../../components/Indicator/Green-Indicator';
import RedIndicator from '../../../../components/Indicator/Red-Indicator';
import NeutrientsTable from '../../../../components/Neutrients-table/NeutrientsTable';
import CaloricBreakdownTable from '../../../../components/Caloric-Breakdown-Table/CaloricBreakdownTable';
import { API_KEY } from '../../../../api_key';

import { usePathname, useRouter } from 'next/navigation';

const RecipeDetails = ({params}) => {
    const routers = useRouter();
    const [loading, setLoading] = useState(true);
    const [recipeData, serRecipeData] = useState(null);
    const [foodSummary, setFoodSummary] = useState('');


    useEffect(() => {
        setLoading(true);
        const recipe_ID = params['recipe-id'];
        const url = `https://api.spoonacular.com/recipes/${recipe_ID}/information?apiKey=${API_KEY}&includeNutrition=true`;

        fetch( url, 
            {
            cache: "no-store",
            }
        )
        .then((res) => res.json())
        .then((data) => {
            serRecipeData(data);
            setFoodSummary(convertHTMLSummaryToSimpleString(data.summary));
            setLoading(false);
        })
        .catch((error) => {
            throw new Error(error.message);
        })

    }, [])

    const convertHTMLSummaryToSimpleString = (htmlSummary) => {
        const parser = new DOMParser();

        const doc = parser.parseFromString(htmlSummary, "text/html");
        const summaryText = doc.body.innerText;

        return summaryText;
    }

    return (
        <div className='bg-white rounded-lg h-full w-full overflow-hidden overflow-y-auto'>
            <Header className='mb-6' onClick='recipeDetailPage'> </Header>
            {
                loading ? <div className='mt-2 mb-7 px-6'> <LoadingScreen /> </div> : 
                <div className='mt-2 mb-7 px-6'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 justify-between items-center gap-10'>
                        <div className='m-6 items-center'>
                            <HeroImage imgPath={recipeData.image ? recipeData.image : `/images/NoImageHolder.png`} />
                        </div>
                        <div className='hidden md:flex flex-1 flex-col items-center h-max relative mt-10 mb-7 px-6'>
                            <h1 className='text-4xl font-bold'>
                                {recipeData.title}
                            </h1>
                            <p className='font-30px mt-3'>
                                {foodSummary}
                            </p>
                            <Button className='text-white font-medium w-[100px] mt-6' href={recipeData.sourceUrl} target='_blank'>
                                Source
                            </Button>
                        </div>
                    </div>
                    <div className='mt-2 mb-7 px-6 flex flex-row'>
                        {recipeData.vegetarian ? <GreenIndicator text='Vegetarian' /> : <RedIndicator text='Not Vegetarian'/>} 
                        {recipeData.glutenFree ? <GreenIndicator text='Gluten Free' /> : null} 
                        {recipeData.vegan ? <GreenIndicator text='Vegan' /> : <RedIndicator text='Not Vegan'/>} 
                        <GreenIndicator text={`${recipeData.servings} Servings`}/>
                    </div>
                    <div className='mt-4 mb px-6'>
                        <div className='mt-2 mb-5 flex flex-col'>  
                            <h1 className='text-2xl font-semibold mb-4'>Caloric Breakdown</h1>
                            <CaloricBreakdownTable caloricbreakdowonObject={recipeData.nutrition.caloricBreakdown}/> 
                        </div>
                        <div className='mt-5 mb-5 flex flex-col'> 
                            <h1 className='text-2xl font-semibold mb-4'>All Nutrients</h1>
                            <NeutrientsTable neutrientList={recipeData.nutrition.nutrients}/>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default RecipeDetails