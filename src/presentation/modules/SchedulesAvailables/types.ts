// types.ts
export const SchedulesStatus = {
  D: "Turno Disponible",
  O: "Ocupado",
  R: "Reprogramado",
};

export type SchedulesStatusType = keyof typeof SchedulesStatus;

export const SchedulesModality = {
  P: "Presencial",
  V: "Virtual",
};

export type SchedulesModalityType = keyof typeof SchedulesModality;

export const SchedulesStatusColors: Record<
  string,
  { text: string; bg: string }
> = {
  DP: { text: "#21c54fdc", bg: "#fff" }, // Disponible Presencial -> verde claro
  DV: { text: "#1c6cddff", bg: "#fff" }, // Disponible Virtual -> azul claro
  OV: { text: "#fff", bg: "#0079D6" }, // Ocupado -> gris claro
  OP: { text: "#fff", bg: "#2D8746" }, // Ocupado Presencial -> verde oscuro
  RP: { text: "#756318ff", bg: "#f1ca30ff" }, // Reprogramado Presencial -> amarillo
  RV: { text: "#756318ff", bg: "#f1ca30ff" }, // Reprogramado Virtual -> amarillo
};

export function getStatusColor(
  isVirt: boolean,
  status: SchedulesStatusType
): { text: string; bg: string } {
  const availableStatus = Object.keys(
    SchedulesStatus
  )[0] as SchedulesStatusType;
  const occupiedStatus = Object.keys(SchedulesStatus)[1] as SchedulesStatusType;
  const reprogrammedStatus = Object.keys(
    SchedulesStatus
  )[2] as SchedulesStatusType;

  switch (status) {
    case availableStatus:
      return isVirt ? SchedulesStatusColors.DV : SchedulesStatusColors.DP;
    case occupiedStatus:
      return isVirt ? SchedulesStatusColors.OV : SchedulesStatusColors.OP;
    case reprogrammedStatus:
      return isVirt ? SchedulesStatusColors.RV : SchedulesStatusColors.RP;
    default:
      return { text: "#000", bg: "#f7fbfde0" }; // Default color if no match
  }
}

export interface Reservation{
  time: string; // HH:mm format
  status: SchedulesStatusType;
  modality: SchedulesModalityType;
}

export interface ScheduleSlot {
  day: string; // e.g., "Lun 05"
  today: boolean; // true if today
  schedules: Reservation[];
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
