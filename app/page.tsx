import { BaseLayout } from '@/layouts';
import { Hero } from '@/views';

export default function Home() {
  return (
    <BaseLayout>
      <Hero className="mx-auto" />
    </BaseLayout>
  );
}
