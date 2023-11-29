var participle;

(function ($) {
  'use strict';
  participle = (function () {
    return {
      init: function () {
        this.highlightActiveMenu();
        this.mobileMenu();
        this.popupSearch();
        this.popupCart();
        this.productForm();
        this.homeSlider();
        this.wishlist();
        this.accountLogin();
        this.cart();
        this.collectionFilter();
        this.collection();
        this.productImages();
        this.productMobileImages();
      },

      //Header

      popupSearch: function () {
        $('.js-open-popup-search').on('click', function () {
          $('.js-search-popup').addClass('active');
          return false;
        });
        $('.js-close-search-popup').on('click', function () {
          $('.js-search-popup').removeClass('active');
          return false;
        });
      },

      popupCart: function () {
        $('.js-open-cart-popup').on('click', function () {
          $('.js-cart-popup').addClass('active');
          $('body').css('overflow', 'hidden');
          return false;
        });
        $('body').on('click', '.js-close-cart-popup', function () {
          $('.js-cart-popup').removeClass('active');
          $('body').css('overflow', 'visible');
          return false;
        });
      },

      highlightActiveMenu: function () {
        var path = window.location.href;
        $('.header__nav a').each(function () {
          if (this.href === path) {
            $(this).addClass('header__nav-active-menu-item');
          }
        });
      },

      mobileMenu: function () {
        $('.js-mobile-menu-dropdown-btn').on('click', function () {
          $(this).parent().find('.js-mobile-menu-dropdown-menu').slideToggle(500);
          $(this).toggleClass('rotate');
        });
        $('.js-open-mobile-menu').on('click', function () {
          $('.js-mobile-menu').addClass('active');
          $('body').css('overflow', 'hidden');
          return false;
        });
        $('.mobile-menu__nav li').on('click', function () {
          $('.mobile-menu__nav li').removeClass('active');
          $('.mobile-menu__nav ul').removeClass('active');

          $(this).addClass('active');
          $(this).find('ul').addClass('active');
        });
        $('.js-close-mobile-menu').on('click', function () {
          $('.js-mobile-menu').removeClass('active');
          $('body').css('overflow', 'visible');
          return false;
        });
      },

      cart: function () {
        $('body').on('click', '.js-delete-product-popup', function () {
          var variantId = parseInt($(this).attr('data-variant-id'));
          var quantity = 0;
          $('.js-cart-content').addClass('is-loading');
          $.ajax({
            type: 'POST',
            url: '/cart/change.js',
            dataType: 'json',
            data: { id: variantId, quantity: quantity },
            success: function () {
              participle.refreshCart();
            },
            error: function (response) {
              var errorMessage = response.responseJSON ? response.responseJSON.description : theme.strings.cartError;
              alert(errorMessage);
              participle.refreshCart();
            },
          });
          return false;
        });
        $('body').on('click', '.js-change-quantity', function () {
          var variantId = parseInt($(this).attr('data-variant-id'));
          var quantity = parseInt($(this).attr('data-quantity'));
          $('.js-cart-content').addClass('is-loading');
          $.ajax({
            type: 'POST',
            url: '/cart/change.js',
            dataType: 'json',
            data: { id: variantId, quantity: quantity },
            success: function () {
              participle.refreshCart();
            },
            error: function (response) {
              var errorMessage = response.responseJSON ? response.responseJSON.description : theme.strings.cartError;
              alert(errorMessage);
              participle.refreshCart();
            },
          });
          return false;
        });
      },

      refreshCart: function () {
        $('#cart-content').load('/cart #cart-content', function () {
          $('.js-popup-cart').addClass('active');
          $('.js-add-to-cart, .js-add-to-cart-sticky').removeClass('is-loading');
          $('.js-cart-content').removeClass('is-loading');
        });
        $('#cart-content-2').load('/cart #cart-content-2', function () {});
        jQuery.getJSON('/cart.js', function (cart) {
          if (cart.item_count > 0) {
            $('.js-active-bag').addClass('active-bag');
            $('.js-cart-title').html(`${cart.item_count} ${cart.item_count > 1 ? 'items' : 'item'}`);
            $('.js-cart-count').html(cart.item_count);
            $('.js-cart-count-lg').remove();
          } else {
            $('.js-active-bag').removeClass('active-bag');
            $('.js-cart-title').html('Bag');
            $('.js-cart-count').html(cart.item_count);
            $('.js-right-bag').append(`<span>${cart.item_count}</span>`);
          }

          // $('.js-cart-price').html(Shopify.formatMoney(cart.total_price));
        });
      },

      refreshCartDefault: function () {
        $('#cart-content-2').load('/cart #cart-content-2', function () {
          $('.js-add-to-cart, .js-add-to-cart-sticky').removeClass('is-loading');
          $('.js-cart-content').removeClass('is-loading');
        });
        $('#cart-content').load('/cart #cart-content', function () {});
        jQuery.getJSON('/cart.js', function (cart) {
          $('.js-cart-count').html(cart.item_count);
          // $('.js-cart-price').html(Shopify.formatMoney(cart.total_price));
        });
      },

      // Home
      homeSlider: function () {
        $('.js-home-slider').slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          adaptiveHeight: true,
          fade: true,
          arrows: false,
        });

        setTimeout(function () {
          $(
            '.js-slider-tag, .js-slider-heading, .js-slider-description, .js-slider-action, .js-slider-image, .js-slider-price, .js-slider-second-heading'
          ).addClass('is-active');
        }, 100);
      },

      // Account
      accountLogin: function () {
        $('.js-go-to-forgotten-password').click(function () {
          $('.js-login').addClass('d-none');
          $('.js-forgotten-password').removeClass('d-none');
          return false;
        });
        $('.js-back-to-login').click(function () {
          $('.js-login').removeClass('d-none');
          $('.js-forgotten-password').addClass('d-none');
        });
        $('.js-toggle-password').click(function () {
          var foundedInput = $(this).siblings('.form-group__input');
          foundedInput.attr('type') == 'password'
            ? foundedInput.attr('type', 'text')
            : foundedInput.attr('type', 'password');
        });
        $('.js-open-account-popup').click(function () {
          $('.js-account-popup').addClass('active');
          $('body').css('overflow', 'hidden');
          return false;
        });
        $('.js-close-account-popup').click(function () {
          $('.js-account-popup').removeClass('active');
          $('body').css('overflow', 'visible');
          return false;
        });
      },

      // Product
      productImages: function () {
        $('.js-product-thumbnail').on('click', function () {
          var id = $(this).attr('data-id');
          $('.js-product-thumbnail').removeClass('active');
          $(this).addClass('active');
          $('.js-product-main-image').removeClass('active');
          $(".js-product-main-image[data-id='" + id + "']").addClass('active');
          participle.zoom();
          $(".js-product-main-image[data-id='" + id + "'] + li").addClass('active');
          return false;
        });
        $('.js-popup-gallery a').jqPhotoSwipe({
          forceSingleGallery: true,
        });
        $('.js-product-mobile-gallery a').jqPhotoSwipe({
          forceSingleGallery: true,
        });
        $('.js-product-thumbnails-prev').on('click', function () {
          var currentGroup = $(this).attr('data-current-group');
          var allGroups = $(this).attr('data-groups');
          if (currentGroup == 1) {
            currentGroup = allGroups;
          } else {
            currentGroup--;
          }
          $(this).attr('data-current-group', currentGroup);
          $('.js-product-thumbnails-next').attr('data-current-group', currentGroup);
          $('.js-product-thumnail-slider').addClass('d-none');
          $(".js-product-thumnail-slider[data-group='" + currentGroup + "']").removeClass('d-none');
          return false;
        });
        $('.js-product-thumbnails-next').on('click', function () {
          var currentGroup = $(this).attr('data-current-group');
          var allGroups = $(this).attr('data-groups');
          if (currentGroup == allGroups) {
            currentGroup = 1;
          } else {
            currentGroup++;
          }
          $(this).attr('data-current-group', currentGroup);
          $('.js-product-thumbnails-prev').attr('data-current-group', currentGroup);
          $('.js-product-thumnail-slider').addClass('d-none');
          $(".js-product-thumnail-slider[data-group='" + currentGroup + "']").removeClass('d-none');
          return false;
        });
      },

      productMobileImages: function () {
        $('.js-product-mobile-gallery').not('.slick-initialized').slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          arrows: true,
        });
      },

      productForm: function () {
        function variants(productId) {
          var data = JSON.parse(document.getElementById('ProductJson' + productId + '').innerHTML);
          data.variants.forEach((variant) => {
            if (variant.available == false) {
              if ($('.js-product-size').attr('data-value') == variant.title) {
                $('.js-product-size[data-value="' + variant.title + '"]')
                  .parent()
                  .addClass('unavailable');
              }
            }
          });
          var selectCallback = function (variant, selector) {
            var that = $(".js-product[data-product-id='" + productId + "']");
            if (variant) {
              if (variant.available) {
                $(that).find('.js-product-add-to-cart').removeClass('d-none');
                $('.js-sticky-add-to-cart-button').removeClass('d-none');
              } else {
                $(that).find('.js-product-add-to-cart').addClass('d-none');
                $('.js-sticky-add-to-cart-button').addClass('d-none');
              }
              if (variant.compare_at_price > variant.price) {
                $(that).find('.js-price-old').removeClass('d-none').html(Shopify.formatMoney(variant.compare_at_price));
                $(that).find('.js-price-new').removeClass('d-none').html(Shopify.formatMoney(variant.price));
                $(that).find('.js-price-default').addClass('d-none');
                $(that)
                  .find('.product-price__save')
                  .removeClass('d-none')
                  .find('span')
                  .html(((variant.price / variant.compare_at_price) * 100).toFixed(0));
              } else {
                $(that).find('.js-price-old, .js-price-new').addClass('d-none');
                $(that).find('.js-price-default').removeClass('d-none').html(Shopify.formatMoney(variant.price));
                $(that).find('.product-price__save').addClass('d-none');
              }
            }
          };
          jQuery(function ($) {
            if ($('#product-select-' + productId + '').length > 0) {
              new Shopify.OptionSelectors('product-select-' + productId + '', {
                product: data,
                onVariantSelected: selectCallback,
                enableHistoryState: true,
              });
            }
          });
        }

        $('.js-product').each(function () {
          variants($(this).attr('data-product-id'));
        });

        $('body').on('click', '.js-add-to-cart-sticky', function () {
          $(this).addClass('is-loading');
          var productId = $(this).attr('data-product-id');
          var quantity = $(this).parent().parent().find('.js-quantity-field').val();
          if (isNaN(quantity)) {
            quantity = 1;
          }
          var id = $(".js-product[data-product-id='" + productId + "'] #product-select-" + productId + '').val();
          $.ajax({
            type: 'POST',
            url: '/cart/add.js',
            dataType: 'json',
            data: { id: id, quantity: quantity },
            success: function () {
              participle.refreshCart();
            },
            error: function (response) {
              var errorMessage = response.responseJSON ? response.responseJSON.description : theme.strings.cartError;
              alert(errorMessage);
              participle.refreshCart();
              console.log('false');
            },
          });
          return false;
        });

        $('body').on('click', '.js-add-to-cart', function () {
          $(this).addClass('is-loading');
          var productId = $(this).attr('data-product-id');
          var quantity = $(".js-product[data-product-id='" + productId + "'] .js-quantity-field").val();
          if (isNaN(quantity)) {
            quantity = 1;
          }
          var id = $(".js-product[data-product-id='" + productId + "'] #product-select-" + productId + '').val();

          $.ajax({
            type: 'POST',
            url: '/cart/add.js',
            dataType: 'json',
            data: { id: id, quantity: quantity },
            success: function () {
              participle.refreshCart();
            },
            error: function (response) {
              var errorMessage = response.responseJSON ? response.responseJSON.description : theme.strings.cartError;
              alert(errorMessage);
              participle.refreshCart();
            },
          });
          return false;
        });

        $('.js-product-size').click(function () {
          $(this).parent().parent().find('li').removeClass('active');
          $(this).parent().addClass('active');
          var option = $(this).parent().parent().attr('data-option');
          var value = $(this).attr('data-value');
          var productId = $(this).attr('data-product-id');
          $(".js-product[data-product-id='" + productId + "'] #product-variants select[data-option='" + option + "']")
            .val(value)
            .change();
          return false;
        });
      },

      // Collection
      collectionFilter: function () {
        Shopify.queryParams = {};

        $('input.sort-tag').each(function () {
          if ($(this).is(':checked')) {
            Shopify.queryParams.sort_by = $(this).attr('value');
          }
        });

        $('input.view-tag').each(function () {
          if ($(this).is(':checked')) {
            Shopify.queryParams.view = $(this).attr('value');
          }
        });

        function filterCreateUrl() {
          if (Shopify.queryParams.sort_by == undefined) {
            return $('.js-collection-items').attr('data-url') + '?view=' + Shopify.queryParams.view;
          } else if (Shopify.queryParams.view == undefined) {
            return $('.js-collection-items').attr('data-url') + '?sort_by=' + Shopify.queryParams.sort_by;
          } else {
            return (
              $('.js-collection-items').attr('data-url') +
              '?sort_by=' +
              Shopify.queryParams.sort_by +
              '&view=' +
              Shopify.queryParams.view
            );
          }
        }

        function filterGetContent(url) {
          $.ajax({
            type: 'get',
            url: url,
            beforeSend: function () {
              $('.js-collection').addClass('loading');
            },
            success: function (result) {
              var title = result.match('<title>(.*?)</title>');
              History.pushState(
                {
                  param: Shopify.queryParams,
                },
                title,
                url
              );
              $('.js-collection').html($(result).find('.js-collection').html());
              if (Shopify.queryParams.view == 'large') {
                $('.js-collection-row')
                  .find('div.col-6.col-lg-3')
                  .each(function () {
                    $(this).removeClass('col-lg-3').addClass('col-lg-6');
                  });
              }

              $('.js-collection').removeClass('loading');
            },
            error: function () {
              $('.js-collection').removeClass('loading');
            },
          });
        }

        $('input.sort-tag').change(function () {
          $('input.sort-tag').each(function () {
            if ($(this).is(':checked')) {
              Shopify.queryParams.sort_by = $(this).attr('value');
            }
          });
          filterGetContent(filterCreateUrl());
          return false;
        });

        $('input.view-tag').change(function () {
          $('input.view-tag').each(function () {
            if ($(this).is(':checked')) {
              Shopify.queryParams.view = $(this).attr('value');
            }
          });
          filterGetContent(filterCreateUrl());
          return false;
        });

        var activeDetails = $('body').on('click', 'details', function () {
          if ($(this).attr('open')) {
            return true;
          }
        });

        if (activeDetails) {
          $('body').on('click', function () {
            $('details').removeAttr('open');
          });
        }
      },

      collection: function () {
        $(window).scroll(function () {
          if ($('.js-collection-next-page').length > 0) {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > $('.js-collection-next-page').offset().top - $(window).outerHeight() - 100) {
              var href = $('.js-collection-next-page').attr('data-href');
              $('.js-collection-pagination').removeClass('js-collection-next-page');
              $.ajax({
                url: href,
                type: 'GET',
              }).done(function (data) {
                $('.js-collection-pagination').remove();
                $('.js-collection-row').append($(data).find('.js-collection-row').html());
                (function ($) {
                  $.QueryString = (function (a) {
                    if (a == '') return {};
                    var b = {};
                    for (var i = 0; i < a.length; ++i) {
                      var p = a[i].split('=');
                      if (p.length != 2) continue;
                      b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, ' '));
                    }
                    return b;
                  })(window.location.search.substr(1).split('&'));
                })(jQuery);

                var param = jQuery.QueryString['view'];

                if (param == 'large') {
                  $('.js-collection-row')
                    .find('div.col-6.col-lg-3')
                    .each(function () {
                      $(this).removeClass('col-lg-3').addClass('col-lg-6');
                    });
                }
              });
            }
          }
        });
      },

      // Utilities
      wishlist: function () {
        $('.js-add-to-wishlist').each(function () {
          var productHandle = $(this).attr('data-product-handle') + ',';
          var wishlist = localStorage.getItem('wishlist');
          if (wishlist == null) wishlist = '';
          if (wishlist.indexOf(productHandle) >= 0) {
            $(this).find('svg').attr('fill', 'black');
            $('.js-my-favorite-count').html(`(${wishlist.split(',').length - 1})`);
          }
        });
        $('body').on('click', '.js-add-to-wishlist', function () {
          if ($(this).find('svg').attr('fill') === 'none') {
            var productHandle = $(this).attr('data-product-handle');
            $(this).find('svg').attr('fill', 'black');
            var getWishlistProducts = localStorage.getItem('wishlist');
            if (getWishlistProducts == null) getWishlistProducts = '';
            getWishlistProducts = getWishlistProducts.replace(productHandle + ',', '');
            localStorage.setItem('wishlist', getWishlistProducts + productHandle + ',');
            return false;
          }
        });
        if ($('.js-wishlist-body').length > 0) {
          var wishlist = localStorage.getItem('wishlist');
          var wishlistContent = '';
          if (wishlist == null) {
            wishlist = '';
          }
          if (wishlist != '') {
            var wishlistProducts = wishlist.split(',');
            for (let i = 0; i < wishlistProducts.length; i++) {
              if (wishlistProducts[i] != '') {
                jQuery.getJSON('/products/' + wishlistProducts[i] + '.js', function (product) {
                  var productPrice = '';

                  if (product.compare_at_price > product.price) {
                    productPrice =
                      '<span class="product-grid-item__price-new">' +
                      Shopify.formatMoney(product.price) +
                      '</span><span class="product-grid-item__price-old">' +
                      Shopify.formatMoney(product.compare_at_price) +
                      '</span>';
                  } else {
                    productPrice = Shopify.formatMoney(product.price);
                  }

                  wishlistContent =
                    wishlistContent +
                    '<div class="col-6 col-lg-3"><div class=product-grid-item><div class="product-grid-item__images"><div class="product-grid-item__image"><a href="' +
                    product.url +
                    '"><img alt="Image" data-sizes="auto" data-srcset="' +
                    product.featured_image +
                    '400w" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="class="lazyload"></a></div></div><div class="product-grid-item__details"><div class="product-grid-item__name"><a href="' +
                    product.url +
                    '">' +
                    product.title +
                    '</a></div><div class="product-grid-item__price">' +
                    productPrice +
                    '</div></div><div class="product-grid-item-actions"><a href="#" class="js-delete-product-wishlist" data-product-handle="' +
                    product.handle +
                    '">Remove</a></div></div></div>';
                });
              }
            }
          }
          setTimeout(function () {
            if (wishlistContent == '') {
              wishlistContent = '<div class="empty-wishlist"><p>You have no favorites (yet)</p></div>';
              $('.js-wishlist-body').html(wishlistContent);
            } else {
              $('.js-wishlist-body').html(wishlistContent);
            }
          }, 2000);
          $('body').on('click', '.js-delete-product-wishlist', function () {
            $(this).parent().parent().parent().remove();
            var productHandle = $(this).attr('data-product-handle');
            var getWishlistProducts = localStorage.getItem('wishlist');
            if (getWishlistProducts == null) {
              getWishlistProducts = '';
            }
            getWishlistProducts = getWishlistProducts.replace(productHandle + ',', '');
            localStorage.setItem('wishlist', getWishlistProducts);
            return false;
          });
        }
      },

      zoom: function () {
        for (var i = 1; i < 100; i++) {
          if (i == 1) {
            $('.active .js-zoomit').zoomIt();
          } else {
            $('.active-' + i + ' .js-zoomit').zoomIt();
          }
        }
      },
    };
  })();
})(jQuery);

$(document).ready(function () {
  participle.init();
});
