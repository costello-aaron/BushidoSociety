import Image from "next/image";
import React, { useState } from "react";
import galleryData from "@/public/data/gallery.json";

export default function Gallerybox() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [expandedEvents, setExpandedEvents] = useState(new Set());

  const toggleEvent = (eventId) => {
    const newExpanded = new Set(expandedEvents);
    if (newExpanded.has(eventId)) {
      newExpanded.delete(eventId);
    } else {
      newExpanded.add(eventId);
    }
    setExpandedEvents(newExpanded);
  };

  const formatDate = (dateString) => {
    if (dateString === "Various") return dateString;
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Sort events by date (most recent first, "Various" at the end)
  const sortedEvents = [...galleryData.events].sort((a, b) => {
    if (a.date === "Various" && b.date === "Various") return 0;
    if (a.date === "Various") return 1;
    if (b.date === "Various") return -1;
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <>
      {/* Collapsible Event Gallery */}
      <div className="bg-black relative min-h-screen w-full p-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white text-3xl font-bold mb-8 text-center">Event Gallery</h2>
          
          <div className="space-y-4">
            {sortedEvents.map((event) => (
              <div key={event.id} className="bg-gray-900 rounded-lg overflow-hidden">
                {/* Event Header */}
                <div 
                  className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-800 transition-colors"
                  onClick={() => toggleEvent(event.id)}
                >
                  <div className="flex-1">
                    <h3 className="text-white text-xl font-semibold">{event.name}</h3>
                    <p className="text-gray-400 text-sm">{formatDate(event.date)}</p>
                    <p className="text-gray-300 text-sm mt-1">{event.description}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400 text-sm">
                      {event.photos.length} photo{event.photos.length !== 1 ? 's' : ''}
                    </span>
                    <svg 
                      className={`w-6 h-6 text-gray-400 transition-transform ${
                        expandedEvents.has(event.id) ? 'rotate-180' : ''
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Collapsible Photo Grid */}
                {expandedEvents.has(event.id) && (
                  <div className="p-4 bg-gray-800">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      {event.photos.map((photo, index) => (
                        <div
                          key={`${event.id}-${index}`}
                          className="relative w-full cursor-pointer group"
                          onClick={() => setSelectedImage(photo)}
                        >
                          <Image
                            src={photo.src}
                            alt={photo.alt}
                            width={photo.width}
                            height={photo.height}
                            className="rounded-lg object-cover w-full h-48 transition-transform group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-[9999]" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              layout="responsive"
              width={selectedImage.width}
              height={selectedImage.height}
              className="rounded-lg object-contain w-full h-auto"
            />
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-3xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-80 transition-all"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
