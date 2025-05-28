export const calendarAppointments = [
  // Time slots For Calendar grid
  { day: 'Mon', time: '09:00' },
  { day: 'Wed', time: '14:00' },
  { day: 'Thu', time: '09:00' },
  { day: 'Thu', time: '17:00' },
  { day: 'Fri', time: '13:00', },
  { day: 'Sat', time: '11:00' },
  { day: 'Sat', time: '14:00' },

  // Detailed appointment cards
  {
    day: 'Mon',
    time: '09:00–11:00',
    title: 'Dentist',
    doctor: 'Dr. Cameron Williamson',
  },
  {
    day: 'Wed',
    time: '14:00–15:00',
    title: 'Physiotherapy Appointment',
    doctor: 'Dr. Kevin Djones',
  },
];

export const upcomingAppointments = [
  {
    id: 1,
    day: 'Thursday',
    appointments: [
      { title: 'Health checkup Complete', time: '09:00 AM' },
      { title: 'Ophthalmologist', time: '17:00 PM' }
    ]
  },
  {
    id: 2,
    day: 'Saturday',
    appointments: [
      { title: 'Cardiologist', time: '11:00 AM' },
      { title: 'Neurologist', time: '14:00 PM' }
    ]
  }
];

export default {
  calendarAppointments,
  upcomingAppointments
};
