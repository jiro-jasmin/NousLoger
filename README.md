# Test technique - Chez Nestor

Ce projet est réalisé par Florian J. Giraud dans le cadre du test technique proposé par Chez Nestor.

La consigne était la suivante:
> Nous aimerions que tu créés une application React simple qui affiche une liste d'appartements. L'application doit permettre à l'utilisateur de créer, éditer et supprimer des appartements. Chaque appartement doit avoir un nom, une description, un prix et une photo.  

## Outils & Fonctionnalités

- React avec TypeScript
- Tailwind pour le style
- Next.js: j'ai utilisé ce framework car j'aime son architecture et la création d'API est simple
- Les données sont stockées dans un fichier TypeScript dédié (data.ts), sont parsées en json et sont accédées à travers une API (voir dossier pages/api/properties)
- La librarie SWR pour obtenir les données côté client
- Les images utilisées viennent de Pixabay (libres de droit). Elles sont responsive grâce à Next/images
- React Context pour l'autentification admin (à terminer)
- La manipulation des données (CRUD) (à terminer) - cette manipulation aurait lieu uniquement côté client; pour mofidier les données de manière pérenne, il aurait fallu utiliser une base de données relationnelle ou NoSQL par exemple

Merci pour votre visite!
