// const loadMeals = () =>{
//     const url = `www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`;
//     fetch(url)
//     .then(res => res.json())
//     .then(data => console.log(data.meals))
// }

// loadMeals();





const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
      .then(res => res.json())
      .then(data => displayMeals(data.meals))
  
  }
  
  const displayMeals = meals => {
    // step-1: container element
    const mealContainer = document.getElementById('meals-container');
    mealContainer.innerHTML = ' ';
    meals.forEach(meal => {
      // console.log(meal) 
      // step-2: create child for each element
      const mealDiv = document.createElement('div');
      mealDiv.classList.add('col');
      // Step-3:set concept of the chlid
      mealDiv.innerHTML = `
                <div class="card mb-3" >
                <div class="row">
                 <div class="col">
                      <img src="${meal.strMealThumb}" class="img-fluid rounded-start" alt="">
                      </div>
                      <div class="col">
                      <div class="card-body">
                        <h5 class="card-title fw-bold">${meal.strMeal}</h5>
                        <p class="card-text fw-semibold">There are many variations of passages of available, but the majority have suffered</p>
                          <button onclick="loadMealDetail2(${meal.idMeal})" type="button" class="btn btn-warning mt-5" data-bs-toggle="modal" data-bs-target="#mealDetails">
                          Details
                        </button>
                        </div>
                        </div>
                        </div>
                      </div>
          `
      // step-4: appendChild
      mealContainer.appendChild(mealDiv);
    })
  }
  
  const searchMeal = () => {
    const searchText = document.getElementById('btn-search').value;
    console.log(searchText)
    loadMeals(searchText)
  }
  
  const loadMealDetail = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
      .then(res => res.json())
      .then(data => displayMealsDetails(data.meals[0]));
  }
  
  // async Await
  const loadMealDetail2 = async (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    try {
      const res = await fetch(url)
      const data = await res.json();
      displayMealsDetails(data.meals[0])
    } catch (error) {
      console.log(error)
    }
  
  }
  
  const displayMealsDetails = meal => {
    document.getElementById('mealDetailsLabel').innerText = meal.strMeal;
    const mealDetails = document.getElementById('mealDetailsBody');
    mealDetails.innerHTML = `
      <img class="img-fluid" src="${meal.strMealThumb}">
      <p class="card-text">${meal.strInstructions}</p>
      `
  }
  
  
  loadMeals('chi');