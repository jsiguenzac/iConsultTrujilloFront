import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Name,
  Specialty,
  Modalities,
  Badge,
  Address,
  Price,
  ReserveButton,
  CardFooter,
} from "./styled";
import { useHistory } from "react-router-dom";
import routes from "@/presentation/components/Routes/routingMap";

type Props = {
  name: string;
  specialty: string;
  image: string;
  modalities: string[];
  address: string;
  price: number;
};

const DoctorCard: React.FC<Props> = ({
  name,
  specialty,
  image,
  modalities,
  address,
  price,
}) => {
  const history = useHistory();
  const textModalities = modalities.map((mod) => {
    switch (mod) {
      case "P":
        return "Presencial";
      case "V":
        return "Virtual";
      default:
        return mod;
    }
  });

  const handlerGoToSchedulesDoctor = () => {
    history.push(routes.doctor.schedules);
  }


  return (
    <Card>
      <CardHeader>
        <CardContent>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "32px"
            }}>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
            }}>
              <Avatar src={image} alt={name} />
              <div>
                <Name>{name}</Name>
                <Specialty>{specialty}</Specialty>
              </div>
            </div>
            <Modalities>
              {modalities.map((mod, index) => (
                <Badge
                  key={index}
                  style={{
                    backgroundColor:
                      mod === "P" ? "#DBEAFE" : "#D1FAE5",
                    color: mod === "P" ? "#1D4ED8" : "#065F46",
                  }}
                >
                  {textModalities[index]}
                </Badge>
              ))}
            </Modalities>
          </div>
          <CardFooter>
            <Address>
              <i className="fas fa-map-marker-alt" />
              {address}
            </Address>
            <div style={{ textAlign: "right", gap: "12px" }}>
              <Price>S/. {price} por hora</Price>
              <ReserveButton onClick={handlerGoToSchedulesDoctor}>
                Ver horarios
              </ReserveButton>
            </div>
          </CardFooter>
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default DoctorCard;
