// types.ts
export interface ScheduleSlot {
  day: string; // e.g., "Lun 05"
  time: string; // e.g., "08:00"
  status: "available_virtual" | "available_presencial" | "occupied";
}

export interface DoctorInfo {
  name: string;
  email: string;
  city: string;
  address: string;
  rating: number;
  reviews: number;
  avatar: string;
  note: string;
}
