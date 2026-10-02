# FAQ & dépannage

## Quelle version de Blender est nécessaire ?

**Blender 5.2 ou plus récent**, avec des objets Grease Pencil au format
**v3** (le format par défaut sur ces versions — aucune action nécessaire de
votre part sur un fichier créé avec Blender 5.2+).

## Le bouton n'apparaît pas après l'installation ? {: #button-missing-after-install }

Sur un profil Blender qui n'a **jamais** eu dopesheetFlow installé
auparavant, il arrive que le bouton d'en-tête (et le reste de l'addon)
n'apparaisse pas immédiatement juste après un *Install from Disk*.

**Solution** : dans *Edit > Preferences > Get Extensions*, décochez puis
recochez dopesheetFlow une fois. Aucune réinstallation n'est nécessaire —
ce simple cycle désactivation/réactivation suffit. Ce cas ne se reproduit
pas ensuite, y compris après un redémarrage de Blender.

## Une vignette reste toute blanche, sans contour visible

C'est normal : un fond blanc **uni, sans contour**, signale une clé **vide
confirmée** (créée via *Insert Blank Keyframe*, aucun trait dessiné) — pas
une vignette qui n'aurait pas chargé. Les vignettes en attente de
génération ont une apparence différente (placeholder), et redeviennent la
vraie image dès que le calcul est terminé.

## Une vignette met du temps à apparaître

Sur un dessin très dense, ou en scrubbant loin de la zone déjà visible, la
génération se fait par petits lots pour ne jamais bloquer l'interface —
elle rattrape son retard en continu et se stabilise après quelques
instants. Ce n'est pas un blocage : vous pouvez continuer à travailler
pendant ce temps.

## Pourquoi pas de onion skin (dessins voisins en transparence) dans les vignettes ?

Testé puis abandonné : l'encre des vignettes est rasterisée en noir, donc
un simple réglage d'opacité pour afficher le dessin précédent/suivant en
fondu reste illisible en usage réel, plutôt qu'utile. Voir
[Fonctionnalités](features.md) pour le détail.

## Le raccourci Alt+M du scrubbing 3D entre en conflit avec un autre outil

Le raccourci est personnalisable : ouvrez les préférences de l'addon
(*Edit > Preferences > Add-ons > dopesheetFlow*) et changez le modificateur
et/ou la touche. Le changement s'applique immédiatement. Voir
[Préférences & raccourcis](preferences.md).

## Puis-je utiliser dopesheetFlow sans Grease Pencil ?

Non : l'overlay xsheet n'a de sens que pour des objets **Grease Pencil**.
Sur une Dope Sheet sans objet Grease Pencil actif, l'overlay ne s'affiche
simplement pas (la Dope Sheet reste celle de Blender, inchangée).

## Support

Ce projet est développé à son propre rythme, sur le temps libre de son
auteur. Il est fourni **en l'état**, sans garantie. Les retours (bugs,
suggestions) sont les bienvenus via le canal de support indiqué sur votre
page d'achat, mais sans garantie de délai de réponse.
