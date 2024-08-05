import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="container mx-auto py-36 font-poppins">
      <div className="md:p-6">
        <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-bold bg-white/10 hover:bg-white/20 cursor-pointer text-white dark:bg-white dark:text-neutral-800">
          New post
        </span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-3xl mt-5">
          How Did van Gogh’s Turbulent Mind Depict One of the Most Complex
          Concepts in Physics?
        </h1>
        <p className="mt-4 text-white">
          Your gateway to the latest insights and expert opinions shaping the
          future.
        </p>
        <p className="flex gap-2 text-white/30 my-4">
          Continue Reading
          <ArrowRight />
        </p>
      </div>
    </section>
  );
}
