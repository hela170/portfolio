import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Package, Server, Database, ShieldCheck, GitBranch, Building2, GraduationCap, Users } from "lucide-react"

export default function ExperiencesPage() {
  const missions = [
    {
      icon: Database,
      color: "text-purple-400",
      title: "Modélisation de la base de données",
      text: "Conception du schéma relationnel pour gérer les fournisseurs, les bons de commande et les livraisons, puis mise en place sous MySQL.",
    },
    {
      icon: Server,
      color: "text-green-400",
      title: "Développement de l'application web",
      text: "Création d'une interface responsive en PHP, HTML et CSS permettant de suivre l'état des commandes et des livraisons en temps réel.",
    },
    {
      icon: ShieldCheck,
      color: "text-blue-400",
      title: "Authentification via CAS",
      text: "Intégration du service CAS de l'IUT avec une gestion fine des rôles, pour que chaque utilisateur n'accède qu'à ses propres données.",
    },
  ]

  const competences = [
    "Modélisation de données (MCD/MLD)",
    "Développement back-end PHP",
    "Intégration HTML / CSS responsive",
    "Requêtes SQL & MySQL",
    "Authentification CAS & rôles",
    "Travail en environnement réel (IUT)",
  ]

  const apprentissages = [
    {
      color: "text-cyan-400",
      title: "Lecture d'un vrai besoin",
      text: "Comprendre les attentes des utilisateurs de l'IUT m'a appris à traduire un besoin concret en fonctionnalités précises plutôt qu'en suppositions.",
    },
    {
      color: "text-pink-400",
      title: "Rigueur et organisation",
      text: "Gérer des données sensibles (commandes, livraisons) impose une structure claire et des contrôles à chaque étape, du modèle jusqu'à l'interface.",
    },
    {
      color: "text-orange-400",
      title: "Autonomie technique",
      text: "Mettre en place l'authentification CAS sans documentation toute prête m'a poussée à explorer, tester et corriger par moi-même.",
    },
  ]

  const autresExperiences = [
    {
      icon: Building2,
      color: "text-blue-400",
      border: "border-blue-500/30",
      hover: "hover:border-blue-400/50",
      title: "Stage d'observation — Worldline, La Défense",
      period: "2019 - 2020",
      missions: "Découverte des métiers du développement informatique et participation à de premières tâches de programmation (Scratch).",
      bilan: "Premier contact avec un environnement d'entreprise tech : j'y ai compris l'importance de la collaboration entre équipes.",
    },
    {
      icon: GraduationCap,
      color: "text-green-400",
      border: "border-green-500/30",
      hover: "hover:border-green-400/50",
      title: "Cours particuliers — Bezons",
      period: "2023 - Présent",
      missions: "Soutien scolaire en mathématiques pour des élèves de primaire et de collège.",
      bilan: "Transmettre une notion clairement développe la pédagogie, l'écoute et la patience — des qualités utiles en équipe.",
    },
    {
      icon: Users,
      color: "text-pink-400",
      border: "border-pink-500/30",
      hover: "hover:border-pink-400/50",
      title: "Bénévole à la Mairie — Bezons",
      period: "2023 - 2024",
      missions: "Support administratif et organisationnel, coordination et facilitation de la gestion des tâches.",
      bilan: "J'ai appris à m'organiser dans un cadre où la fiabilité et le respect des délais comptent vraiment.",
    },
  ]

  return (
    <div className="min-h-screen py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <h1 className="text-4xl font-bold md:text-5xl mb-4">
            <span className="text-gray-500">$</span>{" "}
            <span className="gradient-text">cat experiences/decouverte-monde-pro.md</span>
          </h1>
          <p className="text-xl text-gray-300">
            <span className="text-cyan-400">{"// "}</span>À la découverte du monde professionnel
          </p>
        </div>

        {/* Projet phare : suivi de colis */}
        <Card className="bg-gray-800 border-2 border-cyan-500/30 hover:border-cyan-400/50 transition-all mb-12">
          <CardHeader>
            <div className="flex items-start space-x-3">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center shrink-0">
                <Package className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <CardTitle className="gradient-text font-mono text-xl">
                  Site web de suivi de colis pour l&apos;IUT
                </CardTitle>
                <p className="text-gray-400 text-sm mt-1 font-mono">PHP · HTML · CSS · MySQL · CAS</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-8">
            <p className="text-gray-300 leading-relaxed">
              Conception d&apos;une application web responsive destinée au suivi des commandes et des livraisons
              de l&apos;IUT. Le projet couvrait l&apos;ensemble de la chaîne : de la modélisation de la base de
              données jusqu&apos;à l&apos;interface utilisée par le personnel, en passant par la sécurisation des
              accès.
            </p>

            {/* Missions */}
            <div>
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <span className="text-cyan-400 mr-2">{">"}</span> Missions réalisées
              </h3>
              <div className="grid gap-4 md:grid-cols-3">
                {missions.map((m, i) => {
                  const Icon = m.icon
                  return (
                    <div key={i} className="bg-gray-700 rounded-lg p-4 border border-gray-600/50">
                      <Icon className={`h-5 w-5 ${m.color} mb-3`} />
                      <h4 className="text-white font-semibold text-sm mb-2">{m.title}</h4>
                      <p className="text-gray-400 text-xs leading-relaxed">{m.text}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Compétences mobilisées */}
            <div>
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <span className="text-green-400 mr-2">{">"}</span> Compétences mobilisées
              </h3>
              <div className="flex flex-wrap gap-2">
                {competences.map((c, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className={`font-mono text-xs ${
                      i % 4 === 0
                        ? "border-blue-500/50 text-blue-400"
                        : i % 4 === 1
                          ? "border-green-500/50 text-green-400"
                          : i % 4 === 2
                            ? "border-purple-500/50 text-purple-400"
                            : "border-pink-500/50 text-pink-400"
                    }`}
                  >
                    {c}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Apprentissages / bilan softskills */}
            <div>
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <span className="text-pink-400 mr-2">{">"}</span> Ce que ce projet m&apos;a apporté
              </h3>
              <div className="grid gap-4 md:grid-cols-3">
                {apprentissages.map((a, i) => (
                  <div key={i} className="bg-gray-700 rounded-lg p-4 border border-gray-600/50">
                    <h4 className={`${a.color} font-semibold text-sm mb-2`}>{a.title}</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">{a.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Autres expériences */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">
            <span className="text-gray-500">$</span> <span className="gradient-text">ls autres-experiences/</span>
          </h2>
          <p className="text-gray-400 font-mono text-sm">
            <span className="text-green-400">{"// "}</span>Les expériences qui ont nourri mon parcours
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {autresExperiences.map((exp, i) => {
            const Icon = exp.icon
            return (
              <Card key={i} className={`bg-gray-800 border-2 ${exp.border} ${exp.hover} transition-all`}>
                <CardHeader>
                  <CardTitle className={`${exp.color} flex items-center text-base`}>
                    <Icon className="mr-2 h-5 w-5 shrink-0" />
                    {exp.title}
                  </CardTitle>
                  <p className="text-gray-500 font-mono text-xs mt-1">{exp.period}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-gray-300 text-xs font-semibold mb-1">Missions</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{exp.missions}</p>
                  </div>
                  <div>
                    <p className="text-gray-300 text-xs font-semibold mb-1">Apprentissage</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{exp.bilan}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
