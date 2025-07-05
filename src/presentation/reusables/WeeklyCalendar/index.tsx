import React from 'react';
import { Table, Cell } from './styled';
import { ScheduleSlot } from '@/presentation/modules/SchedulesAvailables/types';

interface Props {
    schedule: ScheduleSlot[];
}

const hours = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00'];
const days = ['Lun 05', 'Mar 06', 'Mié 07', 'Jue 08', 'Vie 09', 'Sáb 10', 'Dom 11'];

const WeeklyCalendar = ({ schedule }: Props) => (
    <Table>
        <thead>
            <tr>
                <th>Hora</th>
                {days.map(day => <th key={day}>{day}</th>)}
            </tr>
        </thead>
        <tbody>
            {hours.map(hour => (
                <tr key={hour}>
                    <td>{hour}</td>
                    {days.map(day => {
                        const slot = schedule.find(s => s.day === day && s.time === hour);
                        let content = '';
                        if (slot?.status === 'available_virtual') {
                            content = 'Turno Disponible';
                        } else if (slot?.status === 'available_presencial') {
                            content = 'Turno Disponible';
                        } else if (slot?.status === 'occupied') {
                            content = 'Ocupado';
                        }
                        return <Cell key={day + hour} status={slot?.status}>{content}</Cell>;
                    })}
                </tr>
            ))}
        </tbody>
    </Table>
);

export default WeeklyCalendar;
