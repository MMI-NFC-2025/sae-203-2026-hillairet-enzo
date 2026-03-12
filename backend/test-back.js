import { getArtistesByDate, getArtisteById, getScenesByName, loginUser, pb } from './backend.mjs';

async function runTests() {
    try {
        // Connexion Admin
        await pb.collection('_superusers').authWithPassword('enzo.hillairet@edu.univ-fcomte.fr', 'Light@280807');
        console.log("Connexion admin réussie !");

        // Test 1
        console.log("\n--- Test 1 : Liste des artistes par date ---");
        const artistes = await getArtistesByDate();
        const artistesTable = artistes.map(a => ({
            Nom: a.nom,
            Date: a.date_representation
        }));
        console.table(artistesTable);

        // Test 2
        console.log("\n--- Test 2 : Liste des scènes par nom ---");
        const scenes = await getScenesByName();
        const scenesTable = scenes.map(s => ({
            Nom: s.nom,
            ID: s.id
        }));
        console.table(scenesTable);

        // Test 3
        console.log("\n--- Test 3 : Infos d'un artiste spécifique ---");
        const idTest = artistes[0].id; 
        const artiste = await getArtisteById(idTest);
        
        console.table([{
            Nom: artiste.nom,
            Date: artiste.date_representation,
            ID: artiste.id
        }]);

        // Test 4 (Corrigé avec le mot de passe de 15 caractères)
        console.log("\n--- Test 4 : Connexion d'un visiteur ---");
        const user = await loginUser('test@test.com', '123456789101112');
        if (user) {
            console.log("Succès ! Visiteur connecté :", user.record.email);
        } else {
            console.log("Échec de la connexion.");
        }

    } catch (e) {
        console.error("Erreur durant les tests :", e.message);
        console.error("Détails :", e.response);
    }
}

runTests();