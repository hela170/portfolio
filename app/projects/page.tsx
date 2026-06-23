'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Code, Database, Network, Users, Package } from 'lucide-react'
import ProjectModal from '../../components/project-modal'

export default function ProjectsPage() {
  const projects = [
    {
      title: 'suivi-colis-iut.md',
      subtitle: 'Site web de suivi de colis pour l\u2019IUT',
      description:
        "Application web responsive de suivi des commandes et des livraisons de l'IUT, de la modélisation de la base de données jusqu'à l'interface et la sécurisation des accès.",
      technologies: ['PHP', 'HTML', 'CSS', 'MySQL', 'CAS'],
      status: '✓ Completed',
      borderColor: 'border-cyan-500/30',
      hoverColor: 'hover:border-cyan-400/50',
      pdfPath: '/pdfs/suivi-colis-iut.pdf',
      details: [
        'Modélisation du schéma relationnel (fournisseurs, bons de commande, livraisons) sous MySQL',
        'Développement d\u2019une interface responsive en PHP, HTML et CSS',
        'Suivi en temps réel de l\u2019état des commandes et des livraisons',
        'Authentification via CAS avec gestion fine des rôles utilisateurs',
      ],
      apport: [
        'Traduire un vrai besoin utilisateur en fonctionnalités précises plutôt qu\u2019en suppositions',
        'Structurer et contrôler des données sensibles à chaque étape, du modèle à l\u2019interface',
        'Gagner en autonomie en intégrant CAS sans documentation toute prête',
      ],
    },
    {
      title: 'jeu-echecs-java.md',
      subtitle: "SAE R 201 - Jeu d'Échecs en Java",
      description:
        "Développement d'un jeu d'échecs complet en Java avec interface graphique, gestion des règles et des déplacements de chaque pièce.",
      technologies: ['Java', 'UML', 'POO', 'Modélisation'],
      status: '✓ Completed',
      borderColor: 'border-blue-500/30',
      hoverColor: 'hover:border-blue-400/50',
      pdfPath: '/pdfs/jeu-echecs-java.pdf',
      details: [
        'Modélisation UML complète des pièces et du plateau',
        'Implémentation des règles de déplacement et de capture en POO',
        'Interface graphique pour jouer une partie complète',
      ],
      apport: [
        'Penser une architecture orientée objet claire avant de coder',
        'Découper un problème complexe en classes et responsabilités distinctes',
      ],
    },
    {
      title: 'exploitation-base-donnees.md',
      subtitle: "SAE 1.03 - Exploitation d'une Base de Données",
      description:
        "Conception, création et exploitation d'une base de données relationnelle, du modèle conceptuel jusqu'aux requêtes d'analyse.",
      technologies: ['SQL', 'MySQL', 'Python', 'Modélisation'],
      status: '✓ Completed',
      borderColor: 'border-purple-500/30',
      hoverColor: 'hover:border-purple-400/50',
      pdfPath: '/pdfs/exploitation-base-donnees.pdf',
      details: [
        'Conception du modèle conceptuel et logique des données',
        'Création de la base et insertion des jeux de données',
        'Requêtes SQL d\u2019extraction et d\u2019analyse',
      ],
      apport: [
        'Comprendre comment une donnée bien modélisée simplifie tout le reste',
        'Écrire des requêtes SQL fiables pour répondre à une question métier',
      ],
    },
    {
      title: 'sae-systemes-reseaux.md',
      subtitle: 'SAE 2.03 & 1.03 - Systèmes & Réseaux',
      description:
        "Configuration et déploiement complet de services réseau avec Linux : serveur web, DNS et DHCP.",
      technologies: ['Linux', 'Apache', 'DNS', 'DHCP'],
      status: '✓ Completed',
      borderColor: 'border-green-500/30',
      hoverColor: 'hover:border-green-400/50',
      pdfPath: '/pdfs/sae-systemes-reseaux.pdf',
      details: [
        'Configuration de serveurs Linux',
        'Mise en place des services DNS et DHCP',
        'Déploiement d\u2019un serveur web Apache',
      ],
      apport: [
        'Démystifier ce qui se passe « derrière » une connexion réseau',
        'Travailler en ligne de commande avec méthode et prudence',
      ],
    },
    {
      title: 'sae-gestion-projet.md',
      subtitle: "SAE 1.05 - Gestion de Projet & Travail d'Équipe",
      description:
        "Analyse et recueil des besoins pour améliorer les services de l'IUT, en équipe et avec une démarche structurée.",
      technologies: ['Analyse', 'UML', 'Git', 'Communication'],
      status: '✓ Completed',
      borderColor: 'border-pink-500/30',
      hoverColor: 'hover:border-pink-400/50',
      pdfPath: '/pdfs/sae-gestion-projet.pdf',
      details: [
        'Recueil et analyse des besoins utilisateurs',
        'Formalisation avec des diagrammes UML',
        'Organisation du travail d\u2019équipe et versionnage avec Git',
      ],
      apport: [
        'Écouter un besoin avant de proposer une solution',
        'Coordonner un travail à plusieurs et tenir des délais',
      ],
    },
    {
      title: 'SAE_Python_ModuleConception',
      subtitle: 'SAE Python - Conception Modulaire',
      description:
        'Développement modulaire en Python avec analyse de la complexité algorithmique des solutions.',
      technologies: ['Python', 'POO', 'Algorithmique'],
      status: '✓ Completed',
      borderColor: 'border-cyan-500/30',
      hoverColor: 'hover:border-cyan-400/50',
      pdfPath: '/pdfs/sae-python-module.pdf',
      details: [
        'Découpage du code en modules réutilisables',
        'Analyse de la complexité algorithmique',
        'Tests des différentes fonctions développées',
      ],
      apport: [
        'Écrire du code lisible et réutilisable plutôt que « qui marche »',
        'Évaluer le coût d\u2019un algorithme avant de le choisir',
      ],
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
                          {project.title.includes('colis') && (
                            <Package className="mr-2 h-5 w-5" />
                          )}
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

                    <div>
                      <h4 className="text-white font-semibold mb-2 text-sm">
                        Ce que ça m&apos;a apporté :
                      </h4>
                      <ul className="space-y-1">
                        {project.apport.map((item, apportIndex) => (
                          <li
                            key={apportIndex}
                            className="text-gray-400 text-xs flex items-start"
                          >
                            <span className="mr-2 text-cyan-400">{'>'}</span>
                            {item}
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
