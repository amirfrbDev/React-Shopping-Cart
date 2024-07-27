import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useProductDetails } from '../context/ProductsProvider';
import Loader from '../components/Loader';
import { SiOpenproject } from 'react-icons/si';
import { IoMdPricetag } from 'react-icons/io';
import { FaArrowLeft } from 'react-icons/fa';
import styles from "../styles/DetailsPage.module.css"

function DetailsPage() {

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (isNaN(id) || id > 20 || id < 1) {
      console.log("true");
      navigate(id);
      return
    } else {
      console.log("false");
    }

  }, [])
  const product = useProductDetails(id);

  const { image, title, description, category, price } = product

  if (!product) return <Loader />

  return (
    <div className={styles.container}>
      <img src={image} alt={title} />
      <div className={styles.information}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.category}>
          <SiOpenproject />
          {category}
        </p>
        <div>
          <span className={styles.price}>
            <IoMdPricetag />
            ${price}
          </span>
          <Link to="/products">
            <FaArrowLeft />
            <span>Back To Shop</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DetailsPage