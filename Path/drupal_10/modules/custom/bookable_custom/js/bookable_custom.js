(function ($, Drupal) {
    Drupal.behaviors.bookableCustom = {
      attach: function (context, settings) {
        $('#edit-field-animal').change(function () {
          var typeAnimal = $(this).val();
  
          if (typeAnimal === 'cheval') {
            $('#edit-start-time option').each(function () {
              var nextOption = $(this).next();
  
              if (!nextOption.length || nextOption.prop('disabled')) {
                $(this).prop('disabled', true);
              }
            });
          } else {
            $('#edit-start-time option').prop('disabled', false);
          }
        });
      }
    };
  })(jQuery, Drupal);
  