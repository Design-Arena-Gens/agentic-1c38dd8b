import Image from 'next/image';
import LightsHeader from './components/Lights';

export default function Page() {
  return (
    <main className="page">
      <LightsHeader />
      <section className="hero" aria-label="Hyper-realistic Christmas tree">
        <div className="vignette" />
        <div className="tree-wrap">
          <Image
            className="tree"
            src="https://images.unsplash.com/photo-1543709539-13caf6e4d6d7?q=80&w=1600&auto=format&fit=crop"
            alt="Hyper-realistic luxury Christmas tree with golden ornaments"
            priority
            width={1600}
            height={2400}
          />
        </div>
      </section>
    </main>
  );
}

