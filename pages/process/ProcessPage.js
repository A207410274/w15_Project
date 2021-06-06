import styles from '../../styles/Meal.module.css'
export default function ProcessPage() {
    return (
        <div>
            <div className={styles.container}>
                <br/><br/><br/>
                <h1>實作過程解說:</h1>
                <h3>1. 搜尋某關鍵字(搜尋字請自訂)，看到的 meal 畫面，找出來的meal個數，要大於5筆以上。先將此轉成靜態網頁，要有meals.html 跟 meal.css，當成我們要實作的 theme。

<br/>
2.在NextJS 中產生一個頁面 meals.js，放在 /pages/project 目錄下。

<br/>3.擷取 meals.html code放入 meals.js 中，meal.css code 放入 /styles/meal.module.css 中，依照上課所教方式修改，要在Chrome中執行 localhost:3000gㄧㄤ/project/meals 看到跟靜態網頁一樣的結果。

<br/>4.將靜態網頁中 meals 的資料，放入 meal-data.js中，並透過讀取 meal-data.js 中 meals陣列的資料，套入 meal.js 中，如老師講義notes中所述的方式

<br/>
5.將每筆meal 資料放入一個 functional component中，並用 meals.map() 方式來產生所有的meals，如老師講義notes中所述的方式

<br/>6.可以顯示5筆資料後，請在 meal-data.js 中再加入2筆，可以正常呈現。</h3>
            </div>
        </div>
    )
}
