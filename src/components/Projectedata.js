const alldata  = [
    {
      id: 1,
      category: "SUV",
      name: "X5",
      build_in: "2022",
      brand: "BMW",
      price: 60000,
      discount_price: 57000,
      image: "https://cdn.motor1.com/images/mgl/1ZkqgW/s3/2023-bmw-x5.jpg",
    },
    {
      id: 2,
      category: "Sedan",
      name: "Model S",
      build_in: "2023",
      brand: "Tesla",
      price: 80000,
      image:
        "https://www.tesla.com/sites/default/files/images/support/Meet-Your-Tesla-Model-S.png",
    },
    {
      id: 3,
      category: "Truck",
      name: "F-150",
      build_in: "2023",
      brand: "Ford",
      price: 45000,
      discount_price: 43000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStsoMacQlM43LC48r8bnlpnYi0lAuVxX8j2Q&s",
    },
    {
      id: 4,
      category: "SUV",
      name: "Q7",
      build_in: "2022",
      brand: "Audi",
      price: 70000,
      discount_price: 68000,
      image:
        "https://imgd.aeplcdn.com/1200x900/n/cw/ec/22803/audi-q7-facelift-right-front-three-quarter4.jpeg?q=80",
    },
    {
      id: 5,
      category: "Sedan",
      name: "Camry",
      build_in: "2023",
      brand: "Toyota",
      price: 28000,
      image:
        "https://www.motortrend.com/uploads/sites/5/2020/07/2021-Toyota-Camry.jpg",
    },
    {
      id: 6,
      category: "SUV",
      name: "XC90",
      build_in: "2023",
      brand: "Volvo",
      price: 65000,
      image:
"https://www.topgear.com/sites/default/files/cars-car/image/2023/03/1%20Volvo%20XC90.jpg?w=1280&h=720"    },
    {
      id: 7,
      category: "Truck",
      name: "Silverado",
      build_in: "2022",
      brand: "Chevrolet",
      price: 42000,
      discount_price: 40000,
      image:
        "https://inv.assets.ansira.net/GM_VIVP/deg01/2024/CK10743/CK10743__2LT/GAZ_09Y_0ST_1SZ_2LT_2ST_3ST_4AA_4ST_5FC_5ST_6K5_6TT_7TT_8AZ_9AZ_A2X_A48_A50_A7E_AAK_AED_AEQ_AKO_AL0_ASV_AU3_AVI_AVJ_AXG_AXK_AY0_B1J_B30_BPH_BTM_BTV_BWN_C32_C49_C59_C5Z_CGN_CJ2_CTT_CXH_D07_D31_D75_DLF_DNS_DP6_E35_E63_EF7_ENL_EPH_F_F48_FHX_G80_GF4_GU5_H0Y_IOK_IVN_J24_J61_JBP_JHD_JL1_K05_K47_K4C_KA1_KC9_KI3_KI4_KL9_KSG_KW5_LZ0_MAH_MQC_MSL_N06_N10_N37_N57_NE1_NQH_NUB_NZZ_PCL_PCM_PDB_PED_PPW_PRF_PZ8_QK1_QT5_R3O_RD1_RFQ_RIK_RM7_RSR_SAF_SB7_SLM_SNR_SU4_SU7_T3U_T8Z_TDM_TQ5_U2K_U73_UBC_UBI_UBJ_UDV_UE1_UE4_UET_UEU_UF2_UG1_UGA_UH5_UHX_UHY_UJN_UK3_UKJ_UMN_UQA_URC_URD_UTJ_UVB_V8D_VB5_VK3_VRF_VRG_VRH_VRK_VRL_VRM_VRN_VRR_VSX_VT5_VT7_VV4_WMI_WMY_WPQ_X88_XCQ_YM8_Z7X_Z82gmds10.jpg",
    },
    {
      id: 8,
      category: "SUV",
      name: "Cayenne",
      build_in: "2022",
      brand: "Porsche",
      price: 90000,
      image:
        "https://di-uploads-pod15.dealerinspire.com/porscheminneapolis/uploads/2023/04/New-Porsche-Cayenne-GTS.png",
    },
    {
      id: 9,
      category: "Sedan",
      name: "E-Class",
      build_in: "2023",
      brand: "Mercedes-Benz",
      price: 70000,
      discount_price: 68000,
      image:
        "https://crdms.images.consumerreports.org/c_lfill,w_470,q_auto,f_auto/prod/cars/cr/model-years/16653-2024-mercedes-benz-e-class",
    },
    {
      id: 10,
      category: "Truck",
      name: "Ram 1500",
      build_in: "2023",
      brand: "Ram",
      price: 48000,
      image:
        "https://medias.fcacanada.ca/jellies/renditions/2024/800x510/CC24_DT6P98_2TH_PAU_APA_XXX_XXX_XXX.8f4eb7a250e45b87bab8b7e47262f47d.png",
    },
    {
      id: 11,
      category: "SUV",
      name: "Range Rover",
      build_in: "2022",
      brand: "Land Rover",
      price: 95000,
      discount_price: 92000,
      image: "https://jlr.scene7.com/is/image/jlr/L460_22MY_SV_001_GLHD_DX",
    },
    {
      id: 12,
      category: "Sedan",
      name: "3 Series",
      build_in: "2023",
      brand: "BMW",
      price: 50000,
      discount_price: 48000,
      image:
        "https://crdms.images.consumerreports.org/c_lfill,w_470,q_auto,f_auto/prod/cars/chrome/white/2024BMC110005_1280_01",
    },
    {
      id: 13,
      category: "Truck",
      name: "Tundra",
      build_in: "2022",
      brand: "Toyota",
      price: 46000,
      image:
        "https://www.bmw.in/content/dam/bmw/marketIN/bmw_in/all-models/3-series/gl/2023/navigation.png",
    },
    {
      id: 14,
      category: "SUV",
      name: "Pilot",
      build_in: "2023",
      brand: "Honda",
      price: 38000,
      discount_price: 36000,
      image:
        "https://vehicle-images.dealerinspire.com/244d-18003322/thumbnails/large/5FNYG1H42SB012635/0d9bc162085dfe1b2b3ad252b2abc41a.png",
    },
    {
      id: 15,
      category: "Sedan",
      name: "A4",
      build_in: "2022",
      brand: "Audi",
      price: 40000,
      image:
        "https://crdms.images.consumerreports.org/c_lfill,w_470,q_auto,f_auto/prod/cars/cr/model-years/15099-2023-audi-a4",
    },
    {
      id: 16,
      category: "SUV",
      name: "Tiguan",
      build_in: "2022",
      brand: "Volkswagen",
      price: 35000,
      discount_price: 34000,
      image:
        "https://amberdrive.lt/wp-content/uploads/2023/05/IMG_8734-1.jpg.webp",
    },
    {
      id: 17,
      category: "Truck",
      name: "Canyon",
      build_in: "2023",
      brand: "GMC",
      price: 41000,
      image:
        "https://cgi.gmc.com/mmgprod-us/dynres/prove/image.gen?i=2024/T4F43/T4F43__5SB/GBAgmds1.jpg&v=deg01&std=true&country=US&removeCat=&background=ffffff",
    },
    {
      id: 18,
      category: "Sedan",
      name: "Civic",
      build_in: "2022",
      brand: "Honda",
      price: 25000,
      image:
        "https://www.motortrend.com/files/664beab829c18800070e6f28/005-2025-honda-civic-hybrid.jpg?w=768&width=768&q=75&format=webp",
    },
    {
      id: 19,
      category: "SUV",
      name: "X3",
      build_in: "2023",
      brand: "BMW",
      price: 55000,
      image:
        "https://cache.bmwusa.com/cosy.arox?pov=walkaround&brand=WBBM&vehicle=24XQ&client=byoc&paint=P0300&fabric=FKHSW&sa=S01X8,S0255,S02TB,S0302,S0319,S03AG,S0420,S0423,S0430,S0431,S0459,S0481,S0493,S04K1,S04U0,S04UR,S0508,S0534,S0552,S05AC,S05AS,S05AV,S0676,S06AC,S06AK,S06C4,S06U2,S0775&angle=30",
    },
    {
      id: 20,
      category: "Truck",
      name: "Maverick",
      build_in: "2022",
      brand: "Ford",
      price: 25000,
      discount_price: 24000,
      image:
        "https://build.ford.com/dig/Ford/Maverick/2024/HD-TILE/Image%5B%7CFord%7CMaverick%7C2024%7C1%7C1.%7C300A.W8H.121.PM7..887.89B.SCC.BVJAH.D17AU.64T.T7R.FWD.999.58K.448.XLT.UCS.%5D/EXT/1/vehicle.png",
    },
  ];
  


export default alldata