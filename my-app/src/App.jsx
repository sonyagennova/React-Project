import page from "page"
import { About } from "./components/homePageSections/AboutSection"
import { AllCategories } from "./components/homePageSections/AllCategories"
import { BookCategory } from "./components/homePageSections/BookCategory"
import { CategoriesPage } from "./components/otherPages/CategoriesPage"
import { FamousBooks } from "./components/homePageSections/FamousBooks"
import { Footer } from "./components/homePageSections/Footer"
import { Header } from "./components/homePageSections/Header"
import { topBooks } from "./props/topBooks"
import { Info } from "./components/homePageSections/InfoSection"
import { CategoryPage } from "./components/otherPages/CategoryPage"
import { Login } from "./components/otherPages/LoginPage"
import { RegisterPage } from "./components/otherPages/RegisterPage"
import { CreatePage } from "./components/otherPages/createPage"
import { ReadMore } from "./components/otherPages/ReadMoreINfo"
import { Route, Routes } from "react-router-dom"
import { HomePage } from "./components/homePageSections/homePage"
import { useContext, useState } from "react"


function App() {
    return (
      <>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
        <Route path="/categories" element={<CategoriesPage/>}/>
        <Route path="/category/:category" element={<CategoryPage/>}/>
        <Route path="/category/:category/:bookId" element={<CategoryPage />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/add" element={<CreatePage/>}/>
      </Routes>
  </>
  
    )

  }

export default App
