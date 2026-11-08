/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { 
  Search, 
  X, 
  Bus, 
  Clock, 
  MapPin, 
  ArrowRight, 
  AlertCircle, 
  AlertTriangle,
  Compass, 
  Radio, 
  CheckCircle2,
  Navigation,
  FileText
} from 'lucide-react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CompleteRouteModal } from './components/CompleteRouteModal';
import { 
  BUS_ROUTES, 
  searchBusesByStop, 
  getAllUniqueStopNames, 
  BusRouteRecord, 
  BusStopSearchResult 
} from './data/busRoutes';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [shiftFilter, setShiftFilter] = useState<'All' | 'First Shift' | 'Second Shift'>('All');
  const [directoryShiftTab, setDirectoryShiftTab] = useState<'All' | 'First Shift' | 'Second Shift'>('All');
  const [selectedRoute, setSelectedRoute] = useState<BusRouteRecord | null>(null);
  const [isLiveTrackingModalOpen, setIsLiveTrackingModalOpen] = useState(false);

  // Quick-pick popular boarding points extracted from the PDF
  const popularStops = [
    'Koritepadu',
    'Mangalagiri-Bus stand',
    'Tenali-Bustand',
    'KAZA',
    'Lodge center',
    'Brodipet',
    'Reddy Hostel',
    'Sattenapalli',
    'Ganapavaram',
    'Pedakakani',
    'Chebrolu',
    'Yedlapadu'
  ];

  // Real-time search by stop name OR bus number
  const searchResults: BusStopSearchResult[] = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const q = searchQuery.trim().toLowerCase();

    // Check if query is searching by bus number (e.g. "bus 1", "bus 26", "26", "1")
    const busNumberQuery = q.replace(/^bus\s*/i, '').trim();
    const isNumericBusSearch = /^\d+$/.test(busNumberQuery);

    if (isNumericBusSearch) {
      const matchingBuses = BUS_ROUTES.filter((route) => {
        if (shiftFilter !== 'All' && route.shift !== shiftFilter) return false;
        return route.busNumber === busNumberQuery;
      });

      if (matchingBuses.length > 0) {
        return matchingBuses.map((route) => ({
          busNumber: route.busNumber,
          busNumberLabel: route.busNumberLabel,
          shift: route.shift,
          collegeArrivalTime: route.collegeArrivalTime,
          startingPoint: route.startingPoint,
          destination: route.destination,
          matchedStopName: `${route.startingPoint} (Origin)`,
          arrivalTime: route.stops[0].arrivalTime,
          stopOrder: 1,
          totalStops: route.stops.length,
          requiresVerification: route.stops[0].requiresVerification,
          fullRoute: route
        }));
      }
    }

    // Standard search by boarding point / stop name
    return searchBusesByStop(searchQuery, shiftFilter);
  }, [searchQuery, shiftFilter]);

  // Filtered bus directory cards
  const directoryBuses = useMemo(() => {
    return BUS_ROUTES.filter((route) => {
      if (directoryShiftTab !== 'All' && route.shift !== directoryShiftTab) {
        return false;
      }
      return true;
    });
  }, [directoryShiftTab]);

  const handleSelectQuickStop = (stopName: string) => {
    setSearchQuery(stopName);
  };

  const handleResetSearch = () => {
    setSearchQuery('');
    setShiftFilter('All');
    setSelectedRoute(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col text-gray-900 selection:bg-[#F0A000] selection:text-[#550c1f]">
      {/* Official College Header */}
      <Header onResetSearch={handleResetSearch} />

      {/* Live Tracking Coming Soon Notification Bar */}
      <div className="bg-[#fffaf0] border-b border-[#F0A000]/40 py-2 px-4 text-center">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-2 text-xs text-gray-700">
          <span className="inline-flex items-center gap-1 font-bold text-[#851735]">
            <Radio className="w-3.5 h-3.5 text-[#F0A000]" />
            <span>Live GPS Tracking:</span>
          </span>
          <span className="text-gray-600">Hardware deployment underway.</span>
          <button
            onClick={() => setIsLiveTrackingModalOpen(true)}
            className="text-[#851735] font-bold underline hover:text-[#550c1f] ml-1"
          >
            Coming Soon Status Details
          </button>
        </div>
      </div>

      {/* Main Content Container */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-8 space-y-12">
        
        {/* Title & Institutional Scope */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-[#fbf1f3] text-[#851735] text-xs font-bold px-3 py-1 rounded border border-[#851735]/20 uppercase tracking-wider">
            <Bus className="w-3.5 h-3.5 text-[#F0A000]" />
            <span>Official College Transportation Schedule</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-serif tracking-tight">
            KHIT Bus Stop & Route Schedule
          </h2>

          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Search your boarding point or bus number to view exact arrival times and complete routes for all 47 First Shift and Second Shift buses.
          </p>
        </div>

        {/* IMPORTANT NOTICE BANNER */}
        <div className="bg-[#fbf1f3] border border-[#851735]/25 border-l-4 border-l-[#851735] rounded-lg p-3.5 sm:p-4 shadow-2xs">
          <div className="flex items-start gap-3">
            <div className="p-1.5 bg-[#851735] text-[#F0A000] rounded-md shrink-0 mt-0.5">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#851735]">
                  IMPORTANT NOTICE
                </span>
                <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#F0A000]"></span>
                <span className="hidden sm:inline-block text-[11px] font-semibold text-gray-500">
                  Transport Advisory
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-800 leading-relaxed font-medium">
                Bus timings may change from time to time. Students are requested to check the latest bus timings regularly.
              </p>
            </div>
          </div>
        </div>

        {/* 1. PROMINENT BUS STOP & BUS NUMBER SEARCH BAR */}
        <div className="bg-white rounded-xl shadow-lg border-2 border-[#851735] p-5 sm:p-7 space-y-4">
          <label className="block text-xs font-bold uppercase tracking-wider text-[#851735]">
            Search by Boarding Point / Bus Stop Name or Bus Number:
          </label>

          <div className="relative">
            <input
              type="text"
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Type boarding point (e.g., Koritepadu, Mangalagiri, KAZA, Brodipet) or Bus No. (e.g., 1, 26)..."
              className="w-full pl-12 pr-12 py-3.5 sm:py-4 text-base sm:text-lg bg-gray-50 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#851735] focus:bg-white text-gray-900 shadow-inner transition-colors"
            />
            <Search className="w-6 h-6 text-[#851735] absolute left-3.5 top-3.5 sm:top-4" />

            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-3.5 sm:top-4 p-1 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-200 transition-colors"
                aria-label="Clear search"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Shift Filter Controls & Real-Time Count */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1 border-t border-gray-100">
            {/* Shift Selector */}
            <div className="flex items-center gap-1.5 bg-gray-100 p-1 rounded-lg">
              {(['All', 'First Shift', 'Second Shift'] as const).map((shift) => {
                const isActive = shiftFilter === shift;
                return (
                  <button
                    key={shift}
                    onClick={() => setShiftFilter(shift)}
                    className={`flex-1 sm:flex-none px-3.5 py-1.5 text-xs font-bold rounded transition-all ${
                      isActive
                        ? 'bg-[#851735] text-white shadow-xs'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200/60'
                    }`}
                  >
                    {shift === 'All' ? 'All Shifts' : shift}
                  </button>
                );
              })}
            </div>

            {/* Quick status message */}
            <div className="text-xs text-gray-600 sm:text-right">
              {searchQuery.trim() ? (
                <span className="font-semibold text-gray-800">
                  {searchResults.length} matching bus{searchResults.length === 1 ? '' : 'es'} found
                </span>
              ) : (
                <span className="text-gray-500">
                  Type any stop name or bus number for instant lookup
                </span>
              )}
            </div>
          </div>

          {/* Popular Stop Quick Picks */}
          <div className="pt-2">
            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wide block mb-1.5">
              Popular Boarding Points:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {popularStops.map((stop) => {
                const isSelected = searchQuery.toLowerCase() === stop.toLowerCase();
                return (
                  <button
                    key={stop}
                    onClick={() => handleSelectQuickStop(stop)}
                    className={`text-xs px-2.5 py-1 rounded transition-colors ${
                      isSelected
                        ? 'bg-[#F0A000] text-[#550c1f] font-bold shadow-xs'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium'
                    }`}
                  >
                    {stop}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 2. SEARCH RESULTS SECTION */}
        {searchQuery.trim() && (
          <section className="space-y-4">
            {searchResults.length > 0 ? (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-gray-600 px-1">
                  <span className="font-bold text-[#851735] uppercase tracking-wide">
                    Buses Stopping At / Matching "{searchQuery}":
                  </span>
                  <span>Click any bus card to inspect complete route</span>
                </div>

                {/* Display all buses that stop at the searched location */}
                <div className="space-y-3">
                  {searchResults.map((result) => (
                    <div
                      key={`${result.fullRoute.id}-${result.busNumber}-${result.shift}-${result.matchedStopName}`}
                      onClick={() => setSelectedRoute(result.fullRoute)}
                      className="bg-white rounded-lg border-2 border-gray-200 hover:border-[#851735] shadow-sm hover:shadow-md transition-all p-4 sm:p-5 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
                    >
                      {/* Left: Bus Number, Shift, Stop Name, Route */}
                      <div className="space-y-2 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="bg-[#851735] text-white text-xs font-black uppercase px-2.5 py-1 rounded tracking-wide shadow-xs">
                            {result.busNumberLabel}
                          </span>

                          <span
                            className={`text-xs font-bold px-2 py-0.5 rounded ${
                              result.shift === 'First Shift'
                                ? 'bg-blue-100 text-blue-900 border border-blue-200'
                                : 'bg-amber-100 text-amber-900 border border-amber-200'
                            }`}
                          >
                            {result.shift}
                          </span>

                          <span className="text-gray-400 text-xs hidden sm:inline">·</span>

                          <span className="text-xs text-gray-500">
                            Stop #{result.stopOrder} of {result.totalStops}
                          </span>

                          <span className="text-gray-400 text-xs hidden sm:inline">·</span>

                          <span className="text-xs font-semibold text-[#851735]">
                            College Arrival: {result.collegeArrivalTime}
                          </span>
                        </div>

                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#851735] transition-colors leading-snug">
                            {result.matchedStopName}
                          </h3>
                          <p className="text-xs text-gray-600 mt-0.5">
                            Route: <span className="font-medium text-gray-800">{result.startingPoint} ➔ {result.destination}</span>
                          </p>
                        </div>
                      </div>

                      {/* Right: Exact Arrival Time at that Stop & View Route CTA */}
                      <div className="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-100">
                        {/* Arrival Time Box */}
                        <div className="bg-[#fbf1f3] border-2 border-[#851735]/30 rounded-lg p-2.5 text-center min-w-[120px]">
                          <span className="text-[10px] uppercase font-bold text-gray-500 block">
                            Stop Arrival Time
                          </span>
                          <strong className="text-base sm:text-lg font-extrabold text-[#851735] flex items-center justify-center gap-1 mt-0.5">
                            <Clock className="w-4 h-4 text-[#F0A000]" />
                            <span>{result.arrivalTime}</span>
                          </strong>
                        </div>

                        {/* View Route Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedRoute(result.fullRoute);
                          }}
                          className="bg-[#F0A000] hover:bg-[#d48b00] text-[#550c1f] font-bold text-xs px-4 py-3 rounded-lg flex items-center gap-1.5 shadow-sm transition-colors shrink-0"
                        >
                          <span>View Route</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Clear 'No buses found' message when there are no matches */
              <div className="bg-white rounded-xl border border-gray-200 p-8 sm:p-12 text-center space-y-4 shadow-sm">
                <div className="w-14 h-14 rounded-full bg-[#fbf1f3] text-[#851735] flex items-center justify-center mx-auto">
                  <AlertCircle className="w-8 h-8" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-bold font-serif text-gray-900">
                    No Buses Found for "{searchQuery}"
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                    We could not find any college buses with a scheduled stop matching "{searchQuery}" in {shiftFilter === 'All' ? 'any shift' : shiftFilter}.
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={() => setSearchQuery('')}
                    className="bg-[#851735] hover:bg-[#660f27] text-white font-bold text-xs px-5 py-2.5 rounded transition-colors"
                  >
                    Clear Search
                  </button>

                  {shiftFilter !== 'All' && (
                    <button
                      onClick={() => setShiftFilter('All')}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs px-5 py-2.5 rounded transition-colors"
                    >
                      Show All Shifts
                    </button>
                  )}
                </div>
              </div>
            )}
          </section>
        )}

        {/* 3. COMPLETE BUS ROUTES DIRECTORY SECTION */}
        <section className="space-y-6 pt-4 border-t-2 border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#851735] uppercase tracking-wider mb-1">
                <Navigation className="w-4 h-4 text-[#F0A000]" />
                <span>Complete College Fleet Directory</span>
              </div>
              <h3 className="text-2xl font-bold font-serif text-gray-900">
                Official Bus Routes ({directoryBuses.length} Routes)
              </h3>
              <p className="text-xs text-gray-600 mt-0.5">
                All 47 college bus schedules extracted from the official PDF. Select any bus card to inspect complete stop sequences and times.
              </p>
            </div>

            {/* Shift Tabs */}
            <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg self-start sm:self-auto">
              <button
                onClick={() => setDirectoryShiftTab('All')}
                className={`px-3 py-1.5 text-xs font-bold rounded transition-all ${
                  directoryShiftTab === 'All'
                    ? 'bg-[#851735] text-white shadow-xs'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                All Buses ({BUS_ROUTES.length})
              </button>
              <button
                onClick={() => setDirectoryShiftTab('First Shift')}
                className={`px-3 py-1.5 text-xs font-bold rounded transition-all ${
                  directoryShiftTab === 'First Shift'
                    ? 'bg-[#851735] text-white shadow-xs'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                First Shift (8:10 AM Arrival)
              </button>
              <button
                onClick={() => setDirectoryShiftTab('Second Shift')}
                className={`px-3 py-1.5 text-xs font-bold rounded transition-all ${
                  directoryShiftTab === 'Second Shift'
                    ? 'bg-[#851735] text-white shadow-xs'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Second Shift (9:45 AM Arrival)
              </button>
            </div>
          </div>

          {/* Bus Number Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {directoryBuses.map((route) => (
              <div
                key={route.id}
                onClick={() => setSelectedRoute(route)}
                className="bg-white rounded-lg border-2 border-gray-200 hover:border-[#851735] p-5 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between space-y-4 group"
              >
                {/* Header */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="bg-[#851735] text-white text-xs font-black uppercase px-2.5 py-1 rounded">
                      {route.busNumberLabel}
                    </span>
                    <span
                      className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                        route.shift === 'First Shift'
                          ? 'bg-blue-100 text-blue-900'
                          : 'bg-amber-100 text-amber-900'
                      }`}
                    >
                      {route.shift}
                    </span>
                  </div>

                  <h4 className="font-bold text-base text-gray-900 group-hover:text-[#851735] transition-colors leading-snug">
                    {route.startingPoint} ➔ {route.destination}
                  </h4>

                  <div className="bg-[#fbf1f3] p-2 rounded border border-[#851735]/15 text-xs flex items-center justify-between">
                    <span className="text-gray-600">College Arrival:</span>
                    <strong className="text-[#851735] font-bold">{route.collegeArrivalTime}</strong>
                  </div>
                </div>

                {/* Route Summary */}
                <div className="text-xs space-y-2 text-gray-600 border-t border-gray-100 pt-3">
                  <div className="flex items-center justify-between">
                    <span>Origin Departure:</span>
                    <strong className="text-gray-900">{route.stops[0]?.arrivalTime}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Total Stops:</span>
                    <strong className="text-gray-900">{route.stops.length} Stops</strong>
                  </div>

                  {/* Preview stops */}
                  <div>
                    <span className="text-[11px] font-semibold text-gray-500 block mb-0.5">
                      Corridor Stops Preview:
                    </span>
                    <p className="text-[11px] text-gray-700 truncate">
                      {route.stops.map((s) => s.stopName).join(' ➔ ')}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedRoute(route);
                    }}
                    className="w-full bg-[#F0A000] hover:bg-[#d48b00] text-[#550c1f] font-bold py-2 rounded text-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <span>View Complete Route</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* 4. COMPLETE ROUTE MODAL (All stops in original sequence) */}
      <CompleteRouteModal
        route={selectedRoute}
        searchedStopQuery={searchQuery}
        onSelectStopName={(stopName) => setSearchQuery(stopName)}
        onClose={() => setSelectedRoute(null)}
      />

      {/* 5. LIVE TRACKING COMING SOON MODAL */}
      {isLiveTrackingModalOpen && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto bg-black/60 flex items-center justify-center p-4 backdrop-blur-xs"
          onClick={() => setIsLiveTrackingModalOpen(false)}
        >
          <div 
            className="bg-white rounded-lg shadow-2xl max-w-lg w-full p-6 space-y-4 border-2 border-[#851735]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-[#fbf1f3] text-[#851735] rounded-lg">
                  <Compass className="w-6 h-6 animate-pulse text-[#F0A000]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg font-serif text-gray-900">
                    Live GPS Tracking
                  </h3>
                  <span className="bg-[#F0A000] text-[#550c1f] text-[10px] font-extrabold uppercase px-2 py-0.5 rounded">
                    Status: Coming Soon
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsLiveTrackingModalOpen(false)}
                className="text-gray-400 hover:text-gray-700 p-1 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              Real-time GPS vehicle tracking hardware is currently being deployed across the KHIT College bus fleet. Live satellite locations, ETAs, and delay alerts will be available in an upcoming update.
            </p>

            <div className="bg-gray-50 p-3.5 rounded border border-gray-200 text-xs space-y-2 text-gray-600">
              <div className="flex items-center gap-2 text-gray-800 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                <span>All 47 bus routes operating on scheduled timetable</span>
              </div>
              <div className="flex items-center gap-2 text-gray-800 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                <span>First Shift buses arrive at College at 8:10 AM sharp</span>
              </div>
              <div className="flex items-center gap-2 text-gray-800 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                <span>Second Shift buses arrive at College at 9:45 AM sharp</span>
              </div>
            </div>

            <button
              onClick={() => setIsLiveTrackingModalOpen(false)}
              className="w-full bg-[#851735] hover:bg-[#660f27] text-white font-bold py-2.5 rounded text-xs transition-colors"
            >
              Back to Bus Stop Schedules
            </button>
          </div>
        </div>
      )}

      {/* Official Collegiate Footer */}
      <Footer />
    </div>
  );
}
