import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 lg:px-8 bg-base-100 bg-opacity-90 shadow-md backdrop-blur transition-all">
      <Logo />
      <Navigation />
      <button className="relative cursor-pointer hover:font-semibold overflow-hidden border-white border font-medium px-6 py-2 rounded bg-transparent transition-colors duration-300 group">
        <span className="relative z-10 text-primary hover:text-base-content group-hover:text-primary transition-colors duration-300">
          GET STARTED
        </span>
        <span
          className="absolute left-0 top-0 h-full w-0 group-hover:w-full bg-white transition-all duration-300 z-0"
          style={{ transitionProperty: "width" }}
        />
      </button>
    </header>
  );
}
