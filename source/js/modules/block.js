export function block() {

  const cross = document.querySelector(".top-header__btn"),
    topHeader = document.querySelector(".top-header");
  const burgerMenu = document.querySelector(".header__bottom-nav-mob");
  cross.addEventListener("click", function (evt) {
    topHeader.style.display = "none";
  })

  const burgerBtn = document.querySelector(".main-header__burger");
  const burgerCatalog = document.querySelector(".header__bottom__btn");
  const burgerCatalogList = document.querySelector(".header__catalog");

  burgerBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    burgerBtn.classList.toggle("main-header__burger--active");
    burgerMenu.classList.toggle("header__bottom-nav--active");
    burgerCatalogList.classList.remove("header__catalog--active")
  })


  burgerCatalog.addEventListener("click", function (evt) {
    evt.preventDefault();
    burgerCatalog.classList.toggle("header__bottom__btn--active");
    burgerCatalogList.classList.toggle("header__catalog--active")
  })

  const filterBtn = document.querySelectorAll(".filter__header"),
    filterCont = document.querySelectorAll(".filter__content");
const itemPage = document.querySelector(".item");
  if(filterBtn) {
    filterBtn.forEach(function (item, i) {
      item.addEventListener("click", function (evt) {
        evt.preventDefault();
        filterBtn[i].classList.toggle("filter__header--active")
        filterCont[i].classList.toggle("filter__content--active")
      });
    });
  }
  const main = document.querySelector(".main-slider");
  if(main) {
    var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".main-swiper-pag",
        clickable: true,
      },
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
    });

    var swiper = new Swiper(".new-items__swiper", {
      navigation: {
        nextEl: ".new-items-next",
        prevEl: ".new-items-prev",
      },
      slidesPerView: 4,
      spaceBetween: 24,
      breakpoints: {
        700: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        900: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
        300: {
          slidesPerView: 2,
          spaceBetween: 8,
        }
      }
    });

    var swiper = new Swiper(".hit-items__swiper", {
      navigation: {
        nextEl: ".main-hit-next",
        prevEl: ".main-hit-prev",
      },
      slidesPerView: 4,
      spaceBetween: 24,
      breakpoints: {
        700: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        900: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
        300: {
          slidesPerView: 2,
          spaceBetween: 8,
        }
      }
    });
    var swiper = new Swiper(".offer__wrapper", {
      slidesPerView: "auto",
      spaceBetween: 30,
      pagination: {
        el: ".offer-pag",
        clickable: true,
      },
      breakpoints: {
        500: {
          slidesPerView: "auto",
          spaceBetween: 30,
        },
        300: {
          slidesPerView: 1,
          spaceBetween: 0,
        }
      }
    });

    var swiper = new Swiper(".brands__swiper", {
      navigation: {
        nextEl: ".brands-next",
        prevEl: ".brands-prev",
      },
      slidesPerView: 4,
      spaceBetween: 24,
      breakpoints: {
        700: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        900: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
        300: {
          slidesPerView: 2,
          spaceBetween: 8,
        }
      }
    });
  }

  const item = document.querySelector(".item");
  if (item) {
    var swiper1 = new Swiper(".item-swiper-bottom", {
      spaceBetween: 35,
      slidesPerView: 6,
      freeMode: true,
      watchSlidesProgress: false,
      breakpoints: {
        768: {
          slidesPerView: 6,
          spaceBetween: 15,
        },
        500: {
          slidesPerView: 5,
          spaceBetween: 15,
        },
        300: {
          slidesPerView: 4,
          spaceBetween: 8,
        }
      }
    });
    var swiper2 = new Swiper(".item-swiper-top", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".item-swiper-next",
        prevEl: ".item-swiper-prev",
      },
      thumbs: {
        swiper: swiper1,
      },
    });
  }
  if(itemPage || filterBtn){
    var swiper = new Swiper(".rec-items__swiper", {
      navigation: {
        nextEl: ".main-rec-next",
        prevEl: ".main-rec-prev",
      },
      slidesPerView: 4,
      spaceBetween: 24,
      breakpoints: {
        700: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        900: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
        300: {
          slidesPerView: 2,
          spaceBetween: 8,
        }
      }
    });
  }
  const tabBtm = document.querySelectorAll(".item__tab"),
    tabCont = document.querySelectorAll(".item__tab-wrapper .item__tab-content"),
    tabContMob = document.querySelectorAll(".item__tab-content");
  if(itemPage){
    var removeActive = function (array, activeClass) {
      array.forEach(function (item) {
        item.classList.remove(activeClass);
      });
      return;
    };
    tabBtm.forEach(function (item, i) {


      item.addEventListener('click', function (evt) {
        if (window.innerWidth >= 1024) {
          removeActive(tabBtm, 'item__tab--active')
          removeActive(tabCont, 'item__tab-content--active')
          evt.preventDefault();
          if (tabBtm[i].classList.contains('item__tab--active')) {
            tabBtm[i].classList.remove('item__tab--active');
            tabCont[i].classList.remove('item__tab-content--active');
          } else {
            tabBtm[i].classList.add('item__tab--active');
            tabCont[i].classList.add('item__tab-content--active');
          }
        }
        if (window.innerWidth < 1024) {
          removeActive(tabBtm, 'item__tab--active');
          removeActive(tabContMob, 'item__tab-content--active');
          evt.preventDefault();
          if (tabBtm[i].classList.contains('item__tab--active')) {
            tabBtm[i].classList.remove('item__tab--active');
            tabContMob[i].classList.remove('item__tab-content--active');
          } else {
            tabBtm[i].classList.add('item__tab--active');
            tabContMob[i].classList.add('item__tab-content--active');
          }
        }
      });
      });
  }
const order = document.querySelector(".order")
  const radInp = document.querySelectorAll('.payment input');
  const radInp2 = document.querySelectorAll('.installments input');
  const radInp3 = document.querySelectorAll('.delivery__radio__item input');
  const radDiv = document.querySelectorAll(".payment .order__radio");
  const radDiv2 = document.querySelectorAll(".installments .order__radio");
  const radDiv3 = document.querySelectorAll(".delivery__radio__item");
  const ras = document.querySelector(".ras input");
  const rasDiv = document.querySelector(".ras");
  const rasCont = document.querySelector(".ras-cont");

  var removeActive = function (array, activeClass) {
    array.forEach(function (item) {
      item.classList.remove(activeClass);
    });
    return;
  };
  if(order) {
    if (radInp) {

      radInp.forEach(function (item, i) {

        if (radInp[i].checked) {
          radDiv[i].classList.add("radio-checked")
        }
        if (ras.checked) {
          rasCont.classList.add("ras-cont--active")
        }

        radDiv[i].addEventListener("click", function () {
          if (radInp[i].checked) {
            removeActive(radDiv, "radio-checked");
            radDiv[i].classList.add("radio-checked");
            if (ras.checked) {
              rasCont.classList.add("ras-cont--active");
            }
          } else {
            radDiv[i].classList.remove("radio-checked")
            rasCont.classList.remove("ras-cont--active")
          }
        })
      })

    }

    if (radInp2) {
      radInp2.forEach(function (item, i) {

        if (radInp2[i].checked) {
          radDiv2[i].classList.add("radio-checked")
        }

        radDiv2[i].addEventListener("click", function () {
          if (radInp2[i].checked) {
            removeActive(radDiv2, "radio-checked");
            radDiv2[i].classList.add("radio-checked");

          } else {
            radDiv2[i].classList.remove("radio-checked")

          }
        })
      })
    }

    if (radInp3) {
      radInp3.forEach(function (item, i) {

        if (radInp3[i].checked) {
          radDiv3[i].classList.add("radio-checked")
        }

        radDiv3[i].addEventListener("click", function () {
          if (radInp3[i].checked) {
            removeActive(radDiv3, "radio-checked");
            radDiv3[i].classList.add("radio-checked");
          } else {
            radDiv3[i].classList.remove("radio-checked")
          }
        })
      })
    }
  }



  const histTab = document.querySelectorAll(".history__tab");
  const histWr = document.querySelectorAll(".history__wrapper");

  if(histTab){
    histTab.forEach(function (item, i) {
      histTab[0].classList.add("history__tab--active")
      histWr[0].classList.add("history__wrapper--active")
      item.addEventListener("click", function (evt) {
        evt.preventDefault();
        removeActive(histWr, "history__wrapper--active");
        removeActive(histTab, "history__tab--active");
        histTab[i].classList.add("history__tab--active")
        histWr[i].classList.add("history__wrapper--active")
      });
    });
  }

  const hisNum = document.querySelectorAll(".history__num");
const hisItem = document.querySelectorAll(".history__item__wrapper");

if(hisNum){
  hisNum.forEach(function (item, i) {
    item.addEventListener("click", function (evt) {
      evt.preventDefault();
      hisNum[i].classList.toggle("history__num--active")
      hisItem[i].classList.toggle("history__item__wrapper--active")
    });
  });
}
  let inputs = document.querySelectorAll('.input__file');
if(inputs) {
  Array.prototype.forEach.call(inputs, function (input) {
    let label = input.nextElementSibling,
      labelVal = label.querySelector('.input__file-button-text').innerText;

    input.addEventListener('change', function (e) {
      let countFiles = '';
      if (this.files && this.files.length >= 1)
        countFiles = this.files.length;

      if (countFiles)
        label.querySelector('.input__file-button-text').innerText = 'Выбрано файлов: ' + countFiles;
      else
        label.querySelector('.input__file-button-text').innerText = labelVal;
    });
  });
}

const reg = document.querySelector(".reg");
const retail = document.querySelector(".retail input");
const retailDiv = document.querySelector(".reg__retail");
const legal = document.querySelector(".legal input");
const legalDiv = document.querySelector(".legal__item");
const regType = document.querySelectorAll(".reg__type input");
const regDiv = document.querySelectorAll(".order__radio");

  if(reg){
    regType.forEach(function (item, i) {

      if (regType[i].checked) {
        regDiv[i].classList.add("radio-checked")
      }

      regDiv[i].addEventListener("click", function () {
        if(retail.checked){
          retailDiv.classList.add("reg__retail--active")
        }
        else {
          retailDiv.classList.remove("reg__retail--active")
        }
        if(legal.checked){
          legalDiv.classList.add("legal__item--active")
        }
        else {
          legalDiv.classList.remove("legal__item--active")
        }
        if (regType[i].checked) {
          removeActive(regDiv, "radio-checked");
          regDiv[i].classList.add("radio-checked");

        } else {
          regDiv[i].classList.remove("radio-checked")

        }
      })
    })
  }
  const modalTrigger1 = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal-call-us'),
    modalCloseBtn = document.querySelector('[data-close]');

  const modalTrigger2 = document.querySelectorAll('[data-modal2]'),
    modal2 = document.querySelector('.modal-pass'),
    modalCloseBtn2 = document.querySelector('[data-close2]');

  const modalTrigger3 = document.querySelectorAll('[data-modal3]'),
    modal3 = document.querySelector('.modal-enter'),
    modalCloseBtn3 = document.querySelector('[data-close3]');

  if (modal != null) {
    modalTrigger1.forEach(btn => {
      btn.addEventListener('click', function () {
        modal.classList.add('modal-call-us--active');
        document.body.style.overflow = 'hidden';
      });
    });

    function closeModal() {
      modal.classList.remove('modal-call-us--active');
      // Либо вариант с toggle - но тогда назначить класс в верстке
      document.body.style.overflow = '';
    }

    modalCloseBtn.addEventListener('click', () => {
      closeModal()
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });


    document.addEventListener('keydown', (e) => {
      if (e.code === "Escape" && modal.classList.contains('modal-call-us--active')) {
        closeModal();
      }
    });

  }

  if (modal2 != null) {
    modalTrigger2.forEach(btn2 => {
      btn2.addEventListener('click', function () {
        modal2.classList.add('modal-pass--active');
        document.body.style.overflow = 'hidden';
      });
    });

    function closeModal2() {
      modal2.classList.remove('modal-pass--active');
      document.body.style.overflow = '';
    }

    modalCloseBtn2.addEventListener('click', () => {
      closeModal2()
    });

    modal2.addEventListener('click', (e) => {
      if (e.target === modal2) {
        closeModal2();
      }
    });


    document.addEventListener('keydown', (e) => {
      if (e.code === "Escape" && modal2.classList.contains('modal-pass--active')) {
        closeModal2();
      }
    });

  }

  if (modal3 != null) {
    modalTrigger3.forEach(btn3 => {
      btn3.addEventListener('click', function () {
        modal3.classList.add('modal-enter--active');
        document.body.style.overflow = 'hidden';
      });
    });

    function closeModal3() {
      modal3.classList.remove('modal-enter--active');
      document.body.style.overflow = '';
    }

    modalCloseBtn3.addEventListener('click', () => {
      closeModal3()
    });

    modal3.addEventListener('click', (e) => {
      if (e.target === modal3) {
        closeModal3();
      }
    });


    document.addEventListener('keydown', (e) => {
      if (e.code === "Escape" && modal3.classList.contains('modal-enter--active')) {
        closeModal3();
      }
    });

  }


  var InpSearch = document.querySelector('.input__search');
  var InpSearchMob = document.querySelector('.input__search-mob');
  var Phone = document.querySelector('.header__adv-2');
  var logo = document.querySelector('.header__nav');
  var cart = document.querySelector('.header__cart');
  var call = document.querySelector('.call-btn');
  var vib = document.querySelector('.header__adv-3');
  var SClean = document.querySelector('.search__clean');
  var SCleanMob = document.querySelector('.search__clean-mob');

  var menu = document.querySelector('.main-header__burger');
  var menuspan = document.querySelectorAll('.main-header__burger span');

  InpSearch.addEventListener('focus', function (evt) {
    evt.preventDefault();
    Phone.style.visibility = "hidden";
    vib.style.visibility = "hidden";
    vib.style.transition= "none";
    SClean.style.display="block";

  });
  InpSearch.addEventListener('blur', function (evt) {
    evt.preventDefault();
    Phone.style.visibility = "visible";
    vib.style.visibility = "visible";
    vib.style.transition= "";
    SClean.style.display="none";
    InpSearch.value=" ";
  });


  InpSearchMob.addEventListener('focus', function (evt) {
    evt.preventDefault();
    if (window.innerWidth < 1023) {
      logo.style.visibility = "hidden";
      menu.style.visibility = "hidden";
      cart.style.visibility = "hidden";
      call.style.visibility = "hidden";
      menu.style.transition= "none";
     // SCleanMob.style.display="block";
      menuspan.forEach(function (item, i) {
        menuspan[i].style.transition= "none";
      });
    }

  });
  InpSearchMob.addEventListener('blur', function (evt) {
    evt.preventDefault();
    if (window.innerWidth < 1023) {
      logo.style.visibility = "visible";
      menu.style.visibility = "visible";
      cart.style.visibility = "visible";
      call.style.visibility = "visible";
      menu.style.transition= ".5s ease-in-out";
      //SCleanMob.style.display="none";
      menuspan.forEach(function (item, i) {
        menuspan[i].style.transition= ".2s ease-in-out ";
      });
    }
  });

  const filterBtnCat = document.querySelector(".catalog__sort-mob button"),
    cat = document.querySelector(".catalog"),
    filter = document.querySelector(".sidebar__filter");

  if(cat){
    filterBtnCat.addEventListener("click", function (evt) {
      filter.classList.toggle("sidebar__filter--active");
      filterBtnCat.classList.toggle("cat-btn-active");
    })
  }
}
