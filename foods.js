// document.querySelector(".wrap");

// const getLocation = document.getElementByID("#now_location").value;

// const getLocation = $('#now_location').val();

let locationUrl = location.search.split('=');
let locationValue = locationUrl[1];
let locationName = decodeURI(locationValue);


function setNowLocation() {
    const navTempHtml = `
                <a href="index.html">
                    <div class="now_location_weather">
                        📍${locationName}
                    </div>
                </a>
                    `;
    $('.now_location_weather').append(navTempHtml);
}

let img_url = "http://bageran.cafe24.com/random_lunch/images/";
const foods = [
    {name: "갈비탕", image: img_url + "f001.png"},
    {name: "김밥", image: img_url + "f002.png"},
    {name: "김치볶음밥", image: img_url + "f003.png"},
    {name: "김치찌개", image: img_url + "f004.png"},
    {name: "냉면", image: img_url + "f005.png"},
    {name: "카레", image: img_url + "f006.png"},
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
    {name: "파스타", image: img_url + "f023.png"},
    {name: "스파게티", image: img_url + "f024.png"},
    {name: "햄버거", image: img_url + "f025.png"},
    {name: "돈까스", image: img_url + "f026.png"},
];

// 선택한 음식 이름이 담기는 전역 변수!
let name

// 맨 밑에 food_refresh()를  실행하는거로 대체할 수 있을 것 같아요!
// const food = Math.floor(Math.random() * foods.length);
// const name = foods[food].name;
// const img = foods[food].image;
// const tempHtml = `
//             <div class="content">
//
//                 <div class="food_content">
//                     <h1>
//                         오늘 점심,<br />
//                         <span>${name}</span> 어때요?
//                     </h1>
//                 </div>
//
//                 <div class="fog"></div>
//                 <div>
//                     <img class="food_img" src="${img}">
//                 </div>
//
//             </div>
//             `;
// $('.wrap').append(tempHtml);

function food_select() {
    const new_window = window.open('https://map.naver.com/v5/search/' + locationName + name, '_blank');
    return new_window;
}

function food_refresh() {
    // 글씨 겹치지 않게 비워주기!
    $('.content').empty();

    // 함수 밖에 만들어 놓은
    const food = Math.floor(Math.random() * foods.length);
    name = foods[food].name;
    const img = foods[food].image;
    const tempHtml = `
                <div class="content">

                    <div class="food_content">
                        <h1>
                            오늘 점심,<br />
                            <span> ${name}</span> 어때요?
                        </h1>
                    </div>
                    <div class="fog"></div>
                    <div>
                        <img class="food_img" src="${img}">
                    </div>
                </div>
                `;
    $('.wrap').append(tempHtml);
    onClick();
}

let clicks = 0;
function onClick() {
    clicks += 1;
    if (clicks > 7) {
        location.href = "bye.html";
    }
}


// 처음 시작을 이렇게!

food_refresh();
setNowLocation();