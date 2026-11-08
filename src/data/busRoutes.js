/**
 * KHIT BUS STOP - Official Bus Schedule Database
 * Source Document: BUS_SCHEDULE__Timewise_06_Nov_2026.pdf (All 47 Pages Extracted)
 * 
 * Strict data extraction:
 * - Preserves original bus numbers, stop names, arrival times, and shift names.
 * - Preserves original stop sequence from Page 1 to Page 47.
 * - Flagged unclear entries for manual verification where applicable.
 */

export const BUS_ROUTES = [
  // =========================================================================
  // FIRST SHIFT BUSES (Pages 1 to 20)
  // College Arrival Time: 8:10AM
  // =========================================================================
  {
    id: "fs-bus-1",
    busNumber: "1",
    busNumberLabel: "Bus 1",
    shift: "First Shift",
    collegeArrivalTime: "8:10AM",
    startingPoint: "Koritepadu",
    destination: "College",
    pdfPage: 1,
    stops: [
      { order: 1, stopName: "Koritepadu", arrivalTime: "7:20AM", requiresVerification: false },
      { order: 2, stopName: "Vidyanagar", arrivalTime: "7:22AM", requiresVerification: false },
      { order: 3, stopName: "Welcome Hotel", arrivalTime: "7:23AM", requiresVerification: false },
      { order: 4, stopName: "Navabharath Nagar", arrivalTime: "7:30AM", requiresVerification: false },
      { order: 5, stopName: "Pattabhipuram", arrivalTime: "7:38AM", requiresVerification: false },
      { order: 6, stopName: "ITC", arrivalTime: "7:40AM", requiresVerification: false },
      { order: 7, stopName: "College", arrivalTime: "8:10AM", requiresVerification: false }
    ]
  },
  {
    id: "fs-bus-3",
    busNumber: "3",
    busNumberLabel: "Bus 3",
    shift: "First Shift",
    collegeArrivalTime: "8:10AM",
    startingPoint: "Mangalagiri-Bus stand",
    destination: "College",
    pdfPage: 2,
    stops: [
      { order: 1, stopName: "Mangalagiri-Bus stand", arrivalTime: "6:55AM", requiresVerification: false },
      { order: 2, stopName: "Mangalagiri - old busstand", arrivalTime: "7:00AM", requiresVerification: false },
      { order: 3, stopName: "Tenali Road", arrivalTime: "7:02AM", requiresVerification: false },
      { order: 4, stopName: "Anjaneyaswamy Temple", arrivalTime: "7:05AM", requiresVerification: false },
      { order: 5, stopName: "Depot Road", arrivalTime: "7:08AM", requiresVerification: false },
      { order: 6, stopName: "Chinakakani", arrivalTime: "7:10AM", requiresVerification: false },
      { order: 7, stopName: "KAZA", arrivalTime: "7:15AM", requiresVerification: false },
      { order: 8, stopName: "Kanteru Cross Road", arrivalTime: "7:20AM", requiresVerification: false },
      { order: 9, stopName: "Etukuru bypass", arrivalTime: "7:45AM", requiresVerification: false },
      { order: 10, stopName: "College", arrivalTime: "8:10AM", requiresVerification: false }
    ]
  },
  {
    id: "fs-bus-4",
    busNumber: "4",
    busNumberLabel: "Bus 4",
    shift: "First Shift",
    collegeArrivalTime: "8:10AM",
    startingPoint: "Reddy Hostel.",
    destination: "College",
    pdfPage: 3,
    stops: [
      { order: 1, stopName: "Reddy Hostel.", arrivalTime: "7:25AM", requiresVerification: false },
      { order: 2, stopName: "Syamala nagar", arrivalTime: "7:35AM", requiresVerification: false },
      { order: 3, stopName: "TJPS", arrivalTime: "7:40AM", requiresVerification: false },
      { order: 4, stopName: "Chuttugunta", arrivalTime: "7:45AM", requiresVerification: false },
      { order: 5, stopName: "College", arrivalTime: "8:10AM", requiresVerification: false }
    ]
  },
  {
    id: "fs-bus-6",
    busNumber: "6",
    busNumberLabel: "Bus 6",
    shift: "First Shift",
    collegeArrivalTime: "8:10AM",
    startingPoint: "Chenchupeta",
    destination: "College",
    pdfPage: 4,
    stops: [
      { order: 1, stopName: "Chenchupeta", arrivalTime: "7:05AM", requiresVerification: false },
      { order: 2, stopName: "Government Hospital", arrivalTime: "7:07AM", requiresVerification: false },
      { order: 3, stopName: "Angalakududru", arrivalTime: "7:10AM", requiresVerification: false },
      { order: 4, stopName: "Jagarlamudi", arrivalTime: "7:16AM", requiresVerification: false },
      { order: 5, stopName: "vegendla", arrivalTime: "7:26AM", requiresVerification: false },
      { order: 6, stopName: "Narakoduru", arrivalTime: "7:29AM", requiresVerification: false },
      { order: 7, stopName: "Budampadu", arrivalTime: "7:38AM", requiresVerification: false },
      { order: 8, stopName: "Budampadu-center", arrivalTime: "7:40AM", requiresVerification: false },
      { order: 9, stopName: "College", arrivalTime: "8:10AM", requiresVerification: false }
    ]
  },
  {
    id: "fs-bus-7",
    busNumber: "7",
    busNumberLabel: "Bus 7",
    shift: "First Shift",
    collegeArrivalTime: "8:10AM",
    startingPoint: "Old club road-Kothapet",
    destination: "College",
    pdfPage: 5,
    stops: [
      { order: 1, stopName: "Old club road-Kothapet", arrivalTime: "7:20AM", requiresVerification: false },
      { order: 2, stopName: "Shivalayam", arrivalTime: "7:25AM", requiresVerification: false },
      { order: 3, stopName: "Nallacheruvu-1st line", arrivalTime: "7:35AM", requiresVerification: false },
      { order: 4, stopName: "Nallacheruvu-5th", arrivalTime: "7:37AM", requiresVerification: false },
      { order: 5, stopName: "Nallacheruvu-mudubommalu center", arrivalTime: "7:38AM", requiresVerification: false },
      { order: 6, stopName: "College", arrivalTime: "8:10AM", requiresVerification: false }
    ]
  },
  {
    id: "fs-bus-8",
    busNumber: "8",
    busNumberLabel: "Bus 8",
    shift: "First Shift",
    collegeArrivalTime: "8:10AM",
    startingPoint: "Tenali-Bustand",
    destination: "College",
    pdfPage: 6,
    stops: [
      { order: 1, stopName: "Tenali-Bustand", arrivalTime: "6:55AM", requiresVerification: false },
      { order: 2, stopName: "VSR College", arrivalTime: "6:57AM", requiresVerification: false },
      { order: 3, stopName: "Kattevaram", arrivalTime: "6:58AM", requiresVerification: false },
      { order: 4, stopName: "Somasundarapalem", arrivalTime: "6:59AM", requiresVerification: false },
      { order: 5, stopName: "Nandi velugu", arrivalTime: "7:03AM", requiresVerification: false },
      { order: 6, stopName: "Kolakaluru", arrivalTime: "7:07AM", requiresVerification: false },
      { order: 7, stopName: "Haffpeta", arrivalTime: "7:10AM", requiresVerification: false },
      { order: 8, stopName: "DP Palem", arrivalTime: "7:15AM", requiresVerification: false },
      { order: 9, stopName: "Venkatakrishnapuram", arrivalTime: "7:20AM", requiresVerification: false },
      { order: 10, stopName: "Uppalapadu", arrivalTime: "7:25AM", requiresVerification: false },
      { order: 11, stopName: "Takkellapadu", arrivalTime: "7:30AM", requiresVerification: false },
      { order: 12, stopName: "College", arrivalTime: "8:10AM", requiresVerification: false }
    ]
  },
  {
    id: "fs-bus-11",
    busNumber: "11",
    busNumberLabel: "Bus 11",
    shift: "First Shift",
    collegeArrivalTime: "8:10AM",
    startingPoint: "Mani Hotel",
    destination: "College",
    pdfPage: 7,
    stops: [
      { order: 1, stopName: "Mani Hotel", arrivalTime: "7:20AM", requiresVerification: false },
      { order: 2, stopName: "BR Stadium", arrivalTime: "7:25AM", requiresVerification: false },
      { order: 3, stopName: "Masjid", arrivalTime: "7:27AM", requiresVerification: false },
      { order: 4, stopName: "Urdu school", arrivalTime: "7:30AM", requiresVerification: false },
      { order: 5, stopName: "Ammavaari temple", arrivalTime: "7:35AM", requiresVerification: false },
      { order: 6, stopName: "Muslim College", arrivalTime: "7:40AM", requiresVerification: false },
      { order: 7, stopName: "Current Office", arrivalTime: "7:43AM", requiresVerification: false },
      { order: 8, stopName: "College", arrivalTime: "8:10AM", requiresVerification: false }
    ]
  },
  {
    id: "fs-bus-12",
    busNumber: "12",
    busNumberLabel: "Bus 12",
    shift: "First Shift",
    collegeArrivalTime: "8:10AM",
    startingPoint: "Omega Hospital",
    destination: "College",
    pdfPage: 8,
    stops: [
      { order: 1, stopName: "Omega Hospital", arrivalTime: "7:20AM", requiresVerification: false },
      { order: 2, stopName: "Mangaldas Nagar", arrivalTime: "7:27AM", requiresVerification: false },
      { order: 3, stopName: "Vasavi Complex", arrivalTime: "7:28AM", requiresVerification: false },
      { order: 4, stopName: "Manipuram Bridge", arrivalTime: "7:30AM", requiresVerification: false },
      { order: 5, stopName: "Chandana Brothers", arrivalTime: "7:40AM", requiresVerification: false },
      { order: 6, stopName: "College", arrivalTime: "8:10AM", requiresVerification: false }
    ]
  },
  {
    id: "fs-bus-13",
    busNumber: "13",
    busNumberLabel: "Bus 13",
    shift: "First Shift",
    collegeArrivalTime: "8:10AM",
    startingPoint: "MNR Kalyan Mantapam",
    destination: "College",
    pdfPage: 9,
    stops: [
      { order: 1, stopName: "MNR Kalyan Mantapam", arrivalTime: "7:30AM", requiresVerification: false },
      { order: 2, stopName: "AT Agraharam 5th Line", arrivalTime: "7:38AM", requiresVerification: false },
      { order: 3, stopName: "AT Agraharam 14th Line", arrivalTime: "7:40AM", requiresVerification: false },
      { order: 4, stopName: "Poleramma Temple", arrivalTime: "7:42AM", requiresVerification: false },
      { order: 5, stopName: "VIP Road-KM Nagar1st", arrivalTime: "7:44AM", requiresVerification: false },
      { order: 6, stopName: "VIP Road-KM Nagar 5th line", arrivalTime: "7:50AM", requiresVerification: false },
      { order: 7, stopName: "Lalpuram", arrivalTime: "7:53AM", requiresVerification: false },
      { order: 8, stopName: "College", arrivalTime: "8:10AM", requiresVerification: false }
    ]
  },
  {
    id: "fs-bus-19",
    busNumber: "19",
    busNumberLabel: "Bus 19",
    shift: "First Shift",
    collegeArrivalTime: "8:10AM",
    startingPoint: "Inner Ring Road-DMR Kalyan Mantapam",
    destination: "College",
    pdfPage: 10,
    stops: [
      { order: 1, stopName: "Inner Ring Road-DMR Kalyan Mantapam", arrivalTime: "7:10AM", requiresVerification: false },
      { order: 2, stopName: "YSR statue", arrivalTime: "7:12AM", requiresVerification: false },
      { order: 3, stopName: "Vijaya Digital", arrivalTime: "7:15AM", requiresVerification: false },
      { order: 4, stopName: "Chillies", arrivalTime: "7:20AM", requiresVerification: false },
      { order: 5, stopName: "Nagaralu", arrivalTime: "7:23AM", requiresVerification: false },
      { order: 6, stopName: "SBI", arrivalTime: "7:27AM", requiresVerification: false },
      { order: 7, stopName: "College", arrivalTime: "8:10AM", requiresVerification: false }
    ]
  },
  {
    id: "fs-bus-21",
    busNumber: "21",
    busNumberLabel: "Bus 21",
    shift: "First Shift",
    collegeArrivalTime: "8:10AM",
    startingPoint: "Sattenapalli-Shaadikhana",
    destination: "College",
    pdfPage: 11,
    stops: [
      { order: 1, stopName: "Sattenapalli-Shaadikhana", arrivalTime: "6:50AM", requiresVerification: false },
      { order: 2, stopName: "Taluka office", arrivalTime: "6:55AM", requiresVerification: false },
      { order: 3, stopName: "Nandigama Cross road", arrivalTime: "7:00AM", requiresVerification: false },
      { order: 4, stopName: "Siripuram cross road", arrivalTime: "7:15AM", requiresVerification: false },
      { order: 5, stopName: "Medikonduru", arrivalTime: "7:20AM", requiresVerification: false },
      { order: 6, stopName: "Perecherla center", arrivalTime: "7:30AM", requiresVerification: false },
      { order: 7, stopName: "MBTS polytechnic College", arrivalTime: "7:40AM", requiresVerification: false },
      { order: 8, stopName: "Nallapadu - center", arrivalTime: "7:45AM", requiresVerification: false },
      { order: 9, stopName: "Sriram nagar", arrivalTime: "7:50AM", requiresVerification: false },
      { order: 10, stopName: "College", arrivalTime: "8:10AM", requiresVerification: false }
    ]
  },
  {
    id: "fs-bus-22",
    busNumber: "22",
    busNumberLabel: "Bus 22",
    shift: "First Shift",
    collegeArrivalTime: "8:10AM",
    startingPoint: "Chinaravuru Park",
    destination: "College",
    pdfPage: 12,
    stops: [
      { order: 1, stopName: "Chinaravuru Park", arrivalTime: "6:50AM", requiresVerification: false },
      { order: 2, stopName: "Saibaba Temple", arrivalTime: "6:52AM", requiresVerification: false },
      { order: 3, stopName: "Wahab Chowk", arrivalTime: "6:55AM", requiresVerification: false },
      { order: 4, stopName: "College", arrivalTime: "8:10AM", requiresVerification: false }
    ]
  },
  {
    id: "fs-bus-23",
    busNumber: "23",
    busNumberLabel: "Bus 23",
    shift: "First Shift",
    collegeArrivalTime: "8:10AM",
    startingPoint: "Tenali Market",
    destination: "College",
    pdfPage: 13,
    stops: [
      { order: 1, stopName: "Tenali Market", arrivalTime: "7:00AM", requiresVerification: false },
      { order: 2, stopName: "Sultanabad", arrivalTime: "7:07AM", requiresVerification: false },
      { order: 3, stopName: "Ushodaya", arrivalTime: "7:08AM", requiresVerification: false },
      { order: 4, stopName: "Chekuru locks", arrivalTime: "7:17AM", requiresVerification: false },
      { order: 5, stopName: "College", arrivalTime: "8:10AM", requiresVerification: false }
    ]
  },
  {
    id: "fs-bus-24",
    busNumber: "24",
    busNumberLabel: "Bus 24",
    shift: "First Shift",
    collegeArrivalTime: "8:10AM",
    startingPoint: "Ratna Talkies",
    destination: "College",
    pdfPage: 14,
    stops: [
      { order: 1, stopName: "Ratna Talkies", arrivalTime: "6:50AM", requiresVerification: false },
      { order: 2, stopName: "Chakali Cheruvu", arrivalTime: "6:55AM", requiresVerification: false },
      { order: 3, stopName: "Vadlamudi", arrivalTime: "7:15AM", requiresVerification: false },
      { order: 4, stopName: "College", arrivalTime: "8:10AM", requiresVerification: false }
    ]
  },
  {
    id: "fs-bus-25",
    busNumber: "25",
    busNumberLabel: "Bus 25",
    shift: "First Shift",
    collegeArrivalTime: "8:10AM",
    startingPoint: "Lodge center",
    destination: "College",
    pdfPage: 15,
    stops: [
      { order: 1, stopName: "Lodge center", arrivalTime: "7:25AM", requiresVerification: false },
      { order: 2, stopName: "Hollywood", arrivalTime: "7:28AM", requiresVerification: false },
      { order: 3, stopName: "Sonovision", arrivalTime: "7:32AM", requiresVerification: false },
      { order: 4, stopName: "NTR stadium", arrivalTime: "7:35AM", requiresVerification: false },
      { order: 5, stopName: "Collector office", arrivalTime: "7:43AM", requiresVerification: false },
      { order: 6, stopName: "College", arrivalTime: "8:10AM", requiresVerification: false }
    ]
  },
  {
    id: "fs-bus-26",
    busNumber: "26",
    busNumberLabel: "Bus 26",
    shift: "First Shift",
    collegeArrivalTime: "8:10AM",
    startingPoint: "Krishnamahal cente",
    destination: "College",
    pdfPage: 16,
    stops: [
      { order: 1, stopName: "Krishnamahal cente", arrivalTime: "6:58AM", requiresVerification: false },
      { order: 2, stopName: "kalamandir", arrivalTime: "7:00AM", requiresVerification: false },
      { order: 3, stopName: "Kalyani hotel", arrivalTime: "7:04AM", requiresVerification: false },
      { order: 4, stopName: "Vijayabank", arrivalTime: "7:06AM", requiresVerification: false },
      { order: 5, stopName: "NRT center", arrivalTime: "7:08AM", requiresVerification: false },
      { order: 6, stopName: "Busstand", arrivalTime: "7:10AM", requiresVerification: false },
      { order: 7, stopName: "Ganapavaram", arrivalTime: "7:13AM", requiresVerification: false },
      { order: 8, stopName: "Ganapavaram colony", arrivalTime: "7:15AM", requiresVerification: false },
      { order: 9, stopName: "Timmapuram", arrivalTime: "7:18AM", requiresVerification: false },
      { order: 10, stopName: "Yedlapadu", arrivalTime: "7:23AM", requiresVerification: false },
      { order: 11, stopName: "Yedlapadu cinemahall center", arrivalTime: "7:25AM", requiresVerification: false },
      { order: 12, stopName: "Vankayalapadu", arrivalTime: "7:30AM", requiresVerification: false },
      { order: 13, stopName: "Boyapalem", arrivalTime: "7:35AM", requiresVerification: false },
      { order: 14, stopName: "College", arrivalTime: "8:10AM", requiresVerification: false }
    ]
  },
  {
    id: "fs-bus-27",
    busNumber: "27",
    busNumberLabel: "Bus 27",
    shift: "First Shift",
    collegeArrivalTime: "8:10AM",
    startingPoint: "RTO office",
    destination: "College",
    pdfPage: 17,
    stops: [
      { order: 1, stopName: "RTO office", arrivalTime: "7:10AM", requiresVerification: false },
      { order: 2, stopName: "Mahalakshmi Hotel", arrivalTime: "7:15AM", requiresVerification: false },
      { order: 3, stopName: "SVN colony", arrivalTime: "7:20AM", requiresVerification: false },
      { order: 4, stopName: "Gardens", arrivalTime: "7:30AM", requiresVerification: false },
      { order: 5, stopName: "Kamma Hostel", arrivalTime: "7:35AM", requiresVerification: false },
      { order: 6, stopName: "College", arrivalTime: "8:10AM", requiresVerification: false }
    ]
  },
  {
    id: "fs-bus-28",
    busNumber: "28",
    busNumberLabel: "Bus 28",
    shift: "First Shift",
    collegeArrivalTime: "8:10AM",
    startingPoint: "Palakaluru",
    destination: "College",
    pdfPage: 18,
    stops: [
      { order: 1, stopName: "Palakaluru", arrivalTime: "7:10AM", requiresVerification: false },
      { order: 2, stopName: "JLE cinema", arrivalTime: "7:15AM", requiresVerification: false },
      { order: 3, stopName: "Ambika Apartment", arrivalTime: "7:17AM", requiresVerification: false },
      { order: 4, stopName: "Vignan Nirula college", arrivalTime: "7:18AM", requiresVerification: false },
      { order: 5, stopName: "Ratnagiri nagar", arrivalTime: "7:20AM", requiresVerification: false },
      { order: 6, stopName: "Udyog nagar arch", arrivalTime: "7:23AM", requiresVerification: false },
      { order: 7, stopName: "Nageswar hospital", arrivalTime: "7:25AM", requiresVerification: false },
      { order: 8, stopName: "Gujjanagundla", arrivalTime: "7:30AM", requiresVerification: false },
      { order: 9, stopName: "Hanumaiah Company", arrivalTime: "7:32AM", requiresVerification: false },
      { order: 10, stopName: "Stambala garuvu", arrivalTime: "7:35AM", requiresVerification: false },
      { order: 11, stopName: "College", arrivalTime: "8:10AM", requiresVerification: false }
    ]
  },
  {
    id: "fs-bus-31",
    busNumber: "31",
    busNumberLabel: "Bus 31",
    shift: "First Shift",
    collegeArrivalTime: "8:10AM",
    startingPoint: "Hosanna Mandir Arch",
    destination: "College",
    pdfPage: 19,
    stops: [
      { order: 1, stopName: "Hosanna Mandir Arch", arrivalTime: "7:10AM", requiresVerification: false },
      { order: 2, stopName: "Gorantla - Center", arrivalTime: "7:13AM", requiresVerification: false },
      { order: 3, stopName: "Medical Hostel", arrivalTime: "7:18AM", requiresVerification: false },
      { order: 4, stopName: "Shivalayam", arrivalTime: "7:20AM", requiresVerification: false },
      { order: 5, stopName: "Ala Hospital", arrivalTime: "7:25AM", requiresVerification: false },
      { order: 6, stopName: "Bakers fun", arrivalTime: "7:30AM", requiresVerification: false },
      { order: 7, stopName: "Sitaramaiah School", arrivalTime: "7:32AM", requiresVerification: false },
      { order: 8, stopName: "College", arrivalTime: "8:10AM", requiresVerification: false }
    ]
  },
  {
    id: "fs-bus-32",
    busNumber: "32",
    busNumberLabel: "Bus 32",
    shift: "First Shift",
    collegeArrivalTime: "8:10AM",
    startingPoint: "Nambur-tank center",
    destination: "College",
    pdfPage: 20,
    stops: [
      { order: 1, stopName: "Nambur-tank center", arrivalTime: "7:15AM", requiresVerification: false },
      { order: 2, stopName: "VVIT Road", arrivalTime: "7:17AM", requiresVerification: false },
      { order: 3, stopName: "Hospital Center", arrivalTime: "7:20AM", requiresVerification: false },
      { order: 4, stopName: "Bosu bomma", arrivalTime: "7:23AM", requiresVerification: false },
      { order: 5, stopName: "Donka Road", arrivalTime: "7:25AM", requiresVerification: false },
      { order: 6, stopName: "Naburu Station", arrivalTime: "7:27AM", requiresVerification: false },
      { order: 7, stopName: "Pedakakani", arrivalTime: "7:30AM", requiresVerification: false },
      { order: 8, stopName: "Auto nagar temple", arrivalTime: "7:35AM", requiresVerification: false },
      { order: 9, stopName: "College", arrivalTime: "8:10AM", requiresVerification: false }
    ]
  },

  // =========================================================================
  // SECOND SHIFT BUSES (Pages 21 to 47)
  // College Arrival Time: 9:45AM
  // =========================================================================
  {
    id: "ss-bus-1",
    busNumber: "1",
    busNumberLabel: "Bus 1",
    shift: "Second Shift",
    collegeArrivalTime: "9:45AM",
    startingPoint: "Koritepadu",
    destination: "College",
    pdfPage: 21,
    stops: [
      { order: 1, stopName: "Koritepadu", arrivalTime: "8:50AM", requiresVerification: false },
      { order: 2, stopName: "Saibaba Road", arrivalTime: "8:52AM", requiresVerification: false },
      { order: 3, stopName: "Welcome Hotel", arrivalTime: "8:52AM", requiresVerification: false },
      { order: 4, stopName: "Navabharath Nagar", arrivalTime: "8:55AM", requiresVerification: false },
      { order: 5, stopName: "ITC", arrivalTime: "9:08AM", requiresVerification: false },
      { order: 6, stopName: "KKR -Sai Nivya Theater", arrivalTime: "9:10AM", requiresVerification: false },
      { order: 7, stopName: "College", arrivalTime: "9:45AM", requiresVerification: false }
    ]
  },
  {
    id: "ss-bus-2",
    busNumber: "2",
    busNumberLabel: "Bus 2",
    shift: "Second Shift",
    collegeArrivalTime: "9:45AM",
    startingPoint: "Mangalagiri Bus stand",
    destination: "College",
    pdfPage: 22,
    stops: [
      { order: 1, stopName: "Mangalagiri Bus stand", arrivalTime: "8:30AM", requiresVerification: false },
      { order: 2, stopName: "Tenali Road", arrivalTime: "8:32AM", requiresVerification: false },
      { order: 3, stopName: "Depot Road", arrivalTime: "8:35AM", requiresVerification: false },
      { order: 4, stopName: "Alpha cafe", arrivalTime: "8:36AM", requiresVerification: false },
      { order: 5, stopName: "Chinakakani", arrivalTime: "8:39AM", requiresVerification: false },
      { order: 6, stopName: "Kaza", arrivalTime: "8:42AM", requiresVerification: false },
      { order: 7, stopName: "Kanteru Cross Road", arrivalTime: "8:45AM", requiresVerification: false },
      { order: 8, stopName: "Etukuru Bypass", arrivalTime: "9:10AM", requiresVerification: false },
      { order: 9, stopName: "College", arrivalTime: "9:45AM", requiresVerification: false }
    ]
  },
  {
    id: "ss-bus-4",
    busNumber: "4",
    busNumberLabel: "Bus 4",
    shift: "Second Shift",
    collegeArrivalTime: "9:45AM",
    startingPoint: "Reddy Hostel",
    destination: "College",
    pdfPage: 23,
    stops: [
      { order: 1, stopName: "Reddy Hostel", arrivalTime: "8:50AM", requiresVerification: false },
      { order: 2, stopName: "Nallacheruvu-mudubommalu", arrivalTime: "9:20AM", requiresVerification: false },
      { order: 3, stopName: "College", arrivalTime: "9:45AM", requiresVerification: false }
    ]
  },
  {
    id: "ss-bus-5",
    busNumber: "5",
    busNumberLabel: "Bus 5",
    shift: "Second Shift",
    collegeArrivalTime: "9:45AM",
    startingPoint: "Reddy Hostel",
    destination: "College",
    pdfPage: 24,
    stops: [
      { order: 1, stopName: "Reddy Hostel", arrivalTime: "8:50AM", requiresVerification: false },
      { order: 2, stopName: "Syamala Nagar", arrivalTime: "9:00AM", requiresVerification: false },
      { order: 3, stopName: "College", arrivalTime: "9:45AM", requiresVerification: false }
    ]
  },
  {
    id: "ss-bus-7",
    busNumber: "7",
    busNumberLabel: "Bus 7",
    shift: "Second Shift",
    collegeArrivalTime: "9:45AM",
    startingPoint: "Kothapeta-Shivalayam",
    destination: "College",
    pdfPage: 25,
    stops: [
      { order: 1, stopName: "Kothapeta-Shivalayam", arrivalTime: "8:55AM", requiresVerification: false },
      { order: 2, stopName: "Ponnur road-Ammavari Temple", arrivalTime: "9:10AM", requiresVerification: false },
      { order: 3, stopName: "College", arrivalTime: "9:45AM", requiresVerification: false }
    ]
  },
  {
    id: "ss-bus-9",
    busNumber: "9",
    busNumberLabel: "Bus 9",
    shift: "Second Shift",
    collegeArrivalTime: "9:45AM",
    startingPoint: "Chinaravuru park",
    destination: "College",
    pdfPage: 26,
    stops: [
      { order: 1, stopName: "Chinaravuru park", arrivalTime: "8:20AM", requiresVerification: false },
      { order: 2, stopName: "Saibaba temple", arrivalTime: "8:23AM", requiresVerification: false },
      { order: 3, stopName: "Masjid", arrivalTime: "8:25AM", requiresVerification: false },
      { order: 4, stopName: "Jagarlamudi", arrivalTime: "8:45AM", requiresVerification: false },
      { order: 5, stopName: "Vegendla gate", arrivalTime: "8:55AM", requiresVerification: false },
      { order: 6, stopName: "College", arrivalTime: "9:45AM", requiresVerification: false }
    ]
  },
  {
    id: "ss-bus-10",
    busNumber: "10",
    busNumberLabel: "Bus 10",
    shift: "Second Shift",
    collegeArrivalTime: "9:45AM",
    startingPoint: "Kattevaram",
    destination: "College",
    pdfPage: 27,
    stops: [
      { order: 1, stopName: "Kattevaram", arrivalTime: "8:20AM", requiresVerification: false },
      { order: 2, stopName: "VSR", arrivalTime: "8:21AM", requiresVerification: false },
      { order: 3, stopName: "Market", arrivalTime: "8:25AM", requiresVerification: false },
      { order: 4, stopName: "College", arrivalTime: "9:45AM", requiresVerification: false }
    ]
  },
  {
    id: "ss-bus-11",
    busNumber: "11",
    busNumberLabel: "Bus 11",
    shift: "Second Shift",
    collegeArrivalTime: "9:45AM",
    startingPoint: "Mani hotel",
    destination: "College",
    pdfPage: 28,
    stops: [
      { order: 1, stopName: "Mani hotel", arrivalTime: "8:50AM", requiresVerification: false },
      { order: 2, stopName: "Gandhi Statue", arrivalTime: "8:55AM", requiresVerification: false },
      { order: 3, stopName: "BR stadium", arrivalTime: "9:05AM", requiresVerification: false },
      { order: 4, stopName: "College", arrivalTime: "9:45AM", requiresVerification: false }
    ]
  },
  {
    id: "ss-bus-12",
    busNumber: "12",
    busNumberLabel: "Bus 12",
    shift: "Second Shift",
    collegeArrivalTime: "9:45AM",
    startingPoint: "Omega Hospital",
    destination: "College",
    pdfPage: 29,
    stops: [
      { order: 1, stopName: "Omega Hospital", arrivalTime: "8:50AM", requiresVerification: false },
      { order: 2, stopName: "Mangaladas Nagar", arrivalTime: "8:55AM", requiresVerification: false },
      { order: 3, stopName: "Vasavi complex", arrivalTime: "8:58AM", requiresVerification: false },
      { order: 4, stopName: "Manipuram Bridge", arrivalTime: "9:00AM", requiresVerification: false },
      { order: 5, stopName: "Chandana Bros", arrivalTime: "9:10AM", requiresVerification: false },
      { order: 6, stopName: "Vijayalakshmi", arrivalTime: "9:12AM", requiresVerification: false },
      { order: 7, stopName: "College", arrivalTime: "9:45AM", requiresVerification: false }
    ]
  },
  {
    id: "ss-bus-13",
    busNumber: "13",
    busNumberLabel: "Bus 13",
    shift: "Second Shift",
    collegeArrivalTime: "9:45AM",
    startingPoint: "Balaji Apartment",
    destination: "College",
    pdfPage: 30,
    stops: [
      { order: 1, stopName: "Balaji Apartment", arrivalTime: "8:40AM", requiresVerification: false },
      { order: 2, stopName: "YSR Statue", arrivalTime: "8:43AM", requiresVerification: false },
      { order: 3, stopName: "NSR Kalyana mantapam", arrivalTime: "8:45AM", requiresVerification: false },
      { order: 4, stopName: "MNR Kalyan Mantapam", arrivalTime: "9:00AM", requiresVerification: false },
      { order: 5, stopName: "AT Agraharam 5th Line", arrivalTime: "9:03AM", requiresVerification: false },
      { order: 6, stopName: "AT Agraharam 14th Line", arrivalTime: "9:06AM", requiresVerification: false },
      { order: 7, stopName: "Poleramma Temple", arrivalTime: "9:10AM", requiresVerification: false },
      { order: 8, stopName: "VIP Road-KM Nagar1st", arrivalTime: "9:13AM", requiresVerification: false },
      { order: 9, stopName: "VIP Road-KM Nagar 5th line", arrivalTime: "9:16AM", requiresVerification: false },
      { order: 10, stopName: "Lalpuram", arrivalTime: "9:20AM", requiresVerification: false },
      { order: 11, stopName: "College", arrivalTime: "9:45AM", requiresVerification: false }
    ]
  },
  {
    id: "ss-bus-14",
    busNumber: "14",
    busNumberLabel: "Bus 14",
    shift: "Second Shift",
    collegeArrivalTime: "9:45AM",
    startingPoint: "Lam Center",
    destination: "College",
    pdfPage: 31,
    stops: [
      { order: 1, stopName: "Lam Center", arrivalTime: "8:35AM", requiresVerification: false },
      { order: 2, stopName: "Jonnalagadda Cross Rpad", arrivalTime: "8:37AM", requiresVerification: true },
      { order: 3, stopName: "Hosanna mandir arch", arrivalTime: "8:45AM", requiresVerification: false },
      { order: 4, stopName: "Gorantla", arrivalTime: "8:48AM", requiresVerification: false },
      { order: 5, stopName: "Nagaralu", arrivalTime: "8:55AM", requiresVerification: false },
      { order: 6, stopName: "College", arrivalTime: "9:45AM", requiresVerification: false }
    ]
  },
  {
    id: "ss-bus-15",
    busNumber: "15",
    busNumberLabel: "Bus 15",
    shift: "Second Shift",
    collegeArrivalTime: "9:45AM",
    startingPoint: "Ponnuru Road-Charminar Hotel",
    destination: "College",
    pdfPage: 32,
    stops: [
      { order: 1, stopName: "Ponnuru Road-Charminar Hotel", arrivalTime: "9:00AM", requiresVerification: false },
      { order: 2, stopName: "Masjid", arrivalTime: "9:03AM", requiresVerification: false },
      { order: 3, stopName: "Ammavari Temple", arrivalTime: "9:05AM", requiresVerification: false },
      { order: 4, stopName: "College", arrivalTime: "9:45AM", requiresVerification: false }
    ]
  },
  {
    id: "ss-bus-16",
    busNumber: "16",
    busNumberLabel: "Bus 16",
    shift: "Second Shift",
    collegeArrivalTime: "9:45AM",
    startingPoint: "Sonovision",
    destination: "College",
    pdfPage: 33,
    stops: [
      { order: 1, stopName: "Sonovision", arrivalTime: "8:55AM", requiresVerification: false },
      { order: 2, stopName: "Bakers fun", arrivalTime: "9:00AM", requiresVerification: false },
      { order: 3, stopName: "Ande silks", arrivalTime: "9:05AM", requiresVerification: false },
      { order: 4, stopName: "Kamma Hostel", arrivalTime: "9:10AM", requiresVerification: false },
      { order: 5, stopName: "College", arrivalTime: "9:45AM", requiresVerification: false }
    ]
  },
  {
    id: "ss-bus-17",
    busNumber: "17",
    busNumberLabel: "Bus 17",
    shift: "Second Shift",
    collegeArrivalTime: "9:45AM",
    startingPoint: "Tenali Bustand",
    destination: "College",
    pdfPage: 34,
    stops: [
      { order: 1, stopName: "Tenali Bustand", arrivalTime: "8:20AM", requiresVerification: false },
      { order: 2, stopName: "Chenchupeta", arrivalTime: "8:25AM", requiresVerification: false },
      { order: 3, stopName: "Angalakuduru", arrivalTime: "8:40AM", requiresVerification: false },
      { order: 4, stopName: "Garuvupalem", arrivalTime: "8:50AM", requiresVerification: false },
      { order: 5, stopName: "College", arrivalTime: "9:45AM", requiresVerification: false }
    ]
  },
  {
    id: "ss-bus-18",
    busNumber: "18",
    busNumberLabel: "Bus 18",
    shift: "Second Shift",
    collegeArrivalTime: "9:45AM",
    startingPoint: "Sriram Nagar",
    destination: "College",
    pdfPage: 35,
    stops: [
      { order: 1, stopName: "Sriram Nagar", arrivalTime: "8:55AM", requiresVerification: false },
      { order: 2, stopName: "Subhani Hotel", arrivalTime: "8:57AM", requiresVerification: false },
      { order: 3, stopName: "Mirchi Yard", arrivalTime: "8:58AM", requiresVerification: false },
      { order: 4, stopName: "Housing Board", arrivalTime: "9:00AM", requiresVerification: false },
      { order: 5, stopName: "Nallapadu", arrivalTime: "9:05AM", requiresVerification: false },
      { order: 6, stopName: "MBTS", arrivalTime: "9:10AM", requiresVerification: false },
      { order: 7, stopName: "College", arrivalTime: "9:45AM", requiresVerification: false }
    ]
  },
  {
    id: "ss-bus-19",
    busNumber: "19",
    busNumberLabel: "Bus 19",
    shift: "Second Shift",
    collegeArrivalTime: "9:45AM",
    startingPoint: "DMR Kalyana mantapam",
    destination: "College",
    pdfPage: 36,
    stops: [
      { order: 1, stopName: "DMR Kalyana mantapam", arrivalTime: "8:50AM", requiresVerification: false },
      { order: 2, stopName: "YSR statue", arrivalTime: "8:52AM", requiresVerification: false },
      { order: 3, stopName: "Vijaya Digital", arrivalTime: "8:55AM", requiresVerification: false },
      { order: 4, stopName: "Chillies", arrivalTime: "9:00AM", requiresVerification: false },
      { order: 5, stopName: "Medical Hostel", arrivalTime: "9:06AM", requiresVerification: false },
      { order: 6, stopName: "Shivalayam", arrivalTime: "9:08AM", requiresVerification: false },
      { order: 7, stopName: "SBI", arrivalTime: "9:12AM", requiresVerification: false },
      { order: 8, stopName: "College", arrivalTime: "9:45AM", requiresVerification: false }
    ]
  },
  {
    id: "ss-bus-20",
    busNumber: "20",
    busNumberLabel: "Bus 20",
    shift: "Second Shift",
    collegeArrivalTime: "9:45AM",
    startingPoint: "Nambur-Tank Center",
    destination: "College",
    pdfPage: 37,
    stops: [
      { order: 1, stopName: "Nambur-Tank Center", arrivalTime: "8:45AM", requiresVerification: false },
      { order: 2, stopName: "Nambur Cross road", arrivalTime: "8:50AM", requiresVerification: false },
      { order: 3, stopName: "Pedakakani", arrivalTime: "8:55AM", requiresVerification: false },
      { order: 4, stopName: "Auto nagar Temple", arrivalTime: "9:02AM", requiresVerification: false },
      { order: 5, stopName: "College", arrivalTime: "9:45AM", requiresVerification: false }
    ]
  },
  {
    id: "ss-bus-25",
    busNumber: "25",
    busNumberLabel: "Bus 25",
    shift: "Second Shift",
    collegeArrivalTime: "9:45AM",
    startingPoint: "Lodge Center",
    destination: "College",
    pdfPage: 38,
    stops: [
      { order: 1, stopName: "Lodge Center", arrivalTime: "9:00 AM", requiresVerification: false },
      { order: 2, stopName: "Sitaramaiah School", arrivalTime: "8:58AM", requiresVerification: false },
      { order: 3, stopName: "NTR Stadium", arrivalTime: "8:59AM", requiresVerification: false },
      { order: 4, stopName: "College", arrivalTime: "9:45AM", requiresVerification: false }
    ]
  },
  {
    id: "ss-bus-26",
    busNumber: "26",
    busNumberLabel: "Bus 26",
    shift: "Second Shift",
    collegeArrivalTime: "9:45AM",
    startingPoint: "Bhanu Electronics",
    destination: "College",
    pdfPage: 39,
    stops: [
      { order: 1, stopName: "Bhanu Electronics", arrivalTime: "8:45AM", requiresVerification: false },
      { order: 2, stopName: "Kalamandir", arrivalTime: "8:50AM", requiresVerification: false },
      { order: 3, stopName: "Clock Tower", arrivalTime: "8:52AM", requiresVerification: false },
      { order: 4, stopName: "MRO office", arrivalTime: "8:53AM", requiresVerification: false },
      { order: 5, stopName: "Kalyani Hotel", arrivalTime: "8:54AM", requiresVerification: false },
      { order: 6, stopName: "Vijaya bank", arrivalTime: "8:56AM", requiresVerification: false },
      { order: 7, stopName: "NRT center", arrivalTime: "8:58AM", requiresVerification: false },
      { order: 8, stopName: "Bus stand", arrivalTime: "9:00AM", requiresVerification: false },
      { order: 9, stopName: "College", arrivalTime: "9:45AM", requiresVerification: false }
    ]
  },
  {
    id: "ss-bus-27",
    busNumber: "27",
    busNumberLabel: "Bus 27",
    shift: "Second Shift",
    collegeArrivalTime: "9:45AM",
    startingPoint: "RTO office",
    destination: "College",
    pdfPage: 40,
    stops: [
      { order: 1, stopName: "RTO office", arrivalTime: "8:50AM", requiresVerification: false },
      { order: 2, stopName: "Mahalakshmi Hotel", arrivalTime: "8:55AM", requiresVerification: false },
      { order: 3, stopName: "SVN Colony", arrivalTime: "9:00AM", requiresVerification: false },
      { order: 4, stopName: "Gardens", arrivalTime: "9:05AM", requiresVerification: false },
      { order: 5, stopName: "Collector Office", arrivalTime: "9:15AM", requiresVerification: false },
      { order: 6, stopName: "College", arrivalTime: "9:45AM", requiresVerification: false }
    ]
  },
  {
    id: "ss-bus-28",
    busNumber: "28",
    busNumberLabel: "Bus 28",
    shift: "Second Shift",
    collegeArrivalTime: "9:45AM",
    startingPoint: "Palakaluru",
    destination: "College",
    pdfPage: 41,
    stops: [
      { order: 1, stopName: "Palakaluru", arrivalTime: "8:50AM", requiresVerification: false },
      { order: 2, stopName: "Ambika Apartment", arrivalTime: "8:55AM", requiresVerification: false },
      { order: 3, stopName: "Ratnagiri nagar", arrivalTime: "9:00AM", requiresVerification: false },
      { order: 4, stopName: "Udyog Nagar", arrivalTime: "9:03AM", requiresVerification: false },
      { order: 5, stopName: "Nageswar hospital", arrivalTime: "9:05AM", requiresVerification: false },
      { order: 6, stopName: "Gujjanagundla", arrivalTime: "9:07AM", requiresVerification: false },
      { order: 7, stopName: "Hanumaiah Company", arrivalTime: "9:08AM", requiresVerification: false },
      { order: 8, stopName: "Stambala garuvu", arrivalTime: "9:10AM", requiresVerification: false },
      { order: 9, stopName: "Pattabhipuram", arrivalTime: "9:12AM", requiresVerification: false },
      { order: 10, stopName: "TJPS", arrivalTime: "9:14AM", requiresVerification: false },
      { order: 11, stopName: "College", arrivalTime: "9:45AM", requiresVerification: false }
    ]
  },
  {
    id: "ss-bus-29",
    busNumber: "29",
    busNumberLabel: "Bus 29",
    shift: "Second Shift",
    collegeArrivalTime: "9:45AM",
    startingPoint: "Sattenapalli Taluka Center",
    destination: "College",
    pdfPage: 42,
    stops: [
      { order: 1, stopName: "Sattenapalli Taluka Center", arrivalTime: "8:20AM", requiresVerification: false },
      { order: 2, stopName: "Busstand", arrivalTime: "8:23AM", requiresVerification: false },
      { order: 3, stopName: "Nandigama Cross Road", arrivalTime: "8:30AM", requiresVerification: false },
      { order: 4, stopName: "Jangamguntla palem", arrivalTime: "8:45AM", requiresVerification: false },
      { order: 5, stopName: "Siripuram X road", arrivalTime: "8:50AM", requiresVerification: false },
      { order: 6, stopName: "Medikonduru", arrivalTime: "8:55AM", requiresVerification: false },
      { order: 7, stopName: "Potlapadu", arrivalTime: "8:57AM", requiresVerification: false },
      { order: 8, stopName: "Perecherla", arrivalTime: "9:05AM", requiresVerification: false },
      { order: 9, stopName: "Kailasagiri", arrivalTime: "9:07AM", requiresVerification: false },
      { order: 10, stopName: "DVS function hall,Nallpadu", arrivalTime: "9:15AM", requiresVerification: false },
      { order: 11, stopName: "College", arrivalTime: "9:45AM", requiresVerification: false }
    ]
  },
  {
    id: "ss-bus-30",
    busNumber: "30",
    busNumberLabel: "Bus 30",
    shift: "Second Shift",
    collegeArrivalTime: "9:45AM",
    startingPoint: "Ratna Talkies",
    destination: "College",
    pdfPage: 43,
    stops: [
      { order: 1, stopName: "Ratna Talkies", arrivalTime: "8:20AM", requiresVerification: false },
      { order: 2, stopName: "Chakali Cheruvu", arrivalTime: "8:23AM", requiresVerification: false },
      { order: 3, stopName: "Sultanabad", arrivalTime: "8:30AM", requiresVerification: false },
      { order: 4, stopName: "Vadlamudi", arrivalTime: "8:45AM", requiresVerification: false },
      { order: 5, stopName: "College", arrivalTime: "9:45AM", requiresVerification: false }
    ]
  },
  {
    id: "ss-bus-31",
    busNumber: "31",
    busNumberLabel: "Bus 31",
    shift: "Second Shift",
    collegeArrivalTime: "9:45AM",
    startingPoint: "Ala Hospital",
    destination: "College",
    pdfPage: 44,
    stops: [
      { order: 1, stopName: "Ala Hospital", arrivalTime: "8:50AM", requiresVerification: false },
      { order: 2, stopName: "Hollywood", arrivalTime: "9:00AM", requiresVerification: false },
      { order: 3, stopName: "College", arrivalTime: "9:45AM", requiresVerification: false }
    ]
  },
  {
    id: "ss-bus-33",
    busNumber: "33",
    busNumberLabel: "Bus 33",
    shift: "Second Shift",
    collegeArrivalTime: "9:45AM",
    startingPoint: "Tumuluru",
    destination: "College",
    pdfPage: 45,
    stops: [
      { order: 1, stopName: "Tumuluru", arrivalTime: "8:00AM", requiresVerification: false },
      { order: 2, stopName: "Kollipara", arrivalTime: "8:05AM", requiresVerification: false },
      { order: 3, stopName: "Chivaluru", arrivalTime: "8:17AM", requiresVerification: false },
      { order: 4, stopName: "Siripuram", arrivalTime: "8:20AM", requiresVerification: false },
      { order: 5, stopName: "Athota", arrivalTime: "8:25AM", requiresVerification: false },
      { order: 6, stopName: "Nandivelugu-High School", arrivalTime: "8:28AM", requiresVerification: false },
      { order: 7, stopName: "Nandivelugu Junction", arrivalTime: "8:33AM", requiresVerification: false },
      { order: 8, stopName: "Erikalapudi", arrivalTime: "8:34AM", requiresVerification: false },
      { order: 9, stopName: "Kolakaluru", arrivalTime: "8:38AM", requiresVerification: false },
      { order: 10, stopName: "Khazipeta", arrivalTime: "8:43AM", requiresVerification: false },
      { order: 11, stopName: "Tangellamudi", arrivalTime: "8:48AM", requiresVerification: false },
      { order: 12, stopName: "Haffpeta", arrivalTime: "8:50AM", requiresVerification: false },
      { order: 13, stopName: "Venkatakrishnapuram", arrivalTime: "8:55AM", requiresVerification: false },
      { order: 14, stopName: "Uppalapadu", arrivalTime: "8:58AM", requiresVerification: false },
      { order: 15, stopName: "Takkellapadu", arrivalTime: "9:00AM", requiresVerification: false },
      { order: 16, stopName: "Takkellapadu -Bridge", arrivalTime: "9:02AM", requiresVerification: false },
      { order: 17, stopName: "College", arrivalTime: "9:45AM", requiresVerification: false }
    ]
  },
  {
    id: "ss-bus-34",
    busNumber: "34",
    busNumberLabel: "Bus 34",
    shift: "Second Shift",
    collegeArrivalTime: "9:45AM",
    startingPoint: "Ganapavaram",
    destination: "College",
    pdfPage: 46,
    stops: [
      { order: 1, stopName: "Ganapavaram", arrivalTime: "9:00AM", requiresVerification: false },
      { order: 2, stopName: "Ganapavaram - Cinemahall", arrivalTime: "9:02AM", requiresVerification: false },
      { order: 3, stopName: "Timmapuram", arrivalTime: "9:05AM", requiresVerification: false },
      { order: 4, stopName: "Yedlapadu", arrivalTime: "9:10AM", requiresVerification: false },
      { order: 5, stopName: "Yedlapadu center", arrivalTime: "9:12AM", requiresVerification: false },
      { order: 6, stopName: "Vankayalapadu", arrivalTime: "9:18AM", requiresVerification: false },
      { order: 7, stopName: "Boyapalem", arrivalTime: "9:25AM", requiresVerification: false },
      { order: 8, stopName: "KMC College", arrivalTime: "9:35AM", requiresVerification: false },
      { order: 9, stopName: "College", arrivalTime: "9:45AM", requiresVerification: false }
    ]
  },
  {
    id: "ss-bus-35",
    busNumber: "35",
    busNumberLabel: "Bus 35",
    shift: "Second Shift",
    collegeArrivalTime: "9:45AM",
    startingPoint: "Ponnur -Iland center",
    destination: "College",
    pdfPage: 47,
    stops: [
      { order: 1, stopName: "Ponnur -Iland center", arrivalTime: "8:00AM", requiresVerification: false },
      { order: 2, stopName: "Mamidipalli cross road", arrivalTime: "8:20AM", requiresVerification: false },
      { order: 3, stopName: "Bramhana koduru cross road", arrivalTime: "8:25AM", requiresVerification: false },
      { order: 4, stopName: "Chebrolu", arrivalTime: "8:45AM", requiresVerification: false },
      { order: 5, stopName: "Narakoduru", arrivalTime: "8:55AM", requiresVerification: false },
      { order: 6, stopName: "Budampadu", arrivalTime: "9:05AM", requiresVerification: false },
      { order: 7, stopName: "Saibaba temple - ponnur road", arrivalTime: "9:15AM", requiresVerification: false },
      { order: 8, stopName: "College", arrivalTime: "9:45AM", requiresVerification: false }
    ]
  }
];

/**
 * Searches for all buses that stop at a given boarding point / stop name.
 * 
 * Supports:
 * - Partial matching
 * - Case-insensitive comparison
 * - Shift filter: 'All' | 'First Shift' | 'Second Shift'
 */
export function searchBusesByStop(query, shiftFilter = 'All') {
  if (!query || typeof query !== 'string') return [];
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return [];

  const results = [];

  for (const route of BUS_ROUTES) {
    if (shiftFilter !== 'All' && route.shift !== shiftFilter) {
      continue;
    }

    for (const stop of route.stops) {
      if (stop.stopName.toLowerCase().includes(normalizedQuery)) {
        results.push({
          busNumber: route.busNumber,
          busNumberLabel: route.busNumberLabel,
          shift: route.shift,
          collegeArrivalTime: route.collegeArrivalTime,
          startingPoint: route.startingPoint,
          destination: route.destination,
          matchedStopName: stop.stopName,
          arrivalTime: stop.arrivalTime,
          stopOrder: stop.order,
          totalStops: route.stops.length,
          requiresVerification: stop.requiresVerification,
          fullRoute: route
        });
        // One matched stop per route
        break;
      }
    }
  }

  return results.sort((a, b) => a.arrivalTime.localeCompare(b.arrivalTime));
}

/**
 * Returns a list of all distinct bus stop names for auto-suggestions / quick picks.
 */
export function getAllUniqueStopNames() {
  const set = new Set();
  for (const route of BUS_ROUTES) {
    for (const stop of route.stops) {
      set.add(stop.stopName);
    }
  }
  return Array.from(set).sort();
}
