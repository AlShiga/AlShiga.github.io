
$(document).ready(function () {
  let filter = {
    "area": [0.63, 0.90, 1.13, 1.56, 2.56, 2.88],
    "options": ['Пустой номер', 'Лежак', 'Когтеточка', 'Игровой комплекс', 'Домик']
  }
  let room = [
    {
      "productId": "0001",
      "img": "cat1.jpg",
      "title": "Эконом",
      "size": "90х70х180",
      "area": "0.63",
      "cost": "100",
      "options": [0, 0, 0, 0]
    },
    {
      "productId": "0002",
      "img": "cat2.jpg",
      "title": "Эконом Плюс",
      "size": "90х100х180",
      "area": "0.90",
      "cost": "200",
      "options": [1, 1, 0, 0]
    },
    {
      "productId": "0003",
      "img": "cat3.jpg",
      "title": "Комфорт",
      "size": "100х125х180",
      "area": "1.13",
      "cost": "250",
      "options": [1, 1, 1, 0]
    },
    {
      "productId": "0004",
      "img": "cat4.jpg",
      "title": "Сьют",
      "size": "125х125х180",
      "area": "1.56",
      "cost": "350",
      "options": [1, 1, 1, 0]
    },
    {
      "productId": "0005",
      "img": "cat5.jpg",
      "title": "Люкс",
      "size": "160х160х180",
      "area": "2.56",
      "cost": "500",
      "options": [1, 1, 1, 1]
    },
    {
      "productId": "0006",
      "img": "cat6.jpg",
      "title": "Супер-Люкс",
      "size": "180х160х180 ",
      "area": "2.88",
      "cost": "600",
      "options": [1, 1, 1, 1]
    },
  ]
  let roomRender = [];
  let sortOptions = ''
  

  function render(arrProd) {
    let products = "";
    for (let key in arrProd) {
      let prodOptions = "";
      for (let x in arrProd[key].options) {
        if (arrProd[key].options[x] == 1) {
          prodOptions += `<img src="/img/opt${x}.svg" alt="">`
        }
        if (prodOptions == '') {
          prodOptions += `<img src="/img/optNone.svg" alt="">`
        }
      }
      products += `
      <div class="product">
        <img src="/img/${arrProd[key].img}" alt="" class="product__img">
        <div class="product__body">
          <h3 class="product__title">${arrProd[key].title}</h3>
          <p class="product__text">Размеры (ШхГхВ) - ${arrProd[key].size} см</p>
          <p class="product__text">Площадь - ${arrProd[key].area} м2</p>
          <div class="product__text-wrap">
            <p class="product__text">Оснащение номера</p> <div class="product__options">${prodOptions}</div>
          </div>
          <p class="product__text">Цена за сутки: <strong>${arrProd[key].cost}&nbsp;&#8381;</strong></p>
          <button class="button button_orange">Забронировать</button>
        </div>
      </div>`
    }
    roomRender = arrProd;
    $(".page-product__content").html(products)
  }
  render(room);


  function renderArea() {
    let outFilter = "";
    for (let key in filter.area) {
      outFilter += `
              <div class="check">
                <input class="check__input" checked type="checkbox" id="area${key}" name="area">
                <label class="check__label" for="area${key}">${filter.area[key]}&nbsp;м2</label>
              </div>
              `
    }
    $(".filter__area").html(outFilter)
  }
  renderArea()

  function renderOptions() {
    let outFilter = "";
    for (let key in filter.options) {
      outFilter += `
              <div class="check">
                <input class="check__input" checked type="checkbox" id="room${key}" name="room">
                <label class="check__label" for="room${key}">${filter.options[key]}</label>
              </div>
              `
    }
    $(".filter__room").html(outFilter)
  }
  renderOptions()

  $(".sort-menu").selectmenu({
    change: sortAll
  });

  $(".check__label").click(function () {
    $(".btnFilterRes").removeClass("button_none")
  });
  $('.filter__input').keyup(function (eventObject) {
    $(".btnFilterRes").removeClass("button_none")
  });

  $(".btnFilterRes").click(function () {
    $(".check__input").prop('checked', true);
    $(".filter__input").val('');
    $(".btnFilterRes").addClass("button_none");
    render(room);
  });

  function sortAll() {
    sortOptions = $(".sort-menu").find('option:selected').attr('value');
    if (sortOptions == 1) {
      sortArea(roomRender);
    }
    if (sortOptions == 2) {
      sortAreaR(roomRender);
    }
    if (sortOptions == 3) {
      sortCost(roomRender);
    }
    if (sortOptions == 4) {
      sortCostR(roomRender);
    }
  }
  function sortCost(arrSort) {
    arrSort.sort(function (a, b) {
      return a.cost - b.cost
    })
    render(arrSort)
  }
  function sortCostR(arrSort) {
    arrSort.sort(function (a, b) {
      return b.cost - a.cost
    })
    render(arrSort)
  }
  function sortArea(arrSort) {
    arrSort.sort(function (a, b) {
      return a.area - b.area
    })
    render(arrSort)
  }
  function sortAreaR(arrSort) {
    arrSort.sort(function (a, b) {
      return b.area - a.area
    })
    render(arrSort)
  }
});