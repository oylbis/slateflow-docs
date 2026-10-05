# Fonctionnalités

Chaque section ci-dessous est marquée **LITE** et/ou **PRO**. Voir
[LITE et PRO](index.md#lite-et-pro) pour le détail complet des niveaux.

## Barre d'outils contextuelle — LITE et PRO

![Toolbar sequencerFlow](assets/sequencerFlow_toolBar_01.png)

Dessinée directement dans le VSE, sans fouiller les menus. Chaque outil :

- **Cut** — coupe classique d'un ou plusieurs strips sélectionnés au
  niveau du timeline cursor. Gère correctement les strips SCENE (un piège
  classique du VSE natif).
- **Join** — recoud deux strips coupés qui se succèdent.
- **Swap** (gauche/droite) — intervertit un strip, ou tout un bloc de
  plusieurs strips sélectionnés qui se touchent sur le même canal, avec
  son unique voisin non sélectionné de ce côté. Le bloc se déplace comme
  un seul bloc rigide (son espacement interne ne change jamais) ; un strip
  connecté à un autre (voir Connexions de strips plus bas) est entraîné
  automatiquement même si seul son partenaire était sélectionné.
  Sélectionner des strips sur plusieurs canaux permute chaque bloc contre
  son propre voisin en un seul clic. Rien ne se passe du côté où aucun
  voisin non sélectionné ne touche le bloc.
- **Slip** — déplace la source dans les bornes propres du strip, sans
  changer sa position ni sa durée sur la timeline.
- **Insert** (PRO) — insère une source éditée (in/out posés dans le
  [Source Viewer](#source-viewer-pro)) dans le montage principal, à la
  tête de lecture.
- **Connect / Disconnect** — voir [Connexions de strips](#connexions-de-strips-lite)
  plus bas.
- **Sélections avancées** — sélection directionnelle gauche/droite/haut/
  bas, sélection par canal, et jeux de sélection enregistrables/rappelables.
- **Isolate** — isolation de canal ou de strip, réversible.
- **Frame range** — cadrage sur la sélection, sur tous les strips, ou
  automatique.
- **Follow playhead** — la vue de montage défile pour garder la tête de
  lecture dans une zone confortable (25–40% de la largeur visible) pendant
  la lecture, plutôt que de sauter ou de demander un recentrage manuel.
- **Bascule minimap** (PRO) — voir [Minimap de la timeline](#minimap-de-la-timeline-pro).

## Connexions de strips — LITE

Liaison automatique ou manuelle entre strips liés — typiquement un plan
vidéo et son son. Les connexions sont détectées automatiquement par
similarité de nom, ou créées manuellement ; une paire connectée affiche un
indicateur visuel partout où elle apparaît. Une fois connectés, déplacer ou
permuter un strip entraîne son partenaire avec lui.

Sert surtout à préparer un export aller-retour :
**[sequencerOTIO](../sequencerOTIO/index.md)** (un autre addon SlateFlow)
lit ces liens pour garder les paires vidéo/audio ensemble à l'export vers
Resolve via OpenTimelineIO.

## Guides de zones — LITE et PRO

![Guides de zones sur des plages de canaux](assets/sequencerFlow_zoneGuides_01.gif)

Bandes colorées sur des plages de canaux (vidéo, audio, effets...) pour
qu'une timeline chargée reste organisée et lisible en un coup d'œil. Les
zones ont des presets, peuvent être renommées depuis le N-panel, et leurs
limites se redimensionnent directement au glisser dans le VSE — en
poussant ou en ajustant les zones voisines selon le mode.

## Contrôle de vitesse — LITE

Un badge sur chaque strip retimé pour accéder rapidement au retiming, un
dialogue de vitesse en pourcentage, et freeze frame — le tout construit
sur les opérateurs de retiming natifs de Blender (jamais un modèle de
vitesse parallèle). La valeur de vitesse est aussi écrite sur le strip
pour que **[sequencerOTIO](../sequencerOTIO/index.md)** puisse la
reprendre à l'export.

## Renommage en lot & export par strip — LITE

Renommez une sélection ou toute la timeline d'un coup, soit par
chercher/remplacer, soit avec un nouveau nom de base et
préfixe/suffixe/numérotation automatique. Rendez chaque strip sélectionné
dans son propre fichier vidéo, ou mixez son audio individuellement.

## Source Viewer — PRO

![Source viewing en Dual Monitor](assets/sequencerFlow_dualMonitor_01.gif)

Vrai montage 3 points dans Blender, via deux façons interchangeables de
prévisualiser une source :

- **Scène dédiée** : le Source Viewer classique — posez des points IN/OUT
  sur n'importe quel plan dans sa propre scène, votre scène de montage
  restant intacte pendant que vous parcourez des rushs.
- **Dual Monitor** : un second aperçu indépendant (construit sur le Movie
  Clip Editor) avec sa propre tête de lecture, image et son — réellement
  simultané avec le montage principal, pas une simple bascule entre les
  deux.

Dans les deux cas, **Insert** dépose la plage in/out sélectionnée à la tête
de lecture, avec tous les plans suivants qui se décalent automatiquement.
Un historique de médias et des points IN/OUT partagés fonctionnent dans
les deux modes. Avant de charger quoi que ce soit, l'overlay **Folder
Media Info** affiche un tableau comparatif (fps, résolution, durée, profil
couleur) directement dans le File Browser, pour comparer des fichiers
candidats sans avoir à les ouvrir un par un.

## Courbes sur les strips — PRO

![Courbes de volume/opacité dessinées sur les strips](assets/sequencerFlow_curves_01.gif)

Courbes de volume et d'opacité dessinées directement sur les strips,
éditables au clic-glisser (**Ctrl+clic** pour ajouter une clé) — pas
besoin d'ouvrir le Graph Editor. Elles pilotent de vraies F-Curves
Blender, pas un modèle de données parallèle.

## Audio avancé — PRO

Un VU-mètre en temps réel, des badges de canal audio directement sur les
strips, et une réattribution mono/stéréo en un clic.

## Minimap de la timeline — PRO

![Minimap de la timeline](assets/sequencerFlow_minimap_01.gif)

Une vue d'ensemble 2D (temps × canaux) de toute la timeline, affichée en
panneau de taille fixe dans un coin du VSE. Cliquez ou glissez dessus pour
recentrer instantanément la vue principale sur ce point du montage.
