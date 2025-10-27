'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Check, Star, DollarSign, TrendingUp, Heart, Sparkles, Users, Clock, Shield } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 dark:from-gray-900 dark:via-amber-900/20 dark:to-green-900/20">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 relative">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F59E0B" />
                    <stop offset="50%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#059669" />
                  </linearGradient>
                </defs>
                <path 
                  d="M20 4 C12 8, 8 12, 12 20 C16 28, 20 32, 28 28 C36 24, 32 16, 28 12 C24 8, 20 4, 20 4"
                  fill="url(#logoGradient)"
                  stroke="none"
                />
                <circle cx="12" cy="16" r="1.5" fill="#F59E0B" opacity="0.8">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="28" cy="20" r="1.5" fill="#10B981" opacity="0.8">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="20" cy="28" r="1.5" fill="#059669" opacity="0.8">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite"/>
                </circle>
              </svg>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-green-600 bg-clip-text text-transparent">
              Flow of Abundance
            </span>
          </div>
          
          <Button className="bg-gradient-to-r from-amber-500 to-green-500 hover:from-amber-600 hover:to-green-600 text-white">
            Start Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-gradient-to-r from-amber-100 to-green-100 text-amber-800 dark:from-amber-900 dark:to-green-900 dark:text-amber-200">
            🌟 50/30/20 Method + Law of Attraction
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-orange-600 to-green-600 bg-clip-text text-transparent">
            Transform Your Relationship with Money
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Stop &quot;attracting prosperity&quot; without real strategy. Our planner combines <strong>Law of Attraction</strong> with 
            <strong>proven financial strategy</strong> for tangible results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-amber-500 to-green-500 hover:from-amber-600 hover:to-green-600 text-white px-8 py-4 text-lg">
              <Sparkles className="w-5 h-5 mr-2" />
              Start My Transformation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <p className="text-sm text-gray-600 dark:text-gray-400">
              ✨ No gimmicks, no illusion - just real abundance
            </p>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              +1,247 people transformed
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-2 text-yellow-500" />
              4.9/5 star rating
            </div>
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              30-day guarantee
            </div>
          </div>
        </div>
      </section>

      {/* Problema Section */}
      <section className="py-16 px-4 bg-white/50 dark:bg-gray-800/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              You've Tried &quot;Attracting Prosperity&quot; But...
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 border-red-200 dark:border-red-900">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Still in Debt</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Visualize, affirm, manifest... but bills keep piling up and anxiety won't go away.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 border-orange-200 dark:border-orange-900">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Feel Shame & Frustration</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  &quot;Why can't I manifest abundance? My vibration must be too low...&quot; The guilt destroys your self-esteem.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6 border-yellow-200 dark:border-yellow-900">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Waste Precious Time</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Years trying to &quot;elevate your frequency&quot; without practical action. Meanwhile, opportunities pass you by.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solução */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            The Solution: Law of Attraction + Feet on the Ground
          </h2>
          
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Our revolutionary method combines the <strong>spirituality of Law of Attraction</strong> with 
            the <strong>proven financial strategy 50/30/20</strong> to create real abundance.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">50/30/20 Method Automatized</h4>
                  <p className="text-gray-600 dark:text-gray-400">50% essentials, 30% pleasures, 20% abundance bucket. The app calculates everything automatically.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Daily LoA Micro-rituals</h4>
                  <p className="text-gray-600 dark:text-gray-400">Practical abundance actions: save R$ 5, write financial gratitude, ask for discounts.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Visual &quot;Copo Enchendo&quot;</h4>
                  <p className="text-gray-600 dark:text-gray-400">Track your abundance growing visually. Celebrate every centavo conquered!</p>
                </div>
              </div>
            </div>
            
            {/* Mock da interface */}
            <div className="bg-gray-900 rounded-3xl p-6 shadow-2xl">
              <div className="bg-gradient-to-br from-amber-50 to-green-50 rounded-2xl p-6 space-y-4">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-800">Your Prosperity Buckets</h3>
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-gradient-to-b from-amber-100 to-amber-200 p-3 rounded-lg text-center">
                    <div className="text-xs text-amber-800 mb-1">Essentials</div>
                    <div className="font-bold text-amber-800">R$ 2.500</div>
                    <div className="text-xs text-amber-600">50%</div>
                  </div>
                  
                  <div className="bg-gradient-to-b from-purple-100 to-purple-200 p-3 rounded-lg text-center">
                    <div className="text-xs text-purple-800 mb-1">Pleasures</div>
                    <div className="font-bold text-purple-800">R$ 1.500</div>
                    <div className="text-xs text-purple-600">30%</div>
                  </div>
                  
                  <div className="bg-gradient-to-b from-green-100 to-green-200 p-3 rounded-lg text-center">
                    <div className="text-xs text-green-800 mb-1">Abundance</div>
                    <div className="font-bold text-green-800">R$ 1.000</div>
                    <div className="text-xs text-green-600">20%</div>
                  </div>
                </div>
                
                <div className="bg-white p-3 rounded-lg">
                  <div className="text-sm text-gray-700 mb-2">💫 Micro-action of today:</div>
                  <div className="text-xs bg-gradient-to-r from-amber-50 to-green-50 p-2 rounded">
                    &quot;Anote 3 gratidões financeiras no seu celular&quot;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-50 to-green-50 dark:from-amber-900/20 dark:to-green-900/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              What You&apos;ll Conquer
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Get Out of Red",
                description: "In 30 days you&apos;ll have full control of your finances and a clear plan to grow.",
                color: "text-green-600"
              },
              {
                icon: Heart,
                title: "Elevated Self-esteem", 
                description: "Stop blaming yourself. Every small victory rebuilds your confidence and self-esteem.",
                color: "text-pink-600"
              },
              {
                icon: Sparkles,
                title: "Tangible Abundance",
                description: "See your &apos;copo da abundância&apos; fill every month. Prosperity you can touch!",
                color: "text-amber-600"
              },
              {
                icon: Shield,
                title: "Mental Peace",
                description: "Sleep soundly knowing you have an emergency reserve and are in control.",
                color: "text-blue-600"
              }
            ].map((benefit, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-gray-100 dark:bg-gray-800`}>
                    <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              Real Transformation Stories
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Marina Silva",
                role: "Terapeuta Holística",
                content: "Em 2 meses saí de R$ 3.000 de dívida e hoje tenho R$ 1.200 de reserva. O método funciona porque une espiritualidade COM ação prática!",
                stars: 5
              },
              {
                name: "Carlos Mendes", 
                role: "Coach de Vida",
                content: "Finalmente um app que fala a minha linguagem! As micro-ações LoA mudaram minha relação com dinheiro. Recomendo para todos os meus clientes.",
                stars: 5
              },
              {
                name: "Ana Beatriz",
                role: "Consultora em Feng Shui", 
                content: "Deixei de me culpar por 'não conseguir manifestar'. Agora manifesto R$ 500-800 extras todo mês seguindo o método 50/30/20!",
                stars: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex text-yellow-500 mb-4">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-800 dark:text-gray-200">{testimonial.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Preço e CTA Principal */}
      <section className="py-16 px-4 bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-100 dark:from-amber-900/30 dark:via-orange-900/30 dark:to-yellow-900/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              Transform Your Financial Life Today
            </h2>
            
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 line-through">De R$ 197/mês</div>
                    <div className="text-4xl font-bold text-amber-600 mb-2">R$ 97<span className="text-lg">/mês</span></div>
                    <div className="text-sm text-green-600 font-semibold">📈 51% OFF - Oferta Limitada</div>
                  </div>
                  
                  <div className="space-y-3 text-left">
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300">50/30/20 Method automatized</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300">Daily LoA Micro-rituals</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300">Visual &quot;copo da abundância&quot;</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300">Daily Motivational Alerts</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300">WhatsApp Support</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300">30-day unconditional guarantee</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Button size="lg" className="w-full bg-gradient-to-r from-amber-500 to-green-500 hover:from-amber-600 hover:to-green-600 text-white py-4 text-lg">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Start My Transformation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    ✨ Immediate access • No commitment • Cancel when you want
                  </p>
                  
                  <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                    <div className="text-sm text-green-800 dark:text-green-200 font-semibold mb-2">🔒 Total 30-day Guarantee</div>
                    <div className="text-xs text-green-700 dark:text-green-300">
                      If you&apos;re not out of red or don&apos;t feel more confidence with your money, we&apos;ll refund 100% of your investment.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              More than <strong>1.200 people</strong> have transformed their finances. 
              You&apos;ll be next? 🌟
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-6">
            {[
              {
                q: "Não acredito em Lei da Atração. O app funciona mesmo assim?",
                a: "Sim! O método 50/30/20 é cientificamente comprovado. A linguagem LoA apenas torna o processo mais motivante e positivo."
              },
              {
                q: "Quanto tempo leva para ver resultados?", 
                a: "A maioria das pessoas sente mais controle em 7-14 dias. Em 30 dias, você já terá uma reserva crescendo e estará no azul."
              },
              {
                q: "E se eu ganhar muito pouco? O método funciona?",
                a: "Funciona com qualquer renda! Já tivemos transformações incríveis com pessoas ganhando desde R$ 800 até R$ 15.000."
              },
              {
                q: "Posso cancelar quando quiser?",
                a: "Claro! Sem fidelidade, sem multa. E ainda tem 30 dias de garantia total para testar sem risco."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">{faq.q}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-amber-600 to-green-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Abundance is a Click Away
          </h2>
          
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Stop trying to &quot;attract&quot; without strategy. Join the more than 1.200 people 
            who have transformed their financial lives with our unique method.
          </p>
          
          <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 text-lg mb-6">
            <Sparkles className="w-5 h-5 mr-2" />
            Yes, I Want to Transform My Life
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <p className="text-sm opacity-80">
            ✨ Offer valid only today • Last chance • Limited spots
          </p>
        </div>
      </section>

      {/* Footer simples */}
      <footer className="py-8 px-4 bg-gray-900 text-gray-400 text-center">
        <div className="container mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <defs>
                  <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#059669" />
                  </linearGradient>
                </defs>
                <path 
                  d="M20 4 C12 8, 8 12, 12 20 C16 28, 20 32, 28 28 C36 24, 32 16, 28 12 C24 8, 20 4, 20 4"
                  fill="url(#footerGradient)"
                />
              </svg>
            </div>
            <span className="text-lg font-semibold text-white">Flow of Abundance</span>
          </div>
          <p className="text-sm">
            © 2024 Flow of Abundance. Transforming lives through conscious abundance.
          </p>
        </div>
      </footer>
    </div>
  )
}