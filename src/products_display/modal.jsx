import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./modal.css";
import { ProductContext } from "../product_context";

const Modal = () => {
  const [material, SetMaterial] = useState("select");

  const {
    modalOpen,
    closeModal,
    incrementCartProduct,
    handleDetail,
    modalProduct,
    products,
    openCartModal,
  } = useContext(ProductContext);

  const { id, name, firstImage, price } = modalProduct;
  const { total } = products;

  return modalOpen ? (
    <div className="modal-container">
      <div className="image-container" onClick={() => handleDetail(id)}>
        <div className="modal-coloumns">
          <div className="modal-image-container">
            <img className="modal-image" src={firstImage} alt="Product" />
          </div>

          <div className="modal-row-container">
            <div>
              <span className="exit-btn-container" onClick={closeModal}>
                <p className="exit-btn"></p>
              </span>
            </div>
            <div id="modal-row">
              <div>
                <h3 className="item-info">
                  {name} {material}
                </h3>
              </div>

              <div>
                <h3 className="item-info">${price}</h3>
                <h3 className="item-info">${total}</h3>
              </div>
              <div>
                <form>
                  <label htmlFor="materials">
                    <div className="item-info">Select Material:</div>
                    <select
                      value={material}
                      className="item-info"
                      id="select-material"
                      onChange={(event) => {
                        SetMaterial(event.target.value);
                      }}
                    >
                      <option value="select">Please select material</option>
                      <option value="gold">Gold</option>
                      <option value="silver">Silver</option>
                      <option value="bronze">Bronze</option>
                    </select>
                  </label>
                </form>
              </div>
              <div>
                <button
                  className="modal-btn"
                  disabled={material === "select" ? true : false}
                  onClick={() => {
                    incrementCartProduct(id, material);
                    openCartModal();
                    closeModal();
                  }}
                >
                  Add To Shopping Cart
                </button>
              </div>

              <div>
                <Link to="/cart">
                  <button
                    className="go-to-cart-btn"
                    onClick={() => {
                      closeModal();
                    }}
                  >
                    Go to Your Cart
                  </button>
                </Link>
                <Link to="/cart">
                  <div className="more-details-text">More details</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div />
  );
};

// class Modal extends React.Component {
//   render() {
//     return (
//       <ProductConsumer>
//         {(value) => {
//           const {
//             modalOpen,
//             closeModal,
//             incrementCartProduct,
//             handleDetail,
//           } = value;
//           const { name, price, id, firstImage } = value.modalProduct;

//           if (!modalOpen) {
//             return null;
//           } else {
//             return (
//               <div className="modal-container">
//                 <div
//                   className="image-container"
//                   onClick={() => handleDetail(id)}
//                 >
//                   <div className="modal-coloumns">
//                     <div className="modal-image-container">
//                       <img
//                         className="modal-image"
//                         src={firstImage}
//                         alt="Product"
//                       />
//                     </div>
//                     <div>
//                       <div id="modal-row">
//                         <div>
//                           <h3 className="item-info">{name}</h3>
//                         </div>
//                         <div>
//                           <h3 className="item-info">{price}$</h3>
//                         </div>
//                         <div>
//                           <form>
//                             <label htmlFor="animal">
//                               <div className="item-info">Select Material:</div>
//                               <select
//                                 className="item-info"
//                                 id="select-material"
//                               >
//                                 <option>Please select material</option>
//                                 <option>Gold</option>
//                                 <option>Silver</option>
//                                 <option>Bronz</option>
//                               </select>
//                             </label>
//                           </form>
//                         </div>
//                         <div>
//                           <button
//                             className="modal-btn"
//                             onClick={() => {
//                               incrementCartProduct(id);
//                             }}
//                           >
//                             Add to Shopping Bag
//                           </button>
//                         </div>

//                         <div>
//                           <Link to="/necklaces">
//                             <button
//                               className="modal-btn"
//                               onClick={() => closeModal()}
//                             >
//                               Continue Shopping
//                             </button>
//                           </Link>
//                         </div>
//                         <div>
//                           <Link to="/cart">
//                             <button
//                               className="modal-btn"
//                               onClick={() => closeModal()}
//                             >
//                               Go to Cart
//                             </button>
//                           </Link>
//                           <Link to="/cart">
//                             <div className="more-details-text">
//                               More details
//                             </div>
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           }
//         }}
//       </ProductConsumer>
//     );
//   }
// }

export default Modal;
