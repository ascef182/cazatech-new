"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  TrendingUp,
  Clock,
  DollarSign,
  Target,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { CaseStudy as CaseStudyType } from "@/content/cases";

interface CaseStudyProps {
  caseData: CaseStudyType;
  index: number;
}

export const CaseStudy = ({ caseData, index }: CaseStudyProps) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="mb-20"
    >
      <Card className="overflow-hidden border border-gray-800 bg-black/40 backdrop-blur-sm shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
        <div
          className={`grid lg:grid-cols-2 gap-0 ${
            isEven ? "" : "lg:grid-flow-col-dense"
          }`}
        >
          {/* Image Section */}
          <div
            className={`relative h-80 lg:h-auto ${
              isEven ? "" : "lg:col-start-2"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/30 z-10" />
            <Image
              src={caseData.image}
              alt={caseData.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute top-6 left-6 z-20">
              <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm">
                {caseData.category}
              </Badge>
            </div>
          </div>

          {/* Content Section */}
          <div className={`p-8 lg:p-12 ${isEven ? "" : "lg:col-start-1"}`}>
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                <span className="text-sm font-semibold text-purple-400 uppercase tracking-wider">
                  {caseData.client}
                </span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
                {caseData.title}
              </h3>
            </div>

            <CardContent className="p-0 space-y-8">
              {/* Challenge & Solution */}
              <div className="space-y-6">
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    Desafio
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {caseData.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <h4 className="font-semibold text-blue-400 mb-3 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    Solução
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {caseData.solution}
                  </p>
                </div>
              </div>

              {/* Results Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <TrendingUp className="w-6 h-6 text-emerald-400 mx-auto mb-3" />
                  <div className="font-bold text-emerald-400 text-2xl mb-1">
                    {caseData.results.conversions}
                  </div>
                  <div className="text-xs text-emerald-300 uppercase tracking-wider">
                    Conversões
                  </div>
                </div>
                <div className="text-center p-6 rounded-xl bg-blue-500/10 border border-blue-500/20">
                  <Clock className="w-6 h-6 text-blue-400 mx-auto mb-3" />
                  <div className="font-bold text-blue-400 text-2xl mb-1">
                    {caseData.results.timeToContact}
                  </div>
                  <div className="text-xs text-blue-300 uppercase tracking-wider">
                    Tempo de Resposta
                  </div>
                </div>
                {caseData.results.revenue && (
                  <div className="text-center p-6 rounded-xl bg-purple-500/10 border border-purple-500/20 col-span-2">
                    <DollarSign className="w-6 h-6 text-purple-400 mx-auto mb-3" />
                    <div className="font-bold text-purple-400 text-2xl mb-1">
                      {caseData.results.revenue}
                    </div>
                    <div className="text-xs text-purple-300 uppercase tracking-wider">
                      Receita Adicional
                    </div>
                  </div>
                )}
              </div>

              {/* Testimonial */}
              <div className="p-6 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm">
                <blockquote className="text-white italic mb-4 text-lg leading-relaxed">
                  "{caseData.testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                    {caseData.testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {caseData.testimonial.author}
                    </div>
                    <div className="text-sm text-gray-400">
                      {caseData.testimonial.position},{" "}
                      {caseData.testimonial.company}
                    </div>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {caseData.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-xs border-gray-600 text-gray-300 hover:border-purple-500 hover:text-purple-300 transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-6">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <Link
                    href={`https://wa.me/5511936205799?text=Olá! Vi o case da ${caseData.client} e quero resultados similares para minha empresa`}
                    target="_blank"
                  >
                    Quero Resultados Similares
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
