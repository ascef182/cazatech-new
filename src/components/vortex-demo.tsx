import React from "react";
import { Vortex } from "@/components/ui/vortex";

export default function VortexDemo() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Pronto para seu novo site?
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Nós construímos com rapidez, performance e foco em conversão.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <a
            href="https://api.whatsapp.com/send/?phone=5535998026821&text=Quero%20um%20site%20CazaTech"
            target="_blank"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]"
          >
            Pedir meu site
          </a>
          <a href="/contact" className="px-4 py-2 text-white">
            Falar com especialista
          </a>
        </div>
      </Vortex>
    </div>
  );
}
