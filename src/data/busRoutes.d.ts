export interface BusStopEntry {
  order: number;
  stopName: string;
  arrivalTime: string;
  requiresVerification?: boolean;
}

export interface BusRouteRecord {
  id: string;
  busNumber: string;
  busNumberLabel: string;
  shift: 'First Shift' | 'Second Shift';
  collegeArrivalTime: string;
  startingPoint: string;
  destination: string;
  pdfPage: number;
  stops: BusStopEntry[];
}

export interface BusStopSearchResult {
  busNumber: string;
  busNumberLabel: string;
  shift: 'First Shift' | 'Second Shift';
  collegeArrivalTime: string;
  startingPoint: string;
  destination: string;
  matchedStopName: string;
  arrivalTime: string;
  stopOrder: number;
  totalStops: number;
  requiresVerification?: boolean;
  fullRoute: BusRouteRecord;
}

export declare const BUS_ROUTES: BusRouteRecord[];

export declare function searchBusesByStop(
  query: string,
  shiftFilter?: 'All' | 'First Shift' | 'Second Shift'
): BusStopSearchResult[];

export declare function getAllUniqueStopNames(): string[];
