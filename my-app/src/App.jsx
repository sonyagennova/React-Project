import page from "page"
import { About } from "./components/homePageSections/AboutSection"
import { AllCategories } from "./components/homePageSections/AllCategories"
import { BookCategory } from "./components/homePageSections/BookCategory"
import { CategoriesPage } from "./components/otherPages/CategoriesPage"
import { FamousBooks } from "./components/homePageSections/FamousBooks"
import { Footer } from "./components/homePageSections/Footer"
import { Header } from "./components/homePageSections/Header"
import { Info } from "./components/homePageSections/InfoSection"
import { topBooks } from "./props/topBooks"
import { KidsPage } from "./components/otherPages/kidsPage"
import { kidsBooks } from "./props/kids-books"
import { Login } from "./components/otherPages/LoginPage"
import { RegisterPage } from "./components/otherPages/RegisterPage"
import { CreatePage } from "./components/otherPages/createPage"

function App() {
  if(location.pathname == "/categories"){
      return(
        <>
          <CategoriesPage />
        </>
      )
  } else if(location.pathname == "/kids"){
    return(
      <>
        <KidsPage books={kidsBooks}/>
      </>
    )
  } else if(location.pathname == "/login"){
    return(
      <>
        <Login />
      </>
    )
  } else if(location.pathname == "/register"){
    return(
      <RegisterPage />
    )
  } else if(location.pathname == "/add"){
    return(
      <CreatePage />
    )
  } else {
    return (
      <>
      <Header />
      <About />
      <BookCategory />
      <AllCategories />
      <FamousBooks books={topBooks}/>
      <Info />
      <Footer />
  </>
  
    )

  }
}

export default App
