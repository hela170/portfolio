import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Chrome, Code2, Wrench, GraduationCap, Users, Baby } from "lucide-react"

export default function ExperiencesPage() {
  const missions = [
    {
      icon: Chrome,
      color: "text-cyan-400",
      title: "Extension Chrome",
      text: "Développement et amélioration d'une extension Chrome destinée à automatiser des tâches sur un catalogue de pièces automobiles.",
    },
    {
      icon: Code2,
      color: "text-green-400",
      title: "Programmation",
      text: "Découverte concrète du métier de développeur : écriture, lecture et correction de code dans un projet déjà existant.",
    },
    {
      icon: Wrench,
      color: "text-blue-400",
      title: "Gestion de projet",
      text: "Première approche de l'organisation d'un projet informatique : comprendre le besoin, prioriser, puis livrer une amélioration utile.",
    },
  ]

  const competences = [
    "Développement JavaScript",
    "Extension navigateur (Chrome)",
    "Automatisation de tâches",
    "Lecture de code existant",
    "Travail en environnement réel",
    "Organisation de projet",
  ]

  const apprentissages = [
    {
      color: "text-cyan-400",
      title: "Le métier vu de l'intérieur",
      text: "Observer un développeur au quotidien m'a montré à quoi ressemble vraiment le travail : moins d'idées spectaculaires, beaucoup de rigueur et de relecture.",
    },
    {
      color: "text-pink-400",
      title: "Améliorer l'existant",
      text: "Reprendre un projet déjà commencé m'a appris à comprendre le code des autres avant de vouloir le modifier.",
    },
    {
      color: "text-orange-400",
      title: "Confirmer une orientation",
      text: "Ce stage a confirmé mon envie de poursuivre en informatique et m'a donné des repères concrets sur ce qui m'attendait.",
    },
  ]

  const autresExperiences = [
    {
      icon: GraduationCap,
      color: "text-green-400",
      border: "border-green-500/30",
      hover: "hover:border-green-400/50",
      title: "Cours particuliers — Région parisienne",
      period: "2023 - Présent",
      missions: "Soutien scolaire en mathématiques pour des élèves de primaire et de collège.",
      bilan: "Expliquer une notion simplement développe la pédagogie, l'écoute et la patience, et renforce l'autonomie des élèves.",
    },
    {
      icon: Baby,
      color: "text-blue-400",
      border: "border-blue-500/30",
      hover: "hover:border-blue-400/50",
      title: "Baby-sitting — Région parisienne",
      period: "2026",
      missions: "Garde d'enfants et accompagnement dans les activités quotidiennes.",
      bilan: "Une expérience qui demande de la responsabilité, de la disponibilité et beaucoup d'adaptation.",
    },
    {
      icon: Users,
      color: "text-pink-400",
      border: "border-pink-500/30",
      hover: "hover:border-pink-400/50",
      title: "Bénévolat — Mairie",
      period: "2023 - 2024",
      missions: "Support administratif et organisationnel, contribution à des événements locaux.",
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

        {/* Stage de découverte : VIF AUTO */}
        <Card className="bg-gray-800 border-2 border-cyan-500/30 hover:border-cyan-400/50 transition-all mb-12">
          <CardHeader>
            <div className="flex items-start space-x-3">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center shrink-0">
                <Chrome className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <CardTitle className="gradient-text font-mono text-xl">
                  Stage de découverte — VIF AUTO, Noisy-sur-Oise
                </CardTitle>
                <p className="text-gray-400 text-sm mt-1 font-mono">
                  JavaScript · Extension Chrome · Automatisation
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-8">
            <p className="text-gray-300 leading-relaxed">
              Mon premier contact avec le métier de développeur : un stage de découverte centré sur le
              développement et l&apos;amélioration d&apos;une extension Chrome destinée à automatiser des tâches
              sur un catalogue de pièces automobiles. L&apos;occasion de voir comment on programme et comment on
              gère un projet dans un cadre professionnel.
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
                <span className="text-pink-400 mr-2">{">"}</span> Ce que ce stage m&apos;a apporté
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
