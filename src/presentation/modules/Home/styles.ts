// src/presentation/modules/Home/styles.ts
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 8rem; // por el header
  flex-direction: column;
  height: calc(100vh - 8rem); // por el header
  min-height: 100vh;
`;
/* export const MainContent = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 260px 1fr 340px;
  gap: 16px;
  padding: 1.5rem;
  height: 595px;
  max-height: calc(100vh - 4rem);

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
  }
`; */
export const MainContent = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 260px 1fr 340px;
  gap: 16px;
  padding: 1.5rem;

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
  }
`;

/* export const FiltersArea = styled.aside`
  background: #f9fafb;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  height: 595px;
  max-height: calc(100vh - 4rem);
  width: 100%;

  @media (max-width: 992px) {
    order: 1;
    margin-top: 1rem;
    height: auto;
    // grid-template-rows: auto;
  }
`; */
export const FiltersArea = styled.aside`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  width: 100%;

  @media (max-width: 992px) {
    order: 1;
    margin-top: 1rem;
  }
`;

export const DoctorArea = styled.main`
  border-radius: 0.5rem;
  padding: 0 1rem;
  // height: 595px;
  // max-height: calc(100vh - 4rem);
  /* 
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #cbd5e1 transparent;
  */
  @media (max-width: 992px) {
    order: 2;
  }
`;

export const MapArea = styled.section`
  background: #fff;
  border-radius: 8px;
  width: 100%;
  // height: 595px;
  // max-height: calc(100vh - 4rem); /* Ajusta según tu header/footer */

  @media (max-width: 992px) {
    order: 3;
  }
`;

export const FooterArea = styled.footer`
  // width: 100%;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #e5e7eb;
  border-radius: 8px;
  position: relative;
  margin-top: auto; // Asegura que el footer esté al final de la página

  background: #fff;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }
`;

