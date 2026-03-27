import { Routes } from '@angular/router';
import { ListarEscuela } from './Componentes/Escuela/listar-escuela/listar-escuela';
import { GuardarEscuela } from './Componentes/Escuela/guardar-escuela/guardar-escuela';
import { EditarEscuela } from './Componentes/Escuela/editar-escuela/editar-escuela';
import { ListarProfesor } from './Componentes/Profesor/listar-profesor/listar-profesor';
import { GuardarProfesor } from './Componentes/Profesor/guardar-profesor/guardar-profesor';
import { EditarProfesor } from './Componentes/Profesor/editar-profesor/editar-profesor';

export const routes: Routes = [

    {
        path: 'listarE',
        component: ListarEscuela,
    },
    {
        path: 'guardarE',
        component: GuardarEscuela,
    },
    {
        path: 'editarE',
        component: EditarEscuela,
    },
    {
        path: 'listarP',
        component: ListarProfesor,
    },
    {
        path: 'guardarP',
        component: GuardarProfesor,
    },
    {
        path: 'editarP',
        component: EditarProfesor,
    }
];
