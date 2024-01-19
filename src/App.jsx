import Accordiondiv from "./accordion";
import { divQuestions } from "./accordion";

export default function App() {
  return (
    <div>
      {divQuestions.map(div => {
        return <Accordiondiv title={div.title} text={div.answer} key={crypto.randomUUID()} />
      })}
    </div>
  );
}
