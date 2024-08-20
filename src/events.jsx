const events = [
  // Football
  { id: 1, sport: 'Football', teams: 'IIT Kanpur vs IIT Bombay', time: '14:00', date: '2024-10-18', location: 'IIT-BHU Gymkhana' },
  { id: 2, sport: 'Football', teams: 'IIT Delhi vs IIT KGP', time: '16:00', date: '2024-10-18', location: 'IIT-BHU Gymkhana' },
  { id: 3, sport: 'Football', teams: 'IIT-BHU vs IIT Roorkee', time: '14:00', date: '2024-10-19', location: 'IIT-BHU Gymkhana' },
  { id: 4, sport: 'Football Semi-Final', teams: 'Winner Match 1 vs Winner Match 2', time: '14:00', date: '2024-10-20', location: 'IIT-BHU Gymkhana' },
  { id: 5, sport: 'Football Final', teams: 'Winner Semi-Final vs Runner-Up Semi-Final', time: '16:00', date: '2024-10-20', location: 'IIT-BHU Gymkhana' },

  // Basketball
  { id: 6, sport: 'Basketball', teams: 'IIT Roorkee vs IIT Patna', time: '10:00', date: '2024-10-18', location: 'Rajputana Basketball Court 1' },
  { id: 7, sport: 'Basketball', teams: 'IIT Indore vs IIT Bombay', time: '12:00', date: '2024-10-18', location: 'Rajputana Basketball Court 1' },
  { id: 8, sport: 'Basketball', teams: 'IIT-BHU vs IIT KGP', time: '14:00', date: '2024-10-19', location: 'Rajputana Basketball Court 1' },
  { id: 9, sport: 'Basketball Semi-Final', teams: 'Winner Match 6 vs Winner Match 7', time: '10:00', date: '2024-10-20', location: 'Rajputana Basketball Court 1' },
  { id: 10, sport: 'Basketball Final', teams: 'Winner Semi-Final vs Runner-Up Semi-Final', time: '12:00', date: '2024-10-20', location: 'Rajputana Basketball Court 1' },

  // Cricket
  { id: 11, sport: 'Cricket', teams: 'IIT Delhi vs IIT KGP', time: '09:00', date: '2024-10-18', location: 'IIT-BHU Gymkhana' },
  { id: 12, sport: 'Cricket', teams: 'IIT Kanpur vs IIT Bombay', time: '13:00', date: '2024-10-18', location: 'IIT-BHU Gymkhana' },
  { id: 13, sport: 'Cricket', teams: 'IIT-BHU vs IIT Roorkee', time: '09:00', date: '2024-10-19', location: 'IIT-BHU Gymkhana' },
  { id: 14, sport: 'Cricket Semi-Final', teams: 'Winner Match 11 vs Winner Match 12', time: '09:00', date: '2024-10-20', location: 'IIT-BHU Gymkhana' },
  { id: 15, sport: 'Cricket Final', teams: 'Winner Semi-Final vs Runner-Up Semi-Final', time: '13:00', date: '2024-10-20', location: 'IIT-BHU Gymkhana' },

  // Tennis
  { id: 16, sport: 'Tennis', teams: 'IIT Roorkee vs IIT Patna', time: '11:00', date: '2024-10-18', location: 'Court 1' },
  { id: 17, sport: 'Tennis', teams: 'IIT Indore vs IIT Bombay', time: '14:00', date: '2024-10-18', location: 'Court 1' },
  { id: 18, sport: 'Tennis', teams: 'IIT-BHU vs IIT KGP', time: '11:00', date: '2024-10-19', location: 'Court 1' },
  { id: 19, sport: 'Tennis Semi-Final', teams: 'Winner Match 16 vs Winner Match 17', time: '11:00', date: '2024-10-20', location: 'Court 1' },
  { id: 20, sport: 'Tennis Final', teams: 'Winner Semi-Final vs Runner-Up Semi-Final', time: '14:00', date: '2024-10-20', location: 'Court 1' },

  // Athletics
  { id: 21, sport: 'Athletics', teams: '100m Sprint', time: '09:00', date: '2024-10-18', location: 'ADV Ground' },
  { id: 22, sport: 'Athletics', teams: '4x100m Relay', time: '10:00', date: '2024-10-18', location: 'ADV Ground' },
  { id: 23, sport: 'Athletics', teams: 'IIT-BHU vs IIT Roorkee', time: '11:00', date: '2024-10-19', location: 'ADV Ground' },

  // Kabaddi
  { id: 24, sport: 'Kabaddi', teams: 'IIT Kanpur vs IIT Bombay', time: '09:00', date: '2024-10-18', location: 'Rajputana Ground' },
  { id: 25, sport: 'Kabaddi', teams: 'IIT Delhi vs IIT KGP', time: '11:00', date: '2024-10-18', location: 'Rajputana Ground' },
  { id: 26, sport: 'Kabaddi', teams: 'IIT-BHU vs IIT Patna', time: '13:00', date: '2024-10-19', location: 'Rajputana Ground' },
  { id: 27, sport: 'Kabaddi Semi-Final', teams: 'Winner Match 24 vs Winner Match 25', time: '09:00', date: '2024-10-20', location: 'Rajputana Ground' },
  { id: 28, sport: 'Kabaddi Final', teams: 'Winner Semi-Final vs Runner-Up Semi-Final', time: '11:00', date: '2024-10-20', location: 'Rajputana Ground' },

  // Hockey
  { id: 29, sport: 'Hockey', teams: 'IIT Kanpur vs IIT Bombay', time: '14:00', date: '2024-10-18', location: 'ADV Ground' },
  { id: 30, sport: 'Hockey', teams: 'IIT Delhi vs IIT KGP', time: '16:00', date: '2024-10-18', location: 'ADV Ground' },
  { id: 31, sport: 'Hockey', teams: 'IIT-BHU vs IIT Indore', time: '09:00', date: '2024-10-19', location: 'ADV Ground' },
  { id: 32, sport: 'Hockey Semi-Final', teams: 'Winner Match 29 vs Winner Match 30', time: '14:00', date: '2024-10-20', location: 'ADV Ground' },
  { id: 33, sport: 'Hockey Final', teams: 'Winner Semi-Final vs Runner-Up Semi-Final', time: '16:00', date: '2024-10-20', location: 'ADV Ground' },

  // Swimming
  { id: 34, sport: 'Swimming', teams: '100m Freestyle', time: '09:00', date: '2024-10-18', location: 'Pool 1' },
  { id: 35, sport: 'Swimming', teams: '200m Medley', time: '10:00', date: '2024-10-18', location: 'Pool 1' },
  { id: 36, sport: 'Swimming', teams: 'IIT-BHU vs IIT Roorkee', time: '11:00', date: '2024-10-19', location: 'Pool 1' },

  // Badminton
  { id: 37, sport: 'Badminton', teams: 'IIT Kanpur vs IIT Bombay', time: '09:00', date: '2024-10-18', location: 'Court 2' },
  { id: 38, sport: 'Badminton', teams: 'IIT Delhi vs IIT KGP', time: '10:00', date: '2024-10-18', location: 'Court 2' },
  { id: 39, sport: 'Badminton', teams: 'IIT-BHU vs IIT Roorkee', time: '11:00', date: '2024-10-19', location: 'Court 2' },
  { id: 40, sport: 'Badminton Semi-Final', teams: 'Winner Match 37 vs Winner Match 38', time: '09:00', date: '2024-10-20', location: 'Court 2' },
  { id: 41, sport: 'Badminton Final', teams: 'Winner Semi-Final vs Runner-Up Semi-Final', time: '11:00', date: '2024-10-20', location: 'Court 2' },
];

export default events;
