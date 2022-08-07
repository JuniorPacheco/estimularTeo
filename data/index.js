const data = [
    {   
        id:1,
        nombre: "Animales Domesticos",
        descripcion: "8 fichas en cartón 14cm x 10cm",
        precio: 20000,
        imagen: "/images/1.png",
        meses: 6,
        etiqueta: "+ 6 meses",
        tipo: "lenguaje"
    },
    {   
        id:2,
        nombre: "Medios de Transporte",
        descripcion: "8 fichas en cartón 14cm x 10cm",
        precio: 20000,
        imagen: "/images/2.png",
        meses: 6,
        etiqueta: "+ 6 meses",
        tipo: "lenguaje"
    },
    {   
        id:3,
        nombre: "Frutas",
        descripcion: "8 fichas en cartón 14cm x 10cm",
        precio: 20000,
        imagen: "/images/3.png",
        meses: 6,
        etiqueta: "+ 6 meses",
        tipo: "lenguaje"
    },
    {   
        id:4,
        nombre: "Animales domésticos y salvajes",
        descripcion: "20 flash cards 14cm x 10cm",
        precio: 26000,
        imagen: "/images/4.png",
        meses: 12,
        etiqueta: "+ 1 año",
        tipo: "lenguaje"
    },
    {   
        id:5,
        nombre: "Animales acuáticos",
        descripcion: "20 flash cards 14cm x 10cm",
        precio: 26000,
        imagen: "/images/5.png",
        meses: 12,
        etiqueta: "+ 1 año",
        tipo: "lenguaje"
    },
    {   
        id:6,
        nombre: "Animales domésticos, salvajes y acuáticos",
        descripcion: "40 flash cards 14cm x 10cm",
        precio: 44000,
        imagen: "/images/6.png",
        meses: 12,
        etiqueta: "+ 1 año",
        tipo: "combos"
    },
    {   
        id:7,
        nombre: "Medios de Transporte",
        descripcion: "20 flash cards 14cm x 10cm",
        precio: 26000,
        imagen: "/images/7.png",
        meses: 12,
        etiqueta: "+ 1 año",
        tipo: "lenguaje"
    },
    {   
        id:8,
        nombre: "Alimentos",
        descripcion: "20 flash cards 14cm x 10cm",
        precio: 26000,
        imagen: "/images/8.png",
        meses: 12,
        etiqueta: "+ 1 año",
        tipo: "lenguaje"
    },
    {   
        id:9,
        nombre: "Profesiones",
        descripcion: "16 flash cards 14cm x 10cm",
        precio: 26000,
        imagen: "/images/9.png",
        meses: 12,
        etiqueta: "+ 1 año",
        tipo: "lenguaje"
    },
    {   
        id:10,
        nombre: "Combo mediano de lenguaje",
        descripcion: "50 flash cards 9cm x 10cm",
        precio: 38000,
        imagen: "/images/10.png",
        meses: 18,
        etiqueta: "+ 18 meses",
        tipo: "combos"
    },
    {   
        id:11,
        nombre: "Combo de lenguaje",
        descripcion: "36 flash cards 9cm x 10cm y 36 dichas de nombres",
        precio: 37000,
        imagen: "/images/11.png",
        meses: 18,
        etiqueta: "+ 18 meses",
        tipo: "lenguaje"
    },
    {   
        id:12,
        nombre: "Crea historias con iman",
        descripcion: "80 fichas 5cm x 5cm",
        precio: 40000,
        imagen: "/images/12.png",
        meses: 24,
        etiqueta: "+ 2 años",
        tipo: "lecto_escritura"
    },
    {   
        id:13,
        nombre: "Loterias con iman - vocales",
        descripcion: "5 tableros con iman",
        precio: 37000,
        imagen: "/images/13.png",
        meses: 36,
        etiqueta: "+ 3 años",
        tipo: "lecto_escritura"
    },
    {   
        id:14,
        nombre: "Tablero con iman",
        descripcion: "20 acitividades 8 refuerzo positivo",
        precio: 38000,
        imagen: "/images/14.png",
        meses: 36,
        etiqueta: "+ 3 años",
        tipo: "habitos_rutinas"
    },
    {   
        id:15,
        nombre: "Loterias con iman",
        descripcion: "6 tableros",
        precio: 38000,
        imagen: "/images/15.png",
        meses: 24,
        etiqueta: "+ 2 años",
        tipo: "lenguaje"
    },
    {   
        id:19,
        nombre: "Loterias con iman",
        descripcion: "12 tableros",
        precio: 62000,
        imagen: "/images/15.png",
        meses: 24,
        etiqueta: "+ 2 años",
        tipo: "lenguaje"
    },
    {   
        id:16,
        nombre: "Opuestos",
        descripcion: "20 flash cards 14cm x 10cm",
        precio: 24000,
        imagen: "/images/16.png",
        meses: 24,
        etiqueta: "+ 2 años",
        tipo: "lenguaje"
    },
    {   
        id:17,
        nombre: "Partes del cuerpo y emociones",
        descripcion: "8 flash cards 14cm x 10cm, 9 fichas 9cm x 10cm y 10 fichas 5cm x 5cm",
        precio: 22000,
        imagen: "/images/17.png",
        meses: 18,
        etiqueta: "+ 18 meses",
        tipo: "lenguaje"
    },
    {   
        id:18,
        nombre: "Colores",
        descripcion: "10 flash cards 14cm x 10cm, 40 fichas 3cm x 3cm",
        precio: 22000,
        imagen: "/images/18.png",
        meses: 18,
        etiqueta: "+ 18 meses",
        tipo: "conceptos_basicos"
    },
    {   
        id:20,
        nombre: "Domino didactico",
        descripcion: "Fichas en cartón c/u",
        precio: 28000,
        imagen: "/images/20.png",
        meses: 24,
        etiqueta: "+ 2 años",
        tipo: "conceptos_basicos"
    },
    {   
        id:21,
        nombre: "Percepción visual",
        descripcion: "8 flash cards 14cm x 10cm + palitos de madera",
        precio: 20000,
        imagen: "/images/21.png",
        meses: 36,
        etiqueta: "+ 3 años",
        tipo: "conceptos_basicos"
    },
    {   
        id:22,
        nombre: "Percepción visual",
        descripcion: "8 flash cards 14cm x 10cm + cubos de madera",
        precio: 26000,
        imagen: "/images/22.png",
        meses: 48,
        etiqueta: "+ 4 años",
        tipo: "conceptos_basicos"
    },
    {   
        id:23,
        nombre: "Figuas geometricas",
        descripcion: "21 flash cards 9cm x 10cm",
        precio: 22000,
        imagen: "/images/23.png",
        meses: 24,
        etiqueta: "+ 2 años",
        tipo: "conceptos_basicos"
    },
    {   
        id:24,
        nombre: "Vocales",
        descripcion: "10 flash cards 14cm x 10cm + 30 fichas 5cm x 5cm",
        precio: 25000,
        imagen: "/images/24.png",
        meses: 36,
        etiqueta: "+ 3 años",
        tipo: "lecto_escritura"
    },
    {   
        id:25,
        nombre: "Abecedario - Imprenta",
        descripcion: "33 flash cards 14cm x 10cm + letras sueltas para armar cada palabra",
        precio: 38000,
        imagen: "/images/25.png",
        meses: 48,
        etiqueta: "+ 4 años",
        tipo: "lecto_escritura"
    },
    {   
        id:26,
        nombre: "Abecedario - Cursiva",
        descripcion: "31 flash cards 14cm x 10cm",
        precio: 38000,
        imagen: "/images/26.png",
        meses: 48,
        etiqueta: "+ 4 años",
        tipo: "lecto_escritura"
    },
    {   
        id:27,
        nombre: "Silabario + trabadas e inversas",
        descripcion: "55 flash cards 9cm x 10cm",
        precio: 38000,
        imagen: "/images/27.png",
        meses: 60,
        etiqueta: "+ 5 años",
        tipo: "lecto_escritura"
    },
    {   
        id:28,
        nombre: "Silabario",
        descripcion: "160 fichas 5cm x 5cm",
        precio: 34000,
        imagen: "/images/28.png",
        meses: 60,
        etiqueta: "+ 5 años",
        tipo: "lecto_escritura"
    },
    {   
        id:29,
        nombre: "Reconocimiento de fonemas",
        descripcion: "22 flash cards 14cm x 10cm",
        precio: 24000,
        imagen: "/images/29.png",
        meses: 60,
        etiqueta: "+ 5 años",
        tipo: "lecto_escritura"
    },
    {   
        id:30,
        nombre: "Lectura - Pictogramas",
        descripcion: "120 fichas 5cm x 5cm",
        precio: 24000,
        imagen: "/images/30.png",
        meses: 60,
        etiqueta: "+ 5 años",
        tipo: "lecto_escritura"
    },
    {   
        id:35,
        nombre: "Lectura - Pictogramas",
        descripcion: "240 fichas 5cm x 5cm",
        precio: 44000,
        imagen: "/images/30.png",
        meses: 60,
        etiqueta: "+ 5 años",
        tipo: "normal"
    },
    {   
        id:31,
        nombre: "Números",
        descripcion: "12 flash cards 14cm x 10cm",
        precio: 22000,
        imagen: "/images/31.png",
        meses: 24,
        etiqueta: "+ 2 años",
        tipo: "razonamiento_matematico"
    },
    {   
        id:32,
        nombre: "Cantidades",
        descripcion: "10 flash cards 14cm x 10cm",
        precio: 18000,
        imagen: "/images/32.png",
        meses: 24,
        etiqueta: "+ 2 años",
        tipo: "razonamiento_matematico"
    },
    {   
        id:33,
        nombre: "Combo números",
        descripcion: "22 flash cards 14cm x 10cm",
        precio: 32000,
        imagen: "/images/33.png",
        meses: 24,
        etiqueta: "+ 2 años",
        tipo: "razonamiento_matematico"
    },
]

export default data