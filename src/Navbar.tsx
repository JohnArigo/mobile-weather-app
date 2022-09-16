import { LocationData } from "./App";

export type NavbarProps = {
  weatherLocation: LocationData;
};

export default function Navbar({ weatherLocation }: NavbarProps) {
  return (
    <nav>
      <h1>This is where city selection will be</h1>
      <input />

      {JSON.stringify(weatherLocation)}
    </nav>
  );
}
