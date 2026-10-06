# SlateFlow

![SlateFlow](../assets/branding/logo_slateflow.png){: .addon-hero-logo }

**SlateFlow** est une suite d'addons Blender pensés pour les workflows de
storyboard, d'animation et de montage — avec un souci particulier pour le
**Grease Pencil**.

Cette documentation regroupe les guides utilisateur de chaque addon de la
suite : installation, fonctionnalités en détail, et support.

## Addons documentés

<div class="grid cards" markdown>

- **[sequencerFlow](sequencerFlow/index.md)**

    Des outils de montage façon Premiere/Resolve pour le VSE : toolbar
    contextuelle, montage 3 points, courbes sur les strips, guides de
    zones. Versions LITE gratuite et PRO payante.

- **[sequencerOTIO](sequencerOTIO/index.md)**

    Un aller-retour propre entre le VSE de Blender et DaVinci Resolve via
    OpenTimelineIO, avec conform non destructif.

- **[storyFlow](storyFlow/index.md)**

    Transforme le VSE en établi de storyboard/animatique : chaque plan est
    un strip SCENE apparié à sa propre scène de dessin Grease Pencil,
    synchronisés dans les deux sens.

- **[gpFlow](gpFlow/index.md)**

    Une boîte à outils flottante dessinée en GPU pour dessiner plus vite
    avec le Grease Pencil : dessin, gomme, fill, retravail, select &
    transform, flip, tout à un clic.

- **[dopesheetFlow](dopesheetFlow/index.md)**

    Transforme la Dope Sheet de Blender en véritable table lumineuse
    ("xsheet") pour le Grease Pencil : vignettes réelles par clé, hiérarchie
    Scene/Summary/groupes/layers, drag & drop, scrubbing dans la vue 3D.

- **[gpOutliner](gpOutliner/index.md)**

    Un poste de commande dédié pour chaque objet Grease Pencil : tri par
    profondeur, compensation d'échelle visuelle, outils caméra, mise en
    scène 2D/3D.

</div>

## Où trouver les addons

- Addons gratuits : [Blender Extensions](https://extensions.blender.org/)
- Addons payants : Superhive et Gumroad

!!! tip "Besoin d'aide ?"
    Si vous ne trouvez pas la réponse à votre question dans ces pages,
    reportez-vous à la section **Support** en bas de la page de l'addon
    concerné.

## Signaler un bug

Un rapport clair est, à lui seul, ce qui accélère le plus la résolution
d'un bug. Avant d'en envoyer un, merci d'inclure :

- **Quel addon**, et sa **version** — affichée en haut de sa page
  **Historique des versions** (aussi visible dans *Edit > Preferences >
  Get Extensions*, sous l'entrée de l'addon).
- **Votre version de Blender** (*Help > About Blender*, ou
  `Help > Save System Info` pour le détail complet).
- **Ce que vous avez fait, étape par étape** — la suite exacte de
  clics/actions qui mène au problème, en partant d'un état décrit (par
  exemple "un fichier neuf" ou "le fichier joint"). "Ça ne marche pas"
  seul ne permet pas de diagnostiquer.
- **Ce que vous attendiez, et ce qui s'est passé à la place.**
- **Est-ce que ça arrive à chaque fois**, ou seulement parfois ? Si
  seulement parfois, tout ce qui semble rendre ça plus ou moins probable
  aide beaucoup.
- **Une capture d'écran ou un court enregistrement vidéo** pour tout ce
  qui est visuel — ça vaut largement plus qu'une description de ce qui
  s'affiche.
- **Un fichier `.blend` minimal qui reproduit le problème**, si vous
  pouvez en préparer un — de loin le chemin le plus rapide vers un vrai
  correctif, puisque ça retire toute incertitude sur la configuration
  précise de votre scène/fichier. Pas toujours possible (fichiers de
  production confidentiels, problème lié à un fichier énorme) —
  compréhensible, dites-le simplement.

Envoyez tout ça via le canal indiqué dans la section **Support** de
l'addon concerné (suivi de tickets, email, ou messagerie de la place de
marché selon l'endroit où vous l'avez obtenu). Des éléments manquants ne
bloquent pas un rapport — ils veulent juste dire que la première réponse
sera probablement une demande pour les obtenir, ce qui ralentit tout le
monde.
