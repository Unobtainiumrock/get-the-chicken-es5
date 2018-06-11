// Document.ready short hand? Idk.. saw it in an example somewhere and it worked.

var imgPaths = [ '/assets/images/Rhode_Island_Red_chicken.png',
'/assets/images/blueameraucana.png',
'/assets/images/cemani_chickens.png',
'/assets/images/spotted_thing.png',
'/assets/images/yo_im_orange.png' ];

$(function() {
  $('.change-devoured').on('click',function() {
    var id = $(this).data("id");
    var newDevour = $(this).data('newdevoured');
    console.log(newDevour);
    var newDevouredState = {
      devoured: newDevour
    };

    $.ajax('api/chickens/' + id, {
      type: 'PUT',
      data: newDevouredState
    }).then(function() {
      location.reload();
    });
  });

  $('.create-chicken').on('submit', function(e) {
    // Don't wastefully reload on a submit. We only want to reload after
    // all the asynchronous stuff for adding a new chicken is done.
    e.preventDefault();

    var newChicken = {
      chicken_name: $('#ca').val().trim(),
      devoured: $('[name=devoured]:checked').val().trim(),
      img: imgPaths[Math.floor(Math.random() * imgPaths.length)]
    };

    $.ajax('api/chickens',{
      type: 'POST',
      data: newChicken
    }).then(function() {
      // now we can reload
      location.reload();
    });
  });

  $('.destroy-chicken').on('click',function() {
    var id = $(this).data('id');

    $.ajax('api/chickens/' + id, {
      type: 'DELETE'
    }).then(function() {
      location.reload();
    });
    
  });

});