'use client';

import { useState, useEffect } from 'react';
import { format, isSameDay, addDays, startOfDay } from 'date-fns';

interface TourBookingCalendarProps {
  propertyId: string;
  propertyTitle: string;
}

export function TourBookingCalendar({ propertyId, propertyTitle }: TourBookingCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [availableDates, setAvailableDates] = useState<any[]>([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [booking, setBooking] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
  });

  useEffect(() => {
    fetchAvailability();
  }, [propertyId]);

  const fetchAvailability = async () => {
    try {
      const response = await fetch(`/api/tours/availability?propertyId=${propertyId}`);
      const data = await response.json();
      setAvailableDates(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setSelectedTimeSlot('');
  };

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setBooking(true);

    try {
      const response = await fetch('/api/tours/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          propertyId,
          date: selectedDate,
          timeSlot: selectedTimeSlot,
          visitorName: formData.name,
          visitorEmail: formData.email,
          visitorPhone: formData.phone,
          notes: formData.notes,
        }),
      });

      if (response.ok) {
        alert('✅ Kierros varattu onnistuneesti!');
        setSelectedDate(null);
        setSelectedTimeSlot('');
        setFormData({ name: '', email: '', phone: '', notes: '' });
        fetchAvailability();
      } else {
        alert('❌ Varaus epäonnistui. Yritä uudelleen.');
      }
    } catch (error) {
      alert('❌ Varaus epäonnistui. Yritä uudelleen.');
    } finally {
      setBooking(false);
    }
  };

  const getAvailableTimeSlots = () => {
    if (!selectedDate) return [];
    const availability = availableDates.find(a => 
      isSameDay(new Date(a.date), selectedDate)
    );
    return availability ? JSON.parse(availability.timeSlots) : [];
  };

  const isDateAvailable = (date: Date) => {
    return availableDates.some(a => isSameDay(new Date(a.date), date));
  };

  const next30Days = Array.from({ length: 30 }, (_, i) => addDays(startOfDay(new Date()), i));

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold mb-6">Varaa kierros</h3>

      {/* Calendar Grid */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3">Valitse päivä:</h4>
        <div className="grid grid-cols-7 gap-2">
          {next30Days.map((date, idx) => {
            const available = isDateAvailable(date);
            const isSelected = selectedDate && isSameDay(date, selectedDate);
            
            return (
              <button
                key={idx}
                onClick={() => available && handleDateClick(date)}
                disabled={!available}
                className={`p-3 rounded-lg text-sm font-medium transition-colors ${
                  isSelected
                    ? 'bg-accent text-white'
                    : available
                    ? 'bg-green-50 text-green-700 hover:bg-green-100'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
              >
                <div className="text-xs">{format(date, 'EEE')}</div>
                <div>{format(date, 'd')}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Time Slots */}
      {selectedDate && (
        <div className="mb-6">
          <h4 className="font-semibold mb-3">Valitse aika:</h4>
          <div className="grid grid-cols-3 gap-2">
            {getAvailableTimeSlots().map((slot: string) => (
              <button
                key={slot}
                onClick={() => setSelectedTimeSlot(slot)}
                className={`p-3 rounded-lg font-medium transition-colors ${
                  selectedTimeSlot === slot
                    ? 'bg-accent text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Booking Form */}
      {selectedTimeSlot && (
        <form onSubmit={handleBooking} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nimi *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent"
              placeholder="Nimesi"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Sähköposti *</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent"
              placeholder="esimerkki@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Puhelin</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent"
              placeholder="+358 40 123 4567"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Lisätiedot</label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-accent"
              rows={3}
              placeholder="Erityistoiveita tai kysymyksiä..."
            />
          </div>

          <button
            type="submit"
            disabled={booking}
            className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-accent/90 disabled:opacity-50"
          >
            {booking ? 'Varataan...' : `Varaa kierros ${format(selectedDate!, 'd.M.yyyy')} klo ${selectedTimeSlot}`}
          </button>
        </form>
      )}
    </div>
  );
}