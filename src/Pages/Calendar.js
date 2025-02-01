import React from 'react';
import styled from 'styled-components';
import FullCalendar from '@fullcalendar/react'; // The main FullCalendar component
import dayGridPlugin from '@fullcalendar/daygrid'; // For day grid view

// Styled component for the calendar content
const Content = styled.div`
  width: 100%;
  max-width: 1000px; /* Allow the calendar to grow more on larger screens */
  height: auto; /* Allow height to adjust */
  background-color: #f9f9f9;
  color: #4B6079;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* Prevent overflow */
  margin: 20px auto; /* Center the calendar with margin */
  padding: 20px; /* Add padding for better spacing */
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    padding: 10px; /* Reduce padding for smaller screens */
  }

  @media (max-width: 480px) {
    padding: 5px; /* Further reduce padding for very small screens */
  }
`;

const CalendarWrapper = styled.div`
  width: 100%;
  height: 60vh; /* Adjust height to be a percentage of the viewport height for better responsiveness */
  
  @media (max-width: 768px) {
    height: 50vh; /* Adjust height for smaller screens */
  }

  @media (max-width: 480px) {
    height: 40vh; /* Further adjust height for very small screens */
  }
`;

const Calendar = ({ events }) => {
  return (
    <Content>
      <CalendarWrapper>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
          editable={false}
          selectable={false}
          height="100%" // Ensure the calendar fits the container height
        />
      </CalendarWrapper>
    </Content>
  );
};

export default Calendar;