import { Title } from '~/component/element/Title';

import { Counter } from './component/Counter';

export default async function CounterPage() {
  return (
    <div className="grid place-content-center text-center">
      <Title>カウンター</Title>
      <Counter />
    </div>
  );
}
