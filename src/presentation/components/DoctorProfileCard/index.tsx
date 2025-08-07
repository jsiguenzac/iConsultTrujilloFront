import React from "react";
import {
    Card,
    Avatar,
    Name,
    Email,
    Location,
    InfoGroup,
    Address,
    Stars,
    RatingText,
    Description,
    IconWrapper,
} from "./styled";
import { DoctorInfo } from '@/presentation/modules/SchedulesAvailables/types';
import { FaMapMarkerAlt, FaStar, FaStarHalfAlt, FaRegStar, FaUsers } from "react-icons/fa";

interface Props {
    doctor: DoctorInfo;
}
const DoctorProfileCard: React.FC<Props> = ({ doctor }) => {
    return (
        <Card>
            <Avatar src={doctor.avatar} />
            <Name>{doctor.name}</Name>
            <Email>{doctor.email}</Email>
            <Location>
                <FaMapMarkerAlt size={12} color="#888" />
                {doctor.city}
            </Location>
            <hr />
            <InfoGroup>
                <IconWrapper>
                    <FaMapMarkerAlt />
                </IconWrapper>
                <Address>{doctor.address}</Address>
            </InfoGroup>
            <InfoGroup>
                <Stars>
                    {/* mostrar estrellas pintadas de acuerdo a la calificación en base a 5 */}
                    {Array.from({ length: 5 }, (_, index) => {
                        if (index < Math.floor(doctor.rating)) {
                            return <FaStar key={index} color="#fbbf24" />;
                        }
                        if (index === Math.floor(doctor.rating) && doctor.rating % 1 !== 0) {
                            return <FaStarHalfAlt key={index} color="#fbbf24" />;
                        }
                        return <FaRegStar key={index} color="#fbbf24" />;
                    })}
                    <RatingText>{doctor.rating} Calificaciones</RatingText>
                </Stars>
            </InfoGroup>

            <InfoGroup>
                <IconWrapper>
                    <FaUsers />
                </IconWrapper>
                {doctor.note && (
                    <Description>
                        {doctor.note}
                    </Description>
                )}
            </InfoGroup>
        </Card>
    );
};

export default DoctorProfileCard;
