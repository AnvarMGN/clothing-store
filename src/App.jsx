
// import './App.css'
import '../public/style/style.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from './components/HomePage/HomePage';
import { ProductPage } from './components/ProductPage/ProductPage';
import { SinglePage } from './components/SinglePage/SinglePage';
import { CheckoutPage } from './components/CheckoutPage/CheckoutPage';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';
import { PathError } from './components/generalTemplateComponents/Error/PathError';


function App() {

  const routes = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/product",
      element: <ProductPage />,
    },
    {
      path: "/single_product",
      element: <SinglePage />,
    },
    {
      path: "/cart",
      element: <ShoppingCart />,
    },
    {
      path: "/checkout",
      element: <CheckoutPage />,
    },
    {
      path: "*",
      element: <PathError />,
    },
  ]
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

// Урок 8. Работа с API
// В финальном проекте вам необходимо применить все знания, которые вы получили на протяжении всего курса.

// Для выполнения задания вам потребуется вёрстка сайта Интернет-магазина из курсов по HTML/CSS: https://www.figma.com/file/SbfOi2i4S1pIs0G6uOLPCx/shop-(Copy)?type=design&node-id=0-1&mode=design&t=HqHf7Yort2ND3o3y-0

// Так как у вас уже есть готовая вёрстка, вам необходимо перевести проект на react.

// Функционал который необходим:

// 1. Все товары являются компонентами.
// 2. Разбить сайт на необходимые компоненты, чтобы исключить дублирование кода и чтобы можно было легче редактировать проект.
// 3. На странице каталога есть сортировка по размеру (S, XS, L, M) необходимо реализовать даный функционал, к какому именно размеру будет относиться тот или иной товар, не имеет значения.
// 4. Реализовать переключение между страницами с помощью Routing.
// 5. На странице корзины реализовать верный подсчет общей цены товаров (GRAND TOTAL $900) плюс реализовать возможность менять количество товара, это также должно влиять на цену товар (GRAND TOTAL $900).
