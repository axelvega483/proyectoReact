import React from 'react'
import { Menu } from './Menu'
import { Outlet } from 'react-router-dom'

export const Carrito = () => {
  return (
    <div>
      <h1>Carrito</h1>
      <Outlet></Outlet>
    </div>
  )
}
