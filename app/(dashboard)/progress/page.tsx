'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Trophy,
  Medal,
  Crown,
  Star,
  Flame,
  Target,
  Award,
  Users,
  Sparkles,
  Shield,
  Gem,
  Diamond,
  Heart,
  Zap
} from 'lucide-react';
import React from 'react';

interface UserProgress {
  nivel: number;
  pontos: number;
  pontosProximoNivel: number;
  streakAtual: number;
  melhorStreak: number;
  diasAtivos: number;
  conquistas: number;
  ranking: number;
  energiaProsperidade: number;
}

interface Conquista {
  id: string;
  titulo: string;
  descricao: string;
  icone: React.ComponentType<{ className?: string }>;
  conquistada: boolean;
  cor: string;
  pontos: number;
  categoria: 'financial' | 'spiritual' | 'habit' | 'social';
}

interface UsuarioRanking {
  nome: string;
  nivel: number;
  pontos: number;
  avatar: string;
  conquistadoHoje: boolean;
}

interface Afirmacao {
  id: string;
  texto: string;
  tipo: 'prosperidade' | 'gratidao' | 'acao' | 'manifestacao';
  categoria: string;
  unlocked: boolean;
}

export default function ProgressPage() {
  const [userProgress, setUserProgress] = useState<UserProgress>({
    nivel: 3,
    pontos: 1250,
    pontosProximoNivel: 1500,
    streakAtual: 7,
    melhorStreak: 12,
    diasAtivos: 23,
    conquistas: 8,
    ranking: 47,
    energiaProsperidade: 78
  });

  const [afirmacaoDiaria, setAfirmacaoDiaria] = useState<Afirmacao | null>(null);
  const [mostrarAfirmacao, setMostrarAfirmacao] = useState(true);

  // Calcular progresso para próximo nível
  const progressoNivel = (userProgress.pontos / userProgress.pontosProximoNivel) * 100;

  // Sistema de afirmações baseado na regularidade
  const afirmacoes: Afirmacao[] = [
    {
      id: '1',
      texto: 'I attract abundance with naturalness and joy in my life.',
      tipo: 'prosperidade',
      categoria: 'Basic',
      unlocked: userProgress.streakAtual >= 1
    },
    {
      id: '2',
      texto: 'Every dollar that enters my life multiplies abundantly.',
      tipo: 'prosperidade',
      categoria: 'Intermediate',
      unlocked: userProgress.streakAtual >= 3
    },
    {
      id: '3',
      texto: 'I am grateful for every financial opportunity that manifests.',
      tipo: 'gratidao',
      categoria: 'Intermediate',
      unlocked: userProgress.streakAtual >= 5
    },
    {
      id: '4',
      texto: 'I make intelligent financial decisions that generate prosperity.',
      tipo: 'acao',
      categoria: 'Advanced',
      unlocked: userProgress.streakAtual >= 7
    },
    {
      id: '5',
      texto: 'My abundance energy attracts more prosperity every day.',
      tipo: 'manifestacao',
      categoria: 'Master',
      unlocked: userProgress.streakAtual >= 10
    },
    {
      id: '6',
      texto: 'I celebrate every small financial victory with deep gratitude.',
      tipo: 'gratidao',
      categoria: 'Master',
      unlocked: userProgress.streakAtual >= 12
    }
  ];

  // Conquistas elaboradas
  const conquistas: Conquista[] = [
    {
      id: 'primeira-economia',
      titulo: 'First Seed',
      descricao: 'Saved your first $5 of abundance',
      icone: Star,
      conquistada: true,
      cor: 'text-yellow-500',
      pontos: 50,
      categoria: 'financial'
    },
    {
      id: 'streak-7',
      titulo: 'Constant Manifestor',
      descricao: '7 consecutive days of financial practice',
      icone: Flame,
      conquistada: true,
      cor: 'text-orange-500',
      pontos: 150,
      categoria: 'habit'
    },
    {
      id: 'investidor-sabio',
      titulo: 'Wise Investor',
      descricao: 'Applied 20% of income to investments',
      icone: Target,
      conquistada: false,
      cor: 'text-green-500',
      pontos: 200,
      categoria: 'financial'
    },
    {
      id: 'mestre-gratidao',
      titulo: 'Gratitude Master',
      descricao: 'Practiced financial gratitude for 30 days',
      icone: Heart,
      conquistada: false,
      cor: 'text-pink-500',
      pontos: 250,
      categoria: 'spiritual'
    },
    {
      id: 'mentor-prosperidade',
      titulo: 'Prosperity Mentor',
      descricao: 'Helped 5 people on their wealth journey',
      icone: Users,
      conquistada: false,
      cor: 'text-blue-500',
      pontos: 300,
      categoria: 'social'
    },
    {
      id: 'mestre-manifestacao',
      titulo: 'Manifestation Master',
      descricao: 'Reached $10,000 in emergency fund',
      icone: Crown,
      conquistada: false,
      cor: 'text-purple-500',
      pontos: 500,
      categoria: 'financial'
    }
  ];

  // Ranking competitivo (simulado)
  const rankingUsuarios: UsuarioRanking[] = [
    { nome: 'You', nivel: userProgress.nivel, pontos: userProgress.pontos, avatar: '👤', conquistadoHoje: true },
    { nome: 'Sarah Johnson', nivel: 5, pontos: 2100, avatar: '👩', conquistadoHoje: false },
    { nome: 'Michael Davis', nivel: 4, pontos: 1850, avatar: '👨', conquistadoHoje: true },
    { nome: 'Emily Wilson', nivel: 3, pontos: 1420, avatar: '👩‍💼', conquistadoHoje: false },
    { nome: 'David Brown', nivel: 4, pontos: 1680, avatar: '👨‍💻', conquistadoHoje: true },
  ];

  // Selecionar afirmação baseada no streak
  useEffect(() => {
    const afirmacoesDisponiveis = afirmacoes.filter(a => a.unlocked);
    if (afirmacoesDisponiveis.length > 0) {
      const hoje = new Date().getDate();
      const index = hoje % afirmacoesDisponiveis.length;
      setAfirmacaoDiaria(afirmacoesDisponiveis[index]);
    }
  }, [userProgress.streakAtual]);

  const getNivelIcon = (nivel: number) => {
    if (nivel >= 10) return Crown;
    if (nivel >= 7) return Diamond;
    if (nivel >= 5) return Gem;
    if (nivel >= 3) return Star;
    return Shield;
  };

  const getNivelColor = (nivel: number) => {
    if (nivel >= 10) return 'from-purple-500 to-pink-500';
    if (nivel >= 7) return 'from-blue-500 to-cyan-500';
    if (nivel >= 5) return 'from-emerald-500 to-green-500';
    if (nivel >= 3) return 'from-amber-500 to-orange-500';
    return 'from-gray-500 to-slate-500';
  };

  const NivelIcon = getNivelIcon(userProgress.nivel);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-emerald-50 p-4">
      <div className="max-w-md mx-auto pt-8 pb-24 space-y-6">

        {/* Afirmação Diária */}
        {mostrarAfirmacao && afirmacaoDiaria && (
          <Card className="bg-gradient-to-r from-violet-50 to-purple-50 border-violet-200 relative">
            <CardContent className="pt-6 pb-4">
              <button
                onClick={() => setMostrarAfirmacao(false)}
                className="absolute top-2 right-2 text-violet-400 hover:text-violet-600"
              >
                ✕
              </button>
              <div className="text-center">
                <div className="text-2xl mb-3">✨</div>
                <h3 className="font-semibold text-violet-900 mb-2">
                  Daily Affirmation
                </h3>
                <p className="text-violet-800 font-medium mb-2">
                  "{afirmacaoDiaria.texto}"
                </p>
                <Badge variant="secondary" className="bg-violet-100 text-violet-700">
                  {afirmacaoDiaria.categoria}
                </Badge>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Header com Nível */}
        <div className="text-center">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${getNivelColor(userProgress.nivel)} text-white mb-4 shadow-lg`}>
            <NivelIcon className="w-10 h-10" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent mb-2">
            Your Abundance Progress
          </h1>
          
          <p className="text-gray-600">
            Your journey of manifestation in numbers
          </p>

          {/* Barra de Progresso do Nível */}
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>{userProgress.pontos} points</span>
              <span>{userProgress.pontosProximoNivel} points</span>
            </div>
            <div className="bg-gray-200 rounded-full h-3">
              <div
                className={`bg-gradient-to-r ${getNivelColor(userProgress.nivel)} h-3 rounded-full transition-all duration-500`}
                style={{ width: `${progressoNivel}%` }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {userProgress.pontosProximoNivel - userProgress.pontos} points to next level
            </p>
          </div>
        </div>

        {/* Estatísticas Principais */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
            <CardContent className="pt-4 pb-4">
              <div className="text-center">
                <Flame className="w-6 h-6 text-orange-500 mx-auto mb-1" />
                <div className="text-xl font-bold text-amber-900">
                  {userProgress.streakAtual}
                </div>
                <p className="text-xs text-amber-700">
                  Consecutive days
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-200">
            <CardContent className="pt-4 pb-4">
              <div className="text-center">
                <Zap className="w-6 h-6 text-emerald-500 mx-auto mb-1" />
                <div className="text-xl font-bold text-emerald-900">
                  {userProgress.energiaProsperidade}%
                </div>
                <p className="text-xs text-emerald-700">
                  Abundance energy
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Ranking Comunitário */}
        <Card className="bg-white border-gray-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <Trophy className="w-5 h-5 text-yellow-500 mr-2" />
              Community Ranking
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-3">
              {rankingUsuarios.map((usuario, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-3 rounded-lg ${
                    usuario.nome === 'You' ? 'bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200' : 'bg-gray-50'
                  }`}
                >
                  <div className={`text-lg font-bold w-6 ${
                    index === 0 ? 'text-yellow-500' :
                    index === 1 ? 'text-gray-400' :
                    index === 2 ? 'text-amber-600' : 'text-gray-500'
                  }`}>
                    {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `#${index + 1}`}
                  </div>
                  <div className="text-xl">{usuario.avatar}</div>
                  <div className="flex-1">
                    <p className={`font-medium ${usuario.nome === 'You' ? 'text-yellow-900' : 'text-gray-900'}`}>
                      {usuario.nome}
                    </p>
                    <p className="text-xs text-gray-500">
                      Level {usuario.nivel} • {usuario.pontos} points
                    </p>
                  </div>
                  {usuario.conquistadoHoje && (
                    <div className="text-green-500">
                      <Sparkles className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-gray-200">
              <p className="text-center text-sm text-gray-600">
                You're ranked #{userProgress.ranking} out of 1,247 manifestors
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Conquistas por Categoria */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <Award className="w-6 h-6 text-purple-500 mr-2" />
            Abundance Achievements
          </h2>

          <div className="space-y-3">
            {conquistas.map((conquista) => (
              <Card
                key={conquista.id}
                className={`${conquista.conquistada ? 'bg-gradient-to-r from-yellow-50 to-amber-50 border-yellow-200' : 'bg-gray-50 border-gray-200'}`}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-full ${conquista.conquistada ? 'bg-yellow-100' : 'bg-gray-100'}`}>
                      <conquista.icone className={`w-5 h-5 ${conquista.conquistada ? conquista.cor : 'text-gray-400'}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-medium ${conquista.conquistada ? 'text-gray-900' : 'text-gray-500'}`}>
                        {conquista.titulo}
                      </h3>
                      <p className={`text-sm ${conquista.conquistada ? 'text-gray-700' : 'text-gray-400'}`}>
                        {conquista.descricao}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          +{conquista.pontos} points
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {conquista.categoria}
                        </Badge>
                      </div>
                    </div>
                    {conquista.conquistada && (
                      <div className="text-yellow-500">
                        <Medal className="w-5 h-5 fill-current" />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Próximas Conquistas */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <Target className="w-5 h-5 text-blue-500 mr-2" />
              Next Achievements
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-3">
              {conquistas.filter(c => !c.conquistada).slice(0, 3).map((conquista) => (
                <div key={conquista.id} className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                  <div className="p-2 rounded-full bg-gray-100">
                    <conquista.icone className={`w-4 h-4 ${conquista.cor}`} />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{conquista.titulo}</p>
                    <p className="text-sm text-gray-600">{conquista.descricao}</p>
                  </div>
                  <Badge variant="outline">+{conquista.pontos}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Mensagem de Encorajamento */}
        <Card className="bg-gradient-to-r from-violet-50 to-purple-50 border-violet-200">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🌟</div>
              <p className="text-violet-800 font-medium mb-2">
                "Each level conquered is a manifestation of your inner abundance"
              </p>
              <p className="text-sm text-violet-600">
                Continue nurturing your conscious wealth journey! 💰✨
              </p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}