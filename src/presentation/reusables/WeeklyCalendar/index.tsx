import React from "react";
import { Table, Cell, TableWrapper } from "./styled";
import { getStatusColor, ScheduleSlot, SchedulesModality, SchedulesStatus, SchedulesStatusType } from "@/presentation/modules/SchedulesAvailables/types";

interface Props {
    schedule: ScheduleSlot[];
    startHour?: number;
    endHour?: number;
    columns?: number; // nuevo prop para controlar ancho mínimo
}

function isPastHour(cellHour: string, currentHour: string): boolean {
    const [h] = cellHour.split(":").map(Number);
    const [ch] = currentHour.split(":").map(Number);
    return h <= ch; // incluye la hora actual
}

const WeeklyCalendar = ({
    schedule,
    startHour = 6,
    endHour = 23,
    columns = 7
}: Props) => {
    const days = Array.from(
        new Set(schedule.map(s =>
            ({ day: s.day, today: s.today })
        ))
    );
    const hours = Array.from({ length: endHour - startHour + 1 }, (_, i) =>
        `${String(startHour + i).padStart(2, "0")}:00`
    );
    const virtualModality = Object.keys(SchedulesModality)[1];
    const availableStatus = Object.keys(SchedulesStatus)[0];
    const occupiedStatus = Object.keys(SchedulesStatus)[1];
    const reprogrammedStatus = Object.keys(SchedulesStatus)[2];

    // obtener la hora actual en formato "HH:mm" de Perú
    const [currentHourNum, currentMinuteNum] = new Date()
        .toLocaleString("en-US", {
            timeZone: "America/Lima",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
        })
        .split(":")
        .map(Number);
    // calcular la posición de la línea punteada
    const rowHeight = 75.5; // altura fija por fila en píxeles
    const hourIndex = currentHourNum - startHour;
    const currentHourPosition =
        hourIndex * rowHeight + (currentMinuteNum / 60) * rowHeight;

    return (
        <TableWrapper>
            <Table columns={columns} currentHourRow={currentHourPosition}>
                <thead>
                    <tr>
                        <th style={{ backgroundColor: "#F7FBFD", minWidth: "50px", borderLeft: "none" }}></th>
                        {/* {days.map(day => (
                            <th key={day}>{day}</th>
                        ))} */}
                        {Array.from({ length: columns }, (_, i) => (
                            days[i]
                                ?
                                <th
                                    key={i}
                                    style={{ backgroundColor: days[i]?.today ? "#E0F7FA" : "#F7FBFD" }}
                                >
                                    {days[i]?.day}
                                </th>
                                : <th key={i}>-</th>
                        ))}
                    </tr>
                </thead>
                <tbody data-testid="weekly-calendar-body" style={{ borderCollapse: "collapse", backgroundColor: "#F7FBFD" }}>
                    {hours.map(hour => (
                        <tr key={hour}>
                            <td style={{
                                backgroundColor: "#F7FBFD",
                                minWidth: "50px",
                                borderLeft: "none",
                                alignContent: "start",
                                textAlign: "end",
                            }}
                            >
                                {hour}
                            </td>
                            {Array.from({ length: columns }, (_, i) => {
                                const dayObj = schedule.find(s => s.day === days[i]?.day);

                                // Buscar el horario exacto dentro del día
                                const scheduleEntry = dayObj?.schedules.find(sch => sch.time === hour);

                                let content = "";
                                const isVirt = scheduleEntry?.modality === virtualModality;
                                const statusSlot = scheduleEntry?.status as SchedulesStatusType;

                                if (statusSlot === availableStatus) {
                                    content = SchedulesStatus.D;
                                } else if (statusSlot === occupiedStatus) {
                                    content = SchedulesStatus.O;
                                } else if (statusSlot === reprogrammedStatus) {
                                    content = SchedulesStatus.R;
                                }

                                const { text, bg } = getStatusColor(isVirt, statusSlot);

                                return (
                                    <Cell
                                        data-testid={`cell-${days[i] ?? "-"}-${hour}-${i}`}
                                        key={`${days[i] ?? "-"}-${hour}-${i}`}
                                        style={{ padding: bg === "#fff" ? "0rem" : "0" }}
                                        colorText={text}
                                        colorBg={bg}
                                    >
                                        <div style={{
                                            opacity: isPastHour(hour, `${String(currentHourNum).padStart(2, "0")}:${String(currentMinuteNum).padStart(2, "0")}`) ? 0.6 : 1
                                        }}
                                        >
                                            {content}
                                        </div>
                                    </Cell>
                                );
                            })}
                            {/* {days.map((day: any) => {
                                const slot = schedule.find(
                                    s => s.day === day && s.time === hour
                                );
                                let content = "";
                                if (
                                    slot?.status === Object.keys(SchedulesStatus)[0]
                                ) {
                                    content = SchedulesStatus.D;
                                } else if (slot?.status === Object.keys(SchedulesStatus)[1]) {
                                    content = SchedulesStatus.O;
                                }
                                return (
                                    <Cell
                                        key={day + hour}
                                        status={
                                            (slot?.status as "D" | "O" | "R") ??
                                            (Object.keys(SchedulesStatus)[1] as "D" | "O" | "R")
                                        }
                                        isVirt={slot?.modality === Object.keys(SchedulesModality)[1]}
                                    >
                                        {content}
                                    </Cell>
                                );
                            })} */}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </TableWrapper>
    );
};

export default WeeklyCalendar;
