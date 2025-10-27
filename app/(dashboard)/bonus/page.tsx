'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  BookOpen,
  Lightbulb,
  Music,
  Download,
  Play,
  Star,
  Heart,
  Zap,
  Target,
  Sparkles,
  ArrowRight,
  ExternalLink,
  CheckCircle
} from 'lucide-react';

interface BonusItem {
  id: string;
  titulo: string;
  descricao: string;
  icone: React.ComponentType<{ className?: string }>;
  tipo: 'ebook' | 'conteudo' | 'playlist';
  unlocked: boolean;
  downloadUrl?: string;
  spotifyUrl?: string;
  youtubeUrl?: string;
  beneficio: string;
}

interface Afirmacao {
  id: string;
  texto: string;
  categoria: string;
}

export default function BonusPage() {
  const [selectedBonus, setSelectedBonus] = useState<string | null>(null);
  const [afirmacaoAtual, setAfirmacaoAtual] = useState(0);

  // E-book affirmations (21 prosperity affirmations)
  const afirmacoesEbook: Afirmacao[] = [
    { id: '1', texto: 'I attract abundance with naturalness and joy in my life.', categoria: 'Basic Prosperity' },
    { id: '2', texto: 'Every dollar that enters my life multiplies abundantly.', categoria: 'Basic Prosperity' },
    { id: '3', texto: 'I am grateful for every financial opportunity that manifests.', categoria: 'Financial Gratitude' },
    { id: '4', texto: 'I make intelligent financial decisions that generate prosperity.', categoria: 'Conscious Action' },
    { id: '5', texto: 'My abundance energy attracts more prosperity every day.', categoria: 'Manifestation' },
    { id: '6', texto: 'I celebrate every small financial victory with deep gratitude.', categoria: 'Financial Gratitude' },
    { id: '7', texto: 'I manage with joy every value that enters my life.', categoria: 'Joyful Management' },
    { id: '8', texto: 'My investments grow harmoniously with my positive energy.', categoria: 'Investments' },
    { id: '9', texto: 'I am a powerful magnet for prosperity opportunities.', categoria: 'Magnetic Attraction' },
    { id: '10', texto: 'Every expense I make returns multiplied in blessings.', categoria: 'Circular Abundance' },
    { id: '11', texto: 'I live with abundance in all areas of my life.', categoria: 'Abundant Life' },
    { id: '12', texto: 'My positive beliefs create prosperous financial reality.', categoria: 'Positive Beliefs' },
    { id: '13', texto: 'I deserve and receive infinite prosperity in my journey.', categoria: 'Deserving' },
    { id: '14', texto: 'My mind is aligned with the frequency of abundance.', categoria: 'Mental Alignment' },
    { id: '15', texto: 'I am financially free and help others be too.', categoria: 'Financial Freedom' },
    { id: '16', texto: 'Every prosperous thought manifests in tangible reality.', categoria: 'Conscious Manifestation' },
    { id: '17', texto: 'I choose abundance in every decision I make.', categoria: 'Prosperous Choices' },
    { id: '18', texto: 'My financial energy flows freely and abundantly.', categoria: 'Energy Flow' },
    { id: '19', texto: 'I am grateful for the money I have and for what is coming.', categoria: 'Present Gratitude' },
    { id: '20', texto: 'My prosperity benefits everyone around me.', categoria: 'Shared Abundance' },
    { id: '21', texto: 'I live in perfect harmony with the universal law of prosperity.', categoria: 'Universal Harmony' }
  ];

  // Educational content about beliefs
  const conteudoEducativo = [
    {
      titulo: 'The Myth "Money is Dirty"',
      descricao: 'How this unconscious belief blocks your prosperity and how to reprogram it.',
      pontos: [
        'Historical origin of this belief in Puritanism',
        'How it creates unconscious guilt in financial decisions',
        'Practical exercises to release this limiting belief'
      ]
    },
    {
      titulo: 'Spirituality vs Prosperity',
      descricao: 'Why many spiritual people have financial difficulties.',
      pontos: [
        'The misconception that "spiritual = poor"',
        'How to align material prosperity with spiritual growth',
        'Examples of prosperous spiritual masters'
      ]
    },
    {
      titulo: 'The Betrayal of "Financial Victims"',
      descricao: 'How the victim role keeps you in scarcity.',
      pontos: [
        'Signs that you are in "financial victim" mode',
        'How to take responsibility for your prosperity',
        'Practical steps to exit the victimization cycle'
      ]
    }
  ];

  // Prosperity playlist
  const playlistMusicas = [
    {
      titulo: 'Om (528Hz) - Healing Frequency',
      artista: 'Sacred Frequencies',
      duracao: '15:30',
      frequencia: '528Hz',
      beneficio: 'Cellular healing and regeneration',
      spotifyUrl: '#',
      youtubeUrl: '#'
    },
    {
      titulo: 'Cosmic Abundance',
      artista: 'Manifestation Music',
      duracao: '12:45',
      frequencia: '639Hz',
      beneficio: 'Harmonizes relationships and connections',
      spotifyUrl: '#',
      youtubeUrl: '#'
    },
    {
      titulo: 'Flow of Prosperity',
      artista: 'Abundance Frequencies',
      duracao: '18:20',
      frequencia: '528Hz + 639Hz',
      beneficio: 'Attracts prosperity and harmony',
      spotifyUrl: '#',
      youtubeUrl: '#'
    },
    {
      titulo: 'Manifestation Meditation',
      artista: 'Energy Center',
      duracao: '22:10',
      frequencia: '432Hz',
      beneficio: 'Aligns intentions with the universe',
      spotifyUrl: '#',
      youtubeUrl: '#'
    },
    {
      titulo: 'Inner Wealth',
      artista: 'Sonic Abundance',
      duracao: '16:55',
      frequencia: '528Hz',
      beneficio: 'Activates the prosperity center',
      spotifyUrl: '#',
      youtubeUrl: '#'
    }
  ];

  const bonusItems: BonusItem[] = [
    {
      id: 'ebook',
      titulo: 'Mini E-book: 21 Prosperity Affirmations',
      descricao: 'Behavioral affirmations that reprogram your unconscious financial beliefs.',
      icone: BookOpen,
      tipo: 'ebook',
      unlocked: true,
      beneficio: 'Automatic mental reprogramming through phrases that generate real action.'
    },
    {
      id: 'conteudo',
      titulo: 'Exclusive Educational Content',
      descricao: 'Debunk limiting beliefs about money and spirituality.',
      icone: Lightbulb,
      tipo: 'conteudo',
      unlocked: true,
      beneficio: 'Immediate mental transformation with practical and applicable knowledge.'
    },
    {
      id: 'playlist',
      titulo: '"Prosperity Frequency" Playlist',
      descricao: '20 tracks with 528Hz, 639Hz frequencies and soothing sounds for manifestation.',
      icone: Music,
      tipo: 'playlist',
      unlocked: true,
      spotifyUrl: '#',
      youtubeUrl: '#',
      beneficio: 'Creates usage ritual: listen while organizing finances to enhance manifestation.'
    }
  ];

  const renderBonusContent = () => {
    switch (selectedBonus) {
      case 'ebook':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-4xl mb-4">📖</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                21 Prosperity Affirmations
              </h2>
              <p className="text-gray-600 mb-6">
                Behavioral affirmations that reprogram your financial beliefs
              </p>
            </div>

            {/* Affirmation navigation */}
            <div className="flex justify-between items-center mb-6">
              <Button
                onClick={() => setAfirmacaoAtual(Math.max(0, afirmacaoAtual - 1))}
                disabled={afirmacaoAtual === 0}
                variant="outline"
              >
                Previous
              </Button>
              <span className="text-sm text-gray-600">
                {afirmacaoAtual + 1} of {afirmacoesEbook.length}
              </span>
              <Button
                onClick={() => setAfirmacaoAtual(Math.min(afirmacoesEbook.length - 1, afirmacaoAtual + 1))}
                disabled={afirmacaoAtual === afirmacoesEbook.length - 1}
                variant="outline"
              >
                Next
              </Button>
            </div>

            {/* Current affirmation */}
            <Card className="bg-gradient-to-r from-violet-50 to-purple-50 border-violet-200">
              <CardContent className="pt-6 pb-6">
                <div className="text-center">
                  <div className="text-3xl mb-4">✨</div>
                  <p className="text-xl font-medium text-violet-900 mb-4">
                    "{afirmacoesEbook[afirmacaoAtual].texto}"
                  </p>
                  <Badge className="bg-violet-100 text-violet-700">
                    {afirmacoesEbook[afirmacaoAtual].categoria}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Usage tips */}
            <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Zap className="w-5 h-5 text-amber-500 mr-2" />
                  How to Use These Affirmations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Repeat 3x in the morning upon waking
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Use during financial organization
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Repeat before sleeping for mental programming
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Combine with deep breathing for greater impact
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Button className="w-full bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700">
              <Download className="w-4 h-4 mr-2" />
              Download Complete E-book (PDF)
            </Button>
          </div>
        );

      case 'conteudo':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Exclusive Educational Content
              </h2>
              <p className="text-gray-600 mb-6">
                Debunking beliefs that block your prosperity
              </p>
            </div>

            <div className="space-y-4">
              {conteudoEducativo.map((topico, index) => (
                <Card key={index} className="border-l-4 border-l-emerald-500">
                  <CardHeader>
                    <CardTitle className="text-lg">{topico.titulo}</CardTitle>
                    <p className="text-sm text-gray-600">{topico.descricao}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {topico.pontos.map((ponto, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          {ponto}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-200">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-3xl mb-3">🌱</div>
                  <h3 className="font-semibold text-emerald-900 mb-2">
                    Immediate Mental Transformation
                  </h3>
                  <p className="text-sm text-emerald-700 mb-4">
                    This content was developed to generate rapid behavioral change,
                    combining positive psychology with practical principles of conscious finances.
                  </p>
                  <Button className="bg-emerald-500 hover:bg-emerald-600">
                    <Download className="w-4 h-4 mr-2" />
                    Download Complete Guide
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'playlist':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🎵</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                "Prosperity Frequency" Playlist
              </h2>
              <p className="text-gray-600 mb-6">
                20 tracks with sacred frequencies for manifestation and abundance
              </p>
            </div>

            {/* Benefits */}
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Sparkles className="w-5 h-5 text-blue-500 mr-2" />
                  Why does this playlist work?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <strong>528Hz:</strong> Frequency of healing and cellular regeneration
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <strong>639Hz:</strong> Harmonizes relationships and prosperous connections
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <strong>432Hz:</strong> Aligns intentions with universal flow
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    Soothing sounds create ideal meditative state for manifestation
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Music list */}
            <div className="space-y-3">
              {playlistMusicas.map((musica, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{musica.titulo}</h3>
                        <p className="text-sm text-gray-600">{musica.artista}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {musica.frequencia}
                          </Badge>
                          <span className="text-xs text-gray-500">{musica.duracao}</span>
                        </div>
                        <p className="text-xs text-purple-600 mt-1">{musica.beneficio}</p>
                      </div>
                      <div className="flex gap-1">
                        <Button size="sm" variant="outline" asChild>
                          <a href={musica.spotifyUrl} target="_blank" rel="noopener noreferrer">
                            <Play className="w-4 h-4" />
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <a href={musica.youtubeUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to action */}
            <div className="grid grid-cols-1 gap-3">
              <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                <Music className="w-4 h-4 mr-2" />
                Listen on Spotify
              </Button>
              <Button variant="outline" className="w-full">
                <Play className="w-4 h-4 mr-2" />
                Listen on YouTube
              </Button>
            </div>

            <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-2xl mb-2">🎧</div>
                  <p className="text-sm text-purple-700">
                    <strong>Tip:</strong> Use headphones and listen while organizing your finances.
                    The frequencies enhance your manifestation energy!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🎁</div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                Exclusive Bonuses
              </h1>
              <p className="text-gray-600">
                Premium content to accelerate your abundance journey
              </p>
            </div>

            <div className="space-y-4">
              {bonusItems.map((bonus) => (
                <Card
                  key={bonus.id}
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    bonus.unlocked ? 'border-l-4 border-l-emerald-500' : 'opacity-60'
                  }`}
                  onClick={() => bonus.unlocked && setSelectedBonus(bonus.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className={`p-3 rounded-xl ${
                        bonus.unlocked ? 'bg-emerald-100' : 'bg-gray-100'
                      }`}>
                        <bonus.icone className={`w-6 h-6 ${
                          bonus.unlocked ? 'text-emerald-600' : 'text-gray-400'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {bonus.titulo}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          {bonus.descricao}
                        </p>
                        <p className="text-xs text-emerald-600 font-medium">
                          {bonus.beneficio}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          {bonus.unlocked ? (
                            <>
                              <Badge className="bg-emerald-100 text-emerald-700">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                Unlocked
                              </Badge>
                              <ArrowRight className="w-4 h-4 text-emerald-500" />
                            </>
                          ) : (
                            <Badge variant="outline">
                              Coming Soon
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-2xl mb-2">⭐</div>
                  <p className="text-amber-800 font-medium">
                    "Each bonus was created to enhance your manifestation energy"
                  </p>
                  <p className="text-sm text-amber-600 mt-2">
                    Use them daily for extraordinary results! ✨
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-emerald-50 p-4">
      <div className="max-w-md mx-auto pt-8 pb-24">
        {/* Header with back button */}
        {selectedBonus && (
          <div className="mb-6">
            <Button
              onClick={() => setSelectedBonus(null)}
              variant="ghost"
              className="mb-4"
            >
              ← Back to Bonuses
            </Button>
          </div>
        )}

        {renderBonusContent()}
      </div>
    </div>
  );
}