import $ from 'jquery'
import 'slick-carousel'
// CSS imports
import '../node_modules/slick-carousel/slick/slick.css'
import '../scss/app.scss'
$(document).ready(function() {
  $('.spotlight__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
}())
