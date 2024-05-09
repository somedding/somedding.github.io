document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridWeek',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek'
      },
      events: [
        {
          title: 'All Day Event',
          start: '2024-03-01'
        },
        {
          title: '유럽여행',
          start: '2024-07-02',
          end: '2024-07-08'
        },
        {
          groupId: '999',
          title: 'Repeating Event',
          start: '2024-03-09T16:00:00'
        },
        {
          groupId: '999',
          title: 'Repeating Event',
          start: '2024-03-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2024-03-11',
          end: '2024-03-13'
        },
        {
          title: 'Meeting',
          start: '2024-03-12T10:30:00',
          end: '2024-03-12T12:30:00'
        },
        {
          title: 'Lunch',
          start: '2024-03-12T12:00:00'
        },
        {
          title: 'Meeting',
          start: '2024-03-12T14:30:00'
        },
        {
          title: 'Birthday Party',
          start: '2024-03-13T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'https://google.com/',
          start: '2024-03-28'
        }
      ]
    });
  
    calendar.render();
  });