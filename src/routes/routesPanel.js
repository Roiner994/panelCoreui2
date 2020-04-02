import { PREFIXPANEL } from "../constants";
import Home from "../modules/dashboard/Home";

const routesPanel = [
  // { path: '/', exact: true, name: 'Inicio' },
  {
    path: `${PREFIXPANEL}/dashboard`,
    exact: true,
    name: "Home",
    component: Home
  }
  // User
  //   { path: `${PREFIXPANEL}/users`, exact: true, name: 'Lista de Usuarios', component: UsersContainer },
  //   { path: `${PREFIXPANEL}/users/new`, exact: true, name: 'Nuevo Usuario', component: NewUserContainer },
  //   { path: `${PREFIXPANEL}/users/:id/edit`, exact: true, name: 'Editar Usuario', component: UserContainer },
  //   // Categories
  //   { path: `${PREFIXPANEL}/categories`, exact: true, name: 'Lista de Categorias', component:  CategoriesContainer},
  //   { path: `${PREFIXPANEL}/categories/new`, exact: true, name: 'Nueva Categoria', component: NewCategoryContainer },
  //   { path: `${PREFIXPANEL}/categories/:id/edit`, exact: true, name: 'Editar Categoria', component: CategoryContainer },

  //   // Products
  //   { path: `${PREFIXPANEL}/products`, exact: true, name: 'Lista de Productos', component:  ProductsContainer},
  //   { path: `${PREFIXPANEL}/products/new`, exact: true, name: 'Nuevo Producto', component: NewProductContainer },
  //   { path: `${PREFIXPANEL}/products/:id/edit`, exact: true, name: 'Editar Producto', component: ProductContainer },
];

export default routesPanel;
