import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import Loader from './Loader'
import ReactPaginate from 'react-paginate'

const ProductItems = ({products}) => {
  let itemsPerPage = 3
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems ,setCurrentItems ]=useState([])
  const [pageCount,setPageCount]=useState(0)

  useEffect(()=>{
    const endOffset = itemOffset + itemsPerPage; //0+3 => 3 ,3+3=>6
    setCurrentItems(products.slice(itemOffset, endOffset)) //0 to 2 (3-exclude)  ,3 to 5
    setPageCount(Math.ceil(products.length / itemsPerPage)) //10/3 =>4
  },[products,itemOffset])

  const handlePageClick = (event) => {//2,4
    const newOffset = (event.selected * itemsPerPage) % products.length; //3%10 => 3
    setItemOffset(newOffset); //3 
  };

  return (
    <div className='container mt-5'>
      {products.length == 0 && <h1>No product found</h1>}
      <div className="row mb-3">
      {currentItems.map((product)=><ProductCard key={product.id} product={product}/>)}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
        activeLinkClassName="active"
        previousClassName='page-item'
        nextClassName='page-item'
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
      />
    </div>
  )
}

export default ProductItems
