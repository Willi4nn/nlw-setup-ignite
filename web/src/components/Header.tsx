import { PlusIcon } from "@heroicons/react/24/solid";
import logoImg from "../assets/logo.svg";

export default function Header() {
  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src={logoImg} alt="Habits" />
      <button
        type="button"
        className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300"
      >
        <PlusIcon className="h-5 text-violet-500" />
        Novo hábito
      </button>
    </div>
  );
}
