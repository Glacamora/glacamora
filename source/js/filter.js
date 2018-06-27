var filterItems = document.querySelectorAll(".portfolio__filter-list");

for (var i = 0; i < filterItems.length; i++) {
  filterItems[i].addEventListener("click", function(event){
    filter(this);
    tab(filterItems, this);
  });
}

function tab(filterItems, item)
{
  for (var i = 0; i < filterItems.length; i++) {
    filterItems[i].classList.remove("portfolio__filter-list_active");
  }

  item.classList.add("portfolio__filter-list_active");
}


function filter(element) {
  if(element.classList.contains("all")){

    var portfolio = document.querySelectorAll(".portfolio__item");

    for (var i = 0; i < portfolio.length; i++) {
      portfolio[i].style.display = "block";
    }

    return;
  }

  if(element.classList.contains("studies")){
    var studies = document.querySelectorAll(".portfolio__item");

    for (var i = 0; i < studies.length; i++) {
      if(!studies[i].classList.contains("studies-item")){
        studies[i].style.display = "none";
      }
      else {
        studies[i].style.display = "block";
      }
    }

    return;
  }

  if(element.classList.contains("fun")){
    var fun = document.querySelectorAll(".portfolio__item");

    for (var i = 0; i < fun.length; i++) {
      if(!fun[i].classList.contains("fun-item")){
        fun[i].style.display = "none";
      }
      else {
        fun[i].style.display = "block";
      }
    }


    return;
  }

  if(element.classList.contains("commercial")){
    var commercial = document.querySelectorAll(".portfolio__item");

    for (var i = 0; i < commercial.length; i++) {
      if(!commercial[i].classList.contains("commercial-item")){
        commercial[i].style.display = "none";
      }
      else {
        commercial[i].style.display = "block";
      }
    }

    return;
  }
}
