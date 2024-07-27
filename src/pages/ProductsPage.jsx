import { useEffect, useState } from 'react';
import { useProducts } from '../context/ProductsProvider'

import Card from '../components/Card';
import Loader from '../components/Loader';
import SearchBox from '../components/SearchBox';

import styles from "../styles/ProductsPage.module.css";

import { filterProducts, getInitialQuery, searchProducts } from '../helpers/helper';
import { useSearchParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

function ProductsPage() {
  const products = useProducts();

  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});

  const [searchParams, setSearchParams] = useSearchParams()



  useEffect(() => {
    setDisplayed(products);
    const query = getInitialQuery(searchParams)
    setQuery(query)

  }, [products])

  useEffect(() => {
    setSearchParams(query)
    setSearch(query.search || "");

    let finalProducts = searchProducts(products, query.search);

    finalProducts = filterProducts(finalProducts, query.category)

    setDisplayed(finalProducts)

  }, [query])





  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {
            displayed.map(product => <Card key={product.id} product={product} />)
          }
        </div>
        <Sidebar setQuery={setQuery} query={query} />
      </div>
    </>
  )
}

export default ProductsPage