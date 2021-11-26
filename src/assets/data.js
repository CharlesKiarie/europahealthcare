const products = [
    {
        id: "1",
        drugname: "Antibiotics",
        image: "./assets/products/antibiotics.jpg",
        drugdetails: [
            {id: "1", company: "Delorbis", product: "CLERON 250 TABS", composition: "(Clarithromycin 250mg )", packsize: "1x14's"},
            {id: "2", company: "Delorbis", product: "CLERON 500 TABS", composition: "(Clarithromycin 500mg )", packsize: "14's"},
            {id: "3", company: "Delorbis", product: "FLUCOZAL 50CAPS", composition: "(Fluconazole 50mg)", packsize: "2x7's"},
            {id: "4", company: "Delorbis", product: "FLUCOZAL 150 CAPS", composition: "(Fluconazole 150mg)", packsize: "1's"},
            {id: "5", company: "Delorbis", product: "FLUCOZAL 200 CAPS", composition: "(Fluconazole 200mg)", packsize: "1x10's"},
            {id: "6", company: "Delorbis", product: "OXACID 200 CAPS", composition: "(Ofloxacin 200mg caps)", packsize: "1x10's"},
            {id: "7", company: "Delorbis", product: "VIPROLOX 500 TABS", composition: "(Ciprofloxacin 500mg)", packsize: "1x10's"},
            {id: "8", company: "Delorbis", product: "VIRUCID 400 TABS", composition: "(Acyclovir 400mg F.C Tabs.)", packsize: "3x10's"},
            {id: "9", company: "Alembic", product: "FORTIFIED PROCAINE	Fortified", composition: "(Procaine)", packsize: "100vials"},
            {id: "10", company: "M.J.Biopharm	MONAN", product: "0.5G INJECTION", composition: "(Meropenem 500mg)", packsize: "VIAL"},
        ]    
    },
    {
        id: "2",
        drugname: "Anti-diabetics",
        image: "./assets/products/antidiabetic.jpg",
        drugdetails: [
            {id: "1", company: "M.J.Biopharm", product: "INSULIDD 30/70*", composition: "(Insulin Injection Soluble 30% and Isophane 70% 100 IU/ml)", packsize: "10ml vial"},
            {id: "2", company: "M.J.Biopharm", product: "INSULIDD-L (Lente)*", composition: "(Long Acting human Insulin Injection Zinc Suspension 100 IU/ml)", packsize: "10ml vial"},
            {id: "3", company: "M.J.Biopharm", product: "INSULIDD-N (NPH)*", composition: "(Human Insulin, Isophane Suspension 100 IU/ml)", packsize: "10ml vial"},
            {id: "4", company: "M.J.Biopharm", product: "INSULIDD-R*", composition: "(Regular Human Insulin injection 100 IU/ml)", packsize: "10ml vial"},
        ]
    },
    {
        id: "3",
        drugname: "Antifungal",
        image: "./assets/products/antifungal.jpg",
        drugdetails: [
            {id: "1", company: "Delorbis", product: "FLUCOZAL 150MG CAPS", composition: "(Fluconazole 150mg)", packsize: "1's"},
            {id: "2", company: "Delorbis", product: "FLUCOZAL 200MG CAPS", composition: "(Fluconazole 200mg)", packsize: "1x10's"},
            {id: "3", company: "Win Medicare", product: "LOGICAN 150MG CAPS", composition: "(Fluconazole 150mg)", packsize: "1x10's"},
            {id: "4", company: "Win Medicare", product: "LOGICAN 200MG CAPS", composition: "(Fluconazole 200mg)", packsize: "1x10's"},
        ]
    },
    {
        id: "4",
        drugname: "Anaesthetics",
        image: "./assets/products/anesthetics.jpg",
        drugdetails: [
            {id: "1", company: "n/a", product: "n/a", composition: "n/a", packsize: "n/a"},
        ]
    },
    {
        id: "5",
        drugname: "Anti-inflamantory",
        image: "./assets/products/antiflamatory.jpg",
        drugdetails: [
            {id: "1", company: "Derlobis", product: "MELGESIC 7.5 TABS", composition: "(Meloxicam 7.5mg tabs)", packsize: "1x10's"},
            {id: "2", company: "Alembic", product: "SIONARA 200 CAPS", composition: "(Celecoxib 200mg caps)", packsize: "30's"},
            {id: "3", company: "Comed			", product: "DOLOMED MR TABS", composition: "(Ibuprofen 400mg + Paracetamol 325mg + Chlorzoxazone 250mg)", packsize: "100's"},
            {id: "4", company: "Modi Mundipharma", product: "TRD-CONTIN 100 TABS", composition: "(Controlled release tabs of tramadol 100mg)", packsize: "5x10's"},
            {id: "5", company: "Win Medicare", product: "DICLOMOL PLUS TABLETS", composition: "(Diclofenac 50mg EC + Paracetamol 500mg)", packsize: "10x10's"},
            {id: "6", company: "Win Medicare", product: "URGENDOL 50 CAPS", composition: "(Tramadol Hydrochloride 50mg Caps)", packsize: "10x10's"},
        ]
    },
    {
        id: "6",
        drugname: "Antihistamines",
        image: "./assets/products/antihistamine.jpg",
        drugdetails: [
            {id: "1", company: "Delorbis", product: "LORYTEC TABS", composition: "(Loratidine 10mg tabs)", packsize: "1x10's"},
        ]
    },
    {
        id: "7",
        drugname: "Antiseptic",
        image: "./assets/products/antiseptic.jpg",
        drugdetails: [
            {id: "1", company: "Mundipharma AG", product: "BETADINE GARGLE & MOUTHWASH 1%", composition: "(1% Standardised Povidone Iodine)", packsize: "250ml"},
            {id: "2", company: "Mundipharma AG", product: "BETADINE VAGINAL DOUCHE KIT 10%", composition: "(10% Standardised Povidone Iodine Bottle/Applicator for Vaginal Cleansing)", packsize: "250ml"},
            {id: "3", company: "Mundipharma AG", product: "BETADINE ANTISEPTIC SOLN 10%", composition: "10% Standardised Povidone Iodine", packsize: "500ml"},
            {id: "4", company: "Mundipharma AG", product: "BETADINE SURGICAL SCRUB 7.5%", composition: "	(7.5% Standardised Povidone Iodine with Surfactant for Lathering)", packsize: "500ml"},
        ]
    },
    {
        id: "8",
        drugname: "Cardiovascular",
        image: "./assets/products/cardiovascular.jpg",
        drugdetails: [
            {id: "1", company: "Delorbis", product: "RYCARDON 150 TABS", composition: "(Irbesartan 150mg)", packsize: "3x10's"},
            {id: "2", company: "Modi Mundipharma", product: "NITROCONTIN 2.6 TABS", composition: "(Controlled release tabs of nitroglycerin 2.6mg)", packsize: "1x25's"},
            {id: "3", company: "Modi Mundipharma", product: "MONOCONTIN OD TABS", composition: "(Controlled release tabs of isosorbide mononitrate 50mg)", packsize: "10x10's"},
            {id: "4", company: "Win Medicare", product: "VARIACE 2.5 CAPS", composition: "(Ramipril 2.5mg caps)", packsize: "3x10's"},
        ]
    },
    {
        id: "9",
        drugname: "Cough syrups",
        image: "./assets/products/coughsyrup.jpg",
        drugdetails: [
            {id: "1", company: "n/a", product: "n/a", composition: "n/a", packsize: "n/a"},
        ]   
    },
    {
        id: "10",
        drugname: "Gynaecological",
        image: "./assets/products/dermatology.jpg",
        drugdetails: [
            {id: "1", company: "Galentic", product: "DERMOSONE CREAM", composition: "(Betamethasone dipropionate)", packsize: "15g"},
            {id: "2", company: "Galentic", product: "OROMUCORAL GEL", composition: "(Miconazole oromucosal)", packsize: "40g"},
            {id: "3", company: "Galentic", product: "PYLOOCAIN OINTMENT", composition: "(Anti-haemorrhoids ointment)", packsize: "30g"},
            {id: "4", company: "Win Medicare", product: "MEDERMA GEL", composition: "(Allium cepa+allantoin)", packsize: "20g tube"},		
        ]
    },
    {
        id: "11",
        drugname: "Herbals",
        image: "./assets/products/herbals.jpg",
        drugdetails: [
            {id: "1", company: "Himalaya", product: "Bonnisan Liquid", composition: "For infant colic, promotes appetite", packsize: "120ml"},
            {id: "2", company: "Himalaya", product: "Cystone tabs", composition: "For kidney stones", packsize: "100's"},
            {id: "3", company: "Himalaya", product: "Liv-52 tabs", composition: "For liver disorders", packsize: "100's"},
            {id: "4", company: "Himalaya", product: "Pixel tabs", composition: "Relieves painful inflammation", packsize: "100's"},
            {id: "5", company: "Himalaya", product: "Septilin syrub", composition: "Builds up immunity for recurrent infection", packsize: "100ml"},
        ]
    },
    {
        id: "12",
        drugname: "Hepatologicals",
        image: "./assets/products/hepatologicals.jpg",
        drugdetails: [
            {id: "1", company: "Himalaya", product: "LIV-52 SYRUP", composition: "Herbal product For Liver disorders", packsize: "100ml"},
            {id: "2", company: "M.J.Biopharm", product: "HEPA-MERZ TABS", composition: "L-Ornithine-L-Aspartate 150mg", packsize: "10x10's"},
            {id: "3", company: "M.J.Biopharm", product: "HEPA-MERZ INFUSION", composition: "(L-Ornithine-L-Aspartate 5gm per 10ml)", packsize: "5x10ml"},
            {id: "4", company: "Win Medicare", product: "UDIHEP FORTE TABS", composition: "(Ursodeoxycholic Acid Tabs BP 300mg)", packsize: "10x5's"},			
			
        ]
    },
    {
        id: "13",
        drugname: "Nephrology",
        image: "./assets/products/nephrology.jpg",
        drugdetails: [
            {id: "1", company: "Panacea", product: "MYCEPT 500MG TABS", composition: "(Mycophenolate mofetil 500mg)", packsize: "3x10’s"},
            {id: "2", company: "Panacea", product: "PANIMUN BIORAL 100 CAPS", composition: "(Cyclosporin 100mg)", packsize: "5x6's"},
            {id: "3", company: "Panacea", product: "PANGRAF 5.0 CAPS", composition: "(Tacrolimus 5.0 mg)", packsize: "1x10's"},			
        ]
    },
    {
        id: "14",
        drugname: "Neuropsychiatry",
        image: "./assets/products/neouro.jpg",
        drugdetails: [
            {id: "1", company: "Modi Mundipharma", product: "VALCONTIN 500 TABS", composition: "(Controlled release tabs of sodium valproate & valproic acid 500mg)", packsize: "10x10's"},
            {id: "2", company: "Delorbis", product: "FLUXIL CAPS", composition: "(Fluoxetine 20mg)", packsize: "3x10's"},
            {id: "3", company: "Delorbis", product: "PYRANTIN 20 TABS", composition: "(Paroxetine 20mg)", packsize: "3x10'S"},
            {id: "4", company: "Delorbis", product: "ZOLARAM 0.25 TABS", composition: "(Alprazolam 0.25mg)", packsize: "3x10's"},			
        ]
    },
];


export default products;