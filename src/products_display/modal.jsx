import React, { useContext } from "react";
import { ProductConsumer } from "../product_context";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./modal.css";
import { ProductContext } from "../product_context";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faTimes);

const Model = () => {
  const {
    modelOpen,
    closeModel,
    incrementCartProduct,
    handleDetail,
    modelProduct,
  } = useContext(ProductContext);

  const { id, name, price, firstImage } = modelProduct;

  return modelOpen ? (
    <div className="model-container">
      <div className="image-container" onClick={() => handleDetail(id)}>
        <div className="modal-coloumns">
          <div className="modal-image-container">
            <img className="modal-image" src={firstImage} alt="Product" />
          </div>

          <div className="modal-row-container">
            <div>
              <span className="exit-btn-container" onClick={() => closeModel()}>
                <p className="exit-btn"></p>
              </span>
            </div>
            <div id="modal-row">
              <div>
                <h3 className="item-info">{name}</h3>
              </div>

              <div>
                <h3 className="item-info">${price}</h3>
              </div>
              <div>
                <form>
                  <label htmlFor="animal">
                    <div className="item-info">Select Material:</div>
                    <select className="item-info" id="select-material">
                      <option>Please select material</option>
                      <option>Gold</option>
                      <option>Silver</option>
                      <option>Bronz</option>
                    </select>
                  </label>
                </form>
              </div>
              <div>
                <button
                  className="modal-btn"
                  className="modal-btn"
                  onClick={() => {
                    incrementCartProduct(id);
                  }}
                >
                  Add to Shopping Bag
                </button>
              </div>

              <div>
                <Link to="/cart">
                  <button className="modal-btn" onClick={() => closeModel()}>
                    Go to Cart
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

// class Model extends React.Component {
//   render() {
//     return (
//       <ProductConsumer>
//         {(value) => {
//           const {
//             modelOpen,
//             closeModel,
//             incrementCartProduct,
//             handleDetail,
//           } = value;
//           const { name, price, id, firstImage } = value.modelProduct;

//           if (!modelOpen) {
//             return null;
//           } else {
//             return (
//               <div className="model-container">
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
//                               onClick={() => closeModel()}
//                             >
//                               Continue Shopping
//                             </button>
//                           </Link>
//                         </div>
//                         <div>
//                           <Link to="/cart">
//                             <button
//                               className="modal-btn"
//                               onClick={() => closeModel()}
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

export default Model;
