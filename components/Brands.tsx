const brandNames = [
  { name: 'Amsterdam Vintage Watches' },
  { name: 'Collectors Gallery Dubai' },
  { name: 'Chopard' },
  { name: 'WRISTCHECK' },
  { name: 'Pucci Papaleo' },
  { name: 'Royal Coster Diamonds' },
  { name: 'Swiss Watch Gang' },
  { name: 'Belgrade Vintage Watches' },
  { name: 'Bonanno Watches' },
  { name: 'Watches in Rome' },
  { name: 'Wunderkammer Zurich' },
  { name: 'Groosman' },
  { name: 'I Am Casa' },
  { name: 'Avocado Vintage Watches' },
  { name: 'Johnson167' },
  { name: 'Artisan Du Temps' },
  { name: 'Roy & Sacha Davidoff S.A.' },
  { name: 'Andrea Foffi' },
];

export function Brands() {
  return (
    <>
      <h1 className="text-center text-5xl font-semibold leading-tight text-white">
        Among clients and <br /> collaborations.
      </h1>
      <ul className="mt-6 font-light">
        {brandNames.map((watch) => (
          <li key={watch.name}>{watch.name}</li>
        ))}
      </ul>
    </>
  );
}
