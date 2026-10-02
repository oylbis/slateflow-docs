# FAQ & dépannage

## Quelle version de Blender est nécessaire ?

**Blender 5.0 ou plus récent** (5.2 LTS recommandé).

## Dois-je installer opentimelineio moi-même ?

Non, dans la plupart des cas. sequencerOTIO embarque des wheels pour le
Python de Blender et installe automatiquement la bonne au premier
chargement. Voir [Configuration](configuration.md) pour les plateformes où
une installation manuelle/réseau est nécessaire à la place.

## Mon média ne se relie pas automatiquement dans Resolve

Assurez-vous que le fichier `.otio` et ses médias source restent dans le
dossier vers lequel vous avez exporté — la reliaison automatique de Resolve
cherche surtout là (plus ses propres emplacements de Media Storage).
L'export vous avertit quand une source référencée se trouve hors du dossier
d'export, précisément parce que Resolve ne la relie pas de façon fiable dans
ce cas.

## Conform a recréé un plan que je m'attendais à voir "inchangé"

Conform apparie les plans par média **et** type de piste (vidéo vs audio) —
un plan vidéo et un plan audio partageant le même fichier source ne sont
jamais confondus. Si un plan reste mal classé, vérifiez si sa position, son
trim ou sa vitesse ont changé côté Resolve depuis l'export de référence : le
rôle de conform est justement de refléter exactement ça.

## Qu'arrive-t-il aux strips couleur, texte ou aux scènes de dessin lors d'un conform ?

Ils sont entièrement hors du périmètre de conform — seuls les strips
adossés à un vrai média (vidéo/image/son) sont comparés et touchés. Tout le
reste reste exactement tel quel dans Blender.

## Support

Ce projet est développé à son propre rythme, sur le temps libre de son
auteur. Il est fourni **en l'état**, sans garantie. Les retours (bugs,
suggestions) sont les bienvenus via le canal de support indiqué sur votre
page d'achat, mais sans garantie de délai de réponse.
