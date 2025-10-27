'use client'

import { Suspense } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Check, Star, Download, BookOpen, Music, Lightbulb, Gift, Sparkles, Smartphone } from 'lucide-react'

function EntregaContent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-emerald-50 p-4">
      <div className="max-w-md mx-auto pt-8 pb-24">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent mb-4">
            Welcome to Your Abundance Journey!
          </h1>
          <p className="text-gray-600 mb-8">
            Your Flow of Abundance membership is now active. Here's everything you need to start manifesting wealth consciously.
          </p>
        </div>

        {/* Acessar SaaS */}
        <Card className="mb-6 bg-gradient-to-r from-amber-50 to-green-50 border-amber-200">
          <CardContent className="pt-6 pb-6">
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                Seu SaaS Está Pronto!
              </h2>
              <p className="text-gray-700 mb-6">
                Acesse agora mesmo seu planner financeiro personalizado com Lei da Atração
              </p>
              <Button className="bg-gradient-to-r from-amber-500 to-green-500 hover:from-amber-600 hover:to-green-600 text-white px-8 py-3">
                <ArrowRight className="w-5 h-5 mr-2" />
                Acessar Meu SaaS
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Bônus */}
        <div className="space-y-4 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            🎁 Seus Bônus Exclusivos
          </h2>

          {/* Bônus 1 */}
          <Card className="bg-gradient-to-r from-violet-50 to-purple-50 border-violet-200">
            <CardContent className="pt-6 pb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 mb-2">
                    📖 Mini e-book: 21 Afirmações de Prosperidade
                  </h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Frases comportamentais que reprogramam crenças financeiras e geram ação real. Formato comportamental para resultados tangíveis.
                  </p>
                  <Button size="sm" className="bg-violet-500 hover:bg-violet-600 text-white">
                    <Download className="w-4 h-4 mr-2" />
                    Baixar e-book
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bônus 2 */}
          <Card className="bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-200">
            <CardContent className="pt-6 pb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 mb-2">
                    💡 Guia: Mitos Financeiros Desmascarados
                  </h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Conteúdo educativo que destrói conceitos distorcidos sobre dinheiro e espiritualidade. Design limpo e transformação mental imediata.
                  </p>
                  <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                    <Download className="w-4 h-4 mr-2" />
                    Baixar Guia
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bônus 3 */}
          <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
            <CardContent className="pt-6 pb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Music className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 mb-2">
                    🎵 Playlist "Frequência da Prosperidade"
                  </h3>
                  <p className="text-gray-700 text-sm mb-3">
                    20 faixas com frequências 528Hz, 639Hz e sons calmantes. Criadas especialmente para ritual de organização financeira.
                  </p>
                  <Button size="sm" className="bg-amber-500 hover:bg-amber-600 text-white">
                    <Music className="w-4 h-4 mr-2" />
                    Ouvir Playlist
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Próximos Passos */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardContent className="pt-6 pb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
              🚀 Como Começar
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Acesse o SaaS</h4>
                  <p className="text-gray-700 text-sm">Clique no botão acima para entrar no seu planner financeiro personalizado</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Cadastre Sua Renda</h4>
                  <p className="text-gray-700 text-sm">Preencha sua renda mensal para ver seus baldes da prosperidade</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Baixe os Bônus</h4>
                  <p className="text-gray-700 text-sm">Acesse seus materiais exclusivos para acelerar sua transformação</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Comece Pequeno</h4>
                  <p className="text-gray-700 text-sm">Faça sua primeira micro-ação LoA hoje mesmo</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Suporte */}
        <Card className="mt-6 bg-gradient-to-r from-green-50 to-teal-50 border-green-200">
          <CardContent className="pt-6 pb-6 text-center">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="font-bold text-gray-800 mb-2">
              Precisa de Ajuda?
            </h3>
            <p className="text-gray-700 mb-4 text-sm">
              Nossa equipe está aqui para te apoiar em cada passo da jornada
            </p>
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              <Sparkles className="w-4 h-4 mr-2" />
              Falar com Suporte
            </Button>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-sm">
            Bem-vindo à sua nova realidade de abundância! 🌟
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Fluxo de Abundância - Transformando vidas através da prosperidade consciente
          </p>
        </div>
      </div>
    </div>
  )
}

export default function EntregaPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-emerald-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Preparando sua experiência...</p>
        </div>
      </div>
    }>
      <EntregaContent />
    </Suspense>
  )
}