import { Button, Card } from "flowbite-react";
import Image from "next/image";
import { IService } from "types/data";

interface IProps {
  card: {
    service: IService;
  };
  main: {
    services: IService[];
  };
}

const ServiceCard: React.FC<IProps["card"]> = ({ service }) => {
  return (
    <div className="max-w-sm">
      <Card>
        <Image
          src={service?.image ? service.image : "/service1.png"}
          // layout="fill"
          height={200}
          width={310}
          objectFit="cover"
          alt={"service image "}
        />
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {service.title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {service.desc}
        </p>

        <div className="self-center mt-3">
          <Button gradientDuoTone="purpleToPink">See more</Button>
        </div>
      </Card>
    </div>
  );
};

const Services: React.FC<IProps["main"]> = ({ services }) => {
  return (
    <div className="flex flex-col gap-12 py-20">
      {/* <h3>Services</h3> */}
      <div className="flex flex-col gap-3">
        <h3 className="text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          Services
        </h3>
        <h4 className="text-center text-lg font-normal text-gray-700 dark:text-gray-400">
          features and services
        </h4>
      </div>

      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 place-items-center">
        {services.map((service) => (
          <ServiceCard service={service} key={service.id.toString()} />
        ))}
      </div>
    </div>
  );
};

export default Services;
