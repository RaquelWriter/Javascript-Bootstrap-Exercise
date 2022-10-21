var cuponGastado = false;
var regaloModal = document.createElement('regalo');

function applyCoupon(num) {
  var coupon = document.getElementById('coupon' + num).value.toUpperCase();

  console.log(num);
  var newId = 'precio' + num;
  var price = document.getElementById(newId).innerText;
  console.log(newId);
  console.log(price);
  var newPriceSliced = price.slice(0, -2); // Coge precio, quitando las 2 ultimas letras
  console.log(newPriceSliced);
  var newPricePVP = parseFloat(newPriceSliced);
  console.log('Cupon', coupon);
  console.log('Nuevo precio', newPricePVP);

  if (!cuponGastado) {
    switch (coupon) {
      case 'PREMIUM':
        document.getElementById(newId).innerText =
          (newPricePVP * 0.5).toFixed(2) + ' €';
        swal('PREMIUM: ¡Consigues un 50% de descuento!');
        cuponGastado = true;
        break;
      case 'PLATINUMOTOÑO':
        document.getElementById(newId).innerText =
          (newPricePVP * 0.7).toFixed(2) + ' €';
        swal('PLATINUMOTOÑO: ¡Consigues un 30% de descuento!');
        cuponGastado = true;
        break;
      case 'VERANO2022':
        document.getElementById(newId).innerText =
          (newPricePVP * 0.8).toFixed(2) + ' €';
        swal('VERANO2022: ¡Consigues un 20% de descuento!');
        cuponGastado = true;
        break;
      case 'PLATINUM':
        swal('PLATINUM: ¡Consigues un regalo! ¡La cueva Tipi!');
        cuponGastado = true;
        mostrarRegalo(1);
        break;
      case 'GOLDEN':
        swal('GOLDEN: ¡Consigues un regalo! ¡La cueva de Felpa suave!');
        cuponGastado = true;
        mostrarRegalo(2);
        break;
      default:
        swal('Cupón no reconocido: ' + coupon);
        break;
    }
  } else {
    swal('Solo puedes utilizar un cupón');
  }
}

function mostrarRegalo(num) {
  switch (num) {
    case 1:
      regaloModal.innerHTML =
        '<div class="card"><div class="card-body"><p><img src="images/tunel2.jpg" class="card-img-top" alt="..."></p><h5 class="card-title">Túnel de felpa</h5><p class="card-text">Cómodo, suave y calentito túnel de felpa para jugar durante el frío invierno.</p><p class="card-text price"><del>27,95 €</del></p><h6 class="card-title price">¡De regalo con tu cupón!</h6></div></div>';
      swal({
        content: regaloModal,
      });
      break;
    case 2:
      regaloModal.innerHTML =
        '<div class="card"><div class="card-body"><p><img src="images/chocita_comestible.jpg" class="card-img-top" alt="..."></p><h5 class="card-title">Chocita comestible</h5><p class="card-text">Cabañas 100% comestibles para satisfacer el instinto de roer y jugar en nuestras pequeñas mascotas.</p><p class="card-text price"><del>8,45 €</del></p><h6 class="card-title price">¡De regalo con tu cupón!</h6></div></div>';
      swal({
        content: regaloModal,
      });
      break;
    default:
      swal('Error al seleccionar regalo');
      break;
  }
}
