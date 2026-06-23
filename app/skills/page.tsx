import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Terminal, Cpu } from "lucide-react"

export default function SkillsPage() {
  const technicalSkills = [
    {
      category: "Langages de Programmation",
      icon: Code,
      borderColor: "border-blue-500/30",
      titleColor: "text-blue-400",
      skills: [
        { name: "Java", level: "60%", color: "from-orange-400 to-orange-600" },
        { name: "Python", level: "55%", color: "from-yellow-400 to-yellow-600" },
        { name: "PHP", level: "50%", color: "from-indigo-400 to-indigo-600" },
        { name: "JavaScript", level: "45%", color: "from-yellow-300 to-yellow-500" },
        { name: "HTML/CSS", level: "Avancé", color: "from-orange-400 to-orange-600" },
        { name: "C++", level: "25%", color: "from-blue-400 to-blue-600" },
        { name: "Assembleur", level: "25%", color: "from-gray-400 to-gray-600" },
      ],
    },
    {
      category: "Bases de Données",
      icon: Database,
      borderColor: "border-purple-500/30",
      titleColor: "text-purple-400",
      skills: [
        { name: "SQL", level: "Avancé", color: "from-blue-400 to-blue-600" },
        { name: "Modélisation UML", level: "75%", color: "from-purple-400 to-purple-600" },
        { name: "MySQL", level: "55%", color: "from-blue-500 to-blue-700" },
        { name: "MCD / MLD", level: "60%", color: "from-purple-500 to-purple-700" },
        { name: "PostgreSQL", level: "40%", color: "from-blue-600 to-blue-800" },
      ],
    },
    {
      category: "Web & Sécurité",
      icon: Code,
      borderColor: "border-pink-500/30",
      titleColor: "text-pink-400",
      skills: [
        { name: "Développement back-end", level: "50%", color: "from-pink-400 to-pink-600" },
        { name: "Intégration responsive", level: "60%", color: "from-pink-500 to-pink-700" },
        { name: "Authentification CAS", level: "45%", color: "from-rose-400 to-rose-600" },
        { name: "Gestion des rôles", level: "45%", color: "from-rose-500 to-rose-700" },
      ],
    },
    {
      category: "Systèmes & Réseaux",
      icon: Terminal,
      borderColor: "border-green-500/30",
      titleColor: "text-green-400",
      skills: [
        { name: "Excel", level: "90%", color: "from-green-500 to-green-700" },
        { name: "Linux", level: "65%", color: "from-green-400 to-green-600" },
        { name: "Shell/Bash", level: "60%", color: "from-gray-400 to-gray-600" },
        { name: "Apache", level: "Intermédiaire", color: "from-orange-500 to-orange-700" },
        { name: "DNS / DHCP", level: "50%", color: "from-teal-400 to-teal-600" },
      ],
    },
  ]

  const evolution = [
    {
      level: "BUT 1",
      period: "2025 - 2026",
      titleColor: "text-blue-400",
      borderColor: "border-blue-500/30",
      points: [
        "Bases de la programmation (Java, Python)",
        "Premiers modèles de données et requêtes SQL",
        "Découverte des systèmes Linux et des réseaux",
        "Travail d'équipe et gestion de projet (UML, Git)",
      ],
    },
    {
      level: "BUT 2",
      period: "2026 - 2027",
      titleColor: "text-pink-400",
      borderColor: "border-pink-500/30",
      points: [
        "Développement web complet (PHP, HTML/CSS responsive)",
        "Conception de bases de données plus riches (MCD/MLD, MySQL)",
        "Sécurité applicative : authentification CAS et gestion des rôles",
        "Projets proches du réel, de la modélisation à l'interface",
      ],
    },
  ]

  const tools = [
    { name: "Git", color: "border-red-500/50 text-red-400" },
    { name: "GitHub", color: "border-purple-500/50 text-purple-400" },
    { name: "VS Code", color: "border-blue-500/50 text-blue-400" },
    { name: "MySQL", color: "border-orange-500/50 text-orange-400" },
    { name: "Linux Terminal", color: "border-green-500/50 text-green-400" },
  ]

  return (
    <div className="min-h-screen py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <h1 className="text-4xl font-bold md:text-5xl mb-4">
            <span className="text-gray-500">$</span> <span className="gradient-text">cat skills.json</span>
          </h1>
          <p className="text-xl text-gray-300">
            <span className="text-pink-400">{"// "}</span>Mes compétences techniques et outils maîtrisés
          </p>
        </div>

        {/* Technical Skills */}
        <div className="space-y-8 mb-16">
          {technicalSkills.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <Card
                key={categoryIndex}
                className={`bg-gray-800 border-2 ${category.borderColor} hover:${category.borderColor.replace("/30", "/50")} transition-all`}
              >
                <CardHeader>
                  <CardTitle className={`${category.titleColor} flex items-center`}>
                    <Icon className="mr-2 h-5 w-5" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="bg-gray-700 rounded-lg p-4 border border-gray-600/50 hover:border-gray-500 transition-all"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-mono text-white font-semibold">{skill.name}</h4>
                          <Badge
                            variant="outline"
                            className={`${category.titleColor.replace("text-", "border-").replace("400", "500/50")} ${category.titleColor} text-xs`}
                          >
                            {skill.level}
                          </Badge>
                        </div>
                        <div className="w-full bg-gray-600 rounded-full h-2">
                          <div
                            className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-500`}
                            style={{
                              width: skill.level.includes("%")
                                ? skill.level
                                : skill.level === "Avancé"
                                  ? "85%"
                                  : skill.level === "Intermédiaire"
                                    ? "65%"
                                    : "35%",
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Évolution BUT 1 -> BUT 2 */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">
            <span className="text-gray-500">$</span>{" "}
            <span className="gradient-text">git log --oneline ./parcours</span>
          </h2>
          <p className="text-gray-400 font-mono text-sm">
            <span className="text-blue-400">{"// "}</span>Mon évolution de la 1re à la 2e année
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-16">
          {evolution.map((step, i) => (
            <Card key={i} className={`bg-gray-800 border-2 ${step.borderColor} transition-all`}>
              <CardHeader>
                <CardTitle className={`${step.titleColor} flex items-center justify-between`}>
                  <span className="font-mono">{step.level}</span>
                  <span className="text-gray-500 font-mono text-sm">{step.period}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {step.points.map((point, pi) => (
                    <li key={pi} className="text-gray-300 text-sm flex items-start">
                      <span className={`mr-2 ${step.titleColor}`}>{">"}</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools */}
        <Card className="bg-gray-800 border-2 border-cyan-500/30 hover:border-cyan-400/50 transition-all mb-16">
          <CardHeader>
            <CardTitle className="text-cyan-400 flex items-center">
              <Cpu className="mr-2 h-5 w-5" />
              Outils & Technologies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className={`${tool.color} font-mono p-2 hover:scale-105 transition-transform`}
                >
                  {tool.name}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Final Comment */}
        <div className="text-center">
          <div className="bg-gray-800 border-2 border-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-lg p-6 inline-block">
            <p className="text-gray-300 font-mono">
              <span className="gradient-text">{"// "}</span>Les compétences évoluent continuellement grâce à la pratique
              et l'apprentissage
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
