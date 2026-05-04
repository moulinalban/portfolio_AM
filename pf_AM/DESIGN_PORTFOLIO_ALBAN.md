# DESIGN.md

# Portfolio — Alban Moulin
Design System, direction artistique et règles UI

Version : V1  
Statut : Source de vérité design pour le portfolio web  
Projet : Portfolio personnel Alban Moulin — Chargé de Communication & Marketing

---

## 1. Objectif du document

Ce document définit la direction artistique et le design system du portfolio web d'Alban Moulin.

Il précise :
- le positionnement visuel du portfolio ;
- les couleurs ;
- la typographie ;
- les composants UI ;
- les règles desktop et mobile ;
- les comportements d'animation ;
- les principes de cohérence pour tout outil IA ou développeur.

Ce document doit être considéré comme la référence design principale du portfolio.

---

## 2. Positionnement visuel

Le portfolio doit refléter l'identité professionnelle d'Alban Moulin :
- créatif ;
- moderne ;
- impactant ;
- professionnel ;
- original sans être excentrique.

Ce portfolio n'est pas un site vitrine générique.
Ce n'est pas non plus un portfolio graphiste ultra-expérimental.

Le produit doit donner la sensation d'une vitrine personnelle forte :
- mémorable ;
- lisible ;
- visuellement différenciante ;
- orientée résultats.

---

## 3. Philosophie design

### 3.1 Concept central
**L'impact avant tout**

Le visiteur doit comprendre qui est Alban et ce qu'il vaut en moins de 5 secondes.
Chaque élément visuel doit servir cet objectif.

### 3.2 Ton visuel
Le ton visuel recherché est :
- dark et premium ;
- typographiquement fort ;
- aéré et respirant ;
- structuré sans être rigide ;
- créatif sans être désordonné.

### 3.3 Règle d'or
Toute décision esthétique qui ralentit la lecture, noie les chiffres clés ou distrait du contenu principal doit être refusée.

---

## 4. Références visuelles validées

Les références suivantes ont été validées comme sources d'inspiration :

- **Adam Zonski** — fond sombre, typographie grande, photo personnelle mise en valeur, chiffres clés visibles, ambiance premium
- **Duwy** — mise en page aérée, espace blanc généreux, chiffres impactants, navigation épurée
- **Mirko Romanelli** — typographie XXL, minimalisme assumé, navigation ultra-épurée, image forte en hero
- **LucaDCZ** — photo personnelle en avant, navigation simple, appels à l'action clairs et directs

### Synthèse des inspirations
Ce qui ressort de ces 4 références :
- typographie grande et dominante ;
- dark mode fort ;
- photo personnelle bien mise en valeur ;
- chiffres clés visuellement proéminents ;
- navigation minimaliste ;
- beaucoup d'espace blanc / respiration.

---

## 5. Identité couleur

### 5.1 Couleurs principales
Les couleurs du portfolio sont cohérentes avec le CV existant d'Alban.

- `--color-primary: #1E90FF` — bleu principal
- `--color-primary-dark: #1565C0` — bleu foncé
- `--color-primary-light: #63B3FF` — bleu clair / accent

### 5.2 Usage du bleu
Le bleu sert pour :
- accents visuels ;
- boutons principaux ;
- liserés et séparateurs ;
- éléments actifs ;
- mise en valeur des chiffres clés ;
- CTA principaux.

### 5.3 Interdiction
Le bleu ne doit pas envahir toute l'interface.
Il sert à guider le regard, pas à colorer toute la page.

---

## 6. Palette complète

### 6.1 Fonds (dark mode — prioritaire)
- `--bg-app: #0A0A0A` — fond principal
- `--bg-surface: #111111` — surface carte
- `--bg-surface-alt: #161616` — surface alternative
- `--bg-surface-hover: #1C1C1C` — survol

### 6.2 Bordures
- `--border-default: rgba(255,255,255,0.07)`
- `--border-strong: rgba(255,255,255,0.13)`
- `--border-accent: rgba(30,144,255,0.35)`

### 6.3 Textes
- `--text-primary: #FFFFFF`
- `--text-secondary: #C0C0C0`
- `--text-muted: #808080`
- `--text-accent: #1E90FF`

### 6.4 Accent
- `--accent-primary: #1E90FF`
- `--accent-soft: rgba(30,144,255,0.12)`

---

## 7. Couleurs d'état

- `--success: #22C55E` — validation, résultat positif
- `--warning: #F59E0B` — élément à finaliser
- `--info: #3B82F6` — information secondaire

---

## 8. Typographie

### 8.1 Font pairing recommandé
- **Titres / nom / chiffres clés** : `Outfit` ou `Space Grotesk`
- **Corps / navigation / formulaires** : `Inter`

### 8.2 Positionnement
Cette combinaison donne :
- une lisibilité très bonne ;
- un rendu premium moderne ;
- une lecture claire sur desktop et mobile ;
- une typographie impactante cohérente avec les références visuelles.

### 8.3 Hiérarchie
- Nom hero (Alban Moulin) : Outfit 64–80, bold
- H1 titre section : Outfit 40–56
- H2 sous-titre : Outfit 28–36
- H3 titre expérience : Outfit 22–28
- Body : Inter 15–17
- Small text : Inter 13–14
- Chiffres KPI : Outfit 40–56, bold
- Label KPI : Inter 13–14, muted
- Navigation : Inter 14–15
- Bouton : Inter 14–15, medium

### 8.4 Règles
- pas de troisième police ;
- pas de capitales partout ;
- les titres doivent être marqués et dominants ;
- les chiffres clés doivent être les éléments typographiquement les plus forts de la page.

---

## 9. Grille et spacing

### 9.1 Rythme
Le système d'espacement repose sur une base simple :
- 4, 8, 12, 16, 24, 32, 48, 64, 80, 96

### 9.2 Densité
Le portfolio doit rester :
- aéré pour respirer ;
- structuré pour rester lisible.

Desktop : beaucoup d'espace blanc, sections bien séparées.
Mobile : sections empilées proprement, padding réduit.

### 9.3 Largeur max du contenu
- `max-width: 1200px` centré
- padding horizontal : 24px mobile / 64px desktop

---

## 10. Radius, bordures, ombres

### 10.1 Radius
- petit : 8px
- moyen : 12px
- grand : 16px
- XL : 24px
- pill : 999px

### 10.2 Bordures
Les bordures doivent être :
- subtiles ;
- présentes sur les cartes et blocs ;
- jamais lourdes.

### 10.3 Ombres
Les ombres doivent être quasi absentes.
La profondeur vient de :
- contrastes de surface ;
- bordures légères ;
- niveaux de fond.

Ombres autorisées uniquement sur :
- modals ;
- dropdowns ;
- éléments flottants.

---

## 11. Composants UI

### 11.1 Blocs KPI (résultats clés)
Les 4 blocs de résultats clés sont les éléments les plus importants de la page d'accueil.

Règles :
- fond surface légèrement distinct du fond app ;
- bordure accent bleu à gauche (liseré vertical) ;
- chiffre principal très grand (Outfit 40–56, bold, blanc) ;
- label descriptif en dessous (Inter 13, muted) ;
- lisibles en moins d'1 seconde.

### 11.2 Cartes expérience
Les cartes sur la page d'accueil pointant vers chaque expérience :
- fond surface ;
- bordure fine ;
- rayon moyen ;
- nom de l'entreprise en titre ;
- période en muted ;
- hover avec bordure accent bleu ;
- cliquable vers la page dédiée.

### 11.3 Galerie visuels
Sur les pages d'expérience :
- grille de visuels propre ;
- pas de surcharge ;
- hover léger sur chaque visuel ;
- vidéos intégrées nativement si possible.

### 11.4 Boutons
Deux niveaux :

**Primaire**
- fond bleu (`--color-primary`)
- texte blanc
- hover légèrement plus sombre
- radius moyen

**Secondaire / ghost**
- fond transparent
- bordure bleu
- texte blanc ou bleu
- hover fond accent soft

### 11.5 Formulaire de contact
- champs avec fond surface alt ;
- bordure fine ;
- focus avec bordure bleu ;
- bouton d'envoi primaire ;
- messages d'erreur en rouge discret.

---

## 12. Navigation

### 12.1 Structure
La navigation contient :
- Accueil
- Expériences (avec sous-menu ou page dédiée)
- Contact

### 12.2 Style
- sobre et minimaliste ;
- sticky en haut de page ;
- fond légèrement opacifié au scroll ;
- lien actif en bleu ou souligné ;
- pas de mega-menu.

### 12.3 Mobile
- burger menu ;
- drawer latéral ou menu plein écran ;
- liens larges et facilement cliquables.

---

## 13. Page d'accueil — ordre et structure

L'ordre des sections est fixé et ne doit pas être modifié :

1. **Hero** — photo + nom + titre + liseré bleu
2. **Résultats clés** — 4 blocs KPI
3. **Texte de présentation** — 2-3 lignes
4. **Compétences** — liste ou tags
5. **Aperçu expériences** — 4 cartes cliquables
6. **CTA** — contact + LinkedIn + téléchargement CV

---

## 14. Pages expérience — structure

Chaque page expérience suit la même structure :

1. Titre entreprise + période + secteur
2. Missions (texte court)
3. Résultats / chiffres clés
4. Galerie visuels / vidéos
5. CTA retour aux expériences

---

## 15. Photo personnelle

La photo d'Alban doit être :
- bien éclairée (version finale à privilégier) ;
- recadrée proprement ;
- intégrée dans le hero de la page d'accueil ;
- mise en valeur sans effet excessif ;
- ronde ou rectangulaire selon l'inspiration choisie.

Fichier fourni : `IMG_0615.jpeg`

---

## 16. Mobile

### 16.1 Logique
Le mobile n'est pas une miniature du desktop.
Les sections s'empilent proprement.

### 16.2 Priorités mobile
- le nom et le titre doivent rester grands ;
- les 4 blocs KPI passent en 2 colonnes ou 1 colonne ;
- la galerie visuels passe en scroll horizontal ou grille 1 colonne ;
- les boutons sont larges et facilement cliquables ;
- la navigation est accessible via burger.

### 16.3 Breakpoints recommandés
- mobile : < 768px
- tablet : 768px – 1024px
- desktop : > 1024px

---

## 17. Animations et effets

### 17.1 Autorisés
- fade-in au scroll (léger, rapide)
- hover sur cartes et boutons
- transition couleur sur liens
- légère surélévation au hover sur cartes

### 17.2 Limités
- parallax léger sur le hero uniquement
- compteur animé sur les chiffres KPI (optionnel)

### 17.3 Interdits
- sur-animations ;
- effets "template IA générique" ;
- blob gradients ;
- glassmorphism excessif ;
- éléments décoratifs sans fonction ;
- transitions lentes qui ralentissent la navigation.

---

## 18. Règles absolues pour tout outil IA ou développeur

1. Ne jamais inventer une nouvelle palette si ce document existe.
2. Ne jamais remplacer le noir / bleu sans demande explicite.
3. Ne jamais créer un style portfolio générique blanc/gris sans personnalité.
4. Ne jamais ajouter des gradients gratuits sur les boutons ou fonds.
5. Ne jamais surcharger l'UI avec des ombres ou effets inutiles.
6. Toujours respecter l'ordre des sections de la page d'accueil.
7. Toujours privilegier la lisibilité des chiffres clés.
8. Toujours s'assurer que la photo personnelle est bien mise en valeur.
9. Toujours vérifier le rendu mobile avant de valider une section.
10. Toute entorse à ces règles doit être explicitement justifiée.

---

## 19. Critères d'acceptation design

Le design du portfolio est validé si :
- le dark mode est fort, premium et cohérent ;
- le bleu est bien utilisé sans excès ;
- les 4 blocs KPI sont lisibles en moins d'1 seconde ;
- la photo personnelle est bien mise en valeur dans le hero ;
- la typographie est grande et impactante ;
- les pages expérience ont toutes la même structure ;
- la navigation est simple et intuitive ;
- le mobile est propre et exploitable ;
- aucun élément décoratif inutile ne distrait du contenu ;
- le portfolio ne ressemble pas à un template générique.

---

## 20. Règle finale

Le portfolio d'Alban Moulin doit ressembler à une vitrine professionnelle créative et impactante, pas à un template WordPress générique.

---
