import { getArtistesByDate, getArtisteById, getScenesByName, loginUser, pb } from './backend.mjs';
async function runTests() {
    try {
        await pb.collection('_superusers').authWithPassword('enzo.hillairet@edu.univ-fcomte.fr', 'Light@280807');
        
        console.log("Connexion admin réussie !");

        console.log("\n--- Test 1 : Liste des artistes par date ---");
        const artistes = await getArtistesByDate();
        const artistesTable = artistes.map(a => ({
            Nom: a.nom,
            Date: a.date_representation
        }));
        console.table(artistesTable);

        console.log("\n--- Test 2 : Liste des scènes par nom ---");
        const scenes = await getScenesByName();
        const scenesTable = scenes.map(s => ({
            Nom: s.nom,
            ID: s.id
        }));
        console.table(scenesTable);

console.log("\n--- Test 3 : Infos d'un artiste spécifique ---");
        const idTest = artistes[0].id; 
        const artiste = await getArtisteById(idTest);
        
        console.table([{
            Nom: artiste.nom,
            Date: artiste.date_representation,
            ID: artiste.id
        }]);

console.log("\n--- Test 4 : Connexion d'un visiteur ---");
        const user = await loginUser('test@test.com', '1234567890');
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

