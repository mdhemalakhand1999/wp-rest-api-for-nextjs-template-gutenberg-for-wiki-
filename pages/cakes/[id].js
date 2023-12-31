import Head from 'next/head';
import { useRouter } from 'next/router'; // Import the useRouter hook
import { useEffect, useState } from 'react';
import ProductDetailsMain from '../../component/main/ProductDetailsMain';

const ProductDetails = () => {
  const router = useRouter(); // Initialize the router
  const { id } = router.query; // Get the productId from the query parameters

  const [cake, setCake] = useState(null);
  const [allCake,setAllCake] = useState([])
  useEffect(() => {
    async function fetchCakes() {
      try {
        const response = await fetch('/api/cakes');
        if (response.ok) {
          const data = await response.json();
         setAllCake(data); // Store fetched data in CakeDataList
        } else {
          console.error('Failed to fetch Cakes');
        }
      } catch (error) {
        console.error('Error fetching Cakes:', error);
      }
    }
  
    fetchCakes();
  }, []);
  useEffect(() => {
    // Fetch the Cake data from your API here
    async function fetchCakeData() {
      try {
        const response = await fetch(`/api/cakes/${id}`); // Make sure your API route matches the path
        if (response.ok) {
          const CakeData = await response.json();
          setCake(CakeData);
        } else {
          // Handle error
          console.log({message:'error fetching cakes'});
        }
      } catch (error) {
        // Handle error
        console.log({message:'error in cakes api'});
      }
    }

    if (id) {
      fetchCakeData();
    }
  }, [id]);

  return (
    <>
      <Head>
        <title>Farzaa Shop Details</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      {cake && <ProductDetailsMain product={cake} allProduct={allCake}/>}
    </>
  );
};

export default ProductDetails;
