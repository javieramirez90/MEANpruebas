// import { mongoose } from 'mongoose';
// import { Program } from '../models/Program';

const mongoose = require('mongoose');
const Program = require('../models/program');

const dbEjecutivo = 'mean-project-3';
mongoose.connect(`mongodb://localhost/${dbEjecutivo}`);

// mongodb://localhost:27017/mean-project-3

const programsITAM = [
  {
    typee: 'diplomado',
    school: 'ITAM',
    name: 'HERRAMIENTAS DE MINERIA DE DATOS PARA SOPORTE EN LA TOMA DE DECISIONES',
    initDate: 10-08-2018,
    endDate: 16-01-2019,
    schedule: 'lunes de 19:00 a 22:00 h. y miércoles de 19:00 a 22:00 h.',
    modules: 3,
    hours: 120,
    registrationCost: 7500,
    moduleCost: 15300
  },
  {
    typee: 'diplomado',
    school: 'ITAM',
    name: 'FINANZAS CORPORATIVAS',
    initDate: 13/08/2018,
    endDate: 08/07/2019,
    schedule: 'lunes de 16:00 a 21:00 h.',
    modules: 6,
    hours: 144,
    registrationCost: 8000,
    moduleCost: 12900
  },
  {
    typee: 'diplomado',
    school: 'ITAM',
    name: 'ESTADISTICA APLICADA',
    initDate: 04/09/2018,
    endDate: 09/07/2019,
    schedule: 'martes de 19:00 a 22:00 h. y jueves de 19:00 a 22:00 h.',
    modules: 7,
    hours: 231,
    registrationCost: 7900,
    moduleCost: 11900
  },
  {
    typee: 'diplomado',
    school: 'ITAM',
    name: 'SEGUROS',
    initDate: 05/10/2018,
    endDate: 06/09/2019,
    schedule: 'viernes de 19:00 a 22:00 h. y sábado de 09:00 a 12:00 h.',
    modules: 7,
    hours: 231,
    registrationCost: 7900,
    moduleCost: 11600
  },
  {
    typee: 'diplomado',
    school: 'ITAM',
    name: 'DESARROLLO DE HABILIDADES GERENCIALES',
    initDate: 12/11/2018,
    endDate: 26/08/2019,
    schedule: 'lunes de 17:00 a 22:00 h.',
    modules: 6,
    hours: 180,
    registrationCost: 8000,
    moduleCost: 11900
  },
  {
    typee: 'curso',
    school: 'ITAM',
    name: 'SISTEMA DE INDICADORES',
    initDate: 13/08/2018,
    endDate: 16/08/2018,
    schedule: 'Lunes a Jueves de 17:00 a 21:00 h.',
    modules: 0,
    hours: 16,
    registrationCost: 0,
    moduleCost: 9744
  },
  {
    typee: 'curso',
    school: 'ITAM',
    name: 'FINANZAS PARA EJECUTIVOS NO FINANCIEROS',
    initDate: 03/09/2018,
    endDate: 13/09/2018,
    schedule: 'lunes de 07:00 a 10:00 h. miércoles de 07:00 a 10:00 h. y jueves de 07:00 a 10:00 h.',
    modules: 0,
    hours: 15,
    registrationCost: 0,
    moduleCost: 9396
  },
  {
    typee: 'curso',
    school: 'ITAM',
    name: 'CREACION DE PRODUCTOS DIGITALES CON METODOS LEAN, AGILES Y CENTRADOS EN LA EXPERIENCIA',
    initDate: 03/10/2018,
    endDate: 24/10/2018,
    schedule: 'miércoles de 16:00 a 21:00 h.',
    modules: 0,
    hours: 20,
    registrationCost: 0,
    moduleCost: 11136
  },
  {
    typee: 'curso',
    school: 'ITAM',
    name: 'EFECTIVIDAD ORGANIZACIONAL',
    initDate: 22/10/2018,
    endDate: 12/11/2018,
    schedule: 'lunes de 17:00 a 22:00 h.',
    modules: 0,
    hours: 20,
    registrationCost: 0,
    moduleCost: 10672
  },
  {
    typee: 'curso',
    school: 'ITAM',
    name: 'TALLER DE REDACCION EJECUTIVA Y PROFESIONAL',
    initDate: 05/11/2018,
    endDate: 16/11/2018,
    schedule: 'lunes a viernes de 07:00 a 10:00 h.',
    modules: 0,
    hours: 30,
    registrationCost: 0,
    moduleCost: 12644
  }
]

Program.create(programsITAM)
.then(program => {
  console.log(`Created ${program.length} programs`)
  mongoose.connection.close()
})

const programsTEC = [
  {
    typee: 'diplomado',
    school: 'ITESM',
    name: 'HERRAMIENTAS DE MINERIA DE DATOS PARA SOPORTE EN LA TOMA DE DECISIONES',
    initDate: 10-08-2018,
    endDate: 16-01-2019,
    schedule: 'lunes de 19:00 a 22:00 h. y miércoles de 19:00 a 22:00 h.',
    modules: 3,
    hours: 120,
    registrationCost: 7500,
    moduleCost: 15300
  },
  {
    typee: 'diplomado',
    school: 'ITESM',
    name: 'FINANZAS CORPORATIVAS',
    initDate: 13/08/2018,
    endDate: 08/07/2019,
    schedule: 'lunes de 16:00 a 21:00 h.',
    modules: 6,
    hours: 144,
    registrationCost: 8000,
    moduleCost: 12900
  },
  {
    typee: 'diplomado',
    school: 'ITESM',
    name: 'ESTADISTICA APLICADA',
    initDate: 04/09/2018,
    endDate: 09/07/2019,
    schedule: 'martes de 19:00 a 22:00 h. y jueves de 19:00 a 22:00 h.',
    modules: 7,
    hours: 231,
    registrationCost: 7900,
    moduleCost: 11900
  },
  {
    typee: 'diplomado',
    school: 'ITESM',
    name: 'SEGUROS',
    initDate: 05/10/2018,
    endDate: 06/09/2019,
    schedule: 'viernes de 19:00 a 22:00 h. y sábado de 09:00 a 12:00 h.',
    modules: 7,
    hours: 231,
    registrationCost: 7900,
    moduleCost: 11600
  },
  {
    typee: 'diplomado',
    school: 'ITESM',
    name: 'DESARROLLO DE HABILIDADES GERENCIALES',
    initDate: 12/11/2018,
    endDate: 26/08/2019,
    schedule: 'lunes de 17:00 a 22:00 h.',
    modules: 6,
    hours: 180,
    registrationCost: 8000,
    moduleCost: 11900
  },
  {
    typee: 'curso',
    school: 'ITESM',
    name: 'SISTEMA DE INDICADORES',
    initDate: 13/08/2018,
    endDate: 16/08/2018,
    schedule: 'Lunes a Jueves de 17:00 a 21:00 h.',
    modules: 0,
    hours: 16,
    registrationCost: 0,
    moduleCost: 9744
  },
  {
    typee: 'curso',
    school: 'ITESM',
    name: 'FINANZAS PARA EJECUTIVOS NO FINANCIEROS',
    initDate: 03/09/2018,
    endDate: 13/09/2018,
    schedule: 'lunes de 07:00 a 10:00 h. miércoles de 07:00 a 10:00 h. y jueves de 07:00 a 10:00 h.',
    modules: 0,
    hours: 15,
    registrationCost: 0,
    moduleCost: 9396
  },
  {
    typee: 'curso',
    school: 'ITESM',
    name: 'CREACION DE PRODUCTOS DIGITALES CON METODOS LEAN, AGILES Y CENTRADOS EN LA EXPERIENCIA',
    initDate: 03/10/2018,
    endDate: 24/10/2018,
    schedule: 'miércoles de 16:00 a 21:00 h.',
    modules: 0,
    hours: 20,
    registrationCost: 0,
    moduleCost: 11136
  },
  {
    typee: 'curso',
    school: 'ITESM',
    name: 'EFECTIVIDAD ORGANIZACIONAL',
    initDate: 22/10/2018,
    endDate: 12/11/2018,
    schedule: 'lunes de 17:00 a 22:00 h.',
    modules: 0,
    hours: 20,
    registrationCost: 0,
    moduleCost: 10672
  },
  {
    typee: 'curso',
    school: 'ITESM',
    name: 'TALLER DE REDACCION EJECUTIVA Y PROFESIONAL',
    initDate: 05/11/2018,
    endDate: 16/11/2018,
    schedule: 'lunes a viernes de 07:00 a 10:00 h.',
    modules: 0,
    hours: 30,
    registrationCost: 0,
    moduleCost: 12644
  }
]

Program.create(programsTEC)
.then(program => {
  console.log(`Created ${program.length} programs`)
  mongoose.connection.close()
})