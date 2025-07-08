'use client'
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { LatLng, LatLngLiteral } from 'leaflet'
import { useState } from 'react'
import L from 'leaflet'

interface MapPickerProps {
  onSelect: (latlng: LatLngLiteral) => void
  onClose: () => void
}

// Fix marker icon path issue
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
})

function LocationMarker({ onSelect }: { onSelect: (latlng: LatLngLiteral) => void }) {
  const [position, setPosition] = useState<LatLngLiteral | null>(null)

  useMapEvents({
    click(e) {
      const latlng: LatLng = e.latlng
      setPosition(latlng)
      onSelect(latlng)
    },
  })

  return position ? <Marker position={position} /> : null
}

export default function MapPicker({ onSelect, onClose }: MapPickerProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg w-[90%] h-[80%] relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-black">✕</button>
        <MapContainer
          center={[35.6892, 51.3890]}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          <LocationMarker onSelect={onSelect} />
        </MapContainer>
      </div>
    </div>
  )
}
