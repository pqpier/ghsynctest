'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DollarSign, Heart, Target } from 'lucide-react';

interface RendaData {
  total: number;
  essenciais: number;
  prazeres: number;
  abundancia: number;
}

export default function BaldesPage() {
  const [rendaData, setRendaData] = useState<RendaData | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem('rendaData');
      if (savedData) {
        setRendaData(JSON.parse(savedData));
      }
    }
  }, []);

  const formatarMoeda = (valor: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(valor);
  };

  if (!rendaData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-emerald-50 p-4">
        <div className="max-w-md mx-auto pt-8">
          <div className="text-center">
            <div className="text-6xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Prosperity Buckets
            </h1>
            <p className="text-gray-600 mb-6">
              You haven't registered your income yet to view your abundance buckets.
            </p>
            <a
              href="/renda"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-lg font-medium hover:from-purple-600 hover:to-violet-700 transition-all duration-200"
            >
              <DollarSign className="w-5 h-5 mr-2" />
              Register Income
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-emerald-50 p-4">
      <div className="max-w-md mx-auto pt-8 pb-24">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🪣</div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent mb-2">
            Your Prosperity Buckets
          </h1>
          <p className="text-gray-600">
            Your energy flows naturally when you honor all aspects of wealth manifestation
          </p>
        </div>

        {/* Resumo */}
        <Card className="mb-6 bg-gradient-to-r from-amber-100 to-emerald-100 border-amber-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-center text-lg text-gray-800">
              💰 Monthly Income Total
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {formatarMoeda(rendaData.total)}
              </div>
              <p className="text-sm text-gray-600">
                Energy ready to manifest your abundance ✨
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Baldes */}
        <div className="space-y-4">
          {/* Essenciais */}
          <Card className="bg-gradient-to-r from-amber-50 to-amber-100 border-amber-300 hover:shadow-lg transition-all duration-200">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-lg">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 flex items-center justify-center mr-3">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-amber-800">Essentials</div>
                  <Badge variant="outline" className="text-xs border-amber-300 text-amber-700">
                    50% of income
                  </Badge>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-2xl font-bold text-amber-900 mb-1">
                {formatarMoeda(rendaData.essenciais)}
              </div>
              <p className="text-sm text-amber-700">
                🌱 Solid foundation for your prosperity. Invest in this essential energy.
              </p>
            </CardContent>
          </Card>

          {/* Prazeres */}
          <Card className="bg-gradient-to-r from-purple-50 to-violet-100 border-purple-300 hover:shadow-lg transition-all duration-200">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-lg">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-violet-600 flex items-center justify-center mr-3">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-purple-800">Joy & Pleasure</div>
                  <Badge variant="outline" className="text-xs border-purple-300 text-purple-700">
                    30% of income
                  </Badge>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-2xl font-bold text-purple-900 mb-1">
                {formatarMoeda(rendaData.prazeres)}
              </div>
              <p className="text-sm text-purple-700">
                ✨ Spiritual joy and well-being. Nourish your creative and loving energy.
              </p>
            </CardContent>
          </Card>

          {/* Abundância */}
          <Card className="bg-gradient-to-r from-emerald-50 to-green-100 border-emerald-300 hover:shadow-lg transition-all duration-200">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-lg">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-400 to-green-600 flex items-center justify-center mr-3">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-emerald-800">Abundance & Growth</div>
                  <Badge variant="outline" className="text-xs border-emerald-300 text-emerald-700">
                    20% of income
                  </Badge>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-2xl font-bold text-emerald-900 mb-1">
                {formatarMoeda(rendaData.abundancia)}
              </div>
              <p className="text-sm text-emerald-700">
                🌟 Infinite manifestation. Save, invest, and multiply your prosperity.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Mensagem Motivacional */}
        <Card className="mt-6 bg-gradient-to-r from-violet-50 to-purple-50 border-violet-200">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🌊</div>
              <p className="text-violet-800 font-medium">
                &quot;Abundance flows naturally when you honor all aspects of wealth manifestation&quot;
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}