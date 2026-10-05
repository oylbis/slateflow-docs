# Fonctionnalités

Chaque section ci-dessous est taguée **LITE** et/ou **PRO**. Voir
[LITE et PRO](index.md#lite-et-pro) pour le détail complet des niveaux.

## Barre d'outils contextuelle — LITE et PRO

![Toolbar de sequencerFlow](assets/sequencerFlow_toolBar_01.png)

Dessinée directement dans le VSE, sans fouiller dans les menus. Chaque outil :

- **Cut** — coupe chaque strip sélectionné à la tête de lecture. Sur un
  strip SCENE (un plan storyFlow par exemple), un split natif laisserait
  les deux moitiés pointer vers la **même** scène sous-jacente — Cut donne
  plutôt à la moitié de droite une copie complète de la scène, pour que
  chaque moitié soit indépendante dès le départ.
- **Join** — ressoude deux strips qui se touchent : même canal, même type,
  même fichier source, et le bord droit du premier qui rejoint exactement
  le bord gauche du second. En pratique, ça ressoude des strips qui ont
  été coupés par Cut — ça ne fusionne pas deux plans réellement différents.
  Fonctionne sur toute une sélection multiple d'un coup, groupée par
  canal+type.
- **Swap** (left/right) — échange un strip, ou tout un bloc de plusieurs
  strips sélectionnés qui se touchent sur le même canal, avec son unique
  voisin non sélectionné de ce côté. Le bloc se déplace comme un seul
  élément rigide (l'espacement interne ne change jamais) ; un strip
  connecté à un autre (voir [Connexions de strips](#connexions-de-strips-lite)
  ci-dessous) est entraîné automatiquement même si seul son partenaire
  était sélectionné. Sélectionner des strips sur plusieurs canaux échange
  le bloc de chaque canal contre son propre voisin, dans le même clic.
  Rien ne se passe du côté où aucun voisin non sélectionné ne touche le
  bloc.
- **Slip** — invoque l'outil Slip natif de Blender pour déplacer la source
  à l'intérieur des bornes du strip, sans changer sa position ni sa durée
  sur la timeline.
- **Insert** (PRO) — insère une source éditée (in/out posés dans le
  [Source Viewer](#source-viewer-pro)) dans le montage principal à la
  tête de lecture.
- **Connect / Disconnect** — voir [Connexions de strips](#connexions-de-strips-lite)
  ci-dessous.
- **Sélections avancées** :

  | Action | Ce qu'elle sélectionne |
  |---|---|
  | Select channel | Tous les strips qui partagent un canal avec la sélection actuelle (ou le strip actif si rien n'est sélectionné) |
  | Select above | Tous les strips de **n'importe quel** canal au-dessus du canal sélectionné le plus haut — pas juste le canal suivant |
  | Select below | Tous les strips de n'importe quel canal au-dessous du canal sélectionné le plus bas |
  | Navigate next/previous | Saute vers — et sélectionne — le strip suivant ou précédent dans le temps, et déplace la tête de lecture à son début |
  | Selection sets | Enregistre la sélection actuelle sous un nom, la rappelle plus tard, ou la supprime (voir ci-dessous) |

  Les **jeux de sélection (Selection sets)** sont retrouvés par nom, type
  de strip, position dans la timeline et canal — si un strip enregistré a
  depuis été déplacé, renommé ou supprimé, le rappel signale une
  restauration partielle (`N/M strips selected`) au lieu de sélectionner
  silencieusement autre chose.
- **Isolate** — deux bascules indépendantes et réversibles, toutes deux
  basées sur le mute (donc elles affectent aussi la lecture audio, pas
  seulement l'image de prévisualisation) :
  - **Isolate Channel** coupe tous les canaux sauf ceux que touche la
    sélection actuelle.
  - **Isolate Selection** coupe tous les strips qui ne sont pas
    actuellement sélectionnés (par nom, individuellement — pas par canal).

  Recliquez sur le même bouton pour restaurer exactement l'état de mute
  d'avant.
- **Frame range** — règle la plage de lecture/rendu de la **scène**
  (`Scene.frame_start`/`frame_end`), pas juste la vue :
  - **Range Selected** la cadre sur les bornes de la sélection actuelle.
  - **Range All** la cadre sur tous les strips de la timeline.
  - **Auto Range** la recadre en continu (environ toutes les 100ms) à
    chaque changement de sélection, et retombe sur l'ensemble des strips
    dès que rien n'est sélectionné.
- **Follow playhead** — la vue défile pour garder la tête de lecture dans
  une zone confortable (25–40% de la largeur visible) pendant la lecture,
  au lieu de sauter ou d'exiger un recentrage manuel.
- **Minimap toggle** (PRO) — voir [Minimap de la timeline](#minimap-de-la-timeline-pro).

## Connexions de strips — LITE

Marque un lien partagé et invisible entre des strips liés — typiquement un
plan vidéo et son son — pour que glisser, échanger (swap) ou exporter l'un
entraîne l'autre. Une connexion n'est qu'un identifiant partagé posé sur
chaque strip (`strip["connection_id"]`) ; les boutons **Connect**/**Disconnect**
de la toolbar l'appliquent à la sélection actuelle et appellent en même
temps le véritable opérateur natif de connexion/déconnexion de Blender.

Les connexions ne sont pas détectées passivement en arrière-plan — le
panneau **Connection Tools** pilote ça explicitement, via **Conditional
Connect** : un jeu de critères combinables, appliqués en un clic à la
sélection actuelle ou à toute la timeline :

| Condition | Regroupe les strips qui... |
|---|---|
| Selected strips only | ...sont limités à la sélection actuelle (activé par défaut) |
| Same start frame | ...démarrent exactement à la même frame |
| Same end frame | ...se terminent exactement à la même frame |
| Same channel | ...sont sur le même canal |
| Same length | ...partagent la même durée |
| Movie-sound pairs | ...ressemblent à un plan vidéo et son audio correspondant, par le nom (correspondance exacte, suffixe numérique partagé, ou similarité de nom ≥80%) |

Le cas courant consiste à ne garder que **Movie-sound pairs** coché : ça
apparie chaque strip MOVIE avec le strip SOUND dont le nom correspond le
mieux, sans autre contrainte. Le même panneau liste aussi chaque groupe de
connexion actuellement présent dans la scène, avec un bouton pour
sélectionner tous les strips de ce groupe d'un coup.

Principalement là pour préparer un aller-retour d'export :
**[sequencerOTIO](../sequencerOTIO/index.md)** (un autre addon SlateFlow)
lit ces liens pour garder les paires vidéo/audio ensemble à l'export vers
Resolve via OpenTimelineIO.

## Guides de zones — LITE et PRO

![Guides de zones sur des plages de canaux](assets/sequencerFlow_zoneGuides_01.gif)

Des lignes de séparation colorées qui couvrent une plage de canaux —
audio, vidéo, effets, ou selon votre propre découpage d'une timeline
chargée — chacune étiquetée de son nom aux deux extrémités de la ligne,
pour que le regroupement reste lisible sans ouvrir aucun panneau.

Tout vit dans le panneau N **Zone Guides** :

- **Show Zone Guides** active/désactive tout l'overlay ; **Lock** (juste
  à côté) garde les zones en l'état et désactive le glisser de leurs
  limites dans le VSE, sans les cacher.
- La **liste des zones** affiche chaque zone de haut en bas (dans le même
  ordre que leur empilement visuel dans le VSE), chacune avec sa plage de
  canaux, et trois contrôles :
  - **▲ / ▼** — échange une zone avec sa voisine au-dessus/au-dessous :
    les deux échangent leur place sur l'axe des canaux, chacune gardant sa
    propre taille, son nom et sa couleur. C'est comme ça qu'on réordonne
    les zones (par exemple mettre "audio" au-dessus de "video").
  - **✕** — supprime cette zone entièrement.
  - **+ Add Zone** en ajoute une nouvelle juste au-dessus de la dernière,
    4 canaux de large par défaut, en tournant sur 4 couleurs prédéfinies.
- Cliquez le nom d'une zone dans la liste pour en faire la **zone
  active**, dont vous pouvez éditer le **nom** et la **couleur** juste en
  dessous de la liste.
- **Drag Mode** décide de ce qui arrive aux *autres* zones quand vous en
  redimensionnez une — depuis ce panneau, ou en glissant une ligne de
  limite directement dans le VSE (attrapez près de la ligne colorée ;
  désactivé tant que **Lock** est actif) :

  | Mode | Quand vous déplacez une limite... |
  |---|---|
  | **Adjust** (par défaut) | Seul le bord de la zone voisine immédiatement adjacente suit, refermant ou ouvrant l'écart entre les deux — toutes les autres zones restent en place. |
  | **Push** | Chaque zone plus loin dans cette direction se décale du même montant, comme si on poussait une pile. |
- Les **Presets** enregistrent toute la disposition de zones actuelle
  (noms, plages, couleurs) sous un nom, listent chaque preset enregistré,
  et permettent de le réappliquer ou de le supprimer. Appliquer un preset
  remplace purement et simplement les zones actuelles.
- **Reset to Default** restaure les deux zones de départ de sequencerFlow
  (`audio`, canaux 1–4 ; `video`, canaux 5–8).

## Renommage en lot & synchro de scène — LITE

Le panneau N **Name Tools** renomme une sélection ou toute la timeline
d'un coup (**Target** : Selected / All), avec un aperçu en direct de ce
que deviendrait le nom du premier strip concerné :

- **Find/Replace** — remplace un morceau de texte littéral dans chaque nom
  ciblé.
- **Set Name** — un nouveau nom de base (optionnel), avec un **préfixe**
  et un **suffixe** optionnels ; le suffixe peut à la place être un
  compteur auto-incrémenté (nombre de chiffres réglable), numéroté dans
  l'**ordre de la timeline**, pas l'ordre de sélection, pour que la
  séquence reste toujours lisible quel que soit l'ordre de clic.

Renommer un strip SCENE (un plan storyFlow) renomme aussi automatiquement
sa scène sous-jacente pour correspondre. Un bouton séparé **Sync Scene
Names** (avec sa propre cible Selected/All) réapplique cette même synchro
nom-de-strip → nom-de-scène à la demande, sans rien renommer d'abord —
pratique après qu'une scène a été renommée d'une autre façon.

## Export de segments — LITE

Le panneau N **Export Tools** rend la timeline en un fichier vidéo par
segment — il n'exporte **pas** "chaque strip sélectionné" individuellement,
et ne fait pas de mixdown audio séparé (chaque strip son non muet dans la
plage d'un segment est automatiquement mixé dans la vidéo de ce segment,
gratuitement, comme partie du rendu normal).

- **Export Range (In/Out)** est la même paire `frame_start`/`frame_end`
  que [Frame range](#barre-doutils-contextuelle-lite-et-pro) ci-dessus —
  elle est réaffichée ici puisqu'elle pilote ce qui est exporté.
- Une coupure de segment n'est posée que là où le **strip visible le plus
  haut** change réellement dans cette plage — les strips empilés dessous
  ne forcent pas chacun leur propre coupure. Le panneau affiche en direct
  le nombre de segments que produirait la plage/l'empilement actuels.
- **Naming** (nommage) :

  | Mode | Nom de fichier du segment basé sur... |
  |---|---|
  | **Topmost Strip** (par défaut) | Le nom du strip le plus haut dans ce segment |
  | **Custom Pattern** | Un nom de base + préfixe/suffixe/numérotation optionnels — exactement le même moteur que le Renommage en lot ci-dessus |
- Dans les deux cas, un **suffixe de numéro de frame** est ajouté par-dessus
  comme vrai garde-fou anti-collision (le même strip peut redevenir le
  plus haut plus tard, dans un segment différent) : désactivé, un compte
  de durée standard `0001-NNNN`, ou les vrais numéros de frame de la
  **Timeline**. Une option à part ajoute aussi le nom du fichier `.blend`
  actuel.
- Le rendu utilise les **Output Properties** (format, codec, chemin) déjà
  réglées sur la scène affichée par le VSE — il n'y a pas de sélecteur de
  format d'export séparé ici. Le panneau avertit si ce chemin de sortie
  est encore la valeur d'usine par défaut de Blender, signe fréquent que
  les Output Properties ont été réglées pendant qu'un autre onglet de
  scène était actif.

## Contrôle de vitesse — PRO

Un petit badge **s** à côté de l'icône d'opacité sur chaque strip
retimable (MOVIE, IMAGE, SCENE, META, MOVIECLIP, MASK et SOUND — pas les
strips d'effet), coloré pour montrer son état en un coup d'œil : gris à
vitesse normale, bleu une fois une vitesse réglée, violet quand figé.
Cliquez-le pour ouvrir le dialogue **Set Speed** :

- Un champ **pourcentage** (100 = normal, 50 = demi-vitesse/deux fois plus
  long, 200 = vitesse double), ou
- **Freeze Frame**, qui fige le strip sur son point d'entrée à la place.

Les deux pilotent les vrais opérateurs de retiming natifs de Blender —
jamais un modèle de vitesse parallèle — donc le résultat se comporte
exactement comme un retime manuel. Le facteur obtenu est aussi écrit sur
le strip (`strip["otio_speed"]`, la convention "Speed Ratio" de Resolve
elle-même) pour que **[sequencerOTIO](../sequencerOTIO/index.md)** puisse
le reporter à l'export. Un strip SOUND peut aussi être retimé, ce qui
permet de garder une paire vidéo+audio connectée à la même vitesse.

## Source Viewer — PRO

![Dual Monitor source viewing](assets/sequencerFlow_dualMonitor_01.gif)

Un vrai montage 3 points dans Blender, via deux façons interchangeables de
prévisualiser une source :

- **Scène dédiée** : le Source Viewer classique — posez des points IN/OUT
  sur n'importe quel plan dans sa propre scène, votre scène de montage
  restant intacte pendant que vous parcourez les rushs.
- **Dual Monitor** : une seconde prévisualisation indépendante (construite
  sur le Movie Clip Editor) avec sa propre tête de lecture, image et son —
  vraiment simultanée avec le montage principal, pas une bascule entre
  les deux.

Dans les deux cas, **Insert** dépose la plage in/out sélectionnée à la
tête de lecture, en décalant automatiquement tous les plans suivants. Un
historique de médias et des points IN/OUT partagés fonctionnent dans les
deux modes. Avant de charger quoi que ce soit, l'overlay **Folder Media
Info** affiche un tableau comparatif (fps, résolution, durée, profil
couleur) directement dans le File Browser, pour comparer des fichiers
candidats sans en ouvrir aucun au préalable.

## Courbes sur les strips — PRO

![Courbes de volume/opacité dessinées sur les strips](assets/sequencerFlow_curves_01.gif)

Des courbes de volume et d'opacité dessinées directement sur les strips —
pas besoin d'ouvrir le Graph Editor :

- **Ctrl+clic** n'importe où sur un strip pour ajouter une clé à cette
  frame/valeur exacte.
- **Clic-glisser** une clé existante pour la déplacer (frame et valeur
  suivent toutes les deux la souris).
- **Double-clic** sur une clé pour ouvrir un petit dialogue avec sa
  **Frame** et sa **Value** exactes, mises à jour en direct pendant la
  saisie ; annuler restaure l'état précédent.

Ces courbes pilotent de vraies F-Curves Blender sur les propriétés
`volume` ou `blend_alpha` du strip lui-même, pas un modèle de données
parallèle — ouvrir le Graph Editor sur le même strip montre exactement
les mêmes clés.

## Audio avancé — PRO

- Un **VU-mètre** en temps réel (niveau en dB plus le pic atteint depuis
  la dernière réinitialisation, avec une réinitialisation en un clic),
  ancrable au bord gauche ou droit du VSE.
- Chaque strip son reçoit un **badge de canal** qui montre son format
  réel en un coup d'œil (Mono / Stereo / 5.1 / 7.1, lu depuis le fichier
  source, ou "Mono" si forcé — voir ci-dessous).
- Cliquez un badge pour forcer ce strip précis en **mono**,
  indépendamment de tous les autres, avec un choix de pan **Left / Center
  / Right** qui n'apparaît qu'une fois Mono coché.

## Minimap de la timeline — PRO

![Minimap de la timeline](assets/sequencerFlow_minimap_01.gif)

Une vue d'ensemble 2D (temps × canaux) de toute la timeline, affichée
comme un panneau de taille fixe dans un coin du VSE — une silhouette par
strip, colorée d'après son propre tag de couleur s'il en a un, sinon la
couleur native Blender de son type, plus un cadre indiquant la zone
actuellement visible. Cliquez ou glissez pour recentrer instantanément la
vue principale sur ce point du montage. Les strips utilitaires internes
des autres addons SlateFlow (nommés `__comme_ceci__`) sont exclus de la
vue.
