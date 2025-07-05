import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { Container, Title } from './styled';
import Spinner from '@/presentation/components/Spinner';

const containerStyle = {
    width: '100%',
    height: '100%',
};

const defaultCenter = {
    lat: -12.0464,
    lng: -77.0428,
};

interface DoctorMarker {
    name: string;
    position: {
        lat: number;
        lng: number;
    };
}

interface MapSectionProps {
    doctors: DoctorMarker[];
}

const MapSection: React.FC<MapSectionProps> = ({ doctors }) => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY ?? '',
    });
    if (!isLoaded) return <Spinner text='Cargando mapa...' />;

    return (
        <Container data-testid="cmp-map-section">
            <Title>Ubicaciones</Title>
            <GoogleMap mapContainerStyle={containerStyle} center={defaultCenter} zoom={12}>
                {doctors.map((doc, idx) => (
                    <Marker key={idx} position={doc.position} title={doc.name} />
                ))}
            </GoogleMap>
        </Container>
    );
};

export default MapSection;