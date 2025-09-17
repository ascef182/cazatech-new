'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, TrendingUp, Clock, DollarSign, Target } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { CaseStudy as CaseStudyType } from '@/content/cases';

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
      className="mb-16"
    >
      <Card className="overflow-hidden border-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 shadow-xl">
        <div className={`grid lg:grid-cols-2 gap-0 ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
          {/* Image Section */}
          <div className={`relative h-64 lg:h-auto ${isEven ? '' : 'lg:col-start-2'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 z-10" />
            <Image
              src={caseData.image}
              alt={caseData.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute top-4 left-4 z-20">
              <Badge variant="secondary" className="bg-white/90 text-gray-800">
                {caseData.category}
              </Badge>
            </div>
          </div>

          {/* Content Section */}
          <div className={`p-8 lg:p-12 ${isEven ? '' : 'lg:col-start-1'}`}>
            <CardHeader className="p-0 mb-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Cases de Sucesso Reais
              </h2>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                <span className="text-sm font-medium text-blue-600">
                  {caseData.client}
                </span>
              </div>
              <CardTitle className="text-2xl lg:text-3xl font-bold leading-tight mb-4">
                {caseData.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="p-0 space-y-6">
              {/* Challenge */}
              <div>
                <h4 className="font-semibold text-red-600 mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Desafio
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {caseData.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h4 className="font-semibold text-blue-600 mb-2 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Solução
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {caseData.solution}
                </p>
              </div>

              {/* Results Grid */}
              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="text-center p-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/20">
                  <TrendingUp className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                  <div className="font-bold text-emerald-600 text-lg">
                    {caseData.results.conversions}
                  </div>
                  <div className="text-xs text-emerald-700 dark:text-emerald-400">
                    Conversões
                  </div>
                </div>
                <div className="text-center p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                  <Clock className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                  <div className="font-bold text-blue-600 text-lg">
                    {caseData.results.timeToContact}
                  </div>
                  <div className="text-xs text-blue-700 dark:text-blue-400">
                    Tempo de Resposta
                  </div>
                </div>
                {caseData.results.revenue && (
                  <div className="text-center p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20 col-span-2">
                    <DollarSign className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                    <div className="font-bold text-purple-600 text-lg">
                      {caseData.results.revenue}
                    </div>
                    <div className="text-xs text-purple-700 dark:text-purple-400">
                      Receita Adicional
                    </div>
                  </div>
                )}
              </div>

              {/* Testimonial */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg border-l-4 border-purple-600">
                <blockquote className="text-gray-700 dark:text-gray-300 italic mb-3">
                  "{caseData.testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {caseData.testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">
                      {caseData.testimonial.author}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {caseData.testimonial.position}, {caseData.testimonial.company}
                    </div>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {caseData.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-4">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link
                    href={`https://wa.me/5535998026821?text=Olá! Vi o case da ${caseData.client} e quero resultados similares para minha empresa`}
                    target="_blank"
                  >
                    Quero Resultados Similares
                    <ArrowRight className="w-4 h-4 ml-2" />
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
