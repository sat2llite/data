import products from "../../db.json" assert { type: "json" };
// assert { type: "json" }  - 외부파일이 json이라고 확실하게 명시해주어야 함
// products라고 import할 때 json의 이름을 새로 지어줌

console.log(products);

const button = document.querySelector("button");

// li를 만들어서 ul에 넣어주는 함수
// item 대신 분해해서 일부만 받아올 수 있음 ({ id, name })
const createItem = (item) => {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  const img = document.createElement("img");
  const p = document.createElement("p");
  const span = document.createElement("span");

  // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
  // 각국에 맞는 숫자 서식을 지원하는 객체의 생성자
  const price = new Intl.NumberFormat("ko-KR", {
    style: "currency", // 통화단위
    currency: "KRW",  // 원화
  }).format(item.price);  // 포맷을 바꿀 데이터
  // → ₩123,457

  img.setAttribute("src", item.img);
  li.id = item.id;
  p.className = "name"; // css 적용(추가)
  p.innerHTML = item.name;
  span.className = "price";
  span.innerText = price;

  li.append(img, p, span);
  ul.append(li);

  console.log(img);
};

// 화살표 함수 형식 function 정의
// 만든 li를 반복되게
const importData = () => {
  products.data.map((item) => { // = forEach
    // 버튼 클릭할 때마다 추가되는것을 방지 (id값이 이미 있으면 작동❌)
    if (!document.getElementById(item.id)) { 
      createItem(item);
    }
  });
};

button.addEventListener("click", importData);
