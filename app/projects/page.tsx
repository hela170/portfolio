'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Code, Database, Network, Users } from 'lucide-react'
import ProjectModal from '../../components/project-modal'

export default function ProjectsPage() {
  const projects = [
    {
      title: 'jeu-echecs-java.md',
      subtitle: "SAE R 201 - Jeu d'Échecs en Java",
      description:
        "Développement d'un jeu d'échecs complet en Java avec interface graphique...",
      technologies: ['Java', 'UML', 'POO', 'Modélisation'],
      status: '✓ Completed',
      borderColor: 'border-blue-500/30',
      hoverColor: 'hover:border-blue-400/50',
      pdfPath: '/pdfs/jeu-echecs-java.pdf',
      details: ['Modélisation UML complète', '...'],
    },
    {
      title: 'exploitation-base-donnees.md',
      subtitle: "SAE 1.03 - Exploitation d'une Base de Données",
      description:
        "Conception, création et exploitation d'une base de données relationnelle...",
      technologies: ['SQL', 'MySQL', 'Python', 'Modélisation'],
      status: '✓ Completed',
      borderColor: 'border-purple-500/30',
      hoverColor: 'hover:border-purple-400/50',
      pdfPath: '/pdfs/exploitation-base-donnees.pdf',
      details: ['Modélisation de bases de données', '...'],
    },
    {
      title: 'sae-systemes-reseaux.md',
      subtitle: 'SAE 2.03 & 1.03 - Systèmes & Réseaux',
      description:
        "Configuration et déploiement complet de services réseau avec Linux...",
      technologies: ['Linux', 'Apache', 'DNS', 'DHCP'],
      status: '✓ Completed',
      borderColor: 'border-green-500/30',
      hoverColor: 'hover:border-green-400/50',
      pdfPath: '/pdfs/sae-systemes-reseaux.pdf',
      details: ['Configuration de serveurs Linux', '...'],
    },
    {
      title: 'sae-gestion-projet.md',
      subtitle: "SAE 1.05 - Gestion de Projet & Travail d'Équipe",
      description:
        "Analyse et recueil des besoins pour améliorer les services de l'IUT...",
      technologies: ['Analyse', 'UML', 'Git', 'Communication'],
      status: '✓ Completed',
      borderColor: 'border-pink-500/30',
      hoverColor: 'hover:border-pink-400/50',
      pdfPath: '/pdfs/sae-gestion-projet.pdf',
      details: ['Analyse des besoins utilisateurs', '...'],
    },
    {
      title: 'SAE_Python_ModuleConception',
      subtitle: 'SAE Python - Conception Modulaire',
      description:
        'Développement modulaire avec analyse de complexité algorithmique...',
      technologies: ['Python', 'POO', 'Algorithmique'],
      status: '✓ Completed',
      borderColor: 'border-cyan-500/30',
      hoverColor: 'hover:border-cyan-400/50',
      pdfPath: '/pdfs/sae-python-module.pdf',
      details: ['Conception modulaire', '...'],
    },
  ]

  return (
    <div className="min-h-screen py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <h1 className="text-4xl font-bold md:text-5xl mb-4">
            <span className="text-gray-500">$</span>{' '}
            <span className="gradient-text">ls -la ./projects/</span>
          </h1>
          <p className="text-xl text-gray-300">
            <span className="text-green-400">// </span>
            Mes projets universitaires et réalisations techniques
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => {
            return (
              <ProjectModal key={index} project={project}>
                <Card
                  className={`bg-gray-800 border-2 ${project.borderColor} ${project.hoverColor} transition-all group cursor-pointer`}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="gradient-text font-mono text-lg flex items-center">
                          {/* Icône conditionnelle selon le titre */}
                          {project.title.includes('java') && (
                            <Code className="mr-2 h-5 w-5" />
                          )}
                          {project.title.includes('donnees') && (
                            <Database className="mr-2 h-5 w-5" />
                          )}
                          {project.title.includes('reseaux') && (
                            <Network className="mr-2 h-5 w-5" />
                          )}
                          {project.title.includes('projet') && (
                            <Users className="mr-2 h-5 w-5" />
                          )}
                          {project.title}
                        </CardTitle>
                        {project.subtitle && (
                          <p className="text-gray-400 text-sm mt-1 font-mono">
                            {project.subtitle}
                          </p>
                        )}
                        <CardDescription className="text-gray-400 flex items-center space-x-4 mt-2">
                          <span>{project.status}</span>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div>
                      <h4 className="text-white font-semibold mb-2 text-sm">
                        Réalisations :
                      </h4>
                      <ul className="space-y-1">
                        {project.details.map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className="text-gray-400 text-xs flex items-start"
                          >
                            <span
                              className={`mr-2 ${
                                detailIndex % 4 === 0
                                  ? 'text-blue-400'
                                  : detailIndex % 4 === 1
                                  ? 'text-green-400'
                                  : detailIndex % 4 === 2
                                  ? 'text-purple-400'
                                  : 'text-pink-400'
                              }`}
                            >
                              •
                            </span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className={`font-mono text-xs ${
                            techIndex % 5 === 0
                              ? 'border-blue-500/50 text-blue-400'
                              : techIndex % 5 === 1
                              ? 'border-green-500/50 text-green-400'
                              : techIndex % 5 === 2
                              ? 'border-purple-500/50 text-purple-400'
                              : techIndex % 5 === 3
                              ? 'border-pink-500/50 text-pink-400'
                              : 'border-orange-500/50 text-orange-400'
                          }`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ProjectModal>
            )
          })}
        </div>
      </div>
    </div>
  )
}
