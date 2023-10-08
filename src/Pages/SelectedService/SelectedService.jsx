import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SelectedServiceCard from "./SelectedServiceCard";

const SelectedService = () => {
  const [selectedService, setSelectedService] = useState({});
  const { id } = useParams();

  const services = useLoaderData();


  useEffect(()=>{
      const findService = services?.find(singleService=>singleService.id === id);
      
      setSelectedService(findService);

  },[id,services]);

  return (
    <div>
      <SelectedServiceCard
        selectedService={selectedService}
      ></SelectedServiceCard>
    </div>
  );
};

export default SelectedService;
