import { useState } from 'react'
import './App.css'
import { Counter } from './components/Counter/Counter'
import { ToggleButton } from './components/ToggleButton/ToggleButton'
import { TextBox } from './components/TextBox/TextBox'
import { ShowHide } from './components/ShowHide/ShowHide'
import { ChangeColor } from './components/ChangeColor/ChangeColor'
import { Count } from './components/Count/Count'
import { ClickButton } from './components/ClickButton/ClickButton'
import { Image } from './components/Image/Image'
import { CheckBox } from './components/CheckBox/CheckBox'
import { LikeButton } from './components/LikeButton/LikeButton'


export const App = () => {
  return (
    <>
      <Counter></Counter>

      <ToggleButton/>

      <TextBox/>

      <ShowHide/>

      <ChangeColor/>

      <Count/>

      <ClickButton/>

      <Image/>

      <CheckBox/>

      <LikeButton/>

    </>
  )
}


