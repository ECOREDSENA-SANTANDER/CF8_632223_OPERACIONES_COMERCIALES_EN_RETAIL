export default {
  global: {
    componenteFormativo: 'Protocolos de cierre de caja',
    descripcionCurso:
      'A través de este componente de formación se pretende instruir para realizar el cierre de caja y entrega del puesto de pago a la hora de terminar un turno, teniendo en cuenta que se deben hacer entrega de dinero y soportes de todas la transacciones u operaciones que haya tenido durante el día y para los cuales hay ciertos protocolos a seguir.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Cierre de la operación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Procedimiento técnico',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Clasificar efectivo y medios de pago',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Arqueo de caja y entrega del puesto de trabajo',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Arqueo de caja y entrega del puesto de trabajo',
      referencia:
        'Arenal, C. (2019). Operaciones de caja en la venta. UF0035. Editorial Tutor Formación.',
      tipo: 'Libro',
      link:
        'https://www.editorialelearning.com/catalogo/media/iverve/uploadpdf/1525950786_UF0035_demo.pdf',
    },
    {
      tema: 'Arqueo de caja y entrega del puesto de trabajo',
      referencia: 'Martínez, A. (1984). Contabilidad arqueo caja. SENA.',
      tipo: 'Libro',
      link: 'https://repositorio.sena.edu.co/handle/11404/626',
    },
    {
      tema: 'Clasificar efectivo y medios de pago',
      referencia:
        'Somos Bold. (2020). ¿Cómo verificar la autenticidad de una tarjeta de crédito? [video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/GD-ook_LYAo',
    },
  ],
  glosario: [
    {
      termino: 'Transacción rechazada',
      significado:
        'Usted deposita un cheque emitido para usted, pero la persona que lo libró no tiene fondos suficientes para cubrirlo. En este caso, si ya se le acreditó el depósito se debitará de su cuenta, ya que no había fondos suficientes.',
    },
    {
      termino: 'Transacción efectiva',
      significado:
        'Una transacción se hace efectiva una vez que se ha acreditado o debitado de una cuenta con éxito.',
    },
    {
      termino: 'Tarjeta débito',
      significado:
        'Al igual que la tarjeta de crédito es un medio que permite realizar pagos sin tener dinero en efectivo. La diferencia es que con la tarjeta débito el cargo en la cuenta se produce inmediatamente, con lo que si no existe disponible el pago no se podrá realizar. Estas tarjetas también permiten retirar dinero en efectivo en los cajeros automáticos, aunque normalmente con comisiones si no se utiliza la red propia de la tarjeta.',
    },
    {
      termino: 'Tarjeta de crédito',
      significado:
        'Instrumento que permite realizar pagos sin tener dinero en efectivo. El cargo en la cuenta se produce, por lo general, al final del mes. También se puede trasladar el pago más allá de ese momento, pero esta operación conlleva el pago de intereses. Estas tarjetas también permiten retirar dinero en efectivo en los cajeros automáticos, aunque hay que pagar comisiones.',
    },
    {
      termino: 'Saldo disponible',
      significado:
        'Es el dinero en su cuenta de ahorros o cuenta corriente que está actualmente a su disposición para hacer compras, extracciones, etc. Este saldo se actualiza durante el día con las transacciones que realice.',
    },
    {
      termino: 'Reembolso de caja menor',
      significado:
        'Es el soporte del pago de los gastos que se han efectuado en pequeñas cantidades por conceptos tales como: comidas, pasajes, papelería, fotocopias, etc., estos pagos deben contar con las facturas o documentos equivalentes para su verificación.',
    },
    {
      termino: 'Marca de agua',
      significado:
        'Es el proceso de superponer un logo o un texto sobre un documento o un archivo de imagen y es un proceso importante en cuanto a la protección de los derechos de autor y a la comercialización de obras digitales.',
    },
    {
      termino: 'Legalización',
      significado:
        'Documento mediante el cual se formaliza los gastos realizados con cargo al anticipo concedido y se reintegran los recursos no gastados.',
    },
    {
      termino: 'Firma y fibrillas invisibles',
      significado:
        'Son pares de colores (químicamente distintos) que apenas se diferencian bajo una determinada fuente de iluminación, pero que muestran un claro contraste de color si se observan bajo otra distinta o a través de un filtro, por lo general, un filtro rojo.',
    },
    {
      termino: 'Débito',
      significado:
        'Cuando una transacción se debita en su cuenta aparece como una transacción negativa (–) y se resta del saldo de su cuenta corriente vinculada, a diferencia de un crédito, que aparece como una transacción positiva (+) y se agrega a su saldo. Un ejemplo de débito en su cuenta corriente es una compra con tarjeta débito en un comercio.',
    },
    {
      termino: 'Crédito',
      significado:
        'Cuando una transacción se acredita en su cuenta aparece como una transacción positiva (+) y se agrega a su saldo (a diferencia de un débito, que aparece como una transacción negativa (-) y se resta de su saldo). Un ejemplo de crédito sería el dinero en efectivo que depositó.',
    },
    {
      termino: 'Cajero automático',
      significado:
        'Máquina sumadora para uso de comerciantes que llena diversos cometidos, pues indica el importe de la compra al cliente, imprime un cupón justificativo del gasto, inscribe y suma el importe de las ventas, dificulta los desfalcos y permite guardar momentáneamente el dinero.',
    },
    {
      termino: 'Cajero',
      significado:
        'Persona responsable de la caja en el punto de venta de un establecimiento comercial. Es quien se encarga de cuadrar los ingresos y egresos de caja, logrando que al cierre de esta, todo esté cuadrado.',
    },
    {
      termino: 'Caja registradora',
      significado:
        'Máquina sumadora para uso de comerciantes que llena diversos cometidos, pues indica el importe de la compra al cliente, imprime un cupón justificativo del gasto, inscribe y suma el importe de las ventas, dificulta los desfalcos y permite guardar momentáneamente el dinero.',
    },
    {
      termino: 'Arqueo de caja',
      significado:
        'Recontar las transacciones de dinero (pagos en efectivo, tarjetas débito, crédito o documentos de valor), en un período estimado de tiempo, que por lo general es al final del día, justo cuando el establecimiento comercial cierra sus puertas al público.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arenal, C. (2019). Operaciones de caja en la venta. UF0035. Editorial Tutor Formación.',
      link:
        'https://www.editorialelearning.com/catalogo/media/iverve/uploadpdf/1525950786_UF0035_demo.pdf',
    },
    {
      referencia: 'Negrete, P. (s.f.) Manual procedimiento de pagos. Scribd.',
      link: 'https://es.scribd.com/doc/42683576/Manual-Procedimiento-de-Pagos',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Esperanza Cardona Grisales',
          cargo: 'Instructora',
          centro:
            'Centro de Gestión Tecnológica de Servicios CGTS - Regional Valle',
        },
        {
          nombre: 'Jaime Pérez Posada',
          cargo: 'Instructor',
          centro: 'Comercio - Regional Antioquia',
        },
        {
          nombre: 'Samuel Pinilla Hurtado',
          cargo: 'Instructor',
          centro: 'Comercio - Regional Antioquia',
        },
        {
          nombre: 'Zvi Daniel Grosman Landáez',
          cargo: 'Diseñador instruccional',
          centro: 'Centro Agropecuario La Granja - Regional Tolima',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora metodológica y pedagógica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Diseñadora y evaluadora instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Carolina Jiménez Suescún',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julian Fernando Vanegas Vega',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar Gonzalez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validador de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
