let data = [
    {
      "id": 0,
      "name": "肥宅心碎賞櫻3日",
      "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
      "area": "高雄",
      "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
      "group": 87,
      "price": 1400,
      "rate": 10
    },
    {
      "id": 1,
      "name": "貓空纜車雙程票",
      "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      "area": "台北",
      "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
      "group": 99,
      "price": 240,
      "rate": 2
    },
    {
      "id": 2,
      "name": "台中谷關溫泉會1日",
      "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      "area": "台中",
      "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
      "group": 20,
      "price": 1765,
      "rate": 7
    }
];

const ticketCardArea = document.querySelector('.ticketCard-area');
const searchResultText = document.querySelector('#searchResult-text');

// 初始化
function init(data){
  let cardContent = '';
  data.forEach(function(item){
    let cardTemplate = `<li class="ticketCard">
          <div class="ticketCard-img">
            <a href="#">
              <img src="${item.imgUrl}" alt="${item.name}">
            </a>
            <div class="ticketCard-region">${item.area}</div>
            <div class="ticketCard-rank">${item.rate}</div>
          </div>
          <div class="ticketCard-content">
            <div>
              <h3>
                <a href="#" class="ticketCard-name">${item.name}</a>
              </h3>
              <p class="ticketCard-description">
                ${item.description}
              </p>
            </div>
            <div class="ticketCard-info">
              <p class="ticketCard-num">
                <span><i class="fas fa-exclamation-circle"></i></span>
                剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
              </p>
              <p class="ticketCard-price">
                TWD <span id="ticketCard-price">$${item.price}</span>
              </p>
            </div>
          </div>
        </li>`;
    cardContent += cardTemplate;
  })
  ticketCardArea.innerHTML = cardContent;
  searchResultText.textContent = `本次搜尋共 ${data.length} 筆資料`;
}
init(data);

// 篩選功能 & 查無關鍵字顯示圖片
const filter = document.querySelector('.regionSearch');
const cantFindArea = document.querySelector('.cantFind-area');
filter.addEventListener('change',function(){
  let filterResult = [];
  data.forEach(function(item){
    if(filter.value === item.area){
      filterResult.push(item);
    }else if(filter.value === '全部地區'){
      filterResult.push(item);
    }
  })
  if(filterResult.length === 0){
    cantFindArea.style.display = 'block';
  }else{
    cantFindArea.style.display = 'none';
  }
  init(filterResult);
})


// 新增卡片
const addCardBtn = document.querySelector('.addTicket-btn');
const addTicketForm = document.querySelector('.addTicket-form');
const ticketName = document.querySelector('#ticketName');
const ticketImgUrl = document.querySelector('#ticketImgUrl');
const ticketRegion = document.querySelector('#ticketRegion');
const ticketPrice = document.querySelector('#ticketPrice');
const ticketNum = document.querySelector('#ticketNum');
const ticketRate = document.querySelector('#ticketRate');
const ticketDescription = document.querySelector('#ticketDescription');

addCardBtn.addEventListener('click',function(){
  let addData = {};
  addData.id = Number(data.length);
  addData.name = ticketName.value.trim();
  addData.imgUrl = ticketImgUrl.value.trim();
  addData.area = ticketRegion.value;
  addData.description = ticketDescription.value.trim();
  addData.group = Number(ticketNum.value.trim());
  addData.price = Number(ticketPrice.value.trim());
  addData.rate = Number(ticketRate.value.trim());
  data.push(addData);
  // console.log(data);
  init(data);
  addTicketForm.reset();
})