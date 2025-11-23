import ActionButton from "../Button";
import { Bot, Sparkles, Braces } from "lucide-react";
import CodeDisplay from "./CodeDisplay";

export default function HeroSection() {
  return (
    <section className="md:flex justify-between w-full space-x-6 md:my-24">
      <div className="container p-1.5">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold">
          Master Coding with Guided Explanations & Real-Time
          {""}{" "}
          <span className="bg-linear-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
            Practice
          </span>
        </h1>
        <p className="my-4 text-gray-600 max-w-[520px]">
          Understand problems deeply with AI breakdowns, hints, strategies, and
          a built-in code editor.
        </p>

        {/* User Actions */}
        <div className="inline-flex items-center space-x-5 my-2">
          <ActionButton
            styles="rounded-full bg-linear-to-r from-slate-800 to-blue-600 text-white px-5 py-2.5 font-medium
         hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            Start Sovling
          </ActionButton>
          <ActionButton styles="bg-gray-600 text-white px-5 py-2.5 font-medium rounded-full hover:bg-gray-700">
            Start Sovling
          </ActionButton>
        </div>

        {/* Features */}
        <ul className="flex flex-wrap gap-2 sm:gap-6 mt-8 text-sm text-gray-500">
          <li className="flex items-center gap-2">
            <Bot size={17} />
            <span>Beginner-friendly</span>
          </li>
          <li className="flex items-center gap-2">
            <Braces size={17} />
            <span>5 Languages supported</span>
          </li>
          <li className="flex items-center gap-2">
            <Sparkles size={17} />
            <span>AI-powered guidance</span>
          </li>
        </ul>
      </div>
      <div className="container my-6 sm:my-0">
        <CodeDisplay />
      </div>
    </section>
  );
}
