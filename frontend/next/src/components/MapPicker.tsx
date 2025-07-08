'use client'

import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { LatLng, LatLngLiteral } from 'leaflet'
import { useEffect, useState } from 'react'
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

function CustomMarker({ position }: { position: LatLngLiteral }) {
  const customIcon = L.divIcon({
    html: `
      <div style="
        position: relative;
        width: 30px;
        height: 30px;
        background: #e74c3c;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        box-shadow: 0 0 5px rgba(0,0,0,0.3);
      ">
        <div style="
          position: absolute;
          width: 12px;
          height: 12px;
          background: white;
          border-radius: 50%;
          top: 9px;
          left: 9px;
        "></div>
      </div>
    `,
    className: '',
    iconSize: [30, 30],
    iconAnchor: [15, 30], // Aligns the pointed tip to the location
  })

  return <Marker position={position} icon={customIcon} />
}


function LocationMarker({
  onSelect,
  setSelectedLatLng,
}: {
  onSelect: (latlng: LatLngLiteral) => void
  setSelectedLatLng: (latlng: LatLngLiteral) => void
}) {
  const [position, setPosition] = useState<LatLngLiteral | null>(null)

  useMapEvents({
    click(e) {
      const latlng = e.latlng
      setPosition(latlng)
      setSelectedLatLng(latlng)
      onSelect(latlng)
    },
  })

  return position ? <CustomMarker position={position} /> : null
}

export default function MapPicker({ onSelect, onClose }: MapPickerProps) {
  const [address, setAddress] = useState('')
  const [selectedLatLng, setSelectedLatLng] = useState<LatLngLiteral | null>(null)

  // Reset state on mount (optional, in case modal reuses same component)
  useEffect(() => {
    setAddress('')
    setSelectedLatLng(null)
  }, [])

  useEffect(() => {
  if (!selectedLatLng) return

  const fetchAddress = async () => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${selectedLatLng.lat}&lon=${selectedLatLng.lng}&format=json`
      )
      const data = await res.json()
      const { address } = data

      const road = address.road || address.pedestrian || address.street || ''
      const city =
        address.city ||
        address.town ||
        address.village ||
        address.county ||
        address.state ||
        ''
      
      const display = `${city} ${road}`.trim()
      setAddress(display || 'آدرس پیدا نشد')
    } catch (err) {
      console.error(err)
      setAddress('خطا در دریافت آدرس')
    }
  }

  fetchAddress()
}, [selectedLatLng])


  return (
   <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/30 flex items-center justify-center ">
      <div className="bg-white p-12 rounded-lg w-[30%] h-[80%] relative flex flex-col items-center" >
        <button onClick={onClose} className="absolute top-12 cursor-pointer right-12 text-black text-xl">✕</button>
        <h2 className="text-2xl font-bold mb-4">انتخاب از روی نقشه</h2>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="نام شهر، آدرس یا مختصات (مثلاً 35.6892, 51.3890)"
          className="w-full p-2 mb-4 border rounded"
        />

        {/* Map */}
        <MapContainer
          center={[35.6892, 51.3890]}
          zoom={13}
          style={{ height: '100%', width: '100%', position: 'relative' }}
          className="relative rounded-lg"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="© OpenStreetMap contributors"
          />
          <LocationMarker
            onSelect={onSelect}
            setSelectedLatLng={setSelectedLatLng}
          />
        </MapContainer>

        <button
          onClick={() => {
            if (selectedLatLng) {
              onSelect(selectedLatLng)
              onClose()
            }
          }}
          className="mt-4 bg-[#1D40D7] text-white p-2 rounded-lg w-full"
        >
          تایید 
        </button>
      </div>
    </div>
  )
}
