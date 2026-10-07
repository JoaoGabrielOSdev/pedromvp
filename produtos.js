/* =====================================================================
   LISTA DE PRODUTOS — edite aqui, sem mexer no layout.
   nome:      nome com apresentação/volume
   categoria: "Toxinas" | "Preenchedores" | "Bioestimuladores" | "Fios de Sustentação"
   preco:     valor no Pix, em número (ex.: 799 ou 1017.5)
   imagem:    caminho da foto, ex.: "assets/produtos/dysport-300u.jpg"
              (vazio = mostra imagem provisória)
   Para adicionar um item, copie uma linha e altere os campos.
   ===================================================================== */
const WHATSAPP = "5544999251580";
const CATEGORIAS = ["Toxinas", "Preenchedores", "Bioestimuladores", "Fios de Sustentação"];

const PRODUTOS = [
  // Toxinas
  { nome: "Botox 50U",    categoria: "Toxinas", preco: 379,  imagem: "assets/produtos/botox-50u.jpg" },
  { nome: "Botox 100U",   categoria: "Toxinas", preco: 639,  imagem: "assets/produtos/botox-100u.jpg" },
  { nome: "Letybo 100U",  categoria: "Toxinas", preco: 559,  imagem: "assets/produtos/letybo-100u.jpg" },
  { nome: "Letybo 200U",  categoria: "Toxinas", preco: 1017, imagem: "assets/produtos/letybo-200u.jpg" },
  { nome: "Botulim 50U",  categoria: "Toxinas", preco: 369,  imagem: "assets/produtos/botulim-50u.jpg" },
  { nome: "Botulim 100U", categoria: "Toxinas", preco: 549,  imagem: "assets/produtos/botulim-100u.jpg" },
  { nome: "Nabota 100U",  categoria: "Toxinas", preco: 549,  imagem: "assets/produtos/nabota-100u.jpg" },
  { nome: "Nabota 200U",  categoria: "Toxinas", preco: 1012, imagem: "assets/produtos/nabota-200u.jpg" },
  { nome: "Dysport 300U", categoria: "Toxinas", preco: 799,  imagem: "assets/produtos/dysport-300u.jpg" },
  { nome: "Xeomin 100U",  categoria: "Toxinas", preco: 539,  imagem: "assets/produtos/xeomin-100u.jpg" },

  // Preenchedores
  { nome: "Restylane Gel",                categoria: "Preenchedores", preco: 199,  imagem: "assets/produtos/restylane-gel.jpg" },
  { nome: "Restylane Lyft",               categoria: "Preenchedores", preco: 299,  imagem: "assets/produtos/restylane-lyft.jpg" },
  { nome: "Restylane Defyne",             categoria: "Preenchedores", preco: 343,  imagem: "assets/produtos/restylane-defyne.jpg" },
  { nome: "Rennova Lips Plus Lido",       categoria: "Preenchedores", preco: 299,  imagem: "assets/produtos/rennova-lips-plus.jpg" },
  { nome: "Rennova Ultravolume Lido 1ml", categoria: "Preenchedores", preco: 239,  imagem: "assets/produtos/rennova-ultravolume-1ml.jpg" },
  { nome: "Rennova Ultravolume Lido 2ml", categoria: "Preenchedores", preco: 419,  imagem: "assets/produtos/rennova-ultravolume-2ml.jpg" },
  { nome: "Rennova Deep Line Lido",       categoria: "Preenchedores", preco: 249,  imagem: "assets/produtos/rennova-deep-line.jpg" },
  { nome: "Rennova Lift Plus Lido",       categoria: "Preenchedores", preco: 259,  imagem: "assets/produtos/rennova-lift-plus.jpg" },
  { nome: "Rennova Diamond Intense",      categoria: "Preenchedores", preco: 442,  imagem: "assets/produtos/rennova-diamond-intense.jpg" },
  { nome: "Juvéderm Ultra Plus XC 1ml",   categoria: "Preenchedores", preco: 279,  imagem: "assets/produtos/juvederm-ultra-plus-xc.jpg" },
  { nome: "Juvéderm Ultra XC 1ml",        categoria: "Preenchedores", preco: 266,  imagem: "assets/produtos/juvederm-ultra-xc.jpg" },
  { nome: "Juvéderm Skinvive 1ml",        categoria: "Preenchedores", preco: 280,  imagem: "assets/produtos/juvederm-skinvive.jpg" },
  { nome: "E.p.t.q. Lido S300 1,1ml",     categoria: "Preenchedores", preco: 209,  imagem: "assets/produtos/eptq-s300.jpg" },
  { nome: "Biogelis Global 1ml",          categoria: "Preenchedores", preco: 219,  imagem: "assets/produtos/biogelis-global.jpg" },
  { nome: "Biogelis Volume 1ml",          categoria: "Preenchedores", preco: 229,  imagem: "assets/produtos/biogelis-volume.jpg" },
  { nome: "Perfectha Subskin 1ml",        categoria: "Preenchedores", preco: 229,  imagem: "assets/produtos/perfectha-subskin.jpg" },
  { nome: "Sofiderm Sub-Skin 10ml",       categoria: "Preenchedores", preco: 1121, imagem: "assets/produtos/sofiderm-sub-skin.jpg" },
  { nome: "Belotero Lido Intense",        categoria: "Preenchedores", preco: 242,  imagem: "assets/produtos/belotero-intense.jpg" },

  // Bioestimuladores
  { nome: "Sculptra",           categoria: "Bioestimuladores", preco: 799, imagem: "assets/produtos/sculptra.jpg" },
  { nome: "Radiesse Duo 1,5ml", categoria: "Bioestimuladores", preco: 679, imagem: "assets/produtos/radiesse-duo.jpg" },
  { nome: "Ellansé M 2x1ml",    categoria: "Bioestimuladores", preco: 978, imagem: "assets/produtos/ellanse-m.jpg" },
  { nome: "Harmonyca 1,25ml",   categoria: "Bioestimuladores", preco: 549, imagem: "assets/produtos/harmonyca.jpg" },
  { nome: "Nutriex",            categoria: "Bioestimuladores", preco: 299, imagem: "assets/produtos/nutriex.jpg" },
  { nome: "Profhilo",           categoria: "Bioestimuladores", preco: 749, imagem: "assets/produtos/profhilo.jpg" },

  // Fios de Sustentação
  { nome: "Prodeep Fio Hydra Plus",     categoria: "Fios de Sustentação", preco: 317, imagem: "assets/produtos/prodeep-hydra-plus.jpg" },
  { nome: "Prodeep Fio Cutting Cog 3D", categoria: "Fios de Sustentação", preco: 286, imagem: "assets/produtos/prodeep-cutting-cog.jpg" },
];
