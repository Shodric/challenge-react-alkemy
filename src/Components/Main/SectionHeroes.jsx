import { useState } from "react";
import ButtonsPagination from "./ButtonsPagination";
import CardsHeroes from "./CardsHeroes";
import CardHeroesCharging from "./CardHeroesCharging";

const SectionHeroes = ({ heroes }) => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(20);

  const handlePrev = () => {
    setStart(start - 20);
    setEnd(end - 20);
  };

  const handleNext = () => {
    setStart(start + 20);
    setEnd(end + 20);
  };

  return (
    <>
      <section>
        <CardsHeroes heroes={heroes} start={start} end={end} />
        <ButtonsPagination
          start={start}
          end={end}
          handleNext={handleNext}
          handlePrev={handlePrev}
          heroes={heroes}
        />
      </section>
    </>
  );
};

const SectionCharging = () => {
  return <CardHeroesCharging />;
};

export { SectionCharging };

export default SectionHeroes;
