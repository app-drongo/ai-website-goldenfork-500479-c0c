import Pageheader2 from '@/components/Pageheader2';
import Cta1 from '@/components/Cta1';

export default function ReservationsPage() {
  return (
    <main className="min-h-screen">
      <section id="section-0" className="scroll-mt-16">
        <Pageheader2 />
      </section>
      <section id="section-1" className="scroll-mt-16">
        <Cta1 />
      </section>
    </main>
  );
}