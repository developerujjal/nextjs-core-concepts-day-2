import React from 'react';
import SearchBar from './components/SearchBar';

const MealsPage = async ({ searchParams }) => {


    const getSearchParam = await searchParams;
    console.log(getSearchParam.search);

    const getMeals = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${getSearchParam.search}`);
            const data = await res.json();
            return data.meals;

        } catch (error) {
            console.log(error)
        }

    }

    const allMeals = await getMeals()

    console.log(allMeals)

    return (
        <div>
            <h1>This is Meals Page</h1>
            <SearchBar />

            <div className='grid grid-cols-4 gap-10 mt-5'>
                {allMeals === null ? <>
                    <h2>No Data Found</h2>
                </> :
                    allMeals?.map(meal => (
                        <div key={meal?.idMeal}>
                            <h2 className='bg-yellow-300'>{meal?.strMeal}</h2>
                            <p>{meal?.strInstructions}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MealsPage;