export default function () {
  return [
    {
      id: 0,
      name:'Cap-Aux-Meules' ,
      spot: [
        {
          name:'Gros-Cap',
          type: 'mer',
          profond:true,
          latitude:47.3482200, 
          longitude:-61.8845900,
          offAngle:211,
          infoPosition:"Le spot se situe à Gros-Cap avant l'entrée du camping, du côté droit (Sud). Il y a un petit parking à droite aussi ",
          infoSpot:'Le spot peut offrir de belles vagues lors des conditions propice, de plus la vue est magnifique à côté du parc de Gros-Cap',
          infoLancement:'Pour la préparation de votre kite vous pouvez le faire sur la gazon du parking',
          attention:'Attention aux autos lors du lancement de votre kite, ne vous aventurez pas trop prêt des kites, il y a turbulence de vents et des trous de vents ',
          onlyWind:[],
          imgURL:'grosCap.jpg'
        },
        {
          name:'Pointe à Frank',
          type: 'lagune',
          profond: true,
          latitude:47.4184800,
          longitude:-61.8673500,
          offAngle:121,
          infoPosition:"Le spot de la pointe à Frank se situe au bout du chemin Poirier, il est accessible directement en auto. Toutefois stationner vous avant le parking car cela laisse de la place pour préparer votre kite",
          infoSpot:"Le spot est profond, et peu venir choppy si le vent n'est pas dans la bonne direction. Il est en lagune ce qui le rend plus sécuritaire",
          infoLancement: "L'espace de lancement pour les kites est limité. Il est en gazon, attention au automobile qui sont stationné sur le spot de départ",
          attention:"Attention, le spot est pret de cap, donc si vous êtes mal prit il sera plus difficile de d'attérir votre kite. De plus cela peut occasionner des perturbation dans le vent proche des caps",
          onlyWind:[],
          imgURL:'frank.png'
        },
        {
          name:'Dune-du-Nord',
          type: 'mer',
          profond: true,
          latitude:47.4264000,
          longitude:-61.8674200,
          offAngle:323,
          infoPosition:"La Dune du Nord se situe sur la plage de l'Hopital elle s'étend jusqu'à la Pointe-Aux-Loups, on peut y allez en auto par les chemin de terre/sable (attention risque de restez bloqué) Il n'y a pas d'endroit spécifique. Toutefois, il y a certain parking et accès aménégés",
          infoSpot:"Le spot est profond et en mer. Toutefois il n'y a pas de grande particularité, les vagues de ce côté sont habituellement plus grosse mais plus grosse mais plus chaotique (petite période)",
          infoLancement: "Choisissez votre spot, éviter les petits cailloux et les foins de Dune",
          attention:"Attention courant parfois puissant, soyez toujours accompagnés. Il y a souvent des nid de pluviers siffleur d'identifiés faites attention de ne pas rentrer dans les zones sécurisés",
          onlyWind:[], 
          imgURL:'ddn.jpg'
        },
        {
          name:"L'Anse-aux-Baleiniers",
          type: 'mer',
          profond: true,
          latitude:47.4189100,
          longitude:-61.8929700,
          offAngle:358,
          infoPosition:"L'Anse-aux-Baleinier se situe sur la plage de l'Hopital  elle constitue la petite Anse. Le parking est bien aménagé et quelques petite boutiques et restaurants y sont près. Prenez une bonne tite Bud au Gabier après une grosse session",
          infoSpot:"Le spot est profond et en mer. Toutefois il n'y a pas de grande particularité, les vagues de ce côté sont habituellement plus grosse mais plus chaotique (petite période)",
          infoLancement: "À côté du stationnement, il y a un beau spot en gazon idéal pour mettre et gonflez vos kites, une fois dans les airs vous n'avez qu'à traverser la dune pour être dans la mer",
          attention:"Attention courant parfois puissant, soyez toujours accompagnés. Il y a souvent des nid de pluviers siffleur d'identifiés faites attention de ne pas rentrer dans les zones sécurisés",
          onlyWind:[], 
          imgURL:'aab.jpg'
        },
        {
          name:"Corfu",
          type: 'mer',
          profond: true,
          latitude:47.3478900,
          longitude:-61.9502900,
          offAngle:263.6,
          infoPosition:"Le Corfu se situe sur la plage du Corfu (Nom d'un bateau échoué).Le parking est bien aménagé et la fameuse microbrasserie Abri de la Tempête y siège comme voisir. Prenez une bonne Écume pour fêter un session de Kite inoubliable",
          infoSpot:"Le spot est profond et en mer. Toutefois il n'y a pas de grande particularité, les vagues de ce côté sont habituellement plus grosse mais plus chaotique (petite période). De plus il est parfait pour un downWind vers la Dune de l'Ouest",
          infoLancement: "Le lancement se fait sur la plage",
          attention:"Attention à l'amophile (foins de dune), attention de ne pas être poussé sur le bord près de l'épave du Corfu (Rouillé et coupant). Aussi les chiens sont accepté sur cette plage, faites attentions aux p'tites bêtes attachante",
          onlyWind:[], 
          imgURL:'corfu.jpg'
        },
        {
          name:"L'étang à Fernand",
          type: 'lagune',
          profond: true,
          latitude:47.36216,
          longitude:-61.95948,
          offAngle:344,
          infoPosition:"L'Étang à Fernand se situe à l'Étang-du-nord en bord de mer. Il n'y a pas de parking aménagé, respecter les voisins ",
          infoSpot:"Le spot est le spot WakeStyle par excellence, il est petit et très flat, de plus des module y sont souvent installés. Toutefois il se surcharge rapidement (5-6 riders max)",
          infoLancement: "Gonglez votre kite sur la plage et ensuite remontez à l'étang. Il y a un spot de gazon mais c'est un terrain privé et par respect éviter d'y aller (surtout pas avec votre véhicule).",
          attention:"Attention fils électrique, et bien gérer les gros saut pour ne pas sortir de l'étang",
          onlyWind:['sideOff','offShore'], 
          imgURL:'fernand.jpg'
        }
      ]
       
    },
    {
      id: 1,
      name:'Havre-aux-Maisons',
      spot: [
        {
          name:'Petite-Baie',
          type: 'lagune',
          profond:false,
          latitude:47.401334, 
          longitude:-61.828003,
          offAngle:28.7,
          infoPosition:"Le spot se situe près de la 199 sur la poiont à Havre-Aux-Maison.Le spot est juste après l'auberge de la Petite-Baie. Il y a une petite entré tracé dans le foins long.(Foins sécuriataire pour les kites)",
          infoSpot:"Le spot est débutant puisqu'il n'est pas trop profond, toutefois le fond est vaseux, et les lancement sont plus risqués, de plus le spot est petit donc peut facilement devenir surchargé.",
          infoLancement:"L'espace de lancement est assez restreint, de plus il y a des bateau qui sont ammarés proches soyez vigilant",
          attention:'Attention aux lignes électrique, à la route assez proche, aux maison, aux quais et aux bateaux amarré',
          onlyWind:[], 
          imgURL:'petiteBaie.jpg'
        },
        {
          name:'Pont du detroit Ouest',
          type: 'lagune',
          profond: false,
          latitude:47.489242, 
          longitude:-61.7487292,
          offAngle:227.4,
          infoPosition:"Le spot se situe après le pont du détroit (Entre Havre-aux-Maisons et Pointe-aux-Loups) Côté Ouest, stationnez-vous sur le bord de route et s'assurant que le véhicule soit complètement sur le gravier et pas l'asphalte",
          infoSpot:"Le spot est parfait pour les débutant, car il n'est pas profond, bel espace de lancement. Selon la direction du vent le côté Ouest peut-être prévilégié au côté Est ou vice versa.Le côté Ouest est plus petit donc plus de surcharge rapidement",
          infoLancement:'Les lancements se font habituellement sur la petite partie marécageuse, à marée basse les spot est sec, toutefois à marée haute, le spot de lancement peut être humide ou mouillé. Il y a des sections de gazon pour le lancement. ',
          attention:"Attention aux fils électrique, et à l'ampophile (foins de dune car il peuvent percé vos kites)",
          onlyWind:[], 
          imgURL:'detroit.jpg'
        },
        {
          name:'Pont du detroit Est',
          type: 'lagune',
          profond: false, 
          latitude:47.488808, 
          longitude:-61.746841,
          offAngle:122.1,
          infoPosition:"Le spot se situe après le pont du détroit (Entre Havre-aux-Maisons et Pointe-aux-Loups) Côté Est, stationnez-vous sur le bord de route et s'assurant que le véhicule soit complètement sur le gravier et pas l'asphalte",
          infoSpot:"Le spot est parfait pour les débutant, car il n'est pas profond(pour la majorité de la lagune) Selon la direction du vent le côté Est peut-être prévilégié au côté Ouest ou vice versa.Le côté Ouest est un des spot les plus populaire aux iles car avec les bons vents il devient super flat",
          infoLancement:'Les lancements se font habituellement sur la petite plage, toutefois à marée haute elle devient très petite ',
          attention:"Attention aux fils électrique(ils sont très proche pour le lancement), et à l'ampophile (foins de dune car il peuvent percé vos kites)",
          onlyWind:[], 
          imgURL:'detroit.jpg'
        },
        {
          name:'Pont du detroit mer',
          type: 'mer',
          profond: true, 
          latitude:47.4940000, 
          longitude:-61.7492700,
          offAngle:303,
          infoPosition:"Le spot se situe après le pont du détroit (Entre Havre-aux-Maisons et Pointe-aux-Loups) côté mer, il y a un stationnement amménagé.",
          infoSpot:"Le spot est profond et en mer. Toutefois il n'y a pas de grande particularité, les vagues de ce côté sont habituellement plus grosse mais plus chaotique (petite période). La plage s'étend sur une très grande distance et peut y être accédé à plusieurs endroits",
          infoLancement:'Les lancements se font habituellement sur la plage',
          attention:"Attention aux courant ils peuvent être fort et à l'ampophile (foin de dune car ils peuvent percer vos kites)",
          onlyWind:[], 
          imgURL:'pal.jpg'
        },
        {
          name:'Pointes-aux-Loups mer',
          type: 'mer',
          profond: true, 
          latitude:47.5395300,
          longitude:-61.6907600,
          offAngle:314,
          infoPosition:"Le spot se situe après la Pointe-Aux-Loups et il s'étend tout le long de la plage jusqu'à Grosse-Île. Si vous stationner en bord de route assurez vous que vous roue soit complètement sur la gravel et pas sur l'asphalte.",
          infoSpot:"Le spot est profond et en mer. Toutefois il n'y a pas de grande particularité, les vagues de ce côté sont habituellement plus grosse mais plus chaotique (petite période). La plage s'étend sur une très grande distance et peut y être accédé à plusieurs endroits. Les accès par les dunes doivent se faire dans les chemin déjà tracés.",
          infoLancement:'Les lancements se font habituellement sur la plage',
          attention:"Attention aux courant ils peuvent être fort et à l'ampophile (foin de dune car ils peuvent percer vos kites)",
          onlyWind:[], 
          imgURL:'palmer.jpg'
        },
        {
          name:'Éolienne Lagune',
          type: 'lagune',
          profond: false, 
          latitude:47.4846400,
          longitude:-61.7188000,
          offAngle:343,
          infoPosition:"Le spot se situe après l'éolienne, juste après vous tourner dans un petit chemin de gravel/sable (ou gravaille) et vous continuer jusqu'à ce que vous arrivez à un stationnement avec des escalier en bois. De là, le spot se trouve de l'autre côté des dunes vers la lagune. Il y a un petit chemin de tracer pour vous y rendre",
          infoSpot:"Le spot idéal pour les débutant, il est peu profond, peu achalandé, et très sécuritaire, selon Takata Kites il s'agit du meilleur spot pour apprendre aux îles (quand le vent est favorable). Si le vents est en mauvaise direction au pont du détroit, il sera mieux ici",
          infoLancement:"Les lancements se font habituellement sur la petite plage de lagune, comme au pont du détroit, si la marée est haute, l'espace de lancement est limité",
          attention:"Attention à l'ampophile (foin de dune car ils peuvent percer vos kites), C'est le spot le plus sécuritaire des îles",
          onlyWind:[], 
          imgURL:'eolienne.jpg'
        },
        {
          name:'Éolienne Mer',
          type: 'mer',
          profond: true, 
          latitude:47.4817500,
          longitude:-61.7171900,
          offAngle:131,
          infoPosition:"Le spot se situe après l'éolienne, juste après vous tourner dans un petit chemin de gravel/sable (ou gravaille) et vous continuer jusqu'à ce que vous arrivez à un stationnement avec des escalier en bois. De là, le spot s'accède par l'escaliers et le petit chemin dans les Dunes",
          infoSpot:"Le spot est profond et en mer. Toutefois il n'y a pas de grande particularité, les vagues de ce côté sont habituellement plus belle(longue période). La plage s'étend sur une très grande distance. Ne vous surprenez pas si vous croisez des nudistes la plage et les dunes peuvent en cacher quelques uns, vous serez peut-être observé par des Lous-Marin aussi!",
          infoLancement:'Les lancements se font habituellement sur la plage',
          attention:"Attention à l'ampophile (foin de dune car ils peuvent percer vos kites)",
          onlyWind:[], 
          imgURL:'eolienne.jpg'
        },
        {
          name:'Plage du Pédalo',
          type: 'mer',
          profond: true, 
          latitude:47.3977800,
          longitude:-61.8434600,
          offAngle:119.5,
          infoPosition:"Le spot se situe près du pont de la Pointe en face de l'Auberge du Paradis Bleu (D'ailleur si vous y restez ce sera un spot accessible à pied pour vous). Il a un petit parking bien aménagé.",
          infoSpot:"Le spot est profond et en mer. Sa configuration fait en sorte que les vagues ne sont pas très grosse et cela peut donner lieu à des beaux flat. C'est un beau spot pour apprendre en mer. Passez à la pizza de la pointe juste à côté pour gouté à leur délicieuse Pizza aux fruits-de-mer",
          infoLancement:'Les lancements se font habituellement sur la plage',
          attention:"Attention à l'ampophile (foin de dune car ils peuvent percer vos kites) et les fils électrique, au pont et aux boués",
          onlyWind:[], 
          imgURL:'pointe.jpg'
        },
        {
          name:'La Pointe',
          type: 'Lagune',
          profond: true, 
          latitude:47.4033200,
          longitude:-61.8447700,
          offAngle:249,
          infoPosition:"Le spot se situe au bout du petit chemin juste avant le pont de la pointe (si on arrive du Cap-aux-Meules)Vous pouvez vous stationner sur le bord de la route",
          infoSpot:"Le spot est profond et en lagune.De plus, le fond est plein de grandes algues. Il demeure très beau au coucher de soleil et offre des conditions assez flat. Passez à la pizza de la pointe juste à côté pour gouté à leur délicieuse Pizza aux fruits-de-mer",
          infoLancement:'Les lancements se font habituellement sur des petite parcelle de gazons',
          attention:"Attention aux fils électrique et aux infrastructure avoisinante",
          onlyWind:[], 
          imgURL:'pointe.jpg'
        }
      ]  
    },
    {
      id: 2,
      name:'Havre-aux-Basques',
      spot: [
        {
          name:'Chaloupe',
          type: 'lagune',
          profond:true,
          latitude:47.290301, 
          longitude:-61.934259,
          offAngle:268.9,
          infoPosition:"Le spot se situe sur le Havre-aux-Basques, juste avant le petit pont (si vous arrivez du Cap-aux-Meules) il y a un petit stationnement. Voilà c'est là" ,
          infoSpot:'Bien que le spot soit près de fred Jomphe, il est un peu plus profond mais tout de même similaire. Si vous traverser la lagune au complet il y a un petit accès pour aller en mer! Par journée ensoleillé il y a un beau thermique',
          infoLancement:'Lancement se font sur le gazon habituellement',
          attention:'Attention aux fils électrique, aussi ne pas vous stationner sur le gazon, rester sur le gravier.',
          onlyWind:[], 
          imgURL:'chaloupe.jpg'
        },
        {
          name:'Fred-Jomphe',
          type: 'lagune',
          profond: false,
          latitude:47.278064, 
          longitude:-61.932049,
          offAngle:261.1,
          infoPosition:"Le spot se situe sur le Havre-aux-Basques, juste après le petit pont (si vous arrivez du Cap-aux-Meules) il y a un gros stationnement et il faut prendre un petit chemin pour y arriver. Voilà c'est là",
          infoSpot:'Le spot est débutant et peu profond (sauf si vous vous ramasser à la hauteur du pont), il est très achalandé et populaire pour les cours et les débutants',
          infoLancement:"Lancement se fait à deux endroits, soit sur le gazon devant le parking ou plus sur la pointe. Toutefois le gazon viens vite bouetteux, et la pointe est plus risqué pour les trous dans le bord d'attaque",
          attention:'Attention au véhicule lors du lancement, fils électrique, et peut devenir Gusty près de la montagne',
          onlyWind:[], 
          imgURL:'fred.jpg'
        },
        {
          name:'Portage du Cap',
          type: 'mer',
          profond: true,
          latitude:47.2478100,
          longitude:-61.8937700,
          offAngle:42,
          infoPosition:'Le spot se situe à la fin du Havres-Aux-Basques et il y a un petit chemin pour y accéder',
          infoSpot:'Le spot est réputé pour de belles vagues lorsque les conditions y sont optimale',
          infoLancement:'Le lancement se fait habituellement sur la plage',
          attention:"Attention à l'amophile elle peut percer vos kites",
          onlyWind:[], 
          imgURL:'portage.jpg'
        },
        {
          name:'Plage de la Martinique',
          type: 'mer',
          profond: true,
          latitude:47.28501,
          longitude:-61.92630,
          offAngle:64.1,
          infoPosition:"Le spot se situe tout le long de la plage de la Martinique sur le Havres-aux-Basques et plusieurs parking et accèes sont aménagé le long des dunes.",
          infoSpot:'Les spot est profond et en mer, il est peu achalandé. Mais il peut donner de belles vagues lors des bonne conditions',
          infoLancement:"Le lancement se fait habituellement sur la plage",
          attention:"Attention aux baigneurs et à l'amophile elle peut percer vos kites",
          onlyWind:[], 
          imgURL:'martine.jpg'
        },
       
      ]  
   

    },
    {
      id: 3,
      name:'Havre-Aubert' ,
      spot: [
        {
          name:'Sandy Hook Lagune',
          type: 'lagune',
          profond:false,
          latitude:47.228253, 
          longitude:-61.825353,
          offAngle:327.8,
          infoPosition:'La lagune de Sandy Hook se trouve sur votre chemin quand vous vous rendez à la Plage Sandy Hook, elle est sur votre gauche un peu avant la plage ',
          infoSpot:"Un beau spot flat selon les conditions, et parfait pour aller au bout du banc quand le vent est sideOn/SideOff, toutefois à marée basse il y a des petit banc de sables qui se forme. Vous aurez aussi une belle transition vers la mer et pourrez admirer la Grave! Pour finir votre journée quoi de mieux qu'un arrêt pour prendre une tite frette sur la terrasse du café de la Grave",
          infoLancement:"Lancement sur la petite plage de lagune, ou sur le gazon de l'autre côté du chemin de gravel",
          attention:'Attention aux banc de sables à marée basse, et au gros courant arrivé au bout du banc',
          onlyWind:[], 
          imgURL:'sandy.jpg'
        },
        {
          name:'Sandy Hook Mer',
          type: 'mer',
          profond:true,
          latitude:47.2208900,
          longitude:-61.8316300,
          offAngle:140,
          infoPosition:'Le spot de Sandy Hook se situe sur sur la plage de Sandy Hook, il y a plusieurs stationnements aménagés pour la plage',
          infoSpot:"Le spot est profond et en mer, il peut y avoir de belles vague si les conditions y sont.De plus, vous pouvez vous rendre au bout du banc si le vent est favorable. Pour finir votre journée quoi de mieux qu'un arrêt pour prendre une tite frette sur la terrasse du café de la Grave",
          infoLancement:'Lancement se fait sur la plage',
          attention:"Attention à l'amophile",
          onlyWind:[], 
          imgURL:'sandy.jpg'
        },
        {
          name:"Dune de l'ouest",
          type: 'mer',
          profond: true,
          latitude:47.255655, 
          longitude:-62.007421,
          offAngle:314.2,
          infoPosition:"Le spot se situe sur la belle plage de la Dune de l'Ouest, il y a un petit chemin pour y accéder avec un stationnement et un accès aménagé",
          infoSpot:'Le spot est profond et en mer, il offre de belle vague. Il est aussi parfait pour des downwind  vers le Corfu, Étang à Fernand, Fred-Jomphe etc...',
          infoLancement:'Lancement se fait sur la plage',
          attention:"Attention à l'amophile et au courant",
          onlyWind:[], 
          imgURL:'duneouest.jpg'
        },
        {
          name:'Pointe-aux-Cannot',
          type: 'lagune',
          profond: false,
          latitude:47.26642,
          longitude:-61.97771,
          offAngle:48,
          infoPosition:"Le spot se situe sur la lagune du Havre-aux-Basques, toutefois pour y accéder vous devrez faire le tour par le chemin des Cannot sur le Havre-Aubert",
          infoSpot:'Les spot est peu profond et en lagune, il est peu achalandé. La montagne peu parfois affecter le vent',
          infoLancement:"Le lancement se fait habituellement sur la plage",
          attention:"Attention  à l'amophile elle peut percer vos kites, millieux fragile et peu produire des bancs de sable à marée basse",
          onlyWind:[], 
          imgURL:'cannot.jpg'
        },
        {
          name:"L'anse-à-la-Cabane",
          type: 'mer',
          profond: true,
          latitude:47.2190000,
          longitude:-61.9886800,
          offAngle:208,
          infoPosition:"Le spot se situe prêt du Quai de HAvre-Aubert à l'anse à la Cabane, il a des stationnements d'aménagés pour cela",
          infoSpot:'"Le spot est profond et en mer, il peut y avoir de belles vague si les conditions y sont. Attention au Cap qui peut affecter le vent par turbulence',
          infoLancement:"Le lancement se fait habituellement sur la plage",
          attention:"Attention  à l'amophile elle peut percer vos kites.",
          onlyWind:[], 
          imgURL:'cabane.jpg'
        },
        {
          name:"Bassin",
          type: 'mer',
          profond: true,
          latitude:47.2227900,
          longitude:-61.9218300,
          offAngle:166,
          infoPosition:"Le spot se situe à Bassin HAvre-Aubert à l'anse à la Cabane, il a des stationnements d'aménagés pour cela",
          infoSpot:'"Le spot est profond et en mer, il peut y avoir de belles vague si les conditions y sont.',
          infoLancement:"Le lancement se fait habituellement sur la plage",
          attention:"Attention  à l'amophile elle peut percer vos kites et aux fils électrique et aux baigneurs.",
          onlyWind:[], 
          imgURL:'bassin.jpg' 
        }
      ]  
   
    },
    {
      id: 4,
      name:'Grosse-Île' ,
      spot: [
        {
          name:'Mine Seleine',
          type: 'lagune',
          profond:false,
          latitude:47.592677, 
          longitude:-61.593953,
          offAngle:123.2,
          infoPosition:"Juste avant d'arriver devant la Mine de Sel, il y a un petit chemin (avant le quai) et vous pouvez vous y stationner. Faites gaffe c'est un millieux fragile",
          infoSpot:'Le spot est peu profond et débutant, il peut devenir très flat! Prenez une ptit guedille homard poutine au Sea Shack Cap Dauphin en finissant votre belle session. ',
          infoLancement:'Lancement se fait sur une petit plage restreinte sur le bord de la lagune',
          attention:"Attention au fils électrique, quai de la mine, au chenal qui est plus profond et à l'amophile",
          onlyWind:[], 
          imgURL:'mine.jpg'
        },
        {
          name:'Quai Grosse-Île',
          type: 'mer',
          profond:true,
          latitude:47.6249300, 
          longitude:-61.5090200,
          offAngle:24,
          infoPosition:"Le spot se situe à côté du Quai de la Grosse-Île sur la plage",
          infoSpot:'Le spot est profond et en mer! Prenez une ptit guedille homard poutine au Sea Shack Cap Dauphin en finissant votre belle session. ',
          infoLancement:'Lancement se fait sur la plage',
          attention:"Attention au fils électrique, quai  de Grosse-Île et à l'amophile",
          onlyWind:[], 
          imgURL:'grosseiles.jpg'
        },
        {
          name:"Pointe-de-l'est",
          type: 'mer',
          profond: true,
          latitude:47.6207800,
          longitude:-61.3924000,
          offAngle:69,
          infoPosition:"Le spot offre des conditions unique, toutefois, il est très éloigné et nécessite 2-3 heures de marche dans les sentier, c'est parfait pour un camping-kiting trip!",
          infoSpot:'Belle vagues, beau vent et eau turquoise',
          infoLancement:'Lancement sur la plage',
          attention:"Attention courant très fort, et à l'amophile",
          onlyWind:[], 
          imgURL:'pointeest.jpg'
        }
      ]  
   
    },
    {
      id: 5,
      name:'Grande-Entrée',
      spot: [
        {
          name:'Old Harry',
          type: 'mer',
          profond:true,
          latitude:47.545350, 
          longitude:-61.548428,
          offAngle:90,
          infoPosition:'Le spot se situe sur la fameuse plage de Old Harry, attention le parking est payant',
          infoSpot:'Spot profond et en mer. Belles vagues selon le vent.',
          infoLancement:'Lancement se fait habituellement sur la plage',
          attention:'Attention au courant et aux baigneurs',
          onlyWind:[], 
          imgURL:'oldharry.jpg'
        },
        {
          name:'Pointe Grande-Entrée',
          type: 'mer',
          profond:true,
          latitude:47.5482000,
          longitude:-61.5599700,
          offAngle:269,
          infoPosition:'Le spot se situe sur au bout de la Grande-Entré',
          infoSpot:'Spot profond et en mer. Belles vagues selon le vent.',
          infoLancement:'Lancement se fait habituellement sur la plage',
          attention:'Attention au courant',
          onlyWind:[], 
          imgURL:'grandeentre.jpg'
        },
        
      ]  
     
    },
   
  ]
}