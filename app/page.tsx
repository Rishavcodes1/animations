import Card from "./components/card";
import SPMech1 from "./svgs/SPMech1";
import SPMech2 from "./svgs/SPMech2";
import SPMech3 from "./svgs/SPMech3";
import SPMech4 from "./svgs/SPMech4";

export default function Home() {
  return (
    <div className="flex gap-4 p-4 flex-wrap">

      <Card children={<SPMech1 />} />
      <Card children={<SPMech2 />} />
      <Card children={<SPMech3 />} />
      <Card children={<SPMech4 />} />
    </div>

  );
}


