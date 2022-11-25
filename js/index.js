const poupUp = $('.poup-up');
const search = $('.inputText');
const newsletterSubmit = $('.newsletter-form');
let newsletterValue = $('.newsletter-text');

const products = [
  'camiseta',
  'calça',
  'blusa',
  'vestido',
  'shorts',
  'bermudas'
]

let MZ_next_level = {
  init: function () {
    MZ_next_level.closePoupUpAreaPoupUp();
    MZ_next_level.closePoupUp();
    MZ_next_level.closePoupUpEscape();
    MZ_next_level.searchMain();
    MZ_next_level.submitFormNewslatter();
    MZ_next_level.slickBannerMain();
    MZ_next_level.slickProducts();
    MZ_next_level.toggleProductImg();
  },

  closePoupUpAreaPoupUp: function () {
    $('.close').on('click', () => {
      $('.poup-up').css('display', 'none')
    })
  },

  closePoupUp: function () {
    poupUp.on('click', () => {
      addHidePoupUp(poupUp)
    })
  },

  closePoupUpEscape: function () {
    document.onkeydown = function (event) {
      if (event.key === 'Escape') {
        addHidePoupUp(poupUp)
      }
    }
  },

  searchMain: function () {
    $('.inputButton').on('click', () => {
      const searchInput = search.val()
      let productFound = false

      for (let i = 0; i < products.length; i++) {
        if (searchInput === products[i]) {
          productFound = true
          alert('Produto encontrado!')
        }
      }

      if (!productFound) {
        alert('Produto não encontrado!')
      }
    })
  },

  submitFormNewslatter: function () {
    newsletterSubmit.on('submit', function (event) {
      event.preventDefault();
      let emailField = newsletterValue.val()

      if (emailField.indexOf('@') > -1 && emailField.indexOf('.') > -1) {
        $(this).addClass('successForm');
        $(this).removeClass('erroForm');
      } else {
        $(this).addClass('erroForm');
        $(this).removeClass('successForm');
      }
    })
  },

  slickBannerMain: function () {
    $('.banner-main').slick();
  },

  slickProducts: function () {
    $('.products').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1
    })
  },

  toggleProductImg: function () {
    $('.product').hover(function () {
      $(this).find('.productImg').toggle();
    });
  }

}

function addHidePoupUp(element) {
  element.addClass('hide')
}

MZ_next_level.init();
















