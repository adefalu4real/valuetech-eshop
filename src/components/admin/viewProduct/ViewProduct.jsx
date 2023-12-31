import { deleteDoc, doc } from "firebase/firestore";
import React, { useEffect } from "react";
import { db, storage } from "../../../firebase/config";
import styles from "./ViewProduct.module.scss";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Loader from "../../loader/Loader";
import { deleteObject, ref } from "firebase/storage";
import { toast } from "react-toastify";
import Notiflix from "notiflix";
import { useDispatch, useSelector } from "react-redux";
import {
  STORE_PRODUCTS,
  selectProducts,
} from "../../../redux/slice/productSlice";
import useFetchCollection from "../../../customHooks/useFetchCollection";

const ViewProduct = () => {
  const { data, isLoading } = useFetchCollection("product");
  const products = useSelector(selectProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      STORE_PRODUCTS({
        products: data,
      })
    );
  }, [dispatch, data]);

  const confirmDelete = (id, imageUrl) => {
    Notiflix.Confirm.show(
      "Delete Product",
      "Yoyu are about to Delete",
      "Delete",
      "Cancel",
      function okCb() {
        deleteProduct(id, imageUrl);
      },
      function cancelCb() {
        console.log("Delete cancel");
      },
      {
        width: "320px",
        borderRadius: "8px",
        titleColor: "orangered",
        okButtonBackground: "orangered",
        cssAnimation: "zoom",
        // etc...
      }
    );
  };

  const deleteProduct = async (id, imageUrl) => {
    try {
      await deleteDoc(doc(db, "product", id));

      const storageRef = ref(storage, imageUrl);

      deleteObject(storageRef);
      toast.success("Product delete successful..");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      {isLoading && <Loader />}
      <div className={styles.table}>
        <h2>All Products</h2>

        {products.length === 0 ? (
          <p>No product found</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>s/n</th>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>

            {products.map((product, index) => {
              const { id, name, imageUrl, category, price } = product;
              return (
                <tbody key={id}>
                  <tr key={id}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={imageUrl}
                        alt={name}
                        style={{ width: "100px" }}
                      />
                    </td>
                    <td>{name}</td>
                    <td>{category}</td>
                    <td>{`$${price}`}</td>
                    <td className={styles.icons}>
                      <Link to={`/admin/add-product/${id}`}>
                        <FaEdit size={20} color="green" />
                      </Link>
                      &nbsp;
                      <FaTrashAlt
                        size={18}
                        color="red"
                        onClick={() => confirmDelete(id, imageUrl)}
                      />
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        )}
      </div>
    </>
  );
};

export default ViewProduct;
