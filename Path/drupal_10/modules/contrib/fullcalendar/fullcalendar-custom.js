document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    events: '/path/to/json', // URL de la vue JSON si nécessaire
    eventClick: function(info) {
      // Afficher un formulaire dans un modal
      var modal = document.getElementById('reservationModal');
      var modalContent = modal.querySelector('.modal-body');
      
      // Charger le formulaire de réservation via AJAX
      fetch('/reservation-form/' + info.event.id)
        .then(response => response.text())
        .then(html => {
          modalContent.innerHTML = html;
          modal.style.display = 'block';
        });
    }
  });

  calendar.render();
});