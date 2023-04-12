import './style.css'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { CardMedia } from '@mui/material'
import cgt from '../../static/images/cgt.png'
import todo from '../../static/images/todo.png'
import energia from '../../static/images/energia.jpg'
import peces from '../../static/images/peces.jpg'
import camping from '../../static/images/camping.jpg'
import hormigon from '../../static/images/hormigon.jpg'
import tunel from '../../static/images/tunel.jpg'

const ProyectsList = [
  {
    id: 1,
    title: 'Google Translate usando ChatGPT',
    description: 'Clon de Google Translate usando React y la api de ChatGPT para traducir textos identificando el idioma de origen a Inglés, Alemán o Castellano',
    photo: cgt
  },
  {
    id: 2,
    title: 'TodoList',
    description: 'Todo List con React y TypeScript',
    photo: todo
  },
  {
    id: 3,
    title: 'Gestor de ahorro de energía',
    description: 'Gestor de ahorro de energía usando React y TypeScript, con un diseño responsive, para una gran empresa de energía',
    photo: energia
  },
  {
    id: 4,
    title: 'Gestor de sensores de temperatura',
    description: 'Gestor de sensores de temperatura en piscifactorias usando React y TypeScript',
    photo: peces
  },
  {
    id: 5,
    title: 'Web Alquiler de Campings',
    description: 'Gestor de Alquiler de tiendas en campings usando React',
    photo: camping
  },
  {
    id: 6,
    title: 'Gestor de Albaranes en Obra',
    description: 'Gestor de Albaranes de pruebas en hormigon de Obra usando NodeJs y TypeScript',
    photo: hormigon
  },
  {
    id: 7,
    title: 'Gestor de datos en la construcción de túneles',
    description: 'Gestor de datos en la construcción de túneles usando NodeJs y TypeScript',
    photo: tunel
  }
]

export const Proyects = () => {
  return (
    <div className='proyects'>
        {ProyectsList.map((proyect) => (
            <Card sx={{ minWidth: 275 }} key={proyect.id}>
              <CardMedia
                sx={{ height: 140 }}
                image={proyect.photo}
                title={proyect.title}
              />
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  {proyect.title}
                </Typography>
              </CardContent>
            </Card>
        ))}
    </div>
  )
}
