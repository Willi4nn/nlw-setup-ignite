import { Habit } from "./components/Habit";
import "./styles/global.css";

export default function App() {
  return (
    <div>
      <Habit completed={20} />
      <Habit completed={40} />
      <Habit completed={60} />
      <Habit completed={80} />
      <Habit completed={100} />
    </div>
  );
}
