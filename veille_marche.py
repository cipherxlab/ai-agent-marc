from datetime import datetime

def get_veille_data():
    return {
        'timestamp': datetime.now().isoformat(),
        'evenements_vie': {'mariages': 45, 'pacs': 23, 'entreprises_creees': 78, 'entreprises_fermees': 34},
        'dpe_analysis': {'total_logements': 1247, 'repartition_classes': {'A': 23, 'B': 89, 'C': 156, 'D': 278, 'E': 345, 'F': 234, 'G': 122}, 'moyenne_consommation': 245.8, 'tendance': '+2.3% passoires énergétiques'},
        'prix_marche': {'prix_moyen_appart': 3850, 'prix_moyen_maison': 4200, 'nb_transactions': 234, 'evolution_annuelle': '+3.2%'},
        'demographie': {'population_totale': 295542, 'evolution_population': '+1.8%', 'age_median': 31.2, 'revenus_median': 24800, 'taux_proprietaires': 42.3, 'menages_mono': 52.1, 'projets_futurs': 'Ligne 5 tramway 2026'},
        'insights': ['🔥 OPPORTUNITÉ: 68 nouveaux couples', '📈 BUSINESS: 78 entreprises créées', '🎯 SECTEURS CHAUDS: Port Marianne'],
        'secteurs_analyse': {'port_marianne': {'prix_m2': 4050, 'evolution': '+4.1%', 'delai_vente': 42, 'demande': 'Très forte'}, 'antigone': {'prix_m2': 3800, 'evolution': '+2.8%', 'delai_vente': 38, 'demande': 'Forte'}}
    }
