// const foodContent = document.querySelector(".food_content");
const content = document.querySelector(".wrap");

let img_url = "http://bageran.cafe24.com/random_lunch/images/";
const foods = [
    {name: "갈비탕", image: img_url + "f001.png"},
    {name: "김밥", image: img_url + "f002.png"},
    {name: "김치볶음밥", image: img_url + "f003.png"},
    {name: "김치찌개", image: img_url + "f004.png"},
    {name: "냉면", image: img_url + "f005.png"},
    {name: "된장찌개", image: img_url + "f006.png"},
    {name: "떡볶이", image: img_url + "f007.png"},
    {name: "라면", image: img_url + "f008.png"},
    {name: "부대찌개", image: img_url + "f009.png"},
    {name: "비빔국수", image: img_url + "f010.png"},
    {name: "비빔밥", image: img_url + "f011.png"},
    {name: "뼈해장국", image: img_url + "f012.png"},
    {name: "삼계탕", image: img_url + "f013.png"},
    {name: "샌드위치", image: img_url + "f014.png"},
    {name: "샐러드", image: img_url + "f015.png"},
    {name: "순대국", image: img_url + "f016.png"},
    {name: "쌀국수", image: img_url + "f017.png"},
    {name: "우동", image: img_url + "f018.png"},
    {name: "짜장면", image: img_url + "f019.png"},
    {name: "짬뽕", image: img_url + "f020.png"},
    {name: "초밥", image: img_url + "f021.png"},
    {name: "콩나물국밥", image: img_url + "f022.png"},
    {name: "크림파스타", image: img_url + "f023.png"},
    {name: "스파게티", image: img_url + "f024.png"},
    {name: "햄버거", image: img_url + "f025.png"},
    {name: "돈까스", image: img_url + "f026.png"},
];

const food = Math.floor(Math.random() * foods.length);
const name = foods[food].name;
const img = foods[food].image;
const tempHtml = `
            <div class="content">

                <div class="food_content">
                    <h1>
                        오늘 점심,<br />
                        <span>${name}</span> 어때요?
                    </h1>
                </div>

                <div class="fog"></div>
                <div>
                    <img class="food_img" src="${img}">
                </div>

            </div>
            `;
$('.wrap').append(tempHtml);

function food_select() {
    const new_window = window.open('https://map.naver.com/v5/search/장위동%20' + name, '_blank');
    return new_window;
}

function food_refresh() {
    const food = Math.floor(Math.random() * foods.length);
    const name = foods[food].name;
    const img = foods[food].image;
    const tempHtml = `
                <div class="content">

                    <div class="food_content">
                        <h1>
                            오늘 점심,<br />
                            그럼 <span> ${name}</span> 어때요?
                        </h1>
                    </div>
                    <div class="fog"></div>
                    <div>
                        <img class="food_img" src="${img}">
                    </div>

                </div>
                `;
    $('.wrap').append(tempHtml);
}