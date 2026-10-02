# FAQ & dépannage

## Quelle version de Blender est nécessaire ?

**Blender 5.0 ou plus récent**, avec **5.2 LTS recommandé**. storyFlow
s'appuie sur l'API strips du séquenceur (`Strip`, `SceneStrip`,
`Window.workspace.sequencer_scene`) introduite dans Blender 5.0.

## Ai-je aussi besoin de l'addon officiel Storypencil ?

Non — storyFlow étend l'approche de Storypencil mais est un addon complet et
autonome. N'installez pas les deux en même temps.

## "Setup Storyboard Session" ne fait rien, ou se comporte bizarrement

Ce point d'entrée attend un **fichier neuf, jamais touché** : la scène et
l'objet de dessin par défaut toujours sous leurs noms d'origine, sur le
workspace **2D Animation** par défaut. Si vous avez déjà renommé des
éléments ou personnalisé votre fichier de démarrage, l'étape de setup peut
ne pas le reconnaître comme un démarrage neuf. Partez d'un fichier tout
neuf pour le setup initial.

## Deux plans sont verrouillés et je ne peux pas les redimensionner

Cela signifie que les deux plans pointent actuellement vers la **même scène
de dessin** — un marqueur rouge apparaît aussi sur les deux strips dans ce
cas. storyFlow verrouille leurs points in/out (et la durée de la scène de
dessin elle-même) pour éviter de corrompre silencieusement l'un des deux
plans. Réassignez un des plans à sa propre scène de dessin (ou utilisez
**Clean Scenes** si l'un d'eux est en fait inutilisé) et le verrou se lève
tout seul.

## Puis-je utiliser storyFlow sans Grease Pencil ?

storyFlow est construit autour des scènes de dessin Grease Pencil — c'est
tout l'objet de l'appariement plan ↔ dessin. Il ne cible pas d'autres
workflows de dessin.

## Support

Ce projet est développé à son propre rythme, sur le temps libre de son
auteur. Il est fourni **en l'état**, sans garantie. Les retours (bugs,
suggestions) sont les bienvenus via le canal de support indiqué sur votre
page d'achat, mais sans garantie de délai de réponse.
