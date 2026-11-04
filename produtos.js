/* =====================================================================
   LISTA DE PRODUTOS — edite aqui, sem mexer no layout.
   nome:      nome com apresentação/volume
   categoria: um dos nomes em CATEGORIAS
   preco:     valor no Pix, em número (ex.: 489 ou 1017.5)
   imagem:    caminho da foto, ex.: "assets/produtos/dysport-300u.webp"
              (vazio = mostra imagem provisória)
   Para adicionar um item, copie uma linha e altere os campos.
   ===================================================================== */
const WHATSAPP = "5544999251580";

/* Atendentes — o botão do produto abre a escolha e leva ao WhatsApp escolhido */
const ATENDENTES = [
  { nome: "Micaely", whatsapp: "5544999251580" },
  { nome: "Débora",  whatsapp: "554430313530" },
  { nome: "Fran",    whatsapp: "5544991837550" },
  { nome: "Jessica", whatsapp: "5544991797948" },
];

const CATEGORIAS = ["Toxinas Botulínicas", "Bioestimuladores", "Preenchedores", "Skinboosters", "Fios de PDO", "Outros"];

const PRODUTOS = [
  // Toxinas Botulínicas
  { nome: "Nabota 100U",  categoria: "Toxinas Botulínicas", preco: 489, imagem: "assets/produtos/nabota-100u.webp" },
  { nome: "Xeomin 100U",  categoria: "Toxinas Botulínicas", preco: 509, imagem: "assets/produtos/xeomin-100u.webp" },
  { nome: "Dysport 300U", categoria: "Toxinas Botulínicas", preco: 759, imagem: "assets/produtos/dysport-300u.webp" },
  { nome: "Letybo 100U",  categoria: "Toxinas Botulínicas", preco: 539, imagem: "assets/produtos/letybo-100u.webp" },
  { nome: "Botulim 100U", categoria: "Toxinas Botulínicas", preco: 509, imagem: "assets/produtos/botulim-100u.webp" },
  { nome: "Botox 100U",   categoria: "Toxinas Botulínicas", preco: 609, imagem: "assets/produtos/botox-100u.webp" },

  // Bioestimuladores / Bioregeneradores
  { nome: "Sculptra Frasco",                  categoria: "Bioestimuladores", preco: 749, imagem: "assets/produtos/sculptra.webp" },
  { nome: "Radiesse Duo 1,5ml",               categoria: "Bioestimuladores", preco: 659, imagem: "assets/produtos/radiesse-duo.webp" },
  { nome: "Harmonyca 1,25ml",                 categoria: "Bioestimuladores", preco: 529, imagem: "assets/produtos/harmonyca.webp" },
  { nome: "Elleva 150mg",                     categoria: "Bioestimuladores", preco: 479, imagem: "assets/produtos/elleva-150mg.webp" },
  { nome: "Diamond Intense Lido 1,25ml",      categoria: "Bioestimuladores", preco: 409, imagem: "assets/produtos/diamond-intense-lido.webp" },
  { nome: "Nutriex",                          categoria: "Bioestimuladores", preco: 279, imagem: "assets/produtos/nutriex.webp" },

  // Preenchedores
  { nome: "Restylane Lyft",                   categoria: "Preenchedores", preco: 269, imagem: "assets/produtos/restylane-lyft.webp" },
  { nome: "Restylane Gel",                    categoria: "Preenchedores", preco: 189, imagem: "assets/produtos/restylane-gel.webp" },
  { nome: "Rennova Lift",                     categoria: "Preenchedores", preco: 189, imagem: "assets/produtos/rennova-lift.webp" },
  { nome: "Rennova Deep Line Lido",           categoria: "Preenchedores", preco: 229, imagem: "assets/produtos/rennova-deep-line-lido.webp" },
  { nome: "Rennova Shape Plus Lido 10ml",     categoria: "Preenchedores", preco: 749, imagem: "assets/produtos/rennova-shape-plus-lido.webp" },
  { nome: "Biogelis Volume 1ml",              categoria: "Preenchedores", preco: 219, imagem: "assets/produtos/biogelis-volume.webp" },
  { nome: "Belotero Lido Intense",            categoria: "Preenchedores", preco: 239, imagem: "assets/produtos/belotero-lido-intense.webp" },
  { nome: "Juvéderm Ultra Plus 1ml",          categoria: "Preenchedores", preco: 269, imagem: "assets/produtos/juvederm-ultra-plus.webp" },
  { nome: "Neuramis Volume Lidocaine",        categoria: "Preenchedores", preco: 189, imagem: "assets/produtos/neuramis-volume-lidocaine.webp" },
  { nome: "E.P.T.Q. Lidocaine S300 1,1ml",    categoria: "Preenchedores", preco: 219, imagem: "assets/produtos/eptq-lidocaine-s300.webp" },
  { nome: "Perfectha Subskin Lido 1ml",       categoria: "Preenchedores", preco: 219, imagem: "assets/produtos/perfectha-subskin-lido.webp" },
  { nome: "Yvoire Contour",                   categoria: "Preenchedores", preco: 239, imagem: "assets/produtos/yvoire-contour.webp" },
  { nome: "Sofiderm Derm 1ml",                categoria: "Preenchedores", preco: 159, imagem: "assets/produtos/sofiderm-derm.webp" },

  // Skinboosters
  { nome: "Restylane Vital",                  categoria: "Skinboosters", preco: 219, imagem: "assets/produtos/restylane-vital.webp" },
  { nome: "Juvéderm Skinvive 1ml",            categoria: "Skinboosters", preco: 269, imagem: "assets/produtos/juvederm-skinvive.webp" },
  { nome: "Rennova Fill Hydro 3ml",           categoria: "Skinboosters", preco: 359, imagem: "assets/produtos/rennova-fill-hydro.webp" },

  // Fios de PDO
  { nome: "I-Thread Cânula Filler 21G · 4 unid.",     categoria: "Fios de PDO", preco: 329, imagem: "assets/produtos/ithread-canula-filler-21g.webp" },
  { nome: "I-Thread Cânula Espiculado 19G · 4 unid.", categoria: "Fios de PDO", preco: 329, imagem: "assets/produtos/ithread-canula-espiculado-19g.webp" },
  { nome: "I-Thread Liso Mono 29G · 10 unid.",        categoria: "Fios de PDO", preco: 189, imagem: "" },
  { nome: "Prodeep Cutting Cog 3D 19G · 4 unid.",     categoria: "Fios de PDO", preco: 279, imagem: "assets/produtos/prodeep-cutting-cog-3d.webp" },
  { nome: "Prodeep Hydra Plus 21G · 4 unid.",         categoria: "Fios de PDO", preco: 329, imagem: "assets/produtos/prodeep-hydra-plus.webp" },
  { nome: "Prodeep Mono Agulha 29G · 10 unid.",       categoria: "Fios de PDO", preco: 189, imagem: "assets/produtos/prodeep-mono-agulha-29g.webp" },

  // Outros
  { nome: "GHK-Cu Peptide La Cutanée · Ampola 3ml",   categoria: "Outros", preco: 389, imagem: "assets/produtos/ghk-cu-la-cutanee.webp" },
  { nome: "NCT-BIO La Cutanée · Ampola 3ml",          categoria: "Outros", preco: 209, imagem: "assets/produtos/nct-bio-la-cutanee.webp" },
  { nome: "La Cutanée PDRN · Ampola 3ml",             categoria: "Outros", preco: 189, imagem: "" },
  { nome: "Hialuronidase Victlab 3000 UTR",           categoria: "Outros", preco: 69,  imagem: "" },
];
