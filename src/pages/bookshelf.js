import React from "react"

import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./shelf.css"

const BookShelf = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Shelf />
    <StackedShelf />
  </Layout>
)

export default BookShelf

const Shelf = (props) => {
  return (
    <div className={"bookshelf"}>
      <div className={"book-grid"}>
          <ul>
              <li>
                  <img src={"https://images-na.ssl-images-amazon.com/images/I/51uLvJlKpNL._SX321_BO1,204,203,200_.jpg"}></img>
              </li>
              <li>
                  <img src={"https://images-na.ssl-images-amazon.com/images/I/51uLvJlKpNL._SX321_BO1,204,203,200_.jpg"}></img>
              </li>
              <li>
                  <img src={"https://images-na.ssl-images-amazon.com/images/I/51uLvJlKpNL._SX321_BO1,204,203,200_.jpg"}></img>
              </li>
          </ul>
      </div>
      <div className={"shelf-shadows"}></div>
      <div className={"shelf"}></div>
    </div>
  )
}

const StackedShelf = (props) => {
    return (
<p>test</p>
    )
}
