import './style.css'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { CardMedia } from '@mui/material'

const ProyectsList = [
  {
    id: 1,
    title: 'Google Translate usando ChatGPT',
    description: 'Clon de Google Translate usando React y la api de ChatGPT para traducir textos identificando el idioma de origen a Inglés, Alemán o Castellano',
    photo: 'src/static/images/cgt.png'
  },
  {
    id: 2,
    title: 'TodoList',
    description: 'Todo List con React y TypeScript',
    photo: 'src/static/images/todo.png'
  },
  {
    id: 3,
    title: 'Gestor de ahorro de energía',
    description: 'Gestor de ahorro de energía usando React y TypeScript, con un diseño responsive, para una gran empresa de energía',
    photo: 'src/static/images/energia.jpg'
  },
  {
    id: 4,
    title: 'Gestor de sensores de temperatura',
    description: 'Gestor de sensores de temperatura en piscifactorias usando React y TypeScript',
    photo: 'src/static/images/peces.jpg'
  },
  {
    id: 5,
    title: 'Web Alquiler de Campings',
    description: 'Gestor de Alquiler de tiendas en campings usando React',
    photo: 'src/static/images/camping.jpg'
  },
  {
    id: 6,
    title: 'Gestor de Albaranes en Obra',
    description: 'Gestor de Albaranes de pruebas en hormigon de Obra usando NodeJs y TypeScript',
    photo: 'src/static/images/hormigon.jpg'
  },
  {
    id: 7,
    title: 'Gestor de datos en la construcción de túneles',
    description: 'Gestor de datos en la construcción de túneles usando NodeJs y TypeScript',
    photo: 'src/static/images/tunel.jpg'
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
