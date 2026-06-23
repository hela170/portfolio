import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Monitor, GraduationCap, User } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <h1 className="text-4xl font-bold md:text-5xl mb-4">
            <span className="text-gray-500">$</span> <span className="gradient-text">cat about.md</span>
          </h1>
          <p className="text-xl text-gray-300">
            <span className="text-purple-400">{"// "}</span>Découvrez mon parcours et mes motivations
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 mb-16">
          <Card className="bg-gray-800 border-2 border-purple-500/30 hover:border-purple-400/50 transition-all">
            <CardHeader>
              <CardTitle className="text-purple-400 flex items-center">
                <User className="mr-2 h-5 w-5" />
                Profil
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">
                Étudiante en deuxième année de BUT Informatique à la Sorbonne Paris Nord. Ce qui me caractérise, c&apos;est
                la rigueur : j&apos;aime comprendre un problème en profondeur avant d&apos;y répondre, structurer mes
                données et vérifier chaque étape. Cette approche méthodique me vient autant de ma formation scientifique
                que de l&apos;habitude de réparer et comprendre comment les choses fonctionnent.
              </p>
              <br />
              <p className="text-gray-300 leading-relaxed">
                Ma formation actuelle me permet d'explorer différents domaines de l'informatique : développement, bases
                de données, réseaux et systèmes. Je mets à profit chaque projet pour approfondir mes connaissances et
                développer mon expertise technique.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-2 border-blue-500/30 hover:border-blue-400/50 transition-all">
            <CardHeader>
              <CardTitle className="text-blue-400 flex items-center">
                <GraduationCap className="mr-2 h-5 w-5" />
                Formation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-2 border-green-500 pl-6">
                <h4 className="font-bold text-white">BUT Informatique</h4>
                <p className="text-gray-300">IUT Sorbonne Paris Nord - Villetaneuse</p>
                <p className="text-sm text-green-400">2025-2027 | En cours (2e année)</p>
                <p className="text-sm text-gray-400 mt-2">
                  Formation complète en développement logiciel, bases de données, réseaux et systèmes.
                </p>
              </div>
              <div className="border-l-2 border-orange-500/50 pl-6">
                <h4 className="font-bold text-white">Prépa TSI</h4>
                <p className="text-gray-300">Formation validée</p>
                <p className="text-sm text-orange-400">2023-2024 | ✓ Completed</p>
                <p className="text-sm text-gray-400 mt-2">
                  Renforcement en sciences industrielles, mathématiques et informatique.
                </p>
              </div>
              <div className="border-l-2 border-pink-500/50 pl-6">
                <h4 className="font-bold text-white">Bac STI2D</h4>
                <p className="text-gray-300">Sciences et Technologies de l'Industrie</p>
                <p className="text-sm text-pink-400">2023 | Mention Bien</p>
                <p className="text-sm text-gray-400 mt-2">
                  Spécialisation en développement durable et nouvelles technologies.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gray-800 border-2 border-cyan-500/30 hover:border-cyan-400/50 transition-all">
          <CardHeader>
            <CardTitle className="text-cyan-400 flex items-center">
              <Monitor className="mr-2 h-5 w-5" />
              Objectifs & Motivations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="font-bold text-white mb-3">Objectifs professionnels</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">{">"}</span>
                    Trouver une alternance pour la rentrée 2026/2027
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">{">"}</span>
                    Approfondir le développement web et les bases de données
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">{">"}</span>
                    Travailler sur des applications réelles, utilisées au quotidien
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-2">{">"}</span>
                    Monter en autonomie sur la conception logicielle
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-3">Soft Skills</h4>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { skill: "Communication", color: "text-blue-400" },
                    { skill: "Collaboration", color: "text-green-400" },
                    { skill: "Gestion du temps", color: "text-purple-400" },
                    { skill: "Esprit critique", color: "text-pink-400" },
                    { skill: "Persévérance", color: "text-orange-400" },
                    { skill: "Curiosité", color: "text-cyan-400" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className={`${item.color} text-xs`}>✓</span>
                      <span className="text-gray-300 text-sm">{item.skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
