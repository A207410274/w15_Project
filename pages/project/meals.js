import styles from '../../styles/Meal.module.css'
import meals from '../../public/meal_data'

export default function MealsPage() {
    console.log("meals",meals);
    return (
    <div className={styles.container}>
    <br/>
    <br/>
    <br/>
      <h1>Meal Finder</h1>
      <div className={styles.flex}>
        <form className={styles.flex} id="submit">
          <input
            type="text"
            id="search"
            placeholder="Search for meals or keywords"
          />
          <button className={styles.search_btn} type="submit">
          </button>
        </form>
        <button className={styles.random_btn} id="random">
        </button>
      </div>

      <div id="result-heading"></div>
      <div id="meals" className={styles.meals}></div>
      <div id="meals" className={styles.meals}>
        <section >
            <div id="meals" className={styles.meals}>
            {meals.map((meal) => (
                <div className={styles.meal}>
                    <img
                    src={meal.image}
                    alt={meal.title}
                    />
                    <div className={styles.meal_info} data-mealid="52955">
                    <h3>{meal.title}</h3>
                    </div>
                </div>
            ))}
            </div>
            
        </section>
        

        
      </div>
      <div id="single-meal"></div>
    </div>
    )
}